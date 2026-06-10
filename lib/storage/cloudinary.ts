import { createHash } from 'crypto';
import { getEnv, requireEnv } from '@/lib/config/env';

export type UploadedFileMetadata = {
  url: string;
  fileName: string;
  fileSize: number;
  mimeType: string;
  provider: 'cloudinary';
  publicId?: string;
};

type UploadOptions = {
  folder?: string;
  resourceType?: 'auto' | 'image' | 'raw';
};

function createSignature(params: Record<string, string | number>, apiSecret: string) {
  const signatureBase = Object.entries(params)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([key, value]) => `${key}=${value}`)
    .join('&');

  return createHash('sha1').update(`${signatureBase}${apiSecret}`).digest('hex');
}

export async function uploadFileToCloudinary(file: File, options: UploadOptions = {}): Promise<UploadedFileMetadata> {
  const cloudName = requireEnv('CLOUDINARY_CLOUD_NAME');
  const apiKey = requireEnv('CLOUDINARY_API_KEY');
  const apiSecret = requireEnv('CLOUDINARY_API_SECRET');
  const env = getEnv();
  const folder = options.folder ?? env.CLOUDINARY_UPLOAD_FOLDER;
  const resourceType = options.resourceType ?? 'auto';
  const timestamp = Math.round(Date.now() / 1000);
  const signature = createSignature({ folder, timestamp }, apiSecret);

  const formData = new FormData();
  formData.set('file', file);
  formData.set('api_key', apiKey);
  formData.set('timestamp', String(timestamp));
  formData.set('folder', folder);
  formData.set('signature', signature);

  const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Cloudinary upload failed: ${response.status} ${errorText}`);
  }

  const payload = await response.json() as { secure_url: string; public_id: string };
  return {
    url: payload.secure_url,
    publicId: payload.public_id,
    fileName: file.name,
    fileSize: file.size,
    mimeType: file.type,
    provider: 'cloudinary',
  };
}
