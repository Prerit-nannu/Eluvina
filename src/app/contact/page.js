'use client';
import WhatsAppIcon from '@/components/WhatsAppIcon';

import { useState } from 'react';
import { treatmentsData } from '@/data/treatmentsData';
import { MapPin, Phone, Mail, Clock, Trophy, Lock } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    treatment: 'HydraFacial Therapy',
    preferredDate: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMsg = encodeURIComponent(
      `Appointment Request:\nName: ${formData.name}\nPhone: ${formData.phone}\nTreatment: ${formData.treatment}\nDate: ${formData.preferredDate}\nNotes: ${formData.message}`
    );
    window.open(`https://wa.me/919286577083?text=${whatsappMsg}`, '_blank');
    setSubmitted(true);
  };

  return (
    <>
      <div className="page-header" style={{ marginBottom: 0 }}>
        <span className="section-tag">Get In Touch</span>
        <h1>Contact Us & <span className="highlight">Book Now</span></h1>
        <p style={{ maxWidth: '650px', margin: '0 auto' }}>
          Ready to elevate your skin health? Send us a message or request your appointment below.
        </p>
      </div>

      <section className="page-section" style={{ paddingTop: '24px' }}>
        <div className="contact-container">
          {/* Booking Form */}
          <div className="contact-card" style={{ display: 'flex', flexDirection: 'column', padding: 0, overflow: 'hidden' }}>
            <div style={{ background: 'var(--gradient-primary)', padding: '30px 32px 24px', textAlign: 'center', position: 'relative' }}>
              <span style={{ display: 'inline-block', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.8)', marginBottom: '8px' }}>✦ Fast & Easy Booking</span>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--white)', margin: 0, lineHeight: 1.25 }}>Book Appointment</h2>
              <p style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.78)', margin: '6px 0 0' }}>Select your preferred procedure and we will confirm your slot.</p>
            </div>

            <div style={{ display: 'flex', background: 'var(--primary-light)', borderBottom: '1px solid rgba(201, 168, 124, 0.2)' }}>
              <span style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px', fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary-dark)', padding: '10px 8px', borderRight: '1px solid rgba(201, 168, 124, 0.2)' }}>
                <Trophy size={14} /> Expert Care
              </span>
              <span style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px', fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary-dark)', padding: '10px 8px', borderRight: '1px solid rgba(201, 168, 124, 0.2)' }}>
                <Lock size={14} /> Secure Booking
              </span>
              <span style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px', fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary-dark)', padding: '10px 8px' }}>
                <Clock size={14} /> Fast Confirmation
              </span>
            </div>

            <div style={{ padding: '28px 32px 32px', display: 'flex', flexDirection: 'column', flex: 1 }}>
              {submitted ? (
                <div style={{ padding: '30px', background: 'var(--primary-light)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
                  <h3 style={{ color: 'var(--primary-dark)', marginBottom: '10px' }}>✓ Request Sent!</h3>
                  <p>Thank you, {formData.name}. We have launched WhatsApp to confirm your slot with our desk.</p>
                  <button onClick={() => setSubmitted(false)} className="btn-secondary" style={{ marginTop: '20px' }}>
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form" style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone / WhatsApp Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="treatment">Select Procedure *</label>
                    <select
                      id="treatment"
                      value={formData.treatment}
                      onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                    >
                      {treatmentsData.map((t) => (
                        <option key={t.id} value={t.title}>
                          {t.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="date">Preferred Date</label>
                    <input
                      type="date"
                      id="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    />
                  </div>

                  <div className="form-group" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <label htmlFor="message">Special Requests / Questions</label>
                    <textarea
                      id="message"
                      rows="4"
                      placeholder="Let us know any skin concerns or questions..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{ flex: 1, resize: 'vertical' }}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: 'auto' }}>
                    <WhatsAppIcon /> Request Booking via WhatsApp
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Info Card */}
          <div>
            <div className="contact-card" style={{ marginBottom: '30px' }}>
              <span className="section-tag" style={{ marginBottom: '8px', display: 'inline-block' }}>Clinic Details</span>
              <h3 style={{ marginBottom: '24px', fontSize: '1.6rem', color: 'var(--dark)', fontFamily: 'var(--font-heading)' }}>
                Contact <span className="highlight">Information</span>
              </h3>

              <div className="info-item">
                <div className="info-icon"><MapPin size={24} /></div>
                <div>
                  <strong>Address</strong>
                  <p>Safegate Medical Centre <br />83 Araghar chowk, Model Colony<br />Dalanwala, Dehradun, Uttarakhand 248001</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon"><Phone size={24} /></div>
                <div>
                  <strong>Call Us</strong>
                  <p>+91 92865 77083</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon"><Mail size={24} /></div>
                <div>
                  <strong>Email Inquiry</strong>
                  <p>aesthetics@eluvina.com</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon"><Clock size={24} /></div>
                <div>
                  <strong>Opening Hours</strong>
                  <p>Monday – Saturday: 10:00 AM – 7:00 PM<br />Sunday: Closed</p>
                </div>
              </div>
            </div>

            <div className="contact-card whatsapp-card">
              <span className="section-tag" style={{ marginBottom: '8px', display: 'inline-block' }}>Priority Support</span>
              <h3 style={{ marginBottom: '12px', fontSize: '1.4rem', color: 'var(--dark)', fontFamily: 'var(--font-heading)' }}>
                WhatsApp <span className="highlight">Assistance</span>
              </h3>
              <p style={{ color: 'var(--gray)', marginBottom: '20px' }}>
                Connect directly with our care team for personalized guidance, treatment details, and priority scheduling.
              </p>
              <a
                href="https://wa.me/919286577083"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ width: '100%', display: 'inline-block', textAlign: 'center' }}
              >
                <WhatsAppIcon /> Message Our Care Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
