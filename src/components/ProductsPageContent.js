'use client';

import { useState, useMemo } from 'react';
import { productsData, getSubCategories } from '@/data/productsData';
import { Search } from 'lucide-react';
import './ProductsPage.css';
import './ProductListing.css';

export default function ProductsPageContent() {
  const [activeTab, setActiveTab] = useState('All');
  const [activeSubCategory, setActiveSubCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const tabs = ['All', 'Hair', 'Skin'];

  // Available sub-categories for active tab
  const availableSubCategories = useMemo(() => {
    return ['All', ...getSubCategories(activeTab)];
  }, [activeTab]);

  // Filter products based on active tab, subCategory, and search query
  const filteredProducts = useMemo(() => {
    return productsData.filter((product) => {
      // Tab filter (Hair / Skin / All)
      if (activeTab !== 'All' && product.category !== activeTab) {
        return false;
      }
      // Sub-category filter
      if (activeSubCategory !== 'All' && product.subCategory !== activeSubCategory) {
        return false;
      }
      // Search query filter (matches name, subCategory, description, or benefits)
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = product.name?.toLowerCase().includes(q);
        const matchesSub = product.subCategory?.toLowerCase().includes(q);
        const matchesDesc = product.description?.toLowerCase().includes(q);
        const matchesBenefit = product.benefits?.some(b => b.toLowerCase().includes(q));
        if (!matchesName && !matchesSub && !matchesDesc && !matchesBenefit) {
          return false;
        }
      }
      return true;
    });
  }, [activeTab, activeSubCategory, searchQuery]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setActiveSubCategory('All');
  };

  const discount = (mrp, price) => Math.round(((mrp - price) / mrp) * 100);

  return (
    <div className="pp-wrapper">
      {/* Search Bar */}
      <div className="pp-search-bar-row">
        <div className="pp-search-container">
          <span className="pp-search-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Search size={20} color="#999" />
          </span>
          <input
            type="text"
            className="pp-search-input"
            placeholder="Search products, ingredients, or skin concerns..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button className="pp-search-clear" onClick={() => setSearchQuery('')} aria-label="Clear search">✕</button>
          )}
        </div>
      </div>

      {/* Main Department Tabs: All | Hair | Skin */}
      <div className="pp-tabs-row">
        {tabs.map(tab => (
          <button
            key={tab}
            className={`pp-tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => handleTabChange(tab)}
          >
            {tab === 'All' ? 'All Products' : `${tab} Care`}
          </button>
        ))}
      </div>

      {/* Quick Category Filter Pills */}
      <div className="pp-pills-row">
        {availableSubCategories.map(subCat => (
          <button
            key={subCat}
            className={`pp-pill ${activeSubCategory === subCat ? 'active' : ''}`}
            onClick={() => setActiveSubCategory(subCat)}
          >
            {subCat}
          </button>
        ))}
      </div>

      {/* Direct Products Grid Section */}
      <section className="pp-products-section">
        <div className="pp-products-header">
          <div>
            <h2>
              {activeSubCategory !== 'All' ? activeSubCategory : (activeTab === 'All' ? 'All Formulations' : `${activeTab} Formulations`)}
            </h2>
            <p>Dermatologist-formulated and clinic-grade skincare & haircare solutions.</p>
          </div>
          <span className="pp-products-count">{filteredProducts.length} Products</span>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="pp-empty-state">
            <p className="pp-empty-title">No products match your search</p>
            <p className="pp-empty-sub">Try searching for something else or reset your filters.</p>
            <button
              className="pp-empty-reset-btn"
              onClick={() => { setActiveTab('All'); setActiveSubCategory('All'); setSearchQuery(''); }}
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="pl-grid">
            {filteredProducts.map((product) => {
              return (
                <div
                  className="pl-card"
                  key={product.id}
                >
                  {/* Discount badge */}
                  {product.mrp > product.price && (
                    <div className="pl-badge">
                      {discount(product.mrp, product.price)}% OFF
                    </div>
                  )}

                  {/* Image */}
                  <div className="pl-img-wrapper">
                    <img src={product.image} alt={product.name} className="pl-img" />
                  </div>

                  {/* Info */}
                  <div className="pl-info">
                    <div className="pl-brand-row">
                      <span className="pl-brand-tag">{product.subCategory}</span>
                      <span className="pl-clinic-tag">Buy from Clinic</span>
                    </div>

                    <h3 className="pl-product-name">{product.name}</h3>
                    <p className="pl-description">{product.description}</p>

                    {/* Benefits */}
                    <ul className="pl-benefits">
                      {product.benefits?.map((b, i) => (
                        <li key={i}>
                          <span className="pl-check">✓</span> {b}
                        </li>
                      ))}
                    </ul>

                    {/* Pricing */}
                    <div className="pl-pricing">
                      <span className="pl-price">₹{product.price.toLocaleString('en-IN')}</span>
                      {product.mrp > product.price && (
                        <>
                          <span className="pl-mrp">MRP ₹{product.mrp.toLocaleString('en-IN')}</span>
                          <span className="pl-saved">Save ₹{(product.mrp - product.price).toLocaleString('en-IN')}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}

