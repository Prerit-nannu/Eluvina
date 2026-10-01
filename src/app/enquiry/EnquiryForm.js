'use client';

/**
 * EnquiryForm.js
 * src/app/enquiry/EnquiryForm.js
 *
 * Reusable lead-generation enquiry form component.
 *
 * Props:
 *  defaultService {string} — pre-select a dropdown option (from URL params)
 *  defaultCoupon  {string} — pre-fill the referral/coupon code field
 */

import { useState, useEffect, useId } from 'react';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { AGENT_TRACKING } from '@/lib/agentMappings';
import './EnquiryForm.css';

/* ─── All clinic services shown in the dropdown ─────────────────── */
const SERVICES = [
  { value: '', label: '- Select a service / concern -', disabled: true },
  // Hair
  { value: 'Hair Transplant (FUE / FUT)', label: '💇‍♂️  Hair Transplant (FUE / FUT)' },
  { value: 'PRP Hair Therapy', label: '🌸  PRP Hair Therapy' },
  { value: 'Hair Loss / Alopecia', label: '💧  Hair Loss / Alopecia' },
  { value: 'Receding Hairline', label: '↩️   Receding Hairline' },
  { value: 'Crown Thinning', label: '🌀  Crown Thinning' },
  { value: 'Baldness Treatment', label: '✦  Baldness Treatment' },
  // Skin
  { value: 'HydraFacial Therapy', label: '💎  HydraFacial Therapy' },
  { value: 'Medical Chemical Peel', label: '✨  Medical Chemical Peel' },
  { value: 'OxyGeneo Super Facial', label: '🧴  OxyGeneo Super Facial' },
  // Anti-Aging
  { value: 'Botox Anti-Aging', label: '🌟  Botox Anti-Aging' },
  { value: 'Dermal Fillers', label: '💫  Dermal Fillers' },
  { value: 'Collagen Microneedling', label: '🔬  Collagen Microneedling' },
  { value: 'HIFU Non-Surgical Facelift', label: '👑  HIFU Non-Surgical Facelift' },
  { value: 'Facelift & Neck Tightening', label: '👑  Facelift & Neck Tightening' },
  // Lasers
  { value: 'Laser Hair Removal', label: '🎯  Laser Hair Removal' },
  { value: 'Pigmentation / Melasma Laser', label: '💆‍♀️  Pigmentation / Melasma Laser' },
  { value: 'Wart & Mole Removal', label: '⚡  Wart & Mole Removal' },
  { value: 'Scar Revision', label: '👑  Scar Revision' },
  // Wellness
  { value: 'Glutathione IV Drip', label: '💉  Glutathione IV Drip' },
  { value: 'Double Chin Mesolipolysis', label: '✦  Double Chin Mesolipolysis' },
  // Other
  { value: 'General Skin Consultation', label: '🩺  General Consultation' },
  { value: 'Not Sure - Need Advice', label: '❓  Not Sure - Need Advice' },
];

/* ─── URL slug → dropdown value map ────────────────────────────── */
const SLUG_MAP = {
  'hair-transplant': 'Hair Transplant (FUE / FUT)',
  'fue': 'Hair Transplant (FUE / FUT)',
  'prp': 'PRP Hair Therapy',
  'hair-loss': 'Hair Loss / Alopecia',
  'receding-hairline': 'Receding Hairline',
  'crown-thinning': 'Crown Thinning',
  'baldness': 'Baldness Treatment',
  'hydrafacial': 'HydraFacial Therapy',
  'chemical-peel': 'Medical Chemical Peel',
  'botox': 'Botox Anti-Aging',
  'fillers': 'Dermal Fillers',
  'dermal-fillers': 'Dermal Fillers',
  'microneedling': 'Collagen Microneedling',
  'hifu': 'HIFU Non-Surgical Facelift',
  'facelift': 'Facelift & Neck Tightening',
  'laser-hair-removal': 'Laser Hair Removal',
  'pigmentation': 'Pigmentation / Melasma Laser',
  'melasma': 'Pigmentation / Melasma Laser',
  'wart-removal': 'Wart & Mole Removal',
  'scar': 'Scar Revision',
  'iv-drip': 'Glutathione IV Drip',
  'double-chin': 'Double Chin Mesolipolysis',
};

/**
 * Resolve service value from URL search params or pathname.
 * Exported so the page component can use it.
 */
export function resolveService(searchParams, pathname = '') {
  const raw =
    searchParams.get('service') ||
    searchParams.get('concern') ||
    searchParams.get('treatment') ||
    pathname.split('/').filter(Boolean).pop() ||
    '';
  return SLUG_MAP[raw.toLowerCase()] ?? '';
}

/* ─── Validation ────────────────────────────────────────────────── */
function validate(v) {
  const e = {};
  if (!v.name.trim() || v.name.trim().length < 2)
    e.name = 'Full name is required.';
  if (!v.phone.trim())
    e.phone = 'Mobile number is required.';
  else if (!/^[\d\s+\-()]{7,15}$/.test(v.phone.trim()))
    e.phone = 'Enter a valid mobile number.';
  if (v.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim()))
    e.email = 'Enter a valid email address.';
  if (v.age) {
    const n = parseInt(v.age, 10);
    if (isNaN(n) || n < 10 || n > 100) e.age = 'Age must be 10–100.';
  }
  return e;
}

/* ─── Component ─────────────────────────────────────────────────── */
export default function EnquiryForm({ defaultService = '', defaultCoupon = '' }) {
  const uid = useId();

  const [values, setValues] = useState({
    name: '', phone: '', email: '', age: '', query: '',
    service: defaultService,
    coupon: defaultCoupon,
  });
  const [errors, setErrors] = useState({});
  const [formErr, setFormErr] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  /* Sync when parent resolves URL params after hydration, and fallback to localStorage for returning visitors */
  useEffect(() => {
    // If there is no default coupon in the URL, check if we saved one previously (with a strict null check)
    const savedRef = typeof window !== 'undefined' ? (localStorage.getItem('affiliate_ref') || '') : '';

    setValues(v => ({
      ...v,
      service: defaultService || v.service,
      coupon: defaultCoupon || savedRef || v.coupon,
    }));
  }, [defaultService, defaultCoupon]);

  function onChange(e) {
    const { name, value } = e.target;
    setValues(v => ({ ...v, [name]: value }));
    if (errors[name]) setErrors(prev => { const n = { ...prev }; delete n[name]; return n; });
  }

  async function onSubmit(e) {
    e.preventDefault();
    setFormErr('');
    const errs = validate(values);
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setLoading(true);
    try {
      /* Read first-touch attribution from sessionStorage */
      let attr = {};
      try { attr = JSON.parse(sessionStorage.getItem('eluvina_attr_v1') || '{}'); } catch { }

      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: values.name.trim(),
          phone: values.phone.trim(),
          email: values.email.trim() || undefined,
          age: values.age ? parseInt(values.age, 10) : undefined,
          hairConcern: values.service || undefined,
          couponCode: values.coupon.trim().toUpperCase() || undefined,
          query: values.query.trim() || undefined,
          attribution: attr,
        }),
      });

      const json = await res.json().catch(() => ({}));

      if (!res.ok && res.status !== 409) {
        throw new Error(
          Array.isArray(json.errors) ? json.errors.join(' ') :
            json.error ?? 'Something went wrong. Please try again.'
        );
      }

      /* Fire analytics — no PII */
      try {
        const payload = { event_category: 'Lead', service_selected: values.service || 'none', coupon_applied: values.coupon ? 'yes' : 'no' };
        if (typeof window.gtag === 'function') {
          window.gtag('event', 'lead_submitted', payload);

          // Dynamic Google Ads Conversion Tracking via Agent Mapping
          const activeRef = localStorage.getItem('affiliate_ref') || '';
          const agentConfig = AGENT_TRACKING[activeRef] || AGENT_TRACKING['DEFAULT'];

          if (agentConfig && agentConfig.tagId && agentConfig.conversionLabel) {
            // First initialize the agent's specific tag ID (required by Google if it's different from the base layout tag)
            window.gtag('config', agentConfig.tagId);

            // Fire the specific conversion event
            window.gtag('event', 'conversion', {
              'send_to': `${agentConfig.tagId}/${agentConfig.conversionLabel}`
            });
            console.log(`[Tracking] Fired conversion for: ${agentConfig.name} (${agentConfig.tagId})`);
          }
        }
        if (Array.isArray(window.dataLayer)) window.dataLayer.push({ event: 'lead_submitted', ...payload });
      } catch (err) {
        console.error('Analytics error:', err);
      }

      setSubmitted(true);

    } catch (err) {
      setFormErr(err.message);
    } finally {
      setLoading(false);
    }
  }

  function ip(name, extra = {}) {
    return { id: `${uid}-${name}`, name, value: values[name], onChange, className: `ef-input${errors[name] ? ' ef-err' : ''}`, ...extra };
  }

  /* ── Success ──────────────────────────────────────────────────── */
  if (submitted) {
    return (
      <div className="ef-card">
        <div className="ef-success">
          <div className="ef-success-icon">✓</div>
          <h3>Thank you!</h3>
          <p>Our team will contact you shortly.</p>
          <a href="https://wa.me/919286577083?text=Hi!%20I%20just%20submitted%20an%20enquiry%20on%20your%20website."
            target="_blank" rel="noopener noreferrer" className="ef-wa-btn">
            <WhatsAppIcon /> Chat on WhatsApp Now
          </a>
        </div>
      </div>
    );
  }

  /* ── Form ─────────────────────────────────────────────────────── */
  return (
    <div className="ef-card" role="region" aria-label="Free consultation enquiry form">

      <header className="ef-header">
        <span className="ef-tag">✦ 100% Free · No Obligation</span>
        <h2>Book a Free Consultation</h2>
        <p>Fill in your details and our specialist will call you shortly.</p>
      </header>

      <div className="ef-trust">
        <span>🏆 Expert Doctors</span>
        <span>🔒 Confidential</span>
        <span>📞 We Call You</span>
      </div>

      <div className="ef-body">
        {formErr && (
          <div className="ef-alert ef-alert-error" role="alert">
            <span>⚠</span><span>{formErr}</span>
          </div>
        )}

        <form className="ef-form" onSubmit={onSubmit} noValidate>

          {/* Full Name */}
          <div className="ef-group">
            <label htmlFor={`${uid}-name`} className="ef-label">Full Name *</label>
            <input type="text" placeholder="e.g. Rahul Sharma" autoComplete="name" required {...ip('name')} />
            {errors.name && <span className="ef-field-err">⚠ {errors.name}</span>}
          </div>

          {/* Mobile Number */}
          <div className="ef-group">
            <label htmlFor={`${uid}-phone`} className="ef-label">Mobile Number *</label>
            <input type="tel" placeholder="+91 98765 43210" autoComplete="tel" inputMode="tel" required {...ip('phone')} />
            {errors.phone && <span className="ef-field-err">⚠ {errors.phone}</span>}
          </div>

          {/* Email + Age side-by-side */}
          <div className="ef-row">
            <div className="ef-group">
              <label htmlFor={`${uid}-email`} className="ef-label">Email <span className="ef-opt">(optional)</span></label>
              <input type="email" placeholder="you@email.com" autoComplete="email" inputMode="email" {...ip('email')} />
              {errors.email && <span className="ef-field-err">⚠ {errors.email}</span>}
            </div>
            <div className="ef-group">
              <label htmlFor={`${uid}-age`} className="ef-label">Age <span className="ef-opt">(optional)</span></label>
              <input type="number" min="10" max="100" placeholder="e.g. 32" inputMode="numeric" {...ip('age')} />
              {errors.age && <span className="ef-field-err">⚠ {errors.age}</span>}
            </div>
          </div>

          {/* Service dropdown — auto-selects from URL */}
          <div className="ef-group">
            <label htmlFor={`${uid}-service`} className="ef-label">
              Service / Concern <span className="ef-opt">(optional)</span>
            </label>
            <div className="ef-select-wrap">
              <select
                id={`${uid}-service`}
                name="service"
                value={values.service}
                onChange={onChange}
                className={`ef-select${values.service ? ' ef-has-value' : ''}`}
              >
                {SERVICES.map(opt =>
                  opt.disabled
                    ? <option key="" value="" disabled>{opt.label}</option>
                    : <option key={opt.value} value={opt.value}>{opt.label}</option>
                )}
              </select>
            </div>
          </div>

          {/* Coupon / Referral code */}
          <div className="ef-group">
            <label htmlFor={`${uid}-coupon`} className="ef-label">
              Coupon / Referral Code <span className="ef-opt">(optional)</span>
            </label>
            <div className="ef-coupon-wrap">
              <input
                id={`${uid}-coupon`}
                name="coupon"
                type="text"
                placeholder="e.g. GOOGLE20"
                autoCorrect="off"
                autoCapitalize="characters"
                spellCheck={false}
                value={values.coupon}
                onChange={onChange}
                readOnly={!!defaultCoupon}
                className="ef-input"
                style={defaultCoupon ? { background: '#f5f5f5', color: '#666', cursor: 'not-allowed' } : {}}
              />
              <span className="ef-coupon-icon">🏷️</span>
            </div>
          </div>

          {/* Query */}
          <div className="ef-group">
            <label htmlFor={`${uid}-query`} className="ef-label">
              Any specific questions? <span className="ef-opt">(optional)</span>
            </label>
            <textarea
              id={`${uid}-query`}
              name="query"
              placeholder="Tell us what you're looking for..."
              value={values.query}
              onChange={onChange}
              className={`ef-input${errors.query ? ' ef-err' : ''}`}
              rows="3"
              style={{ resize: 'vertical' }}
            />
          </div>

          {/* CTA */}
          <button type="submit" className="ef-submit" disabled={loading} aria-busy={loading}>
            {loading
              ? <><span className="ef-spinner" /> Sending…</>
              : 'Get Free Consultation ✦'
            }
          </button>
        </form>

        <p className="ef-privacy">
          🔒 Your details are kept confidential and used only to contact you
          regarding your consultation. We never share your information.
        </p>
      </div>
    </div>
  );
}
