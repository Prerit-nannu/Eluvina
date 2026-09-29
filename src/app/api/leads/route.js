import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Lead from '@/models/Lead';

/* Simple in-memory rate limiter: max 5 requests per IP per minute */
const rateLimit = new Map();
function isRateLimited(ip) {
  const now = Date.now();
  const entry = rateLimit.get(ip);
  if (!entry || now > entry.reset) { rateLimit.set(ip, { count: 1, reset: now + 60000 }); return false; }
  if (entry.count >= 5) return true;
  entry.count++;
  return false;
}

function clean(val) {
  return typeof val === 'string' ? val.trim().replace(/<[^>]*>/g, '') : val;
}

export async function POST(req) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
  if (isRateLimited(ip)) return NextResponse.json({ error: 'Too many requests.' }, { status: 429 });

  let body;
  try { body = await req.json(); } catch { return NextResponse.json({ error: 'Invalid request.' }, { status: 400 }); }

  const name       = clean(body.name);
  const phone      = clean(body.phone);
  const email      = clean(body.email)      || null;
  const age        = body.age               ? parseInt(body.age, 10) : null;
  const concern    = clean(body.hairConcern) || null;
  const coupon     = clean(body.couponCode)?.toUpperCase() || null;
  const query      = clean(body.query) || null;
  const attr       = body.attribution ?? {};

  /* Validate */
  const errors = [];
  if (!name || name.length < 2)           errors.push('Full name is required.');
  if (!phone)                             errors.push('Mobile number is required.');
  else if (!/^[\d\s+\-()]{7,15}$/.test(phone)) errors.push('Enter a valid mobile number.');
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push('Enter a valid email.');
  if (age !== null && (isNaN(age) || age < 10 || age > 100)) errors.push('Age must be 10–100.');
  if (errors.length) return NextResponse.json({ errors }, { status: 422 });

  try {
    await dbConnect();

    /* Duplicate check — same phone in last 24 hours */
    const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
    const dup = await Lead.findOne({ phone, createdAt: { $gt: oneDayAgo } });
    if (dup) return NextResponse.json({ error: 'A request with this number was already submitted. Our team will contact you shortly.' }, { status: 409 });

    /* Insert */
    const newLead = await Lead.create({
      name, phone, email, age, hair_concern: concern, coupon_code: coupon, query,
      gclid: clean(attr.gclid) || null,
      gbraid: clean(attr.gbraid) || null,
      wbraid: clean(attr.wbraid) || null,
      utm_source: clean(attr.utm_source) || null,
      utm_medium: clean(attr.utm_medium) || null,
      utm_campaign: clean(attr.utm_campaign) || null,
      utm_term: clean(attr.utm_term) || null,
      utm_content: clean(attr.utm_content) || null
    });

    return NextResponse.json({ success: true, id: newLead._id }, { status: 201 });
  } catch (err) {
    console.error('[/api/leads]', err);
    return NextResponse.json({ error: 'Something went wrong. Please try again or call us.' }, { status: 500 });
  }
}
