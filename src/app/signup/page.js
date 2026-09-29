'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import '../auth.css';

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    altPhone: '',
    address: '',
    street: '',
    city: '',
    state: '',
    pincode: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const scriptUrl = process.env.NEXT_PUBLIC_GAS_URL;
      
      if (!scriptUrl) {
        console.warn("GAS URL not found, doing local mock signup");
        // Mock successful signup
        login({ name: formData.name, email: formData.email });
        router.push('/products');
        return;
      }

      const response = await fetch(scriptUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          action: 'signup',
          ...formData
        })
      });

      const data = await response.json();
      
      if (data.success) {
        // Automatically login after signup
        login({ name: formData.name, email: formData.email });
        router.push('/products');
      } else {
        setError(data.message || 'Signup failed. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setError('An error occurred during signup. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container" style={{ maxWidth: '600px' }}>
        <h1>Create an Account</h1>
        {error && <div className="error-msg">{error}</div>}
        <form className="auth-form" onSubmit={handleSignup}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" required value={formData.name} onChange={handleChange} />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" required value={formData.email} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" required value={formData.password} onChange={handleChange} />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">Phone No</label>
              <input type="tel" id="phone" required value={formData.phone} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="altPhone">Alternate Contact No</label>
              <input type="tel" id="altPhone" value={formData.altPhone} onChange={handleChange} />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="address">Address (Building/Apartment)</label>
            <input type="text" id="address" required value={formData.address} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="street">Street</label>
            <input type="text" id="street" required value={formData.street} onChange={handleChange} />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input type="text" id="city" required value={formData.city} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="state">State</label>
              <input type="text" id="state" required value={formData.state} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="pincode">Pincode</label>
              <input type="text" id="pincode" required value={formData.pincode} onChange={handleChange} />
            </div>
          </div>

          <button type="submit" className="auth-submit-btn" disabled={loading}>
            {loading ? 'Creating Account...' : 'Sign Up'}
          </button>
        </form>
        <div className="auth-footer">
          Already have an account? <Link href="/login">Login here</Link>
        </div>
      </div>
    </div>
  );
}
