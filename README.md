# Adarsh Singh — Portfolio Website

A minimal, craft-driven developer portfolio built with modern React, Tailwind CSS, and shadcn/ui components.

Inspired by modern design engineering sensibilities: warm & tech minimalism, clean typography pairings (Geist & Instrument Serif), and crisp 1px borders.

---

## 🎨 Visual System & Highlights

- **Aesthetic**: Tech minimalism with editorial warmth (Geist, Geist Mono, Instrument Serif).
- **Theming**: Flawless Dark & Light mode toggle with anti-flicker script and persistent state.
- **Reading Width**: Optimized single-column container (`max-w-3xl`) for maximum legibility on mobile, tablet, and wide desktop displays.
- **Interactive Primitives (shadcn/ui)**:
  - `Tabs`: Dynamic project filtering (`all`, `enterprise`, `open source`).
  - `Cards`: 1px bordered containers with hover lift and arrow indicators.
  - `Dialog`: Deep-dive modal views for system architecture breakdowns and technical essays without page reloads.
  - `Toast`: Minimalist feedback notification for 1-click email copy.
  - `Badge`: Semantic pill badges with monospace metadata (`[Jan 2026]`, `RPA`, `React`).
- **Live Status Indicator**: Pulsing green dot badge (`InfoSec Intern @ Titan Company Ltd`).

---

## 🛠️ Tech Stack

- **Framework**: React 19
- **Bundler**: Vite 7
- **Styling**: Tailwind CSS 3.4
- **Primitives**: shadcn/ui (`cva`, `clsx`, `tailwind-merge`)
- **Icons**: Lucide React
- **Typography**: Geist (Sans), Geist Mono (Code/Metadata), Instrument Serif (Quotes & Accents)

---

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/
│   │   ├── badge.jsx       # Semantic & monospace badges
│   │   ├── button.jsx      # Button & link primitives
│   │   ├── card.jsx        # Minimal 1px border card system
│   │   ├── dialog.jsx      # Accessible modal overlays
│   │   ├── tabs.jsx        # Category switchers
│   │   └── toast.jsx       # Action toast notifications
│   ├── Contact.jsx         # Big editorial email & social links
│   ├── Experience.jsx      # InfoSec vertical timeline & verified certificate
│   ├── Hero.jsx            # Bio, profile avatar & live status
│   ├── InteractivePile.jsx # Physics-enabled draggable curiosity desk & sound FX
│   ├── Kit.jsx             # Categorized tech stack & verified credentials
│   ├── Navbar.jsx          # Monogram logo & theme toggle
│   ├── Notes.jsx           # Technical essays with reader modal
│   └── Projects.jsx        # Project showcases with deep-dive modal
├── data/
│   ├── portfolioData.js    # Consolidated profile & project data
│   └── pileItems.js        # Desk curiosity items & SVG paths
├── lib/
│   ├── sound.js            # Web Audio API sound synthesizer
│   └── utils.js            # twMerge & clsx utility (cn)
├── App.jsx                 # App root with ToastProvider
├── index.css               # Design tokens & semantic CSS variables
└── main.jsx                # React mount entry
```

---

## 🚀 Development & Build

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev

# Run ESLint check
npm run lint

# Production build
npm run build
```

---

© 2026 Adarsh Singh. All rights reserved.
