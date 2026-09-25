'use client';

import { useState } from 'react';
import { treatmentsData } from '@/data/treatmentsData';

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
      <div className="page-header">
        <span className="section-tag">Get In Touch</span>
        <h1>Contact Us & <span className="highlight">Book Now</span></h1>
        <p style={{ maxWidth: '650px', margin: '0 auto' }}>
          Ready to elevate your skin health? Send us a message or request your appointment below.
        </p>
      </div>

      <section className="page-section">
        <div className="contact-container">
          {/* Booking Form */}
          <div className="contact-card">
            <h2 style={{ marginBottom: '24px' }}>Book Appointment</h2>
            {submitted ? (
              <div style={{ padding: '30px', background: 'var(--primary-light)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
                <h3 style={{ color: 'var(--primary-dark)', marginBottom: '10px' }}>✓ Request Sent!</h3>
                <p>Thank you, {formData.name}. We have launched WhatsApp to confirm your slot with our desk.</p>
                <button onClick={() => setSubmitted(false)} className="btn-secondary" style={{ marginTop: '20px' }}>
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
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

                <div className="form-group">
                  <label htmlFor="message">Special Requests / Questions</label>
                  <textarea
                    id="message"
                    rows="4"
                    placeholder="Let us know any skin concerns or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                  Request Booking via WhatsApp 💬
                </button>
              </form>
            )}
          </div>

          {/* Contact Info Card */}
          <div>
            <div className="contact-card" style={{ marginBottom: '30px' }}>
              <h3 style={{ marginBottom: '24px' }}>Clinic Contact Info</h3>

              <div className="info-item">
                <div className="info-icon">📍</div>
                <div>
                  <strong>Address</strong>
                  <p>📍 Safegate Medical Centre <br />83 Araghar chowk, Model Colony<br />Dalanwala, Dehradun, Uttarakhand 248001</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">📞</div>
                <div>
                  <strong>Direct Phone Hotline</strong>
                  <p>+91 92865 77083</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">✉️</div>
                <div>
                  <strong>Email Inquiry</strong>
                  <p>aesthetics@eluvina.com</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">🕐</div>
                <div>
                  <strong>Opening Hours</strong>
                  <p>Monday – Saturday: 10:00 AM – 7:00 PM<br />Sunday: Closed</p>
                </div>
              </div>
            </div>

            <div className="contact-card" style={{ background: 'var(--dark)', color: 'var(--white)' }}>
              <h3 style={{ color: 'var(--white)', marginBottom: '12px' }}>Instant WhatsApp Consultation</h3>
              <p style={{ color: 'var(--gray-light)', marginBottom: '20px' }}>
                Need a fast response regarding pricing, available slots, or treatment suitability?
              </p>
              <a
                href="https://wa.me/919286577083"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ width: '100%', display: 'inline-block', textAlign: 'center' }}
              >
                Chat Live on WhatsApp 💬
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
