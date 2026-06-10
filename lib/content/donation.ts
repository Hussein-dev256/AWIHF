import donationSeed from '@/content/donation-info.json';
import { sanityFetch } from '@/lib/sanity/client';

export type DonationInfo = {
  mtnBusinessName: string;
  mtnMerchantCode: string;
  airtelBusinessName: string;
  airtelMerchantCode: string;
  instructions: string[];
};

export async function getDonationInfo(): Promise<DonationInfo> {
  const donationInfo = await sanityFetch<DonationInfo>(`
    *[_type == "donationInfo"][0] {
      mtnBusinessName,
      mtnMerchantCode,
      airtelBusinessName,
      airtelMerchantCode,
      instructions
    }
  `);

  return donationInfo ?? donationSeed;
}
