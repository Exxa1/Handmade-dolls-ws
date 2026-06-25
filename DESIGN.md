# Zsuzsánna Hand-made — Design System & Brand Guide

A reusable reference for the visual identity of the **Zsuzsánna Hand-made** doll website,
extracted from the live codebase. Use it to keep the website, social media, business cards,
flyers, packaging, and any other materials consistent.

> **Source of truth:** This document is derived from `tailwind.config.js`,
> `assets/css/custom-tailwind.css`, `app.config.ts`, `nuxt.config.ts`, the Vue components,
> and the product photography. If the code changes, update this file.

---

## 1. Brand at a glance

| | |
|---|---|
| **Name / wordmark** | Zsuzsánna Hand-made |
| **Title / SEO name** | Zsuzsanna handmade dolls |
| **Maker** | Zsuzsánna (artist) |
| **Product** | Handmade Waldorf-style dolls, hand-knit dolls, felt wall hangings |
| **Price format** | Euro, written as a suffix — e.g. `120€` |
| **Facebook** | https://www.facebook.com/mesehely |
| **Instagram** | https://www.instagram.com/mesehely/ |
| **Social handle** | `@mesehely` ("mesehely" ≈ Hungarian for *fairy-tale workshop*) |
| **Site credit** | Website made by Áron Kuna |

**What the brand stands for:** lovingly handmade, natural materials, heirloom quality,
attention to detail, warmth, childhood wonder. Every piece is one-of-a-kind.

---

## 2. Logo & wordmark

- The logo is **typographic**, not an image: the words **"Zsuzsánna Hand-made"** set in the
  brand display font (Amatic SC).
- It appears **centered** in the header, directly under the navigation, and links home.
- Keep the accented **á** in "Zsuzsánna" — it is part of the identity.

**Recommendations for print/other media**
- Lockup options: stacked ("Zsuzsánna" over "Hand-made") for square formats, or one line for
  wide formats.
- Pair the wordmark with a small heart mark (see [Iconography](#7-iconography)) or a single
  doll silhouette as a secondary brand element.
- Always give the wordmark generous clear space; it is a light, airy typeface and needs room
  to breathe.

---

## 3. Color palette

The site uses a small, warm, earthy **working palette** driven by CSS variables (the "skin"
system), plus three full Tailwind color ramps for UI components.

### 3.1 Active working palette (use these first)

These are the colors actually applied across the live site. This is the core brand palette
for **all** media.

| Role | Name | HEX | RGB | Where it's used |
|---|---|---|---|---|
| Background | **Linen / Warm White** | `#FFF9F1` | `255, 249, 241` | Page background everywhere |
| Primary / dark | **Feldgrau** (green-grey) | `#586F6B` | `88, 111, 107` | Footer, primary "Get Me" button, review cards |
| Secondary / accent | **Peach / Apricot** | `#FCCEAF` | `252, 206, 175` | "See More" button |
| Text | **Black** | `#000000` | `0, 0, 0` | Body & heading text |
| Muted text | **Olive** | `#6E6414` | `110, 100, 20` | Secondary / muted text |
| Accent pop | **Heart Red** | `#B91C1C` | (Tailwind `red-700`) | Decorative heart on review cards |

```
Background  #FFF9F1   ▢ warm linen white
Primary     #586F6B   ▢ feldgrau green-grey
Secondary   #FCCEAF   ▢ soft peach / apricot
Text        #000000   ▢ black
Muted       #6E6414   ▢ olive
Accent      #B91C1C   ▢ heart red
```

**Pairing rules**
- White (`#FFFFFF`) text on Feldgrau (`#586F6B`) — primary buttons, footer, review cards.
- Black text on Peach (`#FCCEAF`) — secondary buttons.
- Black/olive text on Linen (`#FFF9F1`) — all body content.
- Use Heart Red sparingly, as a single emotional accent only.

### 3.2 Full Tailwind color ramps

Defined in `tailwind.config.js` for fine-grained UI work. Note the names below are the
literal names used in code.

**Feldgrau** — green-grey (brand primary family)
| 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|
| `#f6f7f7` | `#e0e7e5` | `#c1cecb` | `#9aaeaa` | `#748d87` | `#586f6b` | `#475a57` | `#3b4a48` | `#323d3b` | `#2c3533` | `#161d1c` |

**Tumbleweed** — warm terracotta/clay (used as the UI "gray")
| 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|
| `#faf5f2` | `#f4e9e0` | `#e7d1c1` | `#d4aa8e` | `#c88d6f` | `#bc7253` | `#ae6048` | `#914c3d` | `#753f37` | `#5f362f` | `#331a17` |

**Linen** — *(named "Linen" in code, but the ramp is actually a warm orange)*
| 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|
| `#fff9f1` | `#ffeed5` | `#fed8aa` | `#fdbc74` | `#fb953c` | `#f97716` | `#ea5c0c` | `#c2440c` | `#9a3612` | `#7c2f12` | `#431507` |

> ⚠️ **Naming quirk:** the `Linen` ramp is an orange scale; only its `50` value (`#fff9f1`)
> matches the actual linen background. Don't be misled by the name — for "linen" use `#FFF9F1`.

### 3.3 Nuxt UI role mapping (`app.config.ts`)

- **primary** → `Feldgrau`
- **gray** → `Tumbleweed`

This means form fields, default buttons, and other Nuxt UI components inherit the green-grey
+ terracotta scheme.

### 3.4 Alternate theme (`.theme-swiss`)

An optional theme variant defined in CSS but not the default. Documented for completeness:

| Variable | Value | HEX |
|---|---|---|
| text-base | `20, 0, 0` | `#140000` |
| text-muted | `145, 110, 20` | `#916E14` |
| background | `255, 255, 200` | `#FFFFC8` (pale yellow) |

---

## 4. Typography

**Primary typeface: [Amatic SC](https://fonts.google.com/specimen/Amatic+SC)**

- A tall, slim, hand-drawn display typeface — playful, crafty, warm. It carries the entire
  "handmade" personality of the brand and is applied **site-wide** (`font-amatic-sc` on the
  root layout).
- Weights loaded: **400 (Regular)** and **700 (Bold)**.
- Loaded via Google Fonts:
  `https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap`
- CSS stack: `'Amatic SC', sans-serif`

**Type scale in use (Tailwind classes → rem):**

| Element | Class | Size |
|---|---|---|
| Page H1 (error) | `text-4xl` | 2.25rem / 36px |
| Product name, doll price | `text-2xl` | 1.5rem / 24px |
| Nav links, error H2, form price | `text-xl` | 1.25rem / 20px |
| Footer credit | `text-sm` | 0.875rem / 14px |

Body copy on content pages uses the **Tailwind Typography (`prose`)** plugin for sensible
defaults, with H1s centered (`prose-h1:text-center`).

**Notes for print / other media**
- Because Amatic SC is light and condensed, it works best **large** (headlines, names, the
  wordmark). For long paragraphs or small print (addresses, legal text on a business card),
  pair it with a clean, neutral sans-serif (e.g. a humanist sans) for legibility.
- Suggested pairing: **Amatic SC** for headings/wordmark + a simple grotesque/humanist sans
  for body. Keep the handmade font as the personality, the body font as the workhorse.

---

## 5. UI components

### Header / navigation (`components/menu.vue`)
- Sticky top nav, `text-xl`, black text, bottom border, subtle `drop-shadow-sm`.
- Centered horizontal links: **Product List · Contact · About Me** + social icons (Facebook,
  Instagram).
- Centered wordmark beneath the links.
- Generous height (`h-24`) and spacing between links (`space-x-6`, `sm:space-x-16`).

### Footer (`components/footer.vue`)
- Full-width bar in **Feldgrau** (`#586F6B`) at 90% opacity, white text.
- Small, right-aligned credit line: "Website made by Áron Kuna".
- Large top margin separating it from content (`mt-24`).

### Buttons
Two button styles, both fixed width (`w-20`), `px-4 py-2`, with a `border`, and a hover that
drops opacity (`hover:bg-opacity-70`):

| Button | Background | Text | Purpose |
|---|---|---|---|
| **"Get Me"** (primary CTA) | Feldgrau `#586F6B` | White | Buy / contact about a doll |
| **"See More"** (secondary) | Peach `#FCCEAF` | Black | View product details |

### Review card (`components/content/review.vue`)
- Fixed width `w-64`, Feldgrau background, white text, **rounded corners** (`rounded-lg`).
- A solid **red heart** icon centered at the bottom edge.
- Reviewer name right-aligned beneath the quote.
- Generous internal padding (`px-8 pt-5`).

### Forms (`components/content/contactForm.vue`)
- Built with Nuxt UI form components (`UForm`, `UInput`, `USelectMenu`, `UTextarea`,
  `UCheckbox`, `UButton`), inheriting the Feldgrau/Tumbleweed theme.
- Vertical rhythm with `space-y-4`.
- Selected-product preview images are `rounded-lg`.

### Carousel (`components/content/Carousel.vue`)
- Product image carousel with **indicators** and gray prev/next **arrows** (arrows hidden on
  small screens, shown `lg:`).
- Portrait product images, roughly **3:4** ratio (e.g. 416×556, 224×300).

---

## 6. Layout & spacing

- **Centered, contained layout.** Main content is centered with a max width of **1400px**
  (`xl:max-w-[1400px]`).
- **Generous padding & whitespace** — e.g. `px-24`, `lg:px-48`, `pt-10`. The design breathes.
- **Product grid:** flex-wrap, centered, with **large gaps** between items
  (`gap-24`, `lg:gap-x-32`).
- **Rounded corners:** `rounded-lg` on cards and preview images.
- **Shadows:** kept subtle (`drop-shadow-sm` on nav only).
- **Responsive:** mobile-first; key breakpoints `sm`, `lg`, `xl`.

**Translating to print:** keep the same airy feel — wide margins, lots of negative space, one
clear focal image, content centered. Avoid dense, edge-to-edge layouts.

---

## 7. Iconography

- **Icon set:** [Heroicons](https://heroicons.com/) (via Nuxt UI, e.g.
  `i-heroicons-heart-solid`).
- **Signature mark:** a **solid heart** in red (`#B91C1C`) — the emotional accent of the brand,
  used on review cards. This heart is a good candidate for a small repeating brand motif on
  print materials.
- **Social icons:** custom raster icons for Facebook (`/fb.png`) and Instagram
  (`/instagram.png`), sized small (`w-5`).
- **Favicon:** `/favicon.ico`.

---

## 8. Imagery & photography direction

The product photography is central to the brand and follows a consistent style:

- **Natural light**, soft, shallow depth of field (blurred backgrounds).
- **Settings:** either nestled in **greenery / nature**, or on **textured neutral fabric**
  (linen, lace, cream knit).
- **Props:** dried/fresh flowers, natural textures — never plastic or synthetic-looking.
- **Palette of the photos:** warm and earthy — cream and linen backgrounds, dusty rose / mauve,
  burgundy, sage green, terracotta, with the dolls' natural-fiber clothing and warm hair tones.
- **Mood:** cozy, gentle, nostalgic, wholesome, storybook.
- **Format:** portrait orientation (~3:4), one doll/subject as the clear hero.

**Rules for new imagery (web, social, print):**
1. Shoot in natural light with a soft, neutral or natural backdrop.
2. Keep backgrounds uncluttered; the doll is always the hero.
3. Favor warm, muted, earthy tones — no harsh, saturated, or cold colors.
4. Include natural props (flowers, knit, wood, linen) to reinforce the handmade story.

---

## 9. Motion

- **Page transitions:** a gentle **fade + blur** between pages (`opacity` 0 + `blur(1rem)`),
  duration **0.1s**, `out-in` mode.
- Keep motion **soft and subtle** — quick, gentle fades rather than sharp or bouncy animation,
  matching the calm, handmade feel.

---

## 10. Voice & tone

Drawn from the site copy and customer reviews.

- **Warm, personal, first-person** from the maker. Examples on the site:
  - "Looking forward to your message"
  - "Thank you for your message — I will come back to you as soon as I can"
- **Heartfelt and grateful.** Reviews emphasize love, quality, detail, uniqueness, and natural
  materials ("such a special creation", "the quality that went into this doll", "attention to
  detail", "poured forth so much love").
- **Gentle and unhurried** — never salesy or aggressive.

**Tone keywords:** handmade · heartfelt · cozy · natural · one-of-a-kind · loving · gentle ·
heirloom · storybook.

**Copy do's:** speak as Zsuzsánna in the first person; thank the reader; describe materials and
craft; let warmth show.
**Copy don'ts:** hard sells, urgency/discount-spam language, corporate jargon.

---

## 11. Applying the system to print (business cards, flyers, packaging)

These are recommendations that extend the web identity to print, keeping everything consistent.

### Shared foundations
- **Background:** Linen warm white `#FFF9F1`.
- **Primary ink:** Feldgrau `#586F6B` and/or black.
- **Accent blocks/labels:** Peach `#FCCEAF`.
- **Emotional accent:** red heart `#B91C1C`, used once and small.
- **Headings/wordmark:** Amatic SC. **Body/contact details:** clean sans-serif companion.
- **Imagery:** one beautiful natural-light doll photo per piece; lots of whitespace.

### Business card
- **Front:** "Zsuzsánna Hand-made" wordmark in Amatic SC, centered on linen white, with a small
  heart motif. Optionally a faint doll photo or single doll silhouette.
- **Back:** contact details (Instagram `@mesehely`, Facebook, email) in a legible sans-serif,
  Feldgrau ink. Add a short tagline such as "Handmade Waldorf dolls — made with love."
- Rounded corners echo the site's `rounded-lg` cards.

### Flyer
- **Hero:** large natural-light doll photo (portrait), generous margins.
- **Headline:** Amatic SC, large.
- **Body:** short, warm, first-person copy; key info in the companion sans-serif.
- **Footer band:** Feldgrau bar (like the website footer) with social handles + heart accent.
- Keep one clear focal point; resist filling the space.

### Packaging / hang tags / stickers
- Linen-white card stock, Feldgrau printing, heart motif.
- A handwritten-feel "Thank you" note in Amatic SC reinforces the personal, made-with-love story.

---

## 12. Quick reference (cheat sheet)

```
WORDMARK   Zsuzsánna Hand-made          (Amatic SC, keep the á)
FONT       Amatic SC  — wght 400 & 700  (Google Fonts)
           pair with a clean sans-serif for small body text

COLORS
  Background  #FFF9F1   warm linen white
  Primary     #586F6B   feldgrau green-grey   (white text)
  Secondary   #FCCEAF   soft peach            (black text)
  Text        #000000   black
  Muted       #6E6414   olive
  Accent      #B91C1C   heart red  (use sparingly)
  UI gray     Tumbleweed terracotta ramp (#bc7253 @500)

SHAPE      rounded-lg corners · subtle shadows · wide whitespace
ICONS      Heroicons · signature solid heart
MOTION     soft fade + blur, ~0.1s
PHOTOS     natural light · earthy/muted · doll is the hero · 3:4 portrait
VOICE      warm · first-person · heartfelt · handmade · never salesy
SOCIAL     @mesehely (Instagram & Facebook)
CURRENCY   Euro, suffix form: 120€
```

---

*Generated from the Handmade-dolls-ws codebase. Keep in sync with `tailwind.config.js`,
`assets/css/custom-tailwind.css`, and `app.config.ts`.*
