# Vaishnavi Sunil Pawar — Portfolio

A modern, dark-themed personal portfolio built with **React + Vite**, **Tailwind CSS**, and **Framer Motion**.

## Tech stack

- **React 18** + **Vite 5**
- **Tailwind CSS** (custom dark palette, glassmorphism)
- **Framer Motion** (section animations, hover effects, transitions)

## Features

- Dark theme with purple accent palette
- Sticky navbar with mobile menu
- Hero with large profile image, role, and CTAs
- About, Skills (progress bars + badges), Projects (glass cards)
- Education, Achievements (publications, awards, certifications)
- Contact form UI (frontend only) + contact links
- Fully responsive (mobile-first)
- SEO meta tags and favicon

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Project structure

```
src/
├── components/
│   ├── ui/           # GlassCard, SectionHeading, AnimatedSection
│   ├── sections/     # Hero, About, Skills, Projects, Education, Achievements, Contact
│   ├── Navbar.jsx
│   └── Footer.jsx
├── data/
│   └── portfolioData.js   # Resume data, skills, projects, etc.
├── utils/
│   └── animations.js
├── App.jsx
├── main.jsx
└── index.css
```

## Customization

- **Profile image:** Replace `public/avatar-placeholder.svg` with your photo (or update `portfolioData.avatar`).
- **Content:** Edit `src/data/portfolioData.js` for bio, projects, skills, education, contact, etc.
