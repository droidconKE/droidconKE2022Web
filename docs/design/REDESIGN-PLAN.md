# droidconKE 2026 — Home Redesign / Rebrand Plan

> Status: **Planning** · Last updated: 2026-06-18 · Scope: Landing page first, then propagate the design language to other pages.

This is a **rebrand**, not just a home-page reshuffle: new logo, new color system, new display type, new image treatment, and a rounded-card layout. The current stack already supports it cleanly (Next 15 + Tailwind `darkMode:'class'` + custom theme context), so the work is mostly **design-token swaps + component restyling**, not a re-platform.

---

## 0. Branching & workflow

> 🌿 **`feat/home-redesign-plan` is the central integration branch for the rebrand.**
>
> - **All** redesign sub-PRs (font, tokens, components, etc.) target **`feat/home-redesign-plan`** — **not** `dev`.
> - Branch new redesign work **off** `feat/home-redesign-plan`.
> - We merge `feat/home-redesign-plan` → `dev` **once, when the whole redesign is approved**, so everything lands together.
> - Same strategy in both repos (droidconKE + flutterconKE).

---

## 1. Design sources

### Original rebrand

| Source                   | Reference                                                                                                  |
| ------------------------ | ---------------------------------------------------------------------------------------------------------- |
| Figma — preview (light)  | https://www.figma.com/proto/Sg0b9eoovsehO4mFoaECZ3/Rebrand?node-id=201-16&starting-point-node-id=201%3A16  |
| Figma — preview (dark)   | https://www.figma.com/proto/Sg0b9eoovsehO4mFoaECZ3/Rebrand?node-id=216-917&starting-point-node-id=201%3A16 |
| Full-page mockup (light) | [docs/design/light.png](./light.png)                                                                       |
| Full-page mockup (dark)  | [docs/design/dark.png](./dark.png)                                                                         |
| Combined half view       | [docs/design/combined-half.png](./combined-half.png)                                                       |

### Revised landing page

Landing page only. Some copy is shortened and some sections are smaller than the original rebrand.

| Source                  | Reference                                                                         |
| ----------------------- | --------------------------------------------------------------------------------- |
| Figma — revised (light) | https://www.figma.com/proto/utGjna7GtDBOfpy0pBdDgY/Updated-Designs?node-id=1-291  |
| Figma — revised (dark)  | https://www.figma.com/proto/utGjna7GtDBOfpy0pBdDgY/Updated-Designs?node-id=55-746 |
| Full-page mockup        | _pending — export to `docs/design/revised-{light,dark}.png`_                      |

> ⚠️ Figma **proto** links cannot be inspected programmatically — this is a format limit, not a permissions one. A proto paints its frames into a canvas via JavaScript, so fetching the URL returns an empty app shell regardless of whether the link is public. **Always export frames to PNG in `docs/design/`**; that is the only way the design reaches code review. The font name(s) must likewise be read from the Figma **Inspect** panel by hand (see Blockers).

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

| Element      | Current                           | New                                                          |
| ------------ | --------------------------------- | ------------------------------------------------------------ |
| Logo         | `droidcon` flat                   | Bright-green `con` mark                                      |
| Brand accent | Cyan `#00E2C3` + orange `#FF6E4D` | **Electric green** `#00FF4F`                                 |
| Primary      | `#000CEB` headings/buttons        | **Blue** `#0055FF` (used as **big filled cards**)            |
| Display type | Montserrat bold                   | **Rauschen B** (heavy grotesque), solid + **outline**        |
| Images       | Plain photos                      | **Halftone / dot-pattern** overlays                          |
| Layout       | Stacked sections                  | **Rounded card system** + stat cards (6TH, 2ND, 200+, 3000+) |
| Footer       | Gradient block                    | **City skyline** illustration                                |

### Color tokens (from Figma variable export)

Source exports committed at `public/docs/colors/` (`Droidcon-1` = green, `Droidcon-2` = blue). Full Tailwind-style ramps — map straight into `tailwind.config.js`:

| Step | **Green** (brand accent) | **Blue** (primary)   |
| ---- | ------------------------ | -------------------- |
| 50   | `#EDFFF1`                | `#EDF6FF`            |
| 100  | `#D5FFE1`                | `#D6EAFF`            |
| 200  | `#AEFFC6`                | `#B5DBFF`            |
| 300  | `#70FF9B`                | `#83C6FF`            |
| 400  | `#2BFD6B`                | `#48A7FF`            |
| 500  | `#00FF4F` ◀ accent      | `#1E83FF`            |
| 600  | `#00C03C`                | `#0666FF`            |
| 700  | `#00962F`                | `#0055FF` ◀ primary |
| 800  | `#06752A`                | `#0842C5`            |
| 900  | `#076025`                | `#0D3C9B`            |

**Neutrals & dark mode** (not in the export — inferred from the mockups): text/ink `#20201E`, white `#FFFFFF`, muted `#707070`, surface `#F5F5F5`; dark-mode background near-black `#0A0A0A` / `#000000` with the green/blue accents popping.

### Confirmed decisions (2026-06-18)

- **Colors:** replace fully — **green `#00FF4F` + blue `#0055FF`** become the system; **retire cyan & orange**. Use the full ramps above as Tailwind color scales.
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

> 📌 **Font wiring is tracked in #125.** The licensed font is **not** stored in this public repo — it lives in the private repo **[droidconKE/private-fonts](https://github.com/droidconKE/private-fonts)** and is **injected at build time** into gitignored `public/fonts/`, then loaded via `@font-face`.

- **Display: Rauschen B** — sans-serif grotesque by Philipp Herrmann / Out of the Dark. The official droidcon brand display font; commercial/licensed. Web format (`.woff2`) is fetched from the private repo at build (auth via `FONT_REPO_TOKEN` → `gh auth token` → free fallback). See #125.
  - Only the **Book** weight is available so far. ⚠️ The heavy "BEYOND" headline ideally needs a **Bold/Black** cut from the droidcon brand kit.
- **Body font:** TBD — confirm from Figma whether body text is also Rauschen or a separate face.

---

## 7. Tech context

Next.js 15.2.2 · TypeScript · Tailwind 3.3.5 (`darkMode: 'class'`) · custom `ThemeContext` (localStorage key `droidcon_theme`) · no component library. Tokens centralized in [tailwind.config.js](../../tailwind.config.js); global utility classes in [styles/globals.css](../../styles/globals.css).

---

## 8. Revised landing page (2026-08-13)

Landing page only — a delta on top of sections 1-7. Source: the **Revised landing page** Figma links in section 1.

### Assets

All in [`public/images/new-design/revised/`](../../public/images/new-design/revised/). All rasters are 2x with alpha.

| Asset                                                                                                                                                                | Placement                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| `rubik_39_s_cube/` (Spline scene)                                                                                                                                    | Hero — cube sits **behind** the "Beyond Stacks" text |
| [stacks.png](../../public/images/new-design/revised/stacks.png)                                                                                                      | "More Stacks. All Mobile." pill                      |
| [beyond-sessions.png](../../public/images/new-design/revised/beyond-sessions.png)                                                                                    | "Beyond the Sessions" card — image **right**         |
| [dev-days.png](../../public/images/new-design/revised/dev-days.png)                                                                                                  | "Developer Days" card — image **left** (mirrored)    |
| [new-footer-2.png](../../public/images/new-design/revised/new-footer-2.png)                                                                                          | Footer KICC halftone                                 |
| [droidcon-large-light.svg](../../public/images/new-design/revised/droidcon-large-light.svg) / [dark](../../public/images/new-design/revised/droidcon-large-dark.svg) | Footer wordmark, overlapping the KICC                |

**Retired:** `beyond-stack-light/dark.png` (hero lockup is now live gradient text) · `kenyatta-types.png` (KICC background dropped from Event Types) · `new-footer.png` (superseded by the 2x `new-footer-2.png`).

### Page structure

Nav → Marquee → Hero → Detail strip → About → 2026 Conf. Essentials → More Stacks pill → **Conf. Highlights** (new) → Sponsors → Past events → Community Partners → Footer.

| Change           | Detail                                                                                                    |
| ---------------- | --------------------------------------------------------------------------------------------------------- |
| Hero lockup      | Live gradient **text** (blue → pale → pink), not an image; green droid arc top-right                      |
| Hero subtitle    | Shortened to one line + "2 Days 1 Ticket."                                                                |
| Hero buttons     | Three → two (see CFP decision below)                                                                      |
| About copy       | Fully replaced — two short paragraphs; names PrideInn Azure Hotel and next.app devCon                     |
| About stats      | Borders → hairline dividers                                                                               |
| Event Types      | Renamed **2026 Conf. Essentials**; blue→green gradient card; KICC background removed                      |
| Conf. Highlights | **New section** — heading + ticket CTA, holding the Beyond the Sessions / Developer Days cards            |
| Sponsors         | Centered heading + "( THANKS TO OUR SPONSORS )"; tiers split by dotted green hairlines                    |
| Footer           | Gains Venue / Transport / Parking / Code of Conduct columns, social icons, "Powered By Codescape Limited" |

### Confirmed decisions (2026-08-13)

- **"Mobile", not "Android".** The design reads "Android developer conference" / "LARGEST ANDROID EVENT"; this is **overridden** — keep **Mobile** everywhere, per commits `3ce2197` and `1b39eff`.
- **CFP / Speakers: comment out, do not delete.** The **SUBMIT A TALK** hero button and the **Speakers** card in Conf. Essentials are commented out — both are needed again next year. Conf. Essentials therefore ships four cards: Panels, Workshops, Networking, Exhibitions.
- **7th edition is correct** — `7TH · ANNUAL`, `7TH DROIDCON EDITION`, and "7th edition" in the About copy. Supersedes the 6TH currently in code.
- **Fix the design's typos in code:** "Conf. Higlights" → **Conf. Highlights**; "Sponosrs" → **Sponsors**.
- **"2026", not "26'"** — sponsors heading is **Our 2026 Sponsors**. Resolves the light/dark mismatch in favour of the light frame.
- **Code of Conduct stays app-specific** (droidcon), not the Fluttercon one shown in the design. Shifting to fcke is a later, separate change.
- **Design is a design, not a content source.** Images, sponsor logos, and partner lists keep their **current** values and data sources; the design informs layout and styling only. Placeholder content in the frames (typesense ×3, the seven sample photos) is not to be copied.
- **Sponsor tiers:** row 1 **platinum**, row 2 **gold**, row 3 **everything else** ordered silver → bronze → snack (unknown tiers sort last). Rows are centre-biased — few sponsors centre rather than left-align.
- **The dark frame is a guide, not a spec.** Where light and dark disagree, treat it as a missed parity fix in the design, not an intentional removal — never drop an element just because the dark frame lacks it.

### Hero cube (Spline)

Driven straight off `@splinetool/runtime` in [Banner.tsx](../../components/home/Banner.tsx) — the `@splinetool/react-spline` wrapper is ESM-only with no `require` condition and will not resolve under Pages Router.

Facts read out of the published scene, not guessed:

- Motion is `start-once` / `runMode: Once` — one 30s pass off `start`, then it holds the end state forever.
- **The event system cannot restart it.** Re-emitting `start` does nothing once parked, and alternating `emitEvent` / `emitEventReverse` against the objects from `getSplineEvents()` did not revive it either. Both were tried and reverted. Note `emitEvent` fails **silently** on an unknown object name, so a no-op looks identical to a wrong target.
- What works: let the authored pass run (`CUBE_INTRO_MS`), then drive `findObjectByName('Cube').rotation.y` from a time-based `requestAnimationFrame` loop. Owes nothing to the scene's state machine. Speed is `CUBE_SPIN_DEG_PER_SEC`.
- The camera does not fit its canvas — at zoom 1 the cube is drawn at authored size and clipped. `setZoom(width / CUBE_ZOOM_REFERENCE)` keeps it whole and consistent across breakpoints.

⚠️ **Keep `pointer-events-none` on the cube container.** The scene ships orbit controls, not a click-to-spin: dragging rotates the camera with no reset, so a visitor can swing the cube out of frame permanently. Enabling interaction was tried and reverted.

⚠️ **Do not "optimise" with `app.stop()` when the cube scrolls out of view.** `stop()` halts events and the state machine as well as rendering, so `play()` returns a frozen cube — this was tried and reverted. `renderMode` is a load-time option only, so there is no gentler pause. The renderer therefore keeps running off-screen; the only real fix is unmounting the canvas entirely, at the cost of a re-init when it scrolls back.

Cost, measured: **546 KB gz** runtime chunk + 27 KB scene, lazily imported (~3.4× the rest of the site's JS), plus a possible 710 KB gz physics chunk. Skipped entirely for reduced-motion and non-WebGL clients.

### App icons & social preview

Both are generated from single square/cover sources — regenerate rather than hand-editing individual sizes. The flutterconKE repo takes the same treatment with its `flutter-square` / `flutter-cover` equivalents.

| Source                                                                             | Feeds                                                                                                                                                                    |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [dcke-square.png](../../public/images/new-design/revised/dcke-square.png) (2524²)  | `public/images/icons/` — android ×6, apple ×9 + 2 bare, favicon ×3, ms-icon ×4, multi-size `favicon.ico`, plus `public/images/icon.png` (also the sponsor-logo fallback) |
| [dcke-cover.png](../../public/images/new-design/revised/dcke-cover.png) (2400×800) | `og:image` + `twitter:image` in `pages/_document.js`, and the session-detail fallback                                                                                    |

The cover was exported at 4501px wide; it is **resized to 2400** because Twitter rejects `summary_large_image` above 4096px. Its 3:1 ratio is wider than OG's 1.91:1, so Facebook/Twitter centre-crop the top and bottom — keep key content vertically centred.

Brand colours that were still on the pre-rebrand palette and are now `#0055FF`: `manifest.json` `theme_color` (was `#ff6e4d`) and `background_color` (was `#7de1c3`), the `theme-color` meta, and `browserconfig.xml` `TileColor`.

### Dark-mode gotcha

`styles/globals.css` styles bare `p` and `a` with `@apply text-black dark:text-lighter-dark`. The `.dark p` selector is _more specific_ than a single utility class, so `text-white` / `text-primary` on a paragraph is overridden in dark mode. Cards whose background is a fixed brand colour in both themes (About blue, Beyond the Sessions blue, Developer Days green, the white More Stacks pill) must therefore pin the text with an explicit `dark:` variant — e.g. `text-black dark:text-black`.
