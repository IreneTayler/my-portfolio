# My Portfolio

A responsive developer landing page built with Next.js, demonstrating frontend quality, backend API handling, and AI integration.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Nodemailer
- OpenAI API

## Features

- Responsive landing page with sections for About, Skills, Experience, Projects, AI demo, and Contact.
- API-backed contact form with server-side validation and error handling.
- Email delivery via Nodemailer with a copy sent to the user.
- AI integration using OpenAI to generate a short developer summary through a backend route.
- Loading, success, and error states on the frontend.

## How the form is implemented

- The contact form collects name, phone, email, and message.
- Frontend validation checks required fields, email format, and phone format.
- The form submits to `/api/send` using a POST request.
- The backend validates the payload again, then sends an email to the site owner and a copy to the user via Nodemailer (Gmail SMTP).
- Errors are surfaced to the user in real time, including network and server errors.

## How AI is used

- A separate backend API route at `/api/ai` forwards a prompt to OpenAI (`gpt-4o-mini`).
- The frontend requests a summary and renders the response into the page.
- This demonstrates secure server-side AI integration: the API key never reaches the client.
- AI tools were also used during development to generate component scaffolding, review code, and suggest Tailwind patterns.

## What was done manually

- Removed a security issue where email credentials were incorrectly exposed in `next.config.ts`.
- Cleaned up duplicate Tailwind classes and invalid utility classes (e.g., `w-100`).
- Added missing navigation links (Skills, AI) and uncommented social links in Hero and Footer.
- Fixed ESLint warnings (unused imports, missing hook dependencies).
- Removed old backup component files to keep the project structure clean.

## Run locally

1. Copy `.env.example` to `.env.local`.
2. Fill in your email and OpenAI credentials.
3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000).

## Deploy

This app uses Next.js API routes (`/api/send`, `/api/ai`), so it requires a server or serverless platform.

```bash
npm run build
npm start
```

Recommended platforms: **Vercel** (easiest for Next.js), **Railway**, or any Node.js host.

## Environment variables

- `EMAIL_USER` — SMTP sender account (Gmail address used by Nodemailer).
- `EMAIL_PASS` — SMTP password or app password.
- `EMAIL_TO` — recipient email address for the portfolio owner.
- `OPENAI_API_KEY` — OpenAI API key for the AI helper.

## Notes

- Form functionality is implemented server-side, not just as a mailto link.
- AI integration is routed through the backend, keeping the API key out of client code.
- The project is structured with reusable React components and clean section separation.
