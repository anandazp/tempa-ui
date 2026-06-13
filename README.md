# Tempa UI

A copy-paste UI component library built with [Astro](https://astro.build) and [Tailwind CSS v4](https://tailwindcss.com).

## Features

- **Astro-native components** — No JavaScript framework required. Each component is a plain `.astro` file.
- **Tailwind CSS v4** — Styled entirely with utility classes and a custom theme defined via `@theme`.
- **Copy-paste workflow** — Components are meant to be copied directly into your own Astro project.
- **Interactive elements** — Modal, Tabs, Sidebar, Alert dismiss, and Search use vanilla JavaScript with no external dependencies.
- **Responsive** — Mobile navigation, adaptive layouts, and responsive component variants.

## Components

| Component       | Variants                                                 |
| --------------- | -------------------------------------------------------- |
| **Button**      | `primary`, `outline`                                     |
| **Card**        | `vertical`, `horizontal`, `bordered`, `shadowed`         |
| **Alert**       | `solid`, `left-bordered`, `dismissible`                  |
| **Modal**       | sizes `sm`, `md`, `lg`                                   |
| **Tabs**        | configurable tab panels                                  |
| **Sidebar**     | `expanded`, `collapsed`                                  |
| **Breadcrumbs** | auto-linked trail                                        |
| **Mockup**      | `laptop`, `mobile`, `browser`                            |
| **Navbar**      | responsive navigation with search modal (Ctrl+K / Cmd+K) |

## Getting Started

```sh
npm install
npm run dev
```

The dev server starts at `http://localhost:4321`.

## Commands

| Command           | Action                             |
| ----------------- | ---------------------------------- |
| `npm run dev`     | Start local dev server             |
| `npm run build`   | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally   |
| `npm run astro`   | Run Astro CLI commands             |

## Usage

Copy any `.astro` file from `src/components/` into your project's `src/components/` directory. Import and use it in any Astro page or layout:

```astro
---
import Button from "../components/Button.astro";
---

<Button variant="primary">Click me</Button>
```

## Tech Stack

- **Astro** v6 — Static site generator
- **Tailwind CSS** v4 — Utility-first CSS framework
- **TypeScript** — Strict mode
- **Vanilla JavaScript** — All interactivity (no React, Vue, or Svelte)

## License

MIT
