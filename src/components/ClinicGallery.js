"use client";
import { useRef } from 'react';

export default function ClinicGallery({ images }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      {images.length > 4 && (
        <button 
          onClick={() => scroll('left')}
          style={{
            position: 'absolute', left: '-20px', top: '50%', transform: 'translateY(-50%)', zIndex: 10,
            background: 'var(--white)', border: '1px solid #ddd', borderRadius: '50%', width: '40px', height: '40px',
            display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: 'var(--shadow-sm)',
            fontSize: '20px', color: 'var(--dark)'
          }}
          aria-label="Scroll Left"
        >
          ❮
        </button>
      )}

      <div 
        ref={scrollRef}
        style={{ 
          display: 'flex', gap: '20px', overflowX: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none',
          scrollBehavior: 'smooth', paddingBottom: '10px'
        }}
        className="hide-scrollbar"
      >
        {images.map((img, i) => (
          <div
            key={i}
            style={{
              flex: '0 0 auto',
              width: '260px',
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-sm)',
              position: 'relative',
              height: '200px',
              border: '1px solid rgba(0,0,0,0.06)'
            }}
          >
            <img
              src={img.src}
              alt={img.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
              className="treatment-img"
            />
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '12px 16px',
                background: 'linear-gradient(to top, rgba(0,0,0,0.85), transparent)',
                color: 'var(--white)',
                fontSize: '0.9rem',
                fontWeight: '600'
              }}
            >
              {img.title}
            </div>
          </div>
        ))}
      </div>

      {images.length > 4 && (
        <button 
          onClick={() => scroll('right')}
          style={{
            position: 'absolute', right: '-20px', top: '50%', transform: 'translateY(-50%)', zIndex: 10,
            background: 'var(--white)', border: '1px solid #ddd', borderRadius: '50%', width: '40px', height: '40px',
            display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: 'var(--shadow-sm)',
            fontSize: '20px', color: 'var(--dark)'
          }}
          aria-label="Scroll Right"
        >
          ❯
        </button>
      )}

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </div>
  );
}
