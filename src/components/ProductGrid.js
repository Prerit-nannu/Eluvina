import React from 'react';
import './ProductGrid.css';

export default function ProductGrid() {
  const products = [
    {
      id: 1,
      name: "Hydrating Face Wash",
      price: 899,
      originalPrice: 1199,
      image: "/images/aesthetic_skincare_products.png",
      badge: "SAVE 25%"
    },
    {
      id: 2,
      name: "Daily Glow Moisturizer",
      price: 1250,
      originalPrice: 1650,
      image: "/images/aesthetic_skincare_products.png",
      badge: "SAVE 24%"
    },
    {
      id: 3,
      name: "SPF 50 Sunscreen",
      price: 950,
      originalPrice: 1250,
      image: "/images/aesthetic_skincare_products.png",
      badge: "SAVE 24%"
    },
    {
      id: 4,
      name: "Vitamin C Serum",
      price: 1800,
      originalPrice: 2400,
      image: "/images/aesthetic_skincare_products.png",
      badge: "SAVE 25%"
    }
  ];

  return (
    <div className="pg-container">
      <div className="pg-header">
        <h2 className="pg-title">EXPLORE PRODUCTS</h2>
        <div className="pg-sort">
          <select className="pg-sort-select">
            <option>Sort By</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest Arrivals</option>
          </select>
        </div>
      </div>

      <div className="pg-content">
        {/* Sidebar Filters */}
        <aside className="pg-sidebar">
          <div className="pg-filter-header">
            <h3>FILTERS</h3>
            <button className="pg-clear-btn">Clear Filter</button>
          </div>
          
          <div className="pg-filter-section">
            <div className="pg-range-slider">
              {/* Mock visual slider */}
              <div className="pg-slider-track">
                <div className="pg-slider-fill"></div>
                <div className="pg-slider-thumb left"></div>
                <div className="pg-slider-thumb right"></div>
              </div>
            </div>
            <div className="pg-price-text">
              Price Range: ₹0 - ₹5000
            </div>
          </div>

          <div className="pg-filter-section">
            <h4 style={{marginBottom: '10px', fontSize: '0.9rem', color: '#333'}}>CATEGORIES</h4>
            <div className="pg-checkbox-group">
              <label><input type="checkbox" /> Skin Care</label>
              <label><input type="checkbox" /> Hair Care</label>
              <label><input type="checkbox" /> Supplements</label>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="pg-grid">
          {products.map(product => (
            <div className="pg-card" key={product.id}>
              {product.badge && <div className="pg-badge">{product.badge}</div>}
              <div className="pg-card-image-wrapper">
                <div className="pg-quality-seal">
                  <span style={{fontSize: '0.4rem', color: '#c09641'}}>PREMIUM</span>
                </div>
                <img src={product.image} alt={product.name} className="pg-card-img" />
              </div>
              <div className="pg-card-info">
                <h3 className="pg-card-title">{product.name}</h3>
                <div className="pg-card-pricing">
                  <span className="pg-price">₹{product.price}</span>
                  {product.originalPrice && (
                    <span className="pg-original-price">₹{product.originalPrice}</span>
                  )}
                </div>
                <button className="pg-add-btn">ADD TO CART</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
