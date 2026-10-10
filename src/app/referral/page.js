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
          <p>Create your personal referral code and start sharing.</p>
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

        <div className="how-it-works">
          <h2>How it works</h2>
          <ul className="steps-list">
            <li className="step-item">
              <span className="step-number">1</span>
              <span className="step-text"><strong>Generate Code:</strong> Create a unique referral link using the form above.</span>
            </li>
            <li className="step-item">
              <span className="step-number">2</span>
              <span className="step-text"><strong>Share:</strong> Share your unique code to your friends or send them the generated link to book a consultation directly.</span>
            </li>
            <li className="step-item">
              <span className="step-number">3</span>
              <span className="step-text"><strong>Earn:</strong> Get up to 10% back on qualifying procedures once your friend completes their treatment.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
