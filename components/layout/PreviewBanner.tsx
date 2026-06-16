import Link from 'next/link';

export function PreviewBanner() {
  return (
    <div className="w-full bg-brand-brown px-4 py-2 text-center text-sm font-semibold text-white">
      Preview Mode Active
      <Link href="/api/disable-draft" className="ml-3 text-brand-gold underline underline-offset-4 hover:text-white">
        Exit preview
      </Link>
    </div>
  );
}
