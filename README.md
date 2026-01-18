# Adri Sabik Muhana - Portfolio

A modern, responsive portfolio website built with **Next.js 16**, **React 19**, **Tailwind CSS v4**, and **Velite** for content management.

![Next.js](https://img.shields.io/badge/Next.js-16.1.2-black?logo=next.js)
![React](https://img.shields.io/badge/React-19.2.3-61DAFB?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38B2AC?logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)

## ✨ Features

- **Bento Grid Layout** — Modern card-based homepage design
- **MDX Content** — Type-safe content management with Velite
- **Dynamic Project Pages** — SSG with `generateStaticParams()` for performance
- **Responsive Design** — Mobile-first approach with glassmorphism styling
- **Smooth Animations** — Framer Motion for scroll reveals and transitions
- **SEO Optimized** — Dynamic metadata generation for all pages

## 🛠️ Tech Stack

| Category   | Technology              |
| ---------- | ----------------------- |
| Framework  | Next.js 16 (App Router) |
| UI Library | React 19                |
| Styling    | Tailwind CSS v4         |
| Content    | Velite (MDX)            |
| Animation  | Framer Motion           |
| Icons      | Lucide React            |
| Components | Radix UI                |

## 📁 Project Structure

```
├── content/              # MDX content files
│   ├── projects/         # Project case studies
│   └── blog/             # Blog posts (coming soon)
├── src/
│   ├── app/              # Next.js App Router pages
│   ├── components/       # React components
│   │   ├── animation/    # Animation wrappers
│   │   ├── bento/        # Bento grid modules
│   │   ├── projects/     # Project-related components
│   │   ├── shared/       # Shared components (Dock, MDX, etc.)
│   │   └── ui/           # Base UI components
│   ├── lib/              # Utility functions
│   ├── styles/           # Global CSS
│   └── types/            # TypeScript types
├── .docs/                # Project documentation
├── .velite/              # Generated content (gitignored)
└── public/               # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.20+ or 20.3+
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/adrisabik/portofolio-adrisabik.git

# Navigate to the project
cd portofolio-adrisabik

# Install dependencies
npm install
```

### Development

```bash
# Start development server (runs Velite + Next.js concurrently)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📝 Content Management

This project uses **Velite** for type-safe content management. Content is written in MDX format.

### Adding a New Project

1. Create a new `.mdx` file in `content/projects/`
2. Add the required frontmatter:

```mdx
---
slug: my-project
title: My Project
description: A brief description
industry: Tech Industry
category: enterprise
techStack:
  - Flutter
  - Firebase
highlights:
  - Feature 1
  - Feature 2
featured: false
year: "2024"
---

## The Context

Your project description here...
```

3. The content will be automatically picked up by Velite on the next build or in dev mode.

### Available Categories

- `enterprise`
- `supply-chain`
- `community`
- `accessibility`
- `lab`
- `productivity`

## 🎨 Design System

The project uses a custom design system defined in `src/styles/globals.css`:

- **Colors**: Custom accent colors (blue, purple, green)
- **Typography**: Inter (sans) + JetBrains Mono (mono)
- **Effects**: Glassmorphism, text gradients, smooth animations

## 📄 Documentation

Detailed documentation is available in the `.docs/` folder:

- **Product Specs**: PRD, project catalog, CV reference
- **Technical Specs**: Architecture, design system
- **Implementation**: Phased development roadmap

## 🧪 Scripts

| Command          | Description                          |
| ---------------- | ------------------------------------ |
| `npm run dev`    | Start dev server with Velite watcher |
| `npm run build`  | Build for production                 |
| `npm start`      | Start production server              |
| `npm run lint`   | Run ESLint                           |
| `npm run velite` | Manually build Velite content        |

## 📦 Key Dependencies

### Runtime
- `next` - React framework
- `react` / `react-dom` - UI library
- `framer-motion` - Animations
- `@radix-ui/*` - Accessible UI primitives
- `lucide-react` - Icons

### Development
- `velite` - Content management
- `tailwindcss` - Styling
- `typescript` - Type safety
- `eslint` - Linting

## 📜 License

This project is private and not open for public use.

---

Built with ❤️ by [Adri Sabik Muhana](https://github.com/adrisabik)
