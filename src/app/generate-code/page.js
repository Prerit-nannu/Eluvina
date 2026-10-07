'use client';

import { useState } from 'react';
import { generateReferralCodeAction } from './actions';
import './GenerateCode.css';

export default function GenerateCodePage() {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setResult(null);
    setCopied(false);

    try {
      const res = await generateReferralCodeAction(name, dob, email);
      if (res.success) {
        setResult(res.code);
      } else {
        setError(res.error || 'Failed to generate code.');
      }
    } catch (err) {
      setError('An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    if (!result) return;
    const link = `https://aesthetics.eluvina.com/enquiry?ref=${result}`;
    navigator.clipboard.writeText(link).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="referral-container">
      <div className="referral-card">
        <div className="referral-header">
          <h1>Referral Code Generator</h1>
          <p>Generate unique codes for referral partners.</p>
        </div>

        <form className="referral-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="personName">First Name (or Full Name)</label>
            <input
              id="personName"
              type="text"
              className="form-input"
              placeholder="e.g., Sarah Jenkins"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="personEmail">Email Address (Optional)</label>
            <input
              id="personEmail"
              type="email"
              className="form-input"
              placeholder="e.g., sarah@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="personDob">Date of Birth</label>
            <input
              id="personDob"
              type="date"
              className="form-input"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="submit-btn" disabled={isLoading}>
            {isLoading ? 'Generating...' : 'Generate Code'}
          </button>
        </form>

        {error && <div className="error-msg">{error}</div>}

        {result && (
          <div className="result-box">
            <p>Code generated successfully!</p>
            <div className="code-display">{result}</div>
            <div className="copy-link">
              aesthetics.eluvina.com/enquiry?ref={result}
            </div>
            <button className="copy-btn" onClick={handleCopy}>
              {copied ? 'Copied!' : 'Copy Tracking Link'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
