'use client';

import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();
  const { user } = useAuth();
  const router = useRouter();
  const [checkingOut, setCheckingOut] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);

  const totalMRP = cart.reduce((acc, item) => acc + (item.mrp * item.quantity), 0);
  const totalDiscount = cart.reduce((acc, item) => acc + ((item.mrp - item.price) * item.quantity), 0);
  const finalPrice = totalMRP - totalDiscount;

  const handleCheckout = async () => {
    if (!user) {
      router.push('/login');
      return;
    }

    setCheckingOut(true);
    try {
      const scriptUrl = process.env.NEXT_PUBLIC_GAS_URL;
      if (!scriptUrl) {
        // Mock successful checkout
        setTimeout(() => {
          setOrderSuccess(true);
          clearCart();
          setCheckingOut(false);
        }, 1500);
        return;
      }

      // Send to Google Sheet
      const orderDetails = {
        action: 'order',
        email: user.email,
        name: user.name,
        items: JSON.stringify(cart.map(i => ({ id: i.id, name: i.name, qty: i.quantity, price: i.price }))),
        total: finalPrice
      };

      const response = await fetch(scriptUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(orderDetails)
      });

      const data = await response.json();
      if (data.success) {
        setOrderSuccess(true);
        clearCart();
      } else {
        alert('Order failed. Please try again.');
      }
    } catch (err) {
      console.error(err);
      alert('An error occurred during checkout.');
    } finally {
      if (scriptUrl) setCheckingOut(false);
    }
  };

  if (orderSuccess) {
    return (
      <div style={{ padding: '140px 20px', textAlign: 'center', minHeight: '80vh' }}>
        <h1 style={{ color: 'var(--primary-dark)', marginBottom: '20px' }}>Order Placed Successfully! 🎉</h1>
        <p style={{ color: 'var(--gray)', marginBottom: '40px' }}>Thank you for shopping with Eluvina Aesthetics. We will process your order soon.</p>
        <Link href="/products" className="btn-primary">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '140px 20px 80px', maxWidth: '1200px', margin: '0 auto', minHeight: '80vh' }}>
      <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', marginBottom: '40px', color: 'var(--dark)' }}>
        Your Cart
      </h1>
      
      {cart.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '60px 0' }}>
          <p style={{ fontSize: '1.2rem', color: 'var(--gray)', marginBottom: '20px' }}>Your cart is empty.</p>
          <Link href="/products" className="btn-primary">
            Browse Products
          </Link>
        </div>
      ) : (
        <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
          {/* Cart Items */}
          <div style={{ flex: '1 1 600px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {cart.map(item => (
              <div key={item.id} style={{ display: 'flex', gap: '20px', padding: '20px', background: 'var(--white)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}>
                <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px', objectFit: 'contain', background: '#fdf8f3', borderRadius: '8px' }} />
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>{item.name}</h3>
                  <p style={{ color: 'var(--gray)', fontSize: '0.9rem', marginBottom: '12px' }}>Qty: {item.quantity}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>₹{item.price}</span>
                    <span style={{ textDecoration: 'line-through', color: 'var(--gray-light)', fontSize: '0.9rem' }}>₹{item.mrp}</span>
                  </div>
                </div>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  style={{ background: 'none', border: 'none', color: '#d9534f', cursor: 'pointer', fontWeight: 'bold', alignSelf: 'flex-start' }}
                >
                  ✕ Remove
                </button>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div style={{ flex: '1 1 350px', background: 'var(--white)', padding: '30px', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-md)', height: 'fit-content' }}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '24px', borderBottom: '1px solid #eee', paddingBottom: '16px' }}>Order Summary</h3>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', color: 'var(--gray)' }}>
              <span>Total MRP ({cart.length} items)</span>
              <span>₹{totalMRP}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', color: '#28a745' }}>
              <span>Discount on MRP</span>
              <span>-₹{totalDiscount}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px', color: 'var(--gray)' }}>
              <span>Shipping Fee</span>
              <span>Free</span>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px', fontSize: '1.2rem', fontWeight: 'bold', borderTop: '1px solid #eee', paddingTop: '16px' }}>
              <span>Total Amount</span>
              <span>₹{finalPrice}</span>
            </div>

            <button 
              onClick={handleCheckout} 
              disabled={checkingOut}
              style={{ width: '100%', padding: '16px', background: 'var(--gradient-primary)', color: 'white', border: 'none', borderRadius: 'var(--radius-md)', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer', transition: '0.3s' }}
            >
              {checkingOut ? 'Processing...' : user ? 'Checkout' : 'Login to Checkout'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
