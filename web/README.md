# Too Many Keys

One Key, Zero Pit Stops.

## Overview
Too Many Keys is a high-level UX and governance platform that aggregates multiple free-tier AI API keys to bypass rate limits and maximize daily quotas. It acts as a sophisticated wrapper around the OmniRoute orchestration engine.

## Key Features
- **Hierarchical Key Mapping:**  \rightarrow M_{provider} \rightarrow M_U$.
- **Bitcoin-Grade Security:** AES-256-GCM encryption for all stored credentials.
- **Smart Round-Robin:** Automatic rotation upon rate limit detection.
- **Community Pool:** Donate unused free quota to a communal reserve.
- **"Steroid" Export:** Generate configs for LiteLLM, Open Router, and OmniRoute.

## Tech Stack
- **Frontend:** Next.js, Tailwind CSS, Framer Motion.
- **Backend:** Prisma (PostgreSQL), NextAuth.js.
- **Infrastructure:** Neon.tech.

## Getting Started
1. Install dependencies in the `web` directory: `npm install`.
2. Set up your `.env` file with `DATABASE_URL` and `ENCRYPTION_KEY`.
3. Push the schema: `npx prisma db push`.
4. Start the dev server: `npm run dev`.
