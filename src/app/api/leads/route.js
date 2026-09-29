import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

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

  const name = clean(body.name);
  const phone = clean(body.phone);
  const email = clean(body.email) || null;
  const age = body.age ? parseInt(body.age, 10) : null;
  const concern = clean(body.hairConcern) || null;
  const coupon = clean(body.couponCode)?.toUpperCase() || null;
  const query = clean(body.query) || null;
  const attr = body.attribution ?? {};

  /* Validate */
  const errors = [];
  if (!name || name.length < 2) errors.push('Full name is required.');
  if (!phone) errors.push('Mobile number is required.');
  else if (!/^[\d\s+\-()]{7,15}$/.test(phone)) errors.push('Enter a valid mobile number.');
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push('Enter a valid email.');
  if (age !== null && (isNaN(age) || age < 10 || age > 100)) errors.push('Age must be 10–100.');
  if (errors.length) return NextResponse.json({ errors }, { status: 422 });

  try {
    /* Create table if not exists */
    await sql`CREATE TABLE IF NOT EXISTS leads (
      id SERIAL PRIMARY KEY, name TEXT NOT NULL, phone TEXT NOT NULL,
      email TEXT, age INTEGER, hair_concern TEXT, coupon_code TEXT, query TEXT,
      gclid TEXT, gbraid TEXT, wbraid TEXT,
      utm_source TEXT, utm_medium TEXT, utm_campaign TEXT, utm_term TEXT, utm_content TEXT,
      status TEXT NOT NULL DEFAULT 'new',
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )`;

    /* Duplicate check — same phone in last 24 hours */
    const dup = await sql`SELECT 1 FROM leads WHERE phone=${phone} AND created_at > NOW()-INTERVAL '24 hours' LIMIT 1`;
    if (dup.rowCount > 0) return NextResponse.json({ error: 'A request with this number was already submitted. Our team will contact you shortly.' }, { status: 409 });

    /* Insert */
    const result = await sql`INSERT INTO leads
      (name,phone,email,age,hair_concern,coupon_code,query,gclid,gbraid,wbraid,utm_source,utm_medium,utm_campaign,utm_term,utm_content)
      VALUES (${name},${phone},${email},${age},${concern},${coupon},${query},
        ${clean(attr.gclid) || null},${clean(attr.gbraid) || null},${clean(attr.wbraid) || null},
        ${clean(attr.utm_source) || null},${clean(attr.utm_medium) || null},${clean(attr.utm_campaign) || null},
        ${clean(attr.utm_term) || null},${clean(attr.utm_content) || null})
      RETURNING id`;

    return NextResponse.json({ success: true, id: result.rows[0].id }, { status: 201 });
  } catch (err) {
    console.error('[/api/leads]', err);
    return NextResponse.json({ error: 'Something went wrong. Please try again or call us.' }, { status: 500 });
  }
}
