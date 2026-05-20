#!/bin/bash

# Too Many Keys - Automated Ignition Script
# "One Key, Zero Pit Stops."

# 1. Dependency Check
echo "🔍 Checking System Requirements..."
command -v node >/dev/null 2>&1 || { echo >&2 "❌ Node.js required. Aborting."; }
command -v npm >/dev/null 2>&1 || { echo >&2 "❌ npm required. Aborting."; }

# 2. Automated Installation
echo "📂 Entering Core Engine (web)..."
if [ -d "web" ]; then
    cd web
    echo "🔋 Installing dependencies..."
    npm install
else
    echo "❌ Root 'web' directory not found."
fi

# 3. Environment Preparation
if [ ! -f ".env" ]; then
    echo "📝 Configuring Environment Security..."
    cat <<ENV > .env
DATABASE_URL="postgresql://neondb_owner:npg_oP0SUM8JrIwT@ep-divine-frog-aquoy7dg-pooler.c-8.us-east-1.aws.neon.tech/neondb?sslmode=require"
ENCRYPTION_KEY="too-many-keys-256-bit-secure-key"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-session-secret-here"
ENV
    echo "✅ Environment configured."
fi

# 4. Schema Ignition
echo "🏗️  Synchronizing Database Relay (Prisma)..."
npx prisma generate

echo "--------------------------------------------------"
echo "🏁 IGNITION COMPLETE!"
echo "--------------------------------------------------"
