import mongoose from 'mongoose';

const LeadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String },
  age: { type: Number },
  hair_concern: { type: String },
  coupon_code: { type: String },
  query: { type: String },
  gclid: { type: String },
  gbraid: { type: String },
  wbraid: { type: String },
  utm_source: { type: String },
  utm_medium: { type: String },
  utm_campaign: { type: String },
  utm_term: { type: String },
  utm_content: { type: String },
  status: { type: String, default: 'new' },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Lead || mongoose.model('Lead', LeadSchema);
