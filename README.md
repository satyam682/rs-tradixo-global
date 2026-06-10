# 🚢 RS Tradixo Global — Premium Agricultural Export Portal

> A state-of-the-art, high-performance, and responsive multi-lingual B2B web application for a premier agricultural import-export corporation strategically located near Mundra Port, Gujarat, India.

---

## 🌟 Key Features

### 1. 🌍 Comprehensive Multi-Lingual Engine (i18n)
* High-fidelity context-driven translation engine supporting **English (en)**, **Hindi (hi)**, **Gujarati (gu)**, and **Arabic (ar)**.
* Smooth locale switching with persistent user preference storage using HTML5 LocalStorage.
* Complete right-to-left (RTL) layout adjustment for Arabic users.

### 2. 📊 Interactive B2B Quote Calculator (FOB Estimates)
* Dynamic cost estimation tool for bulk import-export queries.
* Pre-configured calculations based on commodity type (Peanuts, Rice, Spices), grade specifications, packing requirements, and destination ports.

### 3. 🤖 TradixoBot — Intelligent Sourcing Assistant
* Context-aware rule-based conversational assistant designed to address high-volume trade questions instantly.
* Preloaded with comprehensive knowledge regarding:
  * **Product Specifications** (Grade, moisture, aflatoxin control)
  * **Shipping & Transit Times** (Maersk, Gulf express lanes, ASEAN routes)
  * **Digital Compliance** (IEC, FSSAI, APEDA, GST)
  * **Payment Terms** (Irrevocable L/C at Sight, advance T/T wire transfers)

### 4. 📱 Premium Responsive Mobile Layout
* A custom **sticky bottom navigation bar** on mobile and tablet viewports for effortless, application-like navigation.
* Dynamic **3-dot vertical menu dropdown** housing language options, live clock parameters, and call-to-actions.
* Floating WhatsApp support trigger shifted (`bottom-24` on mobile) to guarantee overlapping-free UI.

### 5. 🔍 Advanced Multi-Lingual SEO (SEOWrapper)
* Semantic-based header integration automatically syncing page title, keywords, and meta tags per language.
* Complete OpenGraph (og:title, og:locale, og:description) and Twitter Card tags optimized for high-quality social sharing previews on LinkedIn, WhatsApp, and Facebook.
* Tab-specific dynamic page naming (e.g. *SGS & FSSAI Certificates | RS Tradixo Global*).

---

## 🌾 Core Product Directory

We facilitate premium supply chain executions across the following key segments:
1. **🥜 Peanut Kernels:** Bold (Premium Size) and Java (Red Skin) varieties sourced from Gujarat's finest harvest lanes.
2. **🌾 Premium Rice:** Long-grain Aromatic Basmati and parboiled Non-Basmati (IR64, Swarna) varieties.
3. **🌶️ Pure Spices:** Sourced & processed under low temperature.
   * Kashmiri Red Chili (Deep red, mild heat)
   * Regular Red Chili (Balanced heat)
   * Cumin Seeds (High-thymol oil)
   * Kitchen King & Garam Masala custom blends.

---

## 🛠️ Technology Stack

* **Framework:** React 18 + TypeScript + Vite (lightning-fast Hot Module Replacement)
* **Styling:** Vanilla Tailwind CSS for flexible responsive layouts and smooth micro-animations.
* **Icons:** Lucide React for crisp, scalable vector graphics.

---

## 💻 Local Development Setup

Follow these simple instructions to launch the project locally:

### Prerequisites
* Ensure you have [Node.js](https://nodejs.org/) installed (v18.x or above recommended).

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/satyam682/rs-tradixo-global.git
   cd rs-tradixo-global
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   * Create a `.env.local` or copy the existing template:
   ```bash
   cp .env.example .env.local
   ```
   * Populate variables if using dynamic integrations (e.g., API keys).

4. **Launch Dev Server:**
   ```bash
   npm run dev
   ```
   * The app will spin up at `http://localhost:5173`.

5. **Build for Production:**
   ```bash
   npm run build
   ```

---

## 📂 Project Architecture

```
rs-tradixo-global/
├── public/                  # Static assets (Favicons, HD logos, spice assets)
├── src/
│   ├── components/          # Reusable UI & Layout Components
│   │   ├── Header.tsx       # Navbar, brand logo, desk clock & mobile nav bar
│   │   ├── Footer.tsx       # Unified footer & B2B credential highlights
│   │   ├── Hero.tsx         # Video splash screen, loading overlay & taglines
│   │   ├── AboutUs.tsx      # Legacy details, executive desk & key stats
│   │   ├── ProductCatalog.tsx # Grid system displaying categories & specifications
│   │   ├── ExportMarkets.tsx # Transit times, port maps & Incoterm calculators
│   │   ├── Certifications.tsx # Verified legal documentation display (APEDA, FSSAI)
│   │   ├── Chatbot.tsx      # Rules database, chat box UI & floating widget
│   │   └── SEOWrapper.tsx   # Dynamic meta-tag injector for search crawlers
│   ├── context/             # Global contexts (LanguageContext, Theme)
│   ├── data.ts              # Central JSON data model (products, specifications)
│   ├── translations.ts      # Multi-lingual copy dictionaries (EN, HI, GU, AR)
│   ├── types.ts             # TypeScript interface definitions
│   ├── index.css            # Tailwind directives & global utility layers
│   └── main.tsx             # Application entry point
├── package.json
└── tsconfig.json
```

---

## 📄 License

This project is licensed under the **Apache-2.0 License**. See the `LICENSE` metadata for details.
