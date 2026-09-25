import TeamMemberCard from '@/components/TeamMemberCard';
import { teamMembers } from '@/data/teamData';

export const metadata = {
  title: 'Our Team | Certified Dermatologists & Aesthetic Doctors',
  description: 'Meet the expert medical team at Eluvina Aesthetic Centre. Board-certified dermatologists, cosmetic surgeons, and trained aestheticians.',
};

export default function TeamPage() {
  return (
    <>
      <div className="page-header">
        <span className="section-tag">Medical Leadership</span>
        <h1>Meet Our <span className="highlight">Expert Team</span></h1>
        <p style={{ maxWidth: '650px', margin: '0 auto' }}>
          Passionate medical professionals dedicated to providing world-class aesthetic care, personalized treatments, and outstanding clinical outcomes.
        </p>
      </div>

      <section className="page-section">
        <div className="team-grid">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>Have Questions for <span className="highlight">Our Specialists?</span></h2>
          <p>Schedule a 1-on-1 personal consultation to discuss your skin goals and treatment options.</p>
          <div className="cta-buttons">
            <a href="https://wa.me/919286577083" target="_blank" rel="noopener noreferrer" className="btn-primary">
              💬 Message Doctor on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
