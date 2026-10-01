'use client';
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function AffiliateTracker() {
  const searchParams = useSearchParams();

  useEffect(() => {
    // Check both 'ref' and 'coupon' for affiliate codes
    const ref = searchParams.get('ref') || searchParams.get('coupon');
    if (ref) {
      sessionStorage.setItem('affiliate_ref', ref.toUpperCase());
    }
  }, [searchParams]);

  return null; // This component does not render anything
}
