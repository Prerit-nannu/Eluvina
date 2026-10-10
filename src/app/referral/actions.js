'use server'
import crypto from 'crypto';
import clientPromise from '@/lib/mongodb';

export async function generateReferralCodeAction(name, phone, email, location) {
  try {
    if (!name || !phone) {
      return { success: false, error: 'Name and Phone Number are required.' };
    }

    // 1. Clean the inputs
    const rawPhone = phone.trim().replace(/[^0-9]/g, ''); 

    if (!rawPhone || rawPhone.length < 10) {
      return { success: false, error: 'Please enter a valid 10-digit mobile number.' };
    }

    // 2. Combine into a deterministic string
    const deterministicString = `${rawPhone}`;

    // 3. Hash using SHA-256
    const hash = crypto.createHash('sha256').update(deterministicString).digest('hex');

    // 4. Extract first 6 chars
    const code = hash.substring(0, 6).toUpperCase();

    // 5. Save or update in MongoDB
    const client = await clientPromise;
    const db = client.db('eluvina_aesthetics');
    const collection = db.collection('referral_partners');

    const existingCode = await collection.findOne({ code });

    if (existingCode) {
      // Update details if code exists
      await collection.updateOne(
        { code },
        { $set: { name, email: email || '', location: location || '' } }
      );
    } else {
      // Insert new record
      await collection.insertOne({
        code,
        name,
        phone,
        location,
        email: email || '',
        createdAt: new Date()
      });
    }

    return { success: true, code };
  } catch (error) {
    console.error('Error in generateReferralCodeAction:', error);
    return { success: false, error: 'An unexpected error occurred.' };
  }
}
