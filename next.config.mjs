/** @type {import('next').NextConfig} */

// Define all the mandatory environment variables our application requires
const requiredEnvs = ['MONGODB_URI', 'GMAIL_USER', 'GMAIL_APP_PASSWORD'];

for (const env of requiredEnvs) {
  if (!process.env[env]) {
    throw new Error(`Application cannot start. Missing mandatory environment variable: ${env}\n`);
  }
}

const nextConfig = {};

export default nextConfig;
