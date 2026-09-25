'use client';

export default function TeamMemberCard({ member }) {
  const { name, role, bio, avatar, specialties, experience } = member;

  const handleConsultation = () => {
    const text = encodeURIComponent(
      `Hello, I would like to schedule a consultation with ${name} (${role}).`
    );
    window.open(`https://wa.me/919286577083?text=${text}`, '_blank');
  };

  return (
    <div className="team-card">
      <div className="team-avatar">
        {avatar || name.charAt(0)}
      </div>
      <div className="team-info">
        <h3>{name}</h3>
        <div className="team-role">{role} • {experience}</div>
        <p>{bio}</p>

        <div className="team-specs">
          {specialties.map((spec, i) => (
            <span key={i} className="spec-badge">{spec}</span>
          ))}
        </div>

        <button 
          onClick={handleConsultation} 
          className="btn-secondary" 
          style={{ marginTop: '20px', width: '100%', padding: '10px 20px', fontSize: '0.88rem' }}
        >
          Book Consultation
        </button>
      </div>
    </div>
  );
}
