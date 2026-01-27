# Portfolio Perfection Challenge

> Transform a blank Next.js project into a polished, dark-mode-enabled portfolio — one step at a time.

**Stack:** Next.js 16 · Tailwind CSS v4 · TypeScript · React 19
**Design Reference:** v11 HTML (beige `#d0d0ce`, coral `#ff6f61`, teal `#84cec3`, dark mode)
**Repo:** [github.com/denescsaszar/portfolio](https://github.com/denescsaszar/portfolio)

---

## How This Works

1. Each step is a **focused task** — one thing at a time
2. You get the **what** (task), the **why** (reasoning), and **code snippets** (guidance)
3. You write the code, you commit, you push
4. Commit format: `step-XX: short description`
5. After each step: `npm run dev` → verify visually

---

## Color System

```
Light Mode                    Dark Mode (coming in step 12)
─────────────────────         ─────────────────────
Background:  #d0d0ce          Background:  #0e0e0e
Text:        #0f0f0f          Text:        #eaeaea
Muted:       #6b6b6b          Muted:       #9ca3af
Border:      #e5e5e5          Border:      #2a2a2a
Coral:       #ff6f61          Coral:       #ff6f61
Teal:        #84cec3          Teal:        #84cec3
Accent:      #111111          Accent:      #ffffff
```

---

## Progress

### Phase 1: Foundation

| #   | Step                                               | Commit    | Status |
| --- | -------------------------------------------------- | --------- | ------ |
| 00  | Project setup — Next.js, Tailwind v4, TypeScript   | `step-00` | ✅     |
| 01  | Clean the boilerplate — blank canvas               | `step-01` | ✅     |
| 02  | Design system — colors, typography, spacing in CSS | `step-02` | ✅     |

### Phase 2: Layout & Navigation

| #   | Step                                                 | Commit    | Status |
| --- | ---------------------------------------------------- | --------- | ------ |
| 03  | Navigation — fixed bar, DC logo, blur, mobile drawer | `step-03` | ✅     |
| 04  | Hero section — name, role, headline, CTAs            | `step-04` | ⬜     |

### Phase 3: Content Sections

| #   | Step                                               | Commit    | Status |
| --- | -------------------------------------------------- | --------- | ------ |
| 05  | ProjectCard component — bordered card with tags    | `step-05` | ⬜     |
| 06  | Projects section — grid of 3 project cards         | `step-06` | ⬜     |
| 07  | ChallengeCard component — problem/approach/outcome | `step-07` | ⬜     |
| 08  | Challenges section — grid of challenge cards       | `step-08` | ⬜     |
| 09  | About section — prose narrative + skills grid      | `step-09` | ⬜     |
| 10  | Contact section — CTAs + contact grid              | `step-10` | ⬜     |
| 11  | Footer — minimal centered footer                   | `step-11` | ⬜     |

### Phase 4: Dark Mode

| #   | Step                                               | Commit    | Status |
| --- | -------------------------------------------------- | --------- | ------ |
| 12  | ThemeProvider — React Context for dark/light state | `step-12` | ⬜     |
| 13  | ThemeToggle — wire up the nav button               | `step-13` | ⬜     |
| 14  | Dark mode CSS — variable swap + transitions        | `step-14` | ⬜     |
| 15  | Dark mode polish — verify every section            | `step-15` | ⬜     |

### Phase 5: Animations & Interactions

| #   | Step                                               | Commit    | Status |
| --- | -------------------------------------------------- | --------- | ------ |
| 16  | FadeIn component — scroll-triggered animations     | `step-16` | ⬜     |
| 17  | Wrap sections in FadeIn — staggered reveals        | `step-17` | ⬜     |
| 18  | Micro-interactions — hover states, link underlines | `step-18` | ⬜     |
| 19  | Hero animation — fade-in on page load              | `step-19` | ⬜     |

### Phase 6: Accessibility

| #   | Step                                             | Commit    | Status |
| --- | ------------------------------------------------ | --------- | ------ |
| 20  | Skip-to-content link                             | `step-20` | ⬜     |
| 21  | Focus styles — visible outlines for keyboard nav | `step-21` | ⬜     |
| 22  | ARIA labels — nav, buttons, links                | `step-22` | ⬜     |
| 23  | Reduced motion — respect user preference         | `step-23` | ⬜     |

### Phase 7: Responsive Design

| #   | Step                                        | Commit    | Status |
| --- | ------------------------------------------- | --------- | ------ |
| 24  | Mobile hero — fluid type, spacing           | `step-24` | ⬜     |
| 25  | Mobile cards — single column, touch targets | `step-25` | ⬜     |
| 26  | Mobile nav — test hamburger + drawer        | `step-26` | ⬜     |
| 27  | Tablet breakpoint — 2-column grids          | `step-27` | ⬜     |

### Phase 8: Case Studies

| #   | Step                                          | Commit    | Status |
| --- | --------------------------------------------- | --------- | ------ |
| 28  | Case study layout — shared template component | `step-28` | ⬜     |
| 29  | Google x Aldi case study page                 | `step-29` | ⬜     |
| 30  | Deutsche Bank case study page                 | `step-30` | ⬜     |
| 31  | Zalando case study page                       | `step-31` | ⬜     |
| 32  | Case study navigation — prev/next links       | `step-32` | ⬜     |

### Phase 9: Projects Page

| #   | Step                                         | Commit    | Status |
| --- | -------------------------------------------- | --------- | ------ |
| 33  | Projects page — full listing with categories | `step-33` | ⬜     |
| 34  | Project filtering — by category tags         | `step-34` | ⬜     |

### Phase 10: SEO & Performance

| #   | Step                                          | Commit    | Status |
| --- | --------------------------------------------- | --------- | ------ |
| 35  | Metadata — Open Graph, Twitter cards          | `step-35` | ⬜     |
| 36  | JSON-LD — structured data for Person schema   | `step-36` | ⬜     |
| 37  | Sitemap + robots.txt                          | `step-37` | ⬜     |
| 38  | Performance — font optimization, lazy loading | `step-38` | ⬜     |

### Phase 11: Polish

| #   | Step                           | Commit    | Status |
| --- | ------------------------------ | --------- | ------ |
| 39  | Custom 404 page                | `step-39` | ⬜     |
| 40  | Favicon + app icons            | `step-40` | ⬜     |
| 41  | Selection color styling        | `step-41` | ⬜     |
| 42  | Final Lighthouse audit + fixes | `step-42` | ⬜     |
| 43  | Deploy to Vercel               | `step-43` | ⬜     |

---

## File Structure (target)

```
portfolio/
├── app/
│   ├── globals.css              ← design system (Tailwind v4 @theme)
│   ├── layout.tsx               ← root layout, fonts, metadata
│   ├── page.tsx                 ← home (hero, projects, challenges, about, contact)
│   ├── not-found.tsx            ← custom 404
│   ├── robots.ts                ← SEO
│   ├── sitemap.ts               ← SEO
│   ├── projects/
│   │   └── page.tsx             ← all projects listing
│   └── case-studies/
│       ├── google-aldi/page.tsx
│       ├── deutsche-bank/page.tsx
│       └── zalando/page.tsx
├── components/
│   ├── Navigation.tsx           ← fixed nav, mobile drawer
│   ├── Footer.tsx               ← minimal footer
│   ├── ProjectCard.tsx          ← project display card
│   ├── ChallengeCard.tsx        ← problem/approach/outcome card
│   ├── FadeIn.tsx               ← scroll animation wrapper
│   ├── ThemeProvider.tsx        ← dark mode context
│   └── ThemeToggle.tsx          ← dark/light switch button
├── CHALLENGE.md                 ← this file
├── package.json
├── tsconfig.json
└── postcss.config.mjs
```

---

## Tech Decisions

| Decision   | Choice                        | Why                                                       |
| ---------- | ----------------------------- | --------------------------------------------------------- |
| Framework  | Next.js 16 (App Router)       | Server components, file-based routing, Vercel deploy      |
| Styling    | Tailwind CSS v4               | Utility-first, design tokens via `@theme`, no config file |
| Dark mode  | CSS variables + React Context | Variables swap instantly, Context persists preference     |
| Animations | IntersectionObserver          | No extra dependencies, respects reduced motion            |
| Typography | System font stack             | Fast loading, native feel, no font files to serve         |
| Deployment | Vercel                        | Zero-config Next.js hosting, preview deploys              |

---

## Commit Log

```
step-00: project setup with Next.js, Tailwind v4, TypeScript
step-01: clean boilerplate, blank canvas
step-02: design system — colors, typography, spacing
```
