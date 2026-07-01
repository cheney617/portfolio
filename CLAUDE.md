# CLAUDE.md

Guidance for AI assistants (and humans) working in this repository.

## What this is

A personal portfolio site for **Xin Chen** (陈昕), a product manager. It is a
single-page résumé/portfolio with a bilingual (中文 / English) UI, a light/dark
theme, per-project detail pages, and an MDX-powered blog.

Originally forked from [dillionverma/portfolio](https://github.com/dillionverma/portfolio)
(shadcn/ui + Magic UI on Next.js), but has since been heavily customized —
notably the data is **duplicated per-language** and the styling has moved to
Tailwind v4. Treat the README as historical; this file reflects the current state.

## Tech stack

- **Next.js 16** (App Router, React 19, React Strict Mode) — `src/app/`
- **TypeScript** (strict mode), path alias `@/*` → `src/*`
- **Tailwind CSS v4** — configured entirely in CSS (`src/app/globals.css`), **no `tailwind.config.ts`** despite `components.json` referencing one
- **shadcn/ui** (New York style, `src/components/ui/`) + **Magic UI** (`src/components/magicui/`)
- **motion** (Framer Motion successor) for animations
- **next-themes** for theming, **lucide-react** for icons
- **content-collections** (`@content-collections/*`) for type-safe MDX blog posts
- **Vercel** deployment target

## Commands

Package manager is **pnpm** (a `pnpm-lock.yaml` is committed; a stale
`package-lock.json` also exists — prefer pnpm).

```bash
pnpm install      # install deps
pnpm dev          # local dev server (http://localhost:3000)
pnpm build        # production build (runs content-collections codegen)
pnpm start        # serve production build
pnpm lint         # eslint
pnpm lint:fix     # eslint --fix
```

There is **no test suite** and **no type-check script** — rely on `pnpm build`
(which runs `tsc`/Next type-checking) and `pnpm lint` to validate changes.

## Project structure

```
content/                       # MDX blog posts (frontmatter schema in content-collections.ts)
content-collections.ts         # blog collection schema (zod) + MDX pipeline
public/                        # images, logos, SVGs, résumé PDFs (resume-zh.pdf / resume-en.pdf)
src/
  app/
    layout.tsx                 # root layout: Theme + Language + Tooltip providers, Navbar, FlickeringGrid
    page.tsx                   # home page — hero/about/work/education/skills/projects/hackathons/contact
    not-found.tsx
    opengraph-image.tsx        # OG image generation
    blog/
      page.tsx                 # paginated blog index (PAGE_SIZE = 5)
      [slug]/page.tsx          # individual post render
      opengraph-image.tsx
    projects/[slug]/
      page.tsx                 # static project detail route (generateStaticParams from PROJECTS)
      projects-data.ts         # bilingual per-project detail content (the PROJECTS record)
      detail-content.tsx       # client component rendering a project detail
  components/
    language-provider.tsx      # <LanguageProvider> + useLanguage() — zh/en, persisted to localStorage
    theme-provider.tsx         # next-themes wrapper
    navbar.tsx                 # fixed lang toggle + theme toggle + back-to-top
    project-card.tsx, timeline.tsx, icons.tsx, mode-toggle.tsx
    section/                   # home-page sections (work, projects, hackathons, contact)
    magicui/                   # Magic UI effects (blur-fade, dock, flickering-grid)
    mdx/                       # code-block + media-container for MDX rendering
    ui/                        # shadcn/ui primitives; ui/svgs/ = tech logo components
  data/
    resume.tsx                 # ★ primary content source — DATA_ZH, DATA_EN, SHARED
    use-data.ts                # useData() hook — returns DATA_EN or DATA_ZH by current lang
  lib/
    utils.ts                   # cn() classname helper, formatDate()
    pagination.ts              # blog pagination helpers
    remark-code-meta.ts        # remark plugin for code-block metadata
  mdx-components.tsx           # custom MDX component overrides
```

## Key conventions

### Content lives in data files, not JSX

Almost all résumé/portfolio content is **data**, edited in two places:

1. **`src/data/resume.tsx`** — home-page content. Exports `SHARED` (language-agnostic
   fields: name, contact, education, navbar) spread into **`DATA_ZH`** and **`DATA_EN`**.
   Each language object carries `description`, `summary`, `skills`, `work`, `projects`,
   `hackathons`, and a `ui` block (section headings / button labels).
   `DATA` is exported as an alias of `DATA_ZH` for backward compatibility.
2. **`src/app/projects/[slug]/projects-data.ts`** — the `PROJECTS` record holding
   each project's full detail page. Here fields are typed as `Bi = { zh, en }` and
   resolved with the `t(bi, lang)` helper, rather than duplicated into two objects.

**When editing content, keep ZH and EN in sync.** A change to one language's `work`,
`projects`, `hackathons`, or `skills` almost always needs the matching edit in the
other. Project slugs in `resume.tsx` `projects[].href` (e.g. `/projects/subscription`)
must match keys in the `PROJECTS` record.

### Bilingual (i18n) pattern

- Language state comes from `useLanguage()` (`lang` is `"zh" | "en"`), defaulting to
  `zh`, then browser language, then `localStorage("lang")`.
- Components read data via **`useData()`** (`src/data/use-data.ts`), which returns the
  right `DATA_*` object. Any component consuming `useData()`/`useLanguage()` must be a
  Client Component (`"use client"`).
- Some shared fields (e.g. `education[].school`) are `string | { zh, en }`; render code
  guards with `typeof x === "string" ? x : x[lang]`. The `t()` helper in
  `projects-data.ts` does the same for the `Bi` type.
- The toggle in `navbar.tsx` flips `lang` and persists it.

### Theming

- Dark mode is driven by **`next-themes` with `attribute="data-theme"`** (not the
  default `class`). `defaultTheme="light"`.
- `globals.css` defines a matching custom variant:
  `@custom-variant dark (&:where([data-theme="dark"], [data-theme="dark"] *));`
  so Tailwind `dark:` utilities key off `[data-theme="dark"]`, **not** `.dark`.
- Colors are CSS variables mapped through `@theme inline` in `globals.css`. Use
  semantic Tailwind tokens (`bg-background`, `text-muted-foreground`, `border-border`,
  `bg-primary`, etc.) rather than hard-coded colors.

### Tailwind v4 specifics

- Configuration is CSS-first (`@import "tailwindcss"`, `@theme`, `@custom-variant`,
  `@plugin` in `globals.css`). Do **not** create a `tailwind.config.ts`.
- Uses v4 syntax such as `bg-linear-to-r` (not `bg-gradient-to-r`) and `size-*` utilities.
- `cn()` from `@/lib/utils` (clsx + tailwind-merge) is the standard way to compose classes.

### Styling / UI patterns

- Layout is a centered `max-w-2xl` column; sections use `BlurFade` for staggered
  entrance animation (a shared `BLUR_FADE_DELAY = 0.04` multiplied by an index).
- Use shadcn primitives from `@/components/ui` and Magic UI from `@/components/magicui`.
- Tech-stack logos are hand-written SVG React components under `components/ui/svgs/`.
- `<img>` is used directly in several places with `/* eslint-disable @next/next/no-img-element */`
  at the top of the file — follow the existing pattern rather than fighting the lint rule.

### Blog

- Posts are MDX files in `content/`. Frontmatter must satisfy the zod schema in
  `content-collections.ts` (`title`, `publishedAt`, `summary` required; `updatedAt`,
  `author`, `image` optional).
- Posts are imported from the virtual `content-collections` module (aliased to
  `.content-collections/generated`, which is gitignored and regenerated on build/dev).
- MDX rendering is customized via `src/mdx-components.tsx` (custom `pre`/`code`, `table`,
  `hr`, and a `MediaContainer` component).
- Blog index paginates at `PAGE_SIZE = 5` via `src/lib/pagination.ts`.

### Security headers

`next.config.mjs` sets `X-Content-Type-Options`, `X-Frame-Options: DENY`,
`Referrer-Policy`, and `Permissions-Policy` on all routes. `withContentCollections`
must remain the outermost config wrapper.

## Git workflow

- Default branch: `main`. Work happens on feature branches.
- Commit messages in this repo are frequently in Chinese and use Conventional-Commit
  prefixes (`feat:`, `fix:`, `refactor:`) — either language is fine; be descriptive.
- Push with `git push -u origin <branch>`. Do not open a PR unless explicitly asked.

## Gotchas

- **Two lockfiles** exist (`pnpm-lock.yaml` + `package-lock.json`); pnpm is authoritative.
- `components.json` points at `tailwind.config.ts`, but the file does not exist (Tailwind v4).
  If you run `npx shadcn add`, expect it to look for that config.
- LinkedIn URL and the résumé `Resume` link are wired through `SHARED.contact.social`
  in `resume.tsx`; update there, not in JSX.
- Résumé PDFs are language-specific: `/resume-zh.pdf` and `/resume-en.pdf` in `public/`.
- No environment variables are required to run the site locally.
