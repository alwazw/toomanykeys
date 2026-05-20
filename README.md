# 🔑 Too Many Keys

**One Key, Zero Pit Stops.**

![Branding](https://img.shields.io/badge/Engine-OmniRoute-0070f3)
![License](https://img.shields.io/badge/License-MIT-22c55e)

## 🏎️ Overview
**Too Many Keys (TMK)** is a high-level UX and governance platform designed to aggregate multiple free-tier AI API keys into a single, high-performance **Universal Master Key ($M_U$)**.

By wrapping the **OmniRoute** engine, TMK manages the complex "plumbing" of API rotation, rate-limit detection, and hierarchical mapping, allowing developers to maximize their daily quotas with zero downtime.

---

## 🛠️ Architecture: The Hierarchical Relay
Too Many Keys uses a unique 3-tier mapping system:
1.  **Individual Keys ($G_n, A_1, \dots$):** Raw assets from providers (Gemini, Anthropic, OpenAI).
2.  **Provider Master Keys ($M_{provider}$):** Consolidated assets per provider for focused throughput.
3.  **Universal Master Key ($M_U$):** The single gateway token that intelligently routes requests across the entire M-Key relay.

---

## ✨ Strategic Value-Add Features
- **Analogy-Driven UI:** Visual monitoring of "Distance Caps" (Quota) vs. "Speed Caps" (RPM).
- **Bitcoin-Grade Security:** AES-256-GCM encryption at rest for all credentials.
- **Dashboard Mirror:** Real-time comparison of raw provider limits vs. your aggregated performance.
- **Community Pool (V2):** Donate unused free quotas to a communal reserve and earn priority status.
- **Steroid Export:** Generate configs for local LiteLLM, Open Router, or OmniRoute use.

---

## 🚀 Streamlined Installation

### **Quick Start (Automated)**
The fastest way to get TMK running is via the included installation script:
\`\`\`bash
./install.sh
\`\`\`

### **Manual Installation**
1.  **Enter the web directory:** \`cd web\`
2.  **Install dependencies:** \`npm install\`
3.  **Database Migration:** \`npx prisma db push\`
4.  **Ignite the Engine:** \`npm run build && npm run start\`

---

## 🔒 Security Policy
TMK takes security seriously. All API keys are encrypted using **AES-256-GCM** before being stored in the database. Raw keys never touch the frontend and are decrypted only within the protected service layer for relaying.

© 2024 Too Many Keys. High-Performance AI Governance.
