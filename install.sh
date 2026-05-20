#!/bin/bash

# Too Many Keys - Automated Installation Script
# "One Key, Zero Pit Stops."

echo "🚀 Starting Too Many Keys installation..."

# 1. Check Requirements
echo "🔍 Checking requirements..."
command -v node >/dev/null 2>&1 || { echo >&2 "❌ Node.js is required but not installed. Aborting."; }
command -v npm >/dev/null 2>&1 || { echo >&2 "❌ npm is required but not installed. Aborting."; }

# 2. Setup Web Directory
if [ -d "web" ]; then
    echo "📂 Found web directory, installing dependencies..."
    cd web
    npm install
else
    echo "❌ web directory not found. Please run this script from the project root."
fi

# 3. Environment Configuration
if [ ! -f ".env" ]; then
    echo "📝 Creating .env from template..."
    cat <<ENV > .env
DATABASE_URL="postgresql://user:password@localhost:5432/neondb"
ENCRYPTION_KEY="too-many-keys-256-bit-secure-key"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-base64-secret-here"
GOOGLE_CLIENT_ID="placeholder"
GOOGLE_CLIENT_SECRET="placeholder"
GITHUB_ID="placeholder"
GITHUB_SECRET="placeholder"
ENV
    echo "⚠️  Please update web/.env with your actual DATABASE_URL (Neon.tech recommended)."
else
    echo "✅ .env already exists."
fi

# 4. Database Setup
echo "🏗️  Generating Prisma Client..."
npx prisma generate

echo "--------------------------------------------------"
echo "✅ Installation Complete!"
echo "--------------------------------------------------"
echo "Next Steps:"
echo "1. Update web/.env with your Neon PostgreSQL URL."
echo "2. Run 'npx prisma db push' to setup your schema."
echo "3. Start the engine: 'npm run dev'"
echo "--------------------------------------------------"
