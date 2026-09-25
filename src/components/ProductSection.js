'use client';

import React from 'react';
import Link from 'next/link';
import './ProductSection.css';

export default function ProductSection() {
  return (
    <div className="product-header-container">
      {/* Top Header Row */}
      <div className="ph-top-bar">
        <Link href="/" className="ph-logo">
          <span className="ph-logo-main">Eluvina Aesthetics</span>
        </Link>
        
        <div className="ph-search-container">
          <input type="text" placeholder="Search Products" className="ph-search-input" />
          <button className="ph-search-btn" aria-label="Search">
            🔍
          </button>
        </div>

        <div className="ph-actions">
          <Link href="/login" className="ph-action-item">
            <span className="ph-action-icon">👤</span>
            <div className="ph-action-text">
              <small>Welcome</small>
              <strong>Sign in / Register</strong>
            </div>
          </Link>
          <Link href="/orders" className="ph-action-item">
            <span className="ph-action-icon">📦</span>
            <div className="ph-action-text">
              <small>Track</small>
              <strong>Orders</strong>
            </div>
          </Link>
          <Link href="/wishlist" className="ph-action-item">
            <span className="ph-action-icon">
              🤍
              <span className="ph-badge">0</span>
            </span>
            <div className="ph-action-text">
              <small>Your</small>
              <strong>Wishlist</strong>
            </div>
          </Link>
          <Link href="/cart" className="ph-action-item">
            <span className="ph-action-icon">
              🛒
              <span className="ph-badge">0</span>
            </span>
            <div className="ph-action-text">
              <small>Your</small>
              <strong>Cart</strong>
            </div>
          </Link>
        </div>
      </div>

      {/* Sub Navigation Row */}
      <div className="ph-sub-nav">
        <div className="ph-shop-brands">
          ☰ SHOP BY BRANDS ∨
        </div>
        <Link href="/sell" className="ph-sub-link">SELL WITH US</Link>
        <Link href="/partner" className="ph-sub-link">JOIN AS MEDICAL PARTNER</Link>
        <span style={{cursor: 'pointer', fontSize: '1.2rem'}}>🔍</span>
      </div>

      {/* Promotional Banner */}
      <div className="ph-banner-container">
        <div className="ph-banner-logo">
          <h2>ELUVINA</h2>
          <p>AESTHETIC & HAIR TRANSPLANT CENTRE</p>
          <div style={{fontSize: '0.6rem', marginTop: '4px', letterSpacing: '1px'}}>LOOK GOOD • FEEL CONFIDENT</div>
        </div>
        
        <div className="ph-banner-cursive">
          Better Care for Your Hair & Skin
        </div>

        <div className="ph-banner-offer">
          <div className="ph-banner-get">GET</div>
          <div className="ph-banner-discount">10% OFF</div>
          <div className="ph-banner-products-text">ON ANY PRODUCTS</div>
          <div className="ph-banner-price">₹499 & ABOVE</div>
        </div>

        <div className="ph-banner-tagline">
          Your daily care, now at a better value!
        </div>

        <div className="ph-banner-image-wrapper">
          <img 
            src="/images/aesthetic_skincare_products.png" 
            alt="Luxury Skincare Products" 
            className="ph-banner-image" 
          />
        </div>

        <div className="ph-banner-features" style={{paddingBottom: '40px'}}>
          <div className="ph-banner-feature">
            <div className="ph-banner-feature-icon">💆‍♀️</div>
            <span>Hair Care Products</span>
          </div>
          <div className="ph-banner-feature">
            <div className="ph-banner-feature-icon">✨</div>
            <span>Skincare Products</span>
          </div>
          <div className="ph-banner-feature">
            <div className="ph-banner-feature-icon">☀️</div>
            <span>Sun Protection</span>
          </div>
          <div className="ph-banner-feature">
            <div className="ph-banner-feature-icon">🌿</div>
            <span>And More...</span>
          </div>
        </div>

        <div className="ph-banner-footer">
          <span>———</span>
          BECAUSE YOU DESERVE THE BEST
          <span>———</span>
        </div>
      </div>
    </div>
  );
}
