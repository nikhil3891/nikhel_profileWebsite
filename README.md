# Nikhel Portfolio Website

Personal portfolio website for **Nikhel Tiwaari** built with Next.js App Router.

It showcases experience, projects, skills, contact details, and includes a downloadable resume.

## Tech Stack

- `Next.js 16` (App Router)
- `React 19`
- `TypeScript`
- `Tailwind CSS 3`
- `MongoDB + Mongoose` (contact data storage)
- `Nodemailer` (email notification from contact form)

## Key Features

- Single-page portfolio sections:
  - Hero
  - About
  - Experience
  - Projects
  - Skills
  - Contact
- Contact form API (`/api/contact`) with:
  - request validation
  - DB persistence
  - email notification
- Artistic but lightweight UI motion:
  - reveal-on-scroll sections
  - staggered card animations
  - subtle hero glow motion
  - low-cost CSS button sheen effect
- Resume download button from:
  - `public/Nikhel_Tiwariy_Resume.pdf`

## Project Structure

```text
nikhel_profilewebsite/
├─ app/
│  ├─ api/
│  │  └─ contact/
│  │     └─ route.ts            # POST contact API
│  ├─ components/               # UI sections
│  │  ├─ Navbar.tsx
│  │  ├─ Hero.tsx
│  │  ├─ About.tsx
│  │  ├─ Experience.tsx
│  │  ├─ Projects.tsx
│  │  ├─ Skills.tsx
│  │  ├─ Contact.tsx
│  │  └─ Footer.tsx
│  ├─ globals.css               # global styles + animation utilities
│  ├─ layout.tsx                # root layout + metadata
│  └─ page.tsx                  # homepage composition
├─ lib/
│  ├─ mongodb.ts                # DB connection cache
│  └─ models/
│     └─ Contact.ts             # Mongoose contact schema
├─ public/
│  ├─ Nikhel_Tiwariy_Resume.pdf # downloadable resume
│  └─ *.svg                     # static assets
├─ .env.local.example
├─ package.json
└─ README.md
```

## Environment Variables

Create a local env file:

```bash
cp .env.local.example .env.local
```

Set these values in `.env.local`:

- `MONGODB_URI` = MongoDB connection string
- `EMAIL_USER` = Gmail sender address
- `EMAIL_PASS` = Gmail App Password (not your normal Gmail password)
- `EMAIL_TO` = your receiving email

## Run Locally

Install dependencies:

```bash
npm install
```

Start dev server:

```bash
npm run dev
```

If Turbopack has issues on your machine, use webpack mode:

```bash
npm run dev:webpack
```

Open: [http://localhost:3000](http://localhost:3000)

## Build for Production

```bash
npm run build
npm run start
```

## How Contact Flow Works

1. User submits form in `app/components/Contact.tsx`.
2. Frontend sends POST request to `app/api/contact/route.ts`.
3. API validates required fields.
4. API connects to MongoDB via `lib/mongodb.ts`.
5. Data is saved using `lib/models/Contact.ts`.
6. API attempts to send email via Nodemailer.
7. API responds with success/failure message.

> Note: if email sending fails, form data can still be saved in MongoDB.

## Deployment Notes

### Vercel

- Keep framework preset as **Next.js**
- Do not add custom catch-all rewrite routes in `vercel.json` for this app
- Add all required environment variables in Vercel project settings

### Render

Deploy as **Web Service** (not Static Site):

- Build Command: `npm install && npm run build`
- Start Command: `npm run start`
- Publish Directory: _leave empty_ (not required for Next.js Web Service)

## Customization Guide

- Update profile details:
  - `app/components/Hero.tsx`
  - `app/components/About.tsx`
  - `app/components/Experience.tsx`
  - `app/components/Projects.tsx`
  - `app/components/Skills.tsx`
  - `app/components/Footer.tsx`
- Update SEO metadata:
  - `app/layout.tsx`
- Update theme/animations:
  - `app/globals.css`
- Replace resume:
  - keep filename as `public/Nikhel_Tiwariy_Resume.pdf`
  - or update the download link in `Hero.tsx`

## Troubleshooting

- **`Please define MONGODB_URI in .env.local`**
  - Ensure `.env.local` exists in project root and restart dev server.
- **Gmail `535 Username and Password not accepted`**
  - Use Gmail App Password and verify `EMAIL_USER` / `EMAIL_PASS`.
- **Turbopack cache/internal errors**
  - Try `npm run dev:webpack`.
- **Vercel 404 after deploy**
  - remove problematic custom rewrites and redeploy.
