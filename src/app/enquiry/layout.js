/**
 * layout.js — /enquiry route
 * Server component: exports SEO metadata for this page.
 */

export const metadata = {
  title: 'Free Consultation Enquiry | Eluvina Aesthetics',
  description:
    'Book a free consultation at Eluvina Aesthetics, Dehradun. Expert advice on hair transplant, skin treatments, anti-aging, and more. No obligation — we call you.',
  robots: { index: false, follow: false }, // landing page — don't index lead-gen pages
};

export default function EnquiryLayout({ children }) {
  return children;
}
