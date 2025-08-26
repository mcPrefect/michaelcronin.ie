# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start the development server at localhost:3000
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

## Project Architecture

This is a Next.js 15 portfolio website using the App Router architecture. Key architectural decisions:

### Framework & Styling
- **Next.js 15** with App Router (`app/` directory structure)
- **Tailwind CSS** for styling with custom Wes Anderson-inspired color palette
- **Dark mode** implemented via CSS classes (`darkMode: "class"` in Tailwind config)
- **Custom fonts**: Geist Sans, Geist Mono, and Caveat (handwritten style)

### Component Structure
- **Client-side components** are marked with `"use client"` directive
- **Dark mode toggle** (`components/DarkModeToggle.js`) uses localStorage and system preferences
- **Reusable components** in `/components/` directory (DarkModeToggle, SkillsStrip, Tabs)
- **Data separation** with skill logos and other data stored in `/data/` directory

### Theming System
Custom CSS variables defined in `globals.css` for Wes Anderson theme:
- `--wes-yellow: #fcd581`
- `--wes-orange: #f0803c` 
- `--wes-brown: #63372C`
- `--wes-cream: #f8f1e7`
- `--wes-blue: #7da4a9`

### Special Features
- **Password-protected anniversary page** at `/anniversary` with hardcoded password "270924"
- **Image lightbox** using `yet-another-react-lightbox` library
- **Analytics** integration via `@vercel/analytics`
- **Skills showcase** with animated skills strip component

### File Organization
- `/app/` - Next.js App Router pages and layouts
- `/components/` - Reusable React components
- `/data/` - Static data files (skills.js contains skill logo filenames)
- `/public/` - Static assets organized by purpose (photos, projects, skills, anniversary)

### State Management
Uses React hooks (useState, useEffect) for local component state. No external state management library.

### Development Notes
- ESLint configured with Next.js core web vitals preset
- PostCSS configuration for Tailwind CSS processing
- Images stored in organized `/public/` subdirectories
- Anniversary page features complex animations, card flips, and multimedia content