import Link from 'next/link';

export const metadata = {
  title: 'About Us | Eluvina Aesthetics Centre Clinic Story & Philosophy',
  description: 'Learn about Eluvina Aesthetics Centre, our medical leadership, clinical standards, and commitment to safe, natural cosmetic transformations.',
};

export default function AboutPage() {
  return (
    <>
      <div className="page-header">
        <span className="section-tag">Who We Are</span>
        <h1>About <span className="highlight">Eluvina Aesthetics</span></h1>
        <p style={{ maxWidth: '650px', margin: '0 auto' }}>
          Combining medical precision with aesthetic finesse to deliver natural, radiant results for every patient.
        </p>
      </div>

      <section className="page-section">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
          <div>
            <span className="section-tag">Our Founding Story</span>
            <h2>Where Artistry Meets <span className="highlight">Medical Science</span></h2>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '20px' }}>
              Founded in 2020, Eluvina Aesthetics Centre was established with a singular vision: to demystify cosmetic procedures and make premium dermatological care accessible, safe, and transparent.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '30px' }}>
              We believe that aesthetic enhancements should highlight your unique facial architecture, not alter it unnaturally. Every protocol we offer is grounded in clinically proven medical science and customized for your skin type.
            </p>
            <div style={{ display: 'flex', gap: '30px' }}>
              <div>
                <h3 style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '5px' }}>100%</h3>
                <p style={{ fontSize: '0.9rem' }}>FDA-Approved Equipment</p>
              </div>
              <div>
                <h3 style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '5px' }}>5,000+</h3>
                <p style={{ fontSize: '0.9rem' }}>Successful Procedures</p>
              </div>
            </div>
          </div>

          <div style={{ background: 'var(--gradient-card)', padding: '50px', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)' }}>
            <h3 style={{ marginBottom: '20px' }}>Our Core Commitments</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <li style={{ display: 'flex', gap: '15px' }}>
                <span style={{ fontSize: '1.5rem' }}>🩺</span>
                <div>
                  <strong>Doctor-Led Consultations</strong>
                  <p style={{ fontSize: '0.92rem' }}>Every client undergoes a thorough clinical evaluation by qualified medical doctors before any treatment.</p>
                </div>
              </li>
              <li style={{ display: 'flex', gap: '15px' }}>
                <span style={{ fontSize: '1.5rem' }}>🛡️</span>
                <div>
                  <strong>Uncompromised Sterilization</strong>
                  <p style={{ fontSize: '0.92rem' }}>Hospital-grade sanitation, single-use consumables, and rigorous hygiene standards.</p>
                </div>
              </li>
              <li style={{ display: 'flex', gap: '15px' }}>
                <span style={{ fontSize: '1.5rem' }}>💎</span>
                <div>
                  <strong>Natural Enhancement</strong>
                  <p style={{ fontSize: '0.92rem' }}>Subtle, refined results that refresh your appearance while honoring your natural beauty.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>Meet the Experts Behind <span className="highlight">Your Transformation</span></h2>
          <p>Our team of board-certified dermatologists and licensed aestheticians are ready to assist you.</p>
          <div className="cta-buttons">
            <Link href="/team" className="btn-primary">
              Meet Our Team 👨‍⚕️
            </Link>
            <Link href="/contact" className="btn-secondary">
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
