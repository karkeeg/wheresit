# WhereSit Developer Documentation

This document is internal and for our development team only. It explains the code structure, tech stack, file organization, important conventions, and how to work on the project.

---

## Project Overview

WhereSit is a Next.js app built with modern tooling and reusable UI components to provide a clean and scalable architecture. The codebase follows a modular and component-driven structure.

---

# Tech Stack

### **Frameworks & Core**

- Next.js 14.2.22 (App Router)
- React 18.3.1
- TypeScript
- Nodemailer

### **Styling & Components**

- TailwindCSS
- shadcn/ui components
- Lucide React
- React Icons

### **Bundling & Tooling**

- pnpm
- PostCSS
- ESLint + Prettier

---

# 📁 Project Folder Structure

```
WhereSit
├── .git                # Version control
├── .next               # Build output (ignore)
├── node_modules        # Dependencies
├── public/             # Static assets (images, video, icons)
├── src/
│   ├── app/            # Next.js App Router Pages
│   │   ├── api/        # API Routes
│   │   │   └── mail/   # Email sending logic
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx    # Homepage
│   ├── components/
│   │   ├── landing/    # Landing page section components
│   │   │   ├── Feature.tsx
│   │   │   ├── GroupSharing.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Landing.tsx
│   │   │   ├── Support.tsx
│   │   │   └── Walkthrough.tsx
│   │   ├── layout/     # Layout components
│   │   │   ├── Footer.tsx
│   │   │   └── Header.tsx
│   │   └── ui/         # Reusable UI components (Button, Input, Card)
│   ├── lib/            # Utilities/helpers/functions
├── components.json     # shadcn config
├── next.config.ts      # Next.js settings
├── tsconfig.json       # TypeScript config
├── package.json
├── pnpm-lock.yaml
```

---

# Important Folders Explained

## **src/app/**

This contains the App Router entry and global styles.

### **src/app/api/**

Contains API route handlers.

- `/api/mail`: Handles email sending for early access requests using Nodemailer.

- `page.tsx` ⇒ main homepage.
- `layout.tsx` ⇒ shared layout for the entire app.
- `globals.css` ⇒ Tailwind & global styles.

## **src/components/landing/**

All sections of the landing page are separate components for readability and reusability:

- Hero
- Feature
- GroupSharing
- Support
- Walkthrough
- Landing
- Usecase

Each can be edited or replaced independently.

## **src/components/layout/**

Common shared layout components:

- Header
- Footer

## **public/**

All images, icons, video.

- Example: `/hero-right-side-ring.gif`

> Rule: Never store assets inside components. Keep them in `public/`.

---

# How to Run Project

```
pnpm install
pnpm dev
```

Or if using npm:

```

npm run dev
```

Project runs at:

```
http://localhost:3000
```

# End of Documentation
