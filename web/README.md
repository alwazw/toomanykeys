# 📦 TMK Core Architecture

Welcome to the internal engine of **Too Many Keys**. This directory contains the Next.js App Router source, Prisma schema, and the Security logic.

### 📁 Directory Structure
- **`/src/lib/aggregator`**: The `KeyRotator` engine.
- **`/src/lib/security`**: AES-256-GCM Encryption logic.
- **`/src/components/animations`**: Framer Motion visualizers.
- **`/src/app/dashboard`**: Governance & Monitoring UI.

### 🛠️ Developer Commands
- `npm run build`: Optimize for production.
- `npm run start`: Deploy the production server.
- `npx prisma generate`: Update the database client.
