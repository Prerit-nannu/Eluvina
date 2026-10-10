'use server'
import crypto from 'crypto';
import clientPromise from '@/lib/mongodb';

export async function generateReferralCodeAction(name, dob, email) {
  try {
    if (!name || !dob) {
      return { success: false, error: 'Name and Date of Birth are required.' };
    }

    // 1. Clean the inputs
    const rawFirstName = name.split(' ')[0].trim().toLowerCase().replace(/[^a-z]/g, '');
    const rawDob = dob.trim().replace(/[^0-9]/g, ''); 

    if (!rawFirstName || !rawDob) {
      return { success: false, error: 'Invalid name or DOB format.' };
    }

    // 2. Combine into a deterministic string
    const deterministicString = `${rawFirstName}${rawDob}`;

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
      // Update name and email if code exists
      await collection.updateOne(
        { code },
        { $set: { name, email: email || '' } }
      );
    } else {
      // Insert new record
      await collection.insertOne({
        code,
        name,
        dob,
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
