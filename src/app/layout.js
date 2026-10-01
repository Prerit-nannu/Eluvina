import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TawkTo from '@/components/TawkTo';
import { AuthProvider } from '@/context/AuthContext';
import { CartProvider } from '@/context/CartContext';
import { Suspense } from 'react';
import AffiliateTracker from '@/components/AffiliateTracker';
import Script from 'next/script';

export const metadata = {
  metadataBase: new URL('https://aesthetics.eluvina.com'),
  title: {
    default: 'Eluvina Aesthetics | Premium Cosmetic & Face Therapy Clinic',
    template: '%s | Eluvina Aesthetics',
  },
  description: 'Eluvina Aesthetics offers transformative cosmetic medical treatments, facial therapy, anti-aging treatments, dermal fillers, and laser care by expert dermatologists.',
  keywords: [
    'Eluvina Aesthetics',
    'Eluvina Aesthetic Centre',
    'Eluvina',
    'Best Hair Transplant',
    'Hair Transplant Clinic',
    'Cosmetic Clinic',
    'Dermatologist',
    'HydraFacial',
    'Botox Injections',
    'Dermal Fillers',
    'Laser Hair Removal',
    'HIFU Facelift',
    'Face Therapy',
    'Skin Rejuvenation',
  ],
  authors: [{ name: 'Eluvina Aesthetics Team' }],
  creator: 'Eluvina Aesthetics',
  openGraph: {
    title: 'Eluvina Aesthetics | Premium Cosmetic & Face Therapy Clinic',
    description: 'Discover world-class facial therapies, laser treatments, and anti-aging care tailored for your natural glow at Eluvina Aesthetics.',
    url: 'https://aesthetics.eluvina.com',
    siteName: 'Eluvina Aesthetics',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eluvina Aesthetics',
    description: 'Transformative facial therapies and cosmetic treatments by certified dermatologists at Eluvina Aesthetics.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  // JSON-LD LocalBusiness & MedicalClinic Schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    'name': 'Eluvina Aesthetics',
    'url': 'https://aesthetics.eluvina.com',
    'telephone': '+919286577083',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Safegate Medical Centre, 83 Araghar chowk, Model Colony, Dalanwala',
      'addressLocality': 'Dehradun',
      'addressRegion': 'Uttarakhand',
      'postalCode': '248001',
      'addressCountry': 'IN',
    },
    'medicalSpecialty': ['Hair Transplant', 'Cosmetic Surgery', 'Hair PRP', 'Laser Hair Removal', 'PRP', 'Microneedling'],
    'openingHours': 'Mo-Sa 10:00-19:00',
    'priceRange': '₹₹₹',
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google tag (gtag.js) */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-18484537594" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18484537594');
          `}
        </Script>
      </head>
      <body>
        <Suspense fallback={null}>
          <AffiliateTracker />
        </Suspense>
        <AuthProvider>
          <CartProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <TawkTo />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
