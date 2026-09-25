'use client';

import { useState } from 'react';
import ProductListing from './ProductListing';
import { productsData, getSubCategories, getProductsBySubCategory } from '@/data/productsData';
import './ProductsPage.css';

// Category card images map
const categoryImages = {
  // Skin
  'Face Wash':    '/images/products/cat_face_wash.png',
  'Moisturizer':  '/images/products/cat_moisturizer.png',
  'Sunscreen':    '/images/products/cat_sunscreen.png',
  'Serum':        '/images/products/cat_serum.png',
  'Cream':        '/images/products/cat_cream.png',
  'Face Mask':    '/images/products/cat_face_mask.png',
  'Under Eye':    '/images/products/cat_under_eye.png',
  'Others':       '/images/products/cat_others.png',
  // Hair
  'Shampoo':      '/images/products/cat_shampoo.png',
  'Hair Oil':     '/images/products/cat_hair_oil.png',
  'Hair Serum':   '/images/products/cat_hair_serum.png',
  'Minoxidil':    '/images/products/cat_minoxidil.png',
};

export default function ProductsPageContent() {
  const [activeTab, setActiveTab]           = useState('All');
  const [searchQuery, setSearchQuery]       = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  const tabs = ['All', 'Hair', 'Skin'];

  // Build category list based on active tab
  const subCategories = getSubCategories(activeTab);

  // Filter by search
  const filteredCategories = subCategories.filter(cat =>
    cat.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // When a category card is clicked
  const handleCategoryClick = (subCat) => {
    setSelectedCategory(subCat);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  const handleClose = () => {
    setSelectedCategory(null);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSelectedCategory(null);
    setSearchQuery('');
  };

  return (
    <div className="pp-wrapper">
      {/* Search Bar */}
      <div className="pp-search-bar-row">
        <div className="pp-search-container">
          <span className="pp-search-icon">🔍</span>
          <input
            type="text"
            className="pp-search-input"
            placeholder="Search products or categories..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setSelectedCategory(null);
            }}
          />
          {searchQuery && (
            <button className="pp-search-clear" onClick={() => setSearchQuery('')}>✕</button>
          )}
        </div>
      </div>

      {/* Product Banner */}
      <div className="pp-banner-wrapper">
        <img
          src="/images/products/banner.png"
          alt="Eluvina Products - Festive Offer"
          className="pp-banner-img"
        />
      </div>

      {/* Category Tabs: All | Hair | Skin */}
      <div className="pp-tabs-row">
        {tabs.map(tab => (
          <button
            key={tab}
            className={`pp-tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => handleTabChange(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* If a sub-category is selected, show products. Else show category grid. */}
      {selectedCategory ? (
        <ProductListing
          subCategory={selectedCategory}
          products={getProductsBySubCategory(selectedCategory)}
          onClose={handleClose}
        />
      ) : (
        <section className="pp-categories-section">
          <div className="pp-categories-header">
            <h2>
              Explore Our{' '}
              <span className="pp-highlight">
                {activeTab === 'All' ? 'ALL' : activeTab.toUpperCase()}
              </span>{' '}
              Categories
            </h2>
            <p>Browse through our wide range of categories to find what you love.</p>
          </div>

          {filteredCategories.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 0', color: '#999' }}>
              <p style={{ fontSize: '1.2rem' }}>No categories found for "{searchQuery}"</p>
            </div>
          ) : (
            <div className="pp-categories-grid">
              {filteredCategories.map((cat) => (
                <div
                  className="pp-cat-card"
                  key={cat}
                  onClick={() => handleCategoryClick(cat)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && handleCategoryClick(cat)}
                  aria-label={`Browse ${cat} products`}
                >
                  <img
                    src={categoryImages[cat] || '/images/products/cat_others.png'}
                    alt={cat}
                    className="pp-cat-img"
                  />
                  <div className="pp-cat-label">{cat}</div>
                  <div className="pp-cat-count">
                    {getProductsBySubCategory(cat).length} Products →
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      )}
    </div>
  );
}
