'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import '../auth.css';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // In a real application, this should be an API call to verify against a database.
      // Since we're using Google Sheets, we need a GAS Web App endpoint to verify this.
      // For now, this is a placeholder URL. We will provide instructions on how to create the GAS script.
      const scriptUrl = process.env.NEXT_PUBLIC_GAS_URL;
      
      if (!scriptUrl) {
        // Fallback for demo purposes if script is not set up
        console.warn("GAS URL not found, doing local mock login");
        if (email === 'test@eluvina.com' && password === 'password') {
          login({ name: 'Test User', email });
          router.push('/products');
          return;
        }
        throw new Error('Invalid credentials (mock)');
      }

      const response = await fetch(scriptUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          action: 'login',
          email,
          password
        })
      });

      const data = await response.json();
      
      if (data.success) {
        login(data.user); // user data returned from sheet
        router.push('/products');
      } else {
        setError(data.message || 'Login failed. Please check your credentials.');
      }
    } catch (err) {
      console.error(err);
      setError('An error occurred during login. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h1>Welcome Back</h1>
        {error && <div className="error-msg">{error}</div>}
        <form className="auth-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input 
              type="email" 
              id="email" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              required 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="auth-submit-btn" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        <div className="auth-footer">
          Don't have an account? <Link href="/signup">Sign up here</Link>
        </div>
      </div>
    </div>
  );
}
