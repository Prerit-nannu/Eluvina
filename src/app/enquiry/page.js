'use client';

/**
 * /enquiry — Lead Generation Page
 * src/app/enquiry/page.js
 *
 * Standalone enquiry / lead capture page.
 *
 * URL-driven dropdown pre-selection:
 *   /enquiry?service=hair-transplant  → "Hair Transplant (FUE)"
 *   /enquiry?service=botox            → "Botox Anti-Aging"
 *   /enquiry?service=hydrafacial      → "HydraFacial Therapy"
 *   /enquiry?ref=GOOGLE20             → coupon pre-filled
 *
 * Also captures Google Ads attribution:
 *   /enquiry?gclid=...&utm_source=google&utm_medium=cpc
 */

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, usePathname } from 'next/navigation';
import EnquiryForm, { resolveService } from './EnquiryForm';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import './enquiry.css';

function EnquiryContent() {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const [service, setService] = useState('');
  const [coupon, setCoupon] = useState('');

  /* ── Capture Google Ads attribution on first visit ── */
  useEffect(() => {
    const AD_PARAMS = ['gclid', 'gbraid', 'wbraid', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
    const STORAGE_KEY = 'eluvina_attr_v1';
    try {
      if (!sessionStorage.getItem(STORAGE_KEY)) {
        const attrs = {};
        AD_PARAMS.forEach(k => { const v = searchParams.get(k); if (v) attrs[k] = v; });
        if (Object.keys(attrs).length) sessionStorage.setItem(STORAGE_KEY, JSON.stringify(attrs));
      }
    } catch { }
  }, [searchParams]);

  /* ── Resolve dropdown pre-selection + coupon from URL ── */
  useEffect(() => {
    setService(resolveService(searchParams, pathname));
    const ref = searchParams.get('ref') || searchParams.get('coupon') || '';
    if (ref) setCoupon(ref.toUpperCase());
  }, [searchParams, pathname]);

  /* Static page heading */
  const pageTitle = 'Free Expert Consultation';

  return (
    <>
      {/* ── Page header ─────────────────────────────────── */}
      <div className="page-header eq-page-header">
        <span className="section-tag">✦ No Obligation · 100% Free</span>
        <h1>{pageTitle}</h1>
        <p style={{ maxWidth: '580px', margin: '0 auto' }}>
          Share your details and one of our certified specialists will call you
          shortly to discuss your treatment options.
        </p>
      </div>

      {/* ── Main content ────────────────────────────────── */}
      <section className="page-section eq-section">
        <div className="eq-layout">

          {/* Left — Form */}
          <div className="eq-form-col">
            <EnquiryForm
              defaultService={service}
              defaultCoupon={coupon}
            />
          </div>

          {/* Right — Why Us */}
          <div className="eq-info-col">
            <div className="eq-why-card">
              <span className="section-tag">Why Choose Us</span>
              <h2 style={{ fontSize: '1.6rem', marginBottom: '24px' }}>
                Expert Care <span className="highlight">You Can Trust</span>
              </h2>

              {[
                { icon: '🏆', title: 'Commitment to Excellence', desc: 'Experienced surgeons and expert technician staff providing quality care.' },
                { icon: '🔬', title: 'Hospital-Grade Facility', desc: 'Certified OT at Safegate Medical Centre, Dehradun with FDA-approved equipment.' },
                { icon: '💰', title: 'Transparent Pricing', desc: 'No hidden charges. Full cost breakdown provided during your free consultation.' },
                { icon: '🔒', title: '100% Confidential', desc: 'Your personal and medical information stays strictly private - always.' },
              ].map(item => (
                <div key={item.title} className="eq-why-item">
                  <span className="eq-why-icon">{item.icon}</span>
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact quick links */}
            <div className="eq-contact-card">
              <h3>Prefer to reach us directly?</h3>
              <a href="tel:+919286577083" className="btn-primary" style={{ width: '100%', marginBottom: '12px', justifyContent: 'center' }}>
                📞 Call: +91 92865 77083
              </a>
              <a href="https://wa.me/919286577083" target="_blank" rel="noopener noreferrer"
                className="btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>
                <WhatsAppIcon /> WhatsApp Us
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default function EnquiryPage() {
  return (
    <Suspense fallback={null}>
      <EnquiryContent />
    </Suspense>
  );
}
