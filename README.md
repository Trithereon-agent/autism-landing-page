# Autism Strengths Landing Page

> **"What Makes Autism Great"** — An engaging, accessible, and neurodiversity-affirming landing page celebrating autistic strengths, cognitive diversity, and genuine human connection.

[![Accessibility: WCAG 2.1 AA](https://img.shields.io/badge/Accessibility-WCAG%202.1%20AA-success.svg)](#accessibility--inclusion)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](#license)
[![Zero Dependencies](https://img.shields.io/badge/Dependencies-Zero%20Build%20Step-green.svg)](#tech-stack)

---

## 🌟 Overview

Autism is not a deficit to cure; it is a profound and necessary variation in human cognition. From razor-sharp pattern recognition to uncompromising honesty, intense sensory joy, and hyperfocused innovation, autistic individuals shape and enrich every facet of society.

**autism-landing-page** is built from the ground up to reflect neurodiversity-affirming principles, high sensory comfort, and complete accessibility.

---

## ✨ Key Features

### 1. 🌿 Sensory-Comfort "Calm Mode" & Dark/Light Themes
- **Calm Mode**: Switches to soothing sage green tones, muted contrast, reduced motion, and softer visual hierarchy to prevent sensory overwhelm.
- **Dark & Light Modes**: Seamless toggle with high contrast ratios ensuring effortless readability.
- **System Preference Detection**: Automatically detects and respects `prefers-reduced-motion` and `prefers-color-scheme`.

### 2. ⚡ Core Superpowers
Six deep-dive cards showcasing distinct cognitive advantages:
- **Hyperfocus & Deep Mastery**
- **Precision & Anomaly Detection**
- **Radical Honesty & Integrity**
- **First-Principles Innovation**
- **Sensory Richness & Empathy**
- **Passionate Advocacy & Fairness**

### 3. 🔍 Interactive Strengths Matrix
An interactive filterable matrix categorized by:
- *All Areas*
- *Career & Innovation*
- *Thinking Style*
- *Relationships & Values*
- *Creativity & Arts*

Each item includes an interactive modal exploration view with real-world applications.

### 4. 💬 Voices That Changed The World
An interactive carousel highlighting neurodivergent and autistic visionaries:
- **Dr. Temple Grandin** — Animal Behaviorist & Author
- **Sir Anthony Hopkins** — Academy Award-Winning Actor & Composer
- **Greta Thunberg** — Climate Activist
- **Dr. Nick Walker** — Neurodiversity Scholar & Educator
- **Satoshi Tajiri** — Creator of Pokémon

### 5. 🔄 Outdated Stereotype vs. Real Superpower (3D Flip Cards)
Interactive 3D cards that dismantle outdated deficit stereotypes and reframe them into recognized strengths:
- *"Obsessive Interests"* ➔ **Encyclopedic Mastery**
- *"Too Blunt / Literal"* ➔ **Radical Truth & Authentic Respect**
- *"Rigid Routines"* ➔ **Architectural Reliability & Workflows**

### 6. 💌 Neurodiversity Appreciation Wall
A community message board where visitors can share notes of appreciation for autistic colleagues, loved ones, or themselves.
- Supports category tagging (Ingenuity, Honesty, Focus, Creativity, Neurodiversity).
- Fully persistent via browser `localStorage`.
- Immediate UI feedback with accessible live announcements.

### 7. 💡 Instant Spark of Insight
An on-demand inspiration banner generating curated reflections on neurodiversity and autistic thinking.

---

## ♿ Accessibility & Inclusion

- **Skip Navigation Link**: Allows keyboard and screen reader users to jump straight to main content.
- **Semantic HTML5**: Full ARIA landmark structure (`header`, `main`, `section`, `nav`, `footer`).
- **Screen Reader Announcements**: `aria-live="polite"` region for dynamic state updates (modes, carousels, inspiration banners).
- **Standalone Vector SVGs**: All icons and the neurodiversity infinity emblem are rendered inline as crisp SVGs with accessible titles.

---

## 🛠 Tech Stack

- **HTML5**: Semantic, accessible structure.
- **CSS3**: Modern CSS variables, flexbox, CSS grid, 3D perspective transforms, and media queries.
- **JavaScript (ES6+)**: Pure vanilla JS with zero external build tools, libraries, or frameworks.

---

## 🚀 Quick Start

### Option 1: Open Directly
Simply clone the repository and open `index.html` in any modern web browser:
```bash
git clone https://github.com/<your-username>/autism-landing-page.git
cd autism-landing-page
open index.html # macOS
xdg-open index.html # Linux
start index.html # Windows
```

### Option 2: Run with a Local Server
Using Python:
```bash
python3 -m http.server 3000
# Open http://localhost:3000 in your browser
```

Using Node.js:
```bash
npx serve .
# Or install http-server:
npx http-server -p 3000 .
```

---

## 📁 Project Structure

```text
autism-landing-page/
├── index.html       # Semantic markup and structure
├── styles.css       # Design system, themes (Calm/Dark/Light), responsive styling
├── app.js           # Interactive state management, carousel, wall, filters
├── .gitignore       # Standard Node.js gitignore rules
└── README.md        # Documentation and project overview
```

---

## 🤝 Contributing

Contributions, stories, and suggestions are welcome! Please ensure all contributions maintain:
1. Neurodiversity-affirming, non-pathologizing language.
2. High accessibility and WCAG contrast compliance.
3. Sensory comfort best practices.

---

## 📄 License

Released under the [MIT License](LICENSE).
