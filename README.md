# David Naranjo · Portfolio

Personal portfolio of **David Naranjo**, Full Stack Developer from Medellín, Colombia.
Live site: **[naranjodavid.com](https://www.naranjodavid.com)**

Bilingual (ES/EN) single-page site with an interactive 3D hero: a cluster of logos with real-time physics that are pulled to the center and pushed around by the cursor.

## Tech stack

| Area | Tools |
| --- | --- |
| Framework | Next.js 16 (App Router), React 19, TypeScript |
| 3D | Three.js, React Three Fiber, Drei, Rapier (physics), Postprocessing (bloom) |
| Animation | GSAP + ScrollTrigger, Lenis smooth scroll, CSS scroll-driven animations |
| Email | Resend via a Next.js Server Action |
| Styling | CSS Modules with design tokens, light/dark theme |
| Tooling | ESLint 10 (flat config), Vercel Analytics |

## Features

- **Interactive 3D hero**: physics-based logo cluster with zero gravity, center attraction and a cursor-driven pusher.
- **Bilingual content**: every text lives in `db/info.json` as `[es, en]` pairs and switches at runtime.
- **Contact form**: server-side validation, HTML escaping, honeypot anti-spam and `reply-to` set to the sender. The API key never reaches the browser.
- **Projects gallery**: Development / Art toggle with image sliders.
- **Accessibility and SEO**: visible focus states, `prefers-reduced-motion` support, Open Graph and Twitter metadata.

## Getting started

Requirements: Node.js 24+.

```bash
npm install
cp .env.example .env.local   # then fill in the values
npm run dev                  # http://localhost:3000
```

### Environment variables

| Variable | Required | Description |
| --- | --- | --- |
| `RESEND_API_KEY` | Yes | API key from [resend.com/api-keys](https://resend.com/api-keys). |
| `CONTACT_TO_EMAIL` | Yes | Inbox that receives contact messages. Without a verified domain in Resend it must be your Resend account email. |
| `CONTACT_FROM_EMAIL` | No | Sender once a domain is verified, e.g. `David Naranjo <contact@naranjodavid.com>`. Defaults to `onboarding@resend.dev`. |

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Development server. Uses webpack because Turbopack dev loads Rapier's WASM module twice. |
| `npm run build` | Production build (Turbopack). |
| `npm run start` | Serve the production build. |
| `npm run lint` | Run ESLint. |

## Project structure

```
app/            Root layout, page and server actions (contact email)
views/          Page composition (HomePage)
sections/       Page sections: Header, Background, Home, About, Experience, Projects, Contact, Footer
components/     UI building blocks (Navbar, CanvasBg + 3D scene, forms, cards…)
helpers/        Reusable pieces: section title, image slider, custom cursor
layouts/        Providers, fonts and analytics
store/          Global context (language, project filter, cursor state)
db/             Site content: info.json (texts), images.json (projects and gallery)
styles/         Shared CSS modules
public/         Images and the 3D model (assets/codeModel.glb)
```

## Editing content

All copy is data-driven, so most updates don't touch components:

- **Texts, experience and skills**: `db/info.json`. Each string is an array `["Español", "English"]`.
- **Projects and About gallery**: `db/images.json`. Projects use `"type": "dev" | "art"`; any other value (e.g. `"hidden"`) hides the project.
- **Images**: add them under `public/images/` and reference them by path.

## Deployment

Deployed on [Vercel](https://vercel.com). Add `RESEND_API_KEY` and `CONTACT_TO_EMAIL` under **Project Settings → Environment Variables** before deploying.

## Contact

- Website: [naranjodavid.com](https://www.naranjodavid.com)
- LinkedIn: [david-naranjo](https://www.linkedin.com/in/david-naranjo/)
- GitHub: [NamuraCode](https://github.com/NamuraCode)
- Email: naranjo.david.1999@gmail.com
