import './ProductListing.css';

export default function ProductListing({ subCategory, products, onClose }) {
  const discount = (mrp, price) => Math.round(((mrp - price) / mrp) * 100);

  return (
    <div className="pl-section">
      <div className="pl-header">
        <div className="pl-title-row">
          <button className="pl-back-btn" onClick={onClose}>
            ← Back to Categories
          </button>
          <h2 className="pl-title">{subCategory}</h2>
          <span className="pl-count">{products.length} Products</span>
        </div>
      </div>

      <div className="pl-grid">
        {products.map(product => (
          <div className="pl-card" key={product.id}>
            {/* Discount badge */}
            <div className="pl-badge">
              {discount(product.mrp, product.price)}% OFF
            </div>

            {/* Image */}
            <div className="pl-img-wrapper">
              <img src={product.image} alt={product.name} className="pl-img" />
            </div>

            {/* Info */}
            <div className="pl-info">
              <h3 className="pl-product-name">{product.name}</h3>
              <p className="pl-description">{product.description}</p>

              {/* Benefits */}
              <ul className="pl-benefits">
                {product.benefits.map((b, i) => (
                  <li key={i}>
                    <span className="pl-check">✓</span> {b}
                  </li>
                ))}
              </ul>

              {/* Pricing */}
              <div className="pl-pricing">
                <span className="pl-price">₹{product.price}</span>
                <span className="pl-mrp">MRP ₹{product.mrp}</span>
                <span className="pl-saved">Save ₹{product.mrp - product.price}</span>
              </div>

              {/* Actions */}
              <div className="pl-actions">
                <button className="pl-cart-btn">Add to Cart 🛒</button>
                <button className="pl-buy-btn">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
