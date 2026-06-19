# droidconKE 2026 — Home Redesign / Rebrand Plan

> Status: **Planning** · Last updated: 2026-06-18 · Scope: Landing page first, then propagate the design language to other pages.

This is a **rebrand**, not just a home-page reshuffle: new logo, new color system, new display type, new image treatment, and a rounded-card layout. The current stack already supports it cleanly (Next 15 + Tailwind `darkMode:'class'` + custom theme context), so the work is mostly **design-token swaps + component restyling**, not a re-platform.

---

## 1. Design sources

| Source                   | Reference                                                                                                  |
| ------------------------ | ---------------------------------------------------------------------------------------------------------- |
| Figma — preview (light)  | https://www.figma.com/proto/Sg0b9eoovsehO4mFoaECZ3/Rebrand?node-id=201-16&starting-point-node-id=201%3A16  |
| Figma — preview (dark)   | https://www.figma.com/proto/Sg0b9eoovsehO4mFoaECZ3/Rebrand?node-id=216-917&starting-point-node-id=201%3A16 |
| Full-page mockup (light) | [docs/design/light.png](./light.png)                                                                       |
| Full-page mockup (dark)  | [docs/design/dark.png](./dark.png)                                                                         |
| Combined half view       | [docs/design/combined-half.png](./combined-half.png)                                                       |

> ⚠️ Figma **proto** links are auth-gated and cannot be inspected programmatically. The font name(s) must be read from the Figma **Inspect** panel by hand (see Blockers).

---

## 2. New design assets

All in [`public/images/new-design/`](../../public/images/new-design/):

| Asset                                                                                                                                                                                     | Use                                                              |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| [logo-light.png](../../public/images/new-design/logo-light.png) / [logo-dark.png](../../public/images/new-design/logo-dark.png)                                                           | New logo — bright-green `con` with circle/arc motif (navbar)     |
| [droidcon_icon.png](../../public/images/new-design/droidcon_icon.png)                                                                                                                     | Green mascot/icon for hero                                       |
| [beyond-stack-light.png](../../public/images/new-design/beyond-stack-light.png) / [beyond-stack-dark.png](../../public/images/new-design/beyond-stack-dark.png)                           | "BEYOND STACKS" headline — solid + outline treatment             |
| [kenyatta-types.png](../../public/images/new-design/kenyatta-types.png)                                                                                                                   | Halftone KICC cone (Event Types section)                         |
| [android254.png](../../public/images/new-design/android254.png)                                                                                                                           | Halftone/dot-pattern photo (Community Partners)                  |
| [exhibition.png](../../public/images/new-design/exhibition.png) · [pannels.png](../../public/images/new-design/pannels.png) · [speakers.png](../../public/images/new-design/speakers.png) | New lime-on-blue Event Type icon cards                           |
| [footer-city.png](../../public/images/new-design/footer-city.png)                                                                                                                         | City-skyline footer illustration with embedded "Get your ticket" |

---

## 3. Design language changes

| Element        | Current                           | New                                                          |
| -------------- | --------------------------------- | ------------------------------------------------------------ |
| Logo           | `droidcon` flat                   | Bright-green `con` mark                                      |
| Primary accent | Cyan `#00E2C3` + orange `#FF6E4D` | **Electric lime green** (`~#1FFF4F`)                         |
| Blue           | `#000CEB` headings/buttons        | Same blue, used as **big filled cards**                      |
| Display type   | Montserrat bold                   | **Rauschen B** (heavy grotesque), solid + **outline**        |
| Images         | Plain photos                      | **Halftone / dot-pattern** overlays                          |
| Layout         | Stacked sections                  | **Rounded card system** + stat cards (6TH, 2ND, 200+, 3000+) |
| Footer         | Gradient block                    | **City skyline** illustration                                |

### Confirmed decisions (2026-06-18)

- **Colors:** replace fully — lime green + blue become the system; **retire cyan & orange**.
- **Scope:** plan only for now (no code yet).
- **Halftone images:** use provided PNGs **as-is** (no dynamic CSS overlay).

---

## 4. Section-by-section gap analysis

Home renders in [pages/index.tsx](../../pages/index.tsx): Banner → About → EventTypes → Sponsor CTA → SponsorsList → Gallery → Organizers.

| New section                                    | Current file                                                                                                                  | Work                                                                    |
| ---------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| Hero "BEYOND STACKS" + meta bar                | [components/home/Banner.tsx](../../components/home/Banner.tsx)                                                                | **Rebuild** — display type, outline text, green mascot, meta/filter bar |
| About + stat cards                             | About block in [pages/index.tsx](../../pages/index.tsx)                                                                       | **Restyle** → blue card + green stat cards                              |
| Event Types + KICC halftone                    | [components/home/EventTypes.tsx](../../components/home/EventTypes.tsx)                                                        | **Restyle** — new icons + halftone building                             |
| Tiered sponsors                                | [components/home/SponsorsList.tsx](../../components/home/SponsorsList.tsx) · [Sponsor.tsx](../../components/home/Sponsor.tsx) | **Restyle** tier grouping + labels                                      |
| Past events gallery                            | [components/home/Gallery.tsx](../../components/home/Gallery.tsx)                                                              | **Light restyle** (rounded, spacing)                                    |
| Community Partners / Android254 / Kotlin Kenya | [components/home/Organizers.tsx](../../components/home/Organizers.tsx)                                                        | **Restyle** → blue cards                                                |
| Skyline footer                                 | [components/layouts/components/Footer.tsx](../../components/layouts/components/Footer.tsx)                                    | **Rebuild** with skyline asset                                          |
| Navbar (new logo + links)                      | [components/layouts/components/NavBar.tsx](../../components/layouts/components/NavBar.tsx)                                    | **Update** logo + accent colors                                         |

---

## 5. Phased build order

- **Phase 0 — Tokens & font (foundation).** Update palette in [tailwind.config.js](../../tailwind.config.js) (lime green system accent, keep `primary` blue, drop cyan/orange + `accent-2`/`secondary-2`); add rounded-card `borderRadius` scale; wire new fonts via `next/font`, replacing the Google `<link>` tags in [pages/\_document.js](../../pages/_document.js) and the `--font-family` / `--font-slab` vars in [styles/globals.css](../../styles/globals.css) (note: `--font-slab` is currently mis-pointed at Montserrat — fix it); update `.btn-*` / `.title` utility classes.
- **Phase 1 — Global chrome.** NavBar (new logo) + Footer (skyline). Appears on every page → fastest visible win, validates tokens.
- **Phase 2 — Hero.** Rebuild Banner.
- **Phase 3 — Body sections.** About/stat-cards → EventTypes → Sponsors → Gallery → Organizers.
- **Phase 4 — Polish.** Place halftone PNGs, dark-mode pass vs [dark.png](./dark.png), responsive QA.
- **Phase 5 — Propagate.** Apply tokens + chrome to Sessions / Speakers / About / Sponsors pages.

---

## 6. Fonts

- **Display: Rauschen B** — sans-serif grotesque by Philipp Herrmann / Out of the Dark (2021). Commercial/licensed (not on Google Fonts); self-hosted via `next/font/local`.
- **Font files received** ✅ — `docs/design/Rauschen B Font-20260527T105301Z-3-001.zip`, containing:
  - `Rauschen-BBook.otf`, `Rauschen-BBook.woff`, `Rauschen-BBook.woff2`
  - Only one weight present: **Book**. `.woff2` is ready for web.
  - ⚠️ Open item: the "BEYOND" headline reads heavy — confirm whether the design uses **Book + outline treatment** or needs a heavier cut not in this zip.
  - To wire up: extract `.woff2`/`.woff` into `public/fonts/`, load via `next/font/local` (Phase 0), then remove the raw `.zip` from the repo.
- **Body font:** TBD — confirm from Figma whether body text is also Rauschen or a separate face.

---

## 7. Tech context

Next.js 15.2.2 · TypeScript · Tailwind 3.3.5 (`darkMode: 'class'`) · custom `ThemeContext` (localStorage key `droidcon_theme`) · no component library. Tokens centralized in [tailwind.config.js](../../tailwind.config.js); global utility classes in [styles/globals.css](../../styles/globals.css).
