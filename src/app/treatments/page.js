'use client';

import { useState } from 'react';
import TreatmentCard from '@/components/TreatmentCard';
import { treatmentsData } from '@/data/treatmentsData';

export default function TreatmentsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Procedures' },
    { id: 'hair', label: 'Hair & Scalp' },
    { id: 'facials', label: 'Facials & Peels' },
    { id: 'anti-aging', label: 'Anti-Aging & Scars' },
    { id: 'injectables', label: 'Botox, Fillers & PRP' },
    { id: 'lasers', label: 'Laser & Pigmentation' },
    { id: 'lifting', label: 'Non-Surgical Lifting' },
  ];

  const filteredTreatments = treatmentsData.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <div className="page-header">
        <span className="section-tag">Complete Service Catalog</span>
        <h1>Exclusive <span className="highlight">Treatments</span></h1>
        <p style={{ maxWidth: '650px', margin: '0 auto' }}>
          Explore our complete range of medical cosmetic and hair restoration procedures designed to nourish, restore, and elevate your appearance.
        </p>
      </div>

      <section className="page-section" style={{ paddingTop: '20px' }}>
        {/* Search Bar */}
        <div style={{ maxWidth: '500px', margin: '0 auto 40px' }}>
          <input
            type="text"
            placeholder="🔍 Search treatment (e.g. Hair Transplant, HydraFacial, Botox)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '14px 22px',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid rgba(0,0,0,0.15)',
              fontSize: '1rem',
              outline: 'none',
              boxShadow: 'var(--shadow-sm)',
            }}
          />
        </div>

        {/* Filter Tabs */}
        <div className="filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Treatments Grid */}
        <div className="treatments-grid">
          {filteredTreatments.length > 0 ? (
            filteredTreatments.map((treatment) => (
              <TreatmentCard key={treatment.id} treatment={treatment} />
            ))
          ) : (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '60px 0' }}>
              <h3>No treatments found matching your criteria.</h3>
              <p>Try searching for a different keyword or select "All Procedures".</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
