import Link from 'next/link';
import TreatmentCard from '@/components/TreatmentCard';
import { treatmentsData } from '@/data/treatmentsData';
import ClinicGallery from '@/components/ClinicGallery';

export const metadata = {
  title: 'Eluvina Aesthetics | Premium Cosmetic, Hair Transplant & Face Therapy Centre',
  description: 'Welcome to Eluvina Aesthetics. Experience FUE Hair Transplant, HydraFacial, Botox, and premium facial therapies by expert dermatologists & trichologists.',
};

export default function HomePage() {
  const featuredTreatments = treatmentsData.slice(0, 6);

  const clinicImages = [
    { title: 'Reception', src: '/images/clinic/reception.png' },
    { title: 'Aesthetic Procedure Room', src: '/images/clinic/treatment_room.png' },
    { title: 'Doctor Consultation Room', src: '/images/clinic/consultation.png' },
    { title: 'Safegate Medical Centre', src: '/images/clinic/hospital Image.png' },
    { title: 'Hair Transplant OT', src: '/images/clinic/Hospital OT.jpeg' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero">

        {/* LEFT — Hero Text + Doctor Description */}
        <div className="hero-content">
          <span className="section-tag">✨ Medical Grade Aesthetic &amp; Hair Clinic</span>
          <h1>Reveal Your <span className="highlight">Natural Glow &amp; Density</span></h1>
          <p>
            Experience transformative cosmetic medical treatments and FUE hair transplant restoration.
            Our expert doctors combine cutting-edge laser technology with personalized clinical care.
          </p>
          <div className="hero-buttons">
            <Link href="/treatments" className="btn-primary">
              Explore Procedures ✦
            </Link>
            <Link href="/contact" className="btn-secondary">
              Free Consultation
            </Link>
          </div>



          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">06+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat">
              <span className="stat-number">5K+</span>
              <span className="stat-label">Happy Patients</span>
            </div>
            <div className="stat">
              <span className="stat-number">98%</span>
              <span className="stat-label">Hair Graft Survival</span>
            </div>
          </div>
        </div>

        {/* RIGHT — Doctor Portrait */}
        <div className="hero-visual">
          <img
            src="/images/doctor_profile.png"
            alt="Dr. Prashansa Mehta"
            style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }}
          />
        </div>

      </section>


      {/* Clinic Gallery Bar at Top */}
      <section className="page-section" style={{ padding: '40px 40px 60px', background: 'var(--white)' }}>
        <div className="section-header" style={{ marginBottom: '35px' }}>
          <span className="section-tag">Clinic Experience</span>
          <h2>Inside <span className="highlight">Eluvina Aesthetics</span></h2>
          <p>Tour our state-of-the-art facility featuring hospital-grade sterilization, luxury suites, and high-tech diagnostic equipment.</p>
        </div>

        <ClinicGallery images={clinicImages} />
      </section>

      {/* Featured Hair Transplant (HT) Highlight Section */}
      <section className="page-section" style={{ background: 'var(--gradient-hero)' }}>
        <div className="ht-grid" style={{ display: 'grid', gap: '60px', alignItems: 'center' }}>
          <div>
            <span className="section-tag">Featured Hair Restoration</span>
            <h2>The Best FUE <span className="highlight">Hair Transplant</span></h2>
            <p style={{ fontSize: '1.08rem', lineHeight: '1.8', marginBottom: '20px' }}>
              Looking for the <strong>best hair transplant</strong>? Our advanced <strong>Follicular Unit Extraction (FUE)</strong> technique delivers dense, permanent, and 100% natural hairline growth without linear scars, making us a top choice for hair restoration.
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '30px' }}>
              <li style={{ fontSize: '0.98rem', fontWeight: '500' }}>✓ <strong>Painless Procedure:</strong> Performed under local anesthesia with fast 5-7 day recovery.</li>
              <li style={{ fontSize: '0.98rem', fontWeight: '500' }}>✓ <strong>Natural Angle Micro-Grafting:</strong> Implantation matches your natural hair growth direction.</li>
              <li style={{ fontSize: '0.98rem', fontWeight: '500' }}>✓ <strong>Lifetime Growth Guarantee:</strong> Donor follicles resist DHT loss permanently.</li>
            </ul>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href="https://wa.me/919286577083?text=Hi!%20I%20want%20to%20consult%20about%20FUE%20Hair%20Transplant" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Book Hair Transplant Consult 💬
              </a>
              <Link href="/blog/fue-hair-transplant-restoration-guide" className="btn-secondary">
                Read HT Guide →
              </Link>
            </div>
          </div>

          <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', position: 'relative', height: '380px' }}>
            <img
              src="/images/treatments/hair_transplant.png"
              alt="Hair Transplant FUE Restoration Procedure"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{ position: 'absolute', top: '20px', left: '20px', background: 'var(--primary)', color: 'var(--white)', padding: '6px 16px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: '700' }}>
              TOP TRICHOLOGY PROCEDURE
            </div>
          </div>
        </div>
      </section>

      {/* Features Strip */}
      <div className="features-strip">
        <div className="feature-box">
          <div className="feature-icon">🏆</div>
          <h3>Award Winning</h3>
          <p>Recognized for excellence in aesthetic & hair care</p>
        </div>
        <div className="feature-box">
          <div className="feature-icon">👩‍⚕️</div>
          <h3>Expert Team</h3>
          <p>Certified dermatologists & trichologists</p>
        </div>
        <div className="feature-box">
          <div className="feature-icon">🔬</div>
          <h3>Advanced Tech</h3>
          <p>FDA-approved equipment & techniques</p>
        </div>
        <div className="feature-box">
          <div className="feature-icon">💎</div>
          <h3>Premium Products</h3>
          <p>Medical-grade serums & growth factors</p>
        </div>
      </div>

      {/* Featured Procedures */}
      <section className="page-section">
        <div className="section-header">
          <span className="section-tag">Our Curated Procedures</span>
          <h2>Featured <span className="highlight">Treatments</span></h2>
          <p>Discover our most popular facial rejuvenation, hair restoration, and anti-aging treatments designed for instant radiance and lasting results.</p>
        </div>

        <div className="treatments-grid">
          {featuredTreatments.map((treatment) => (
            <TreatmentCard key={treatment.id} treatment={treatment} />
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <Link href="/treatments" className="btn-primary">
            View All 16+ Procedures →
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="section-header">
          <span className="section-tag">Client Reviews</span>
          <h2>What Our <span className="highlight">Patients Say</span></h2>
        </div>

        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p>"The FUE Hair Transplant procedure restored my hairline completely! 8 months in, the density is incredible and natural."</p>
            <div className="testimonial-author">
              <div className="author-avatar">R</div>
              <div>
                <strong>Rahul</strong>
                <span>Delhi NCR</span>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p>"The HydraFacial treatment gave me the best skin I've ever had! The clinic environment is serene and luxury quality."</p>
            <div className="testimonial-author">
              <div className="author-avatar">N</div>
              <div>
                <strong>Neetu</strong>
                <span>Haridwar</span>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p>"Botox & Skin Renewal package was worth every rupee. Dr. Prashansa is a master at natural facial rejuvenation."</p>
            <div className="testimonial-author">
              <div className="author-avatar">A</div>
              <div>
                <strong>Anita</strong>
                <span>Haridwar</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Transform <span className="highlight">Your Hair & Skin?</span></h2>
          <p>Book your complimentary skin assessment or hair density consultation today.</p>
          <div className="cta-buttons">
            <a href="tel:+919286577083" className="btn-primary">
              📞 Call: +91 92865 77083
            </a>
            <a href="https://wa.me/919286577083" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              💬 WhatsApp Instant Booking
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
