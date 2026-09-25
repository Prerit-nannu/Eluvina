'use client';

export default function TreatmentCard({ treatment }) {
  const { title, description, duration, scope, icon, badge, isPremium, image } = treatment;

  const handleBooking = () => {
    const text = encodeURIComponent(
      `Hello Eluvina Aesthetic Centre! I would like to inquire/book the treatment: "${title}". Please let me know the available time slots.`
    );
    window.open(`https://wa.me/919286577083?text=${text}`, '_blank');
  };

  return (
    <div className="treatment-card">
      <div className="card-image" style={{ position: 'relative', overflow: 'hidden' }}>
        {image ? (
          <img
            src={image}
            alt={title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.5s ease',
            }}
            className="treatment-img"
          />
        ) : (
          <div className="card-icon-large">{icon || '✦'}</div>
        )}

        {badge && (
          <div className={`card-badge ${isPremium ? 'premium' : ''}`} style={{ zIndex: 2 }}>
            {badge}
          </div>
        )}
      </div>

      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>

        <div className="card-features">
          {duration && <span>⏱ {duration}</span>}
          {scope && <span>✨ {scope}</span>}
        </div>

        <div className="card-footer">
          <button onClick={handleBooking} className="btn-book">
            Book via WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}
