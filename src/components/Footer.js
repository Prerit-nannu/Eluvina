import Link from 'next/link';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <Link href="/" className="logo">
            <img src="/images/logo.avif" alt="Eluvina Logo" className="logo-img" style={{ height: '64px', width: 'auto' }} />
          </Link>
          <p>
            Your trusted destination for premium cosmetic treatments, dermatological care, and face therapy.
            Experience the art of natural beauty enhancement with cutting-edge medical technology.
          </p>
          <div className="social-links">
            <a href="https://www.instagram.com/eluvina_aesthetics/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://wa.me/919286577083?text=${whatsappMsg}`, '_blank'" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="WhatsApp" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><WhatsAppIcon style={{ marginRight: 0 }} /></a>
          </div>
        </div>

        <div className="footer-links">
          <h4>Navigation</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/treatments">All Treatments</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/contact">Contact & Booking</Link></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Popular Procedures</h4>
          <ul>
            <li><Link href="/treatments">HydraFacial Therapy</Link></li>
            <li><Link href="/treatments">Anti-Aging & Fillers</Link></li>
            <li><Link href="/treatments">Laser Hair Removal</Link></li>
            <li><Link href="/treatments">PRP Growth Therapy</Link></li>
            <li><Link href="/treatments">HIFU Facelift</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '8px' }}>
            <MapPin size={18} style={{ flexShrink: 0, marginTop: '4px' }} />
            <span>Safegate Medical Centre, 83 Araghar chowk<br />Model Colony, Dalanwala, Dehradun 248001</span>
          </p>
          <p style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <Phone size={18} style={{ flexShrink: 0 }} />
            <span>+91 92865 77083</span>
          </p>
          <p style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <Mail size={18} style={{ flexShrink: 0 }} />
            <span>aesthetics@eluvina.com</span>
          </p>
          <p style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Clock size={18} style={{ flexShrink: 0 }} />
            <span>Mon - Sat: 10:00 AM - 7:00 PM</span>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Eluvina Aesthetics. All rights reserved. |
          <a href="#"> Privacy Policy</a> |
          <a href="#"> Terms of Service</a>
        </p>
      </div>
    </footer>
  );
}
