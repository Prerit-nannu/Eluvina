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
        {products.map(product => {
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
                  <span className="pl-brand-tag">Eluvina Aesthetic Centre</span>
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
    </div>
  );
}
