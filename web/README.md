# Too Many Keys - Frontend/Backend

This directory contains the Next.js application for the Too Many Keys platform.

## Configuration
Ensure you have a .env file with the following variables:
- DATABASE_URL: Your PostgreSQL connection string.
- ENCRYPTION_KEY: A 32-character key for AES-256 encryption.
- NEXTAUTH_SECRET: Secret for session security.

## Commands
- npm run build: Create production build.
- npm run start: Start production server.
- npx prisma db push: Sync schema with database.
