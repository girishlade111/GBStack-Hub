# GBStack Hub — Girish Lade's Portfolio

A modern, single-page personal portfolio and project hub for **Girish Lade**, built with Next.js 15 App Router, TypeScript, Tailwind CSS and shadcn/ui. Showcases projects, skills and an AI-powered tool-niche suggester.

## Features

- **Hero + About sections** — Animated, editorial-style landing for the portfolio owner
- **Featured Projects** — Curated project cards with descriptions, images and links
- **GitHub Integration** — Server-fetched latest public repositories of `girishlade111` (revalidated hourly)
- **AI Tool Suggester** — Interactive Genkit + Gemini AI flow that analyzes tech trends and suggests profitable niches for new developer tools
- **Interactive Skills Showcase** — Organized by domain (Frontend, UI/UX, AI, Backend)
- **Contact Form** — Validated with React Server Actions (Zod schema)
- **Responsive Design** — Mobile-first, works on all screen sizes

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS, shadcn/ui |
| Icons | Lucide React |
| AI | Google Genkit + Gemini API (`src/ai/flows`) |
| Validation | Zod |
| Deployment | Firebase App Hosting (`apphosting.yaml`) |

## Project Structure

```
src/
├── ai/                 # Genkit AI flows (Gemini)
│   ├── genkit.ts
│   └── flows/          # e.g. suggest-profitable-ai-tools
├── app/                # Next.js App Router
│   ├── page.tsx        # Home page (hero, projects, skills, contact)
│   ├── actions.ts      # Server actions (contact form)
│   ├── layout.tsx
│   └── globals.css
└── components/
    ├── sections/       # hero, about, skills, projects, ai-suggester, contact
    ├── ui/             # shadcn/ui primitives
    ├── header.tsx
    └── footer.tsx
```

## Quick Start

```bash
git clone https://github.com/girishlade111/GBStack-Hub.git
cd GBStack-Hub
npm install
npm run dev
# open http://localhost:9002
```

### Environment Variables

The AI suggester requires a Gemini API key:

```
GEMINI_API_KEY=your-gemini-api-key
```

Without it, the AI tool-suggester section will fail gracefully; the rest of the site works normally.

## Deploy Notes

- Designed for Firebase App Hosting (see `apphosting.yaml`).
- Uses React Server Actions and Genkit AI flows — **not statically exportable**; requires a Node runtime.
- For Netlify/Vercel: deploy as a standard Next.js SSR app with `GEMINI_API_KEY` set.

---

Built by Girish Lade — [ladestack.in](https://ladestack.in)
