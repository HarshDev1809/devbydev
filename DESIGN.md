# Design System Context — Portfolio Website

Use this as the single source of truth for all design decisions across the site. Every page/section (Home, Experience, Projects, and any future pages) must follow this theme consistently.

## 1. Design Philosophy
- **Plain, simple, minimalist.** No gradients, no shadows, no glassmorphism, no unnecessary decoration.
- Content-first layout. Typography and whitespace *are* the design — not icons, images, or effects.
- Confident use of negative space. Never crowd elements together.
- One accent color used sparingly for emphasis only (never for full sections/backgrounds).

## 2. Color Palette
| Role | Color | Hex (approx) | Usage |
|---|---|---|---|
| Background | Off-white / warm paper | `#F2F0EC` | Page background, all sections |
| Primary text | Near-black | `#1A1A1A` | Headings, body copy |
| Accent | Deep maroon / brick red | `#7A2118` | Highlighted words, links, underline on active nav, hover states |
| Muted text | Soft gray | `#8A8A85` | Inactive nav items, secondary/meta text |
| Divider/border | Light gray | `#D8D6D0` | Thin hairline dividers only, used minimally |

Rules:
- Never introduce new colors beyond this palette.
- Accent color (`#7A2118`) is used only for emphasis (e.g., one word/name in a heading, active states, hover), never as a large fill or background.
- No pure white (`#FFFFFF`) and no pure black (`#000000`) — always use the off-white/near-black pair above for softer contrast.

## 3. Typography
- **Headline font:** Bold serif (slab/display serif style, similar to Georgia/PT Serif/Lora Bold or a heavier serif like "Bitter" or "Zilla Slab"). Big, confident, tight line-height.
- **Body/nav font:** Clean sans-serif (e.g., Inter, Helvetica Neue, or similar), used only for navigation and small/secondary text — keeps contrast between "big serif statement" and "quiet sans-serif utility."
- **Hierarchy:**
  - Hero heading: very large (60–90px range on desktop), bold serif, tight leading, multi-line, left-aligned.
  - Nav items: small, sans-serif, uppercase or normal case, wide letter-spacing optional, muted gray with the active item in dark text + thin underline.
  - Body text: sans-serif, comfortable line-height (1.5–1.6), muted-to-dark gray.
- Selective color emphasis: one key phrase per heading (e.g., a name) is set in the maroon accent color while the rest stays near-black.

## 4. Layout & Spacing
- Generous whitespace/margins — content should never feel tight against edges.
- Left-aligned text blocks (not centered) for a personal, editorial feel.
- Simple top navigation bar: logo/name omitted or minimal, nav links spaced out, right-aligned or centered, no buttons/pills — just plain text links with underline for active state.
- Sections stack vertically with generous top/bottom padding (80–140px range) — no visual dividers needed unless content requires separation.
- Max content width constrained (e.g., ~1100–1200px) and centered on the page, keeping large screens from feeling stretched.

## 5. Components
- **Navigation:** plain text links, no background, no borders/buttons. Active link = dark text + thin underline (accent or dark color). Inactive links = muted gray, hover transitions to dark.
- **Buttons/CTAs (if needed):** minimal — either plain underlined text link or a thin-bordered rectangular button with no fill, no border-radius (or very minimal radius). Avoid heavy filled buttons or drop shadows.
- **Cards (Projects/Experience):** no heavy borders or shadows — use whitespace or a hairline border (`#D8D6D0`) to separate. Typography-led (title in serif, description in sans-serif).
- **Dividers:** thin 1px hairline in light gray, used sparingly.
- **Images (if any):** kept minimal, grayscale or muted tones preferred, never overpower typography.

## 6. Motion / Interaction
- Subtle only: fade-ins on scroll, color transitions on hover/underline — nothing flashy, no bouncy or elaborate animations.
- Transition duration: fast and understated (150–250ms ease).

## 7. Tone / Content Style
- Professional but not stiff/resume-like — a little casual is fine, but avoid trying too hard to sound "cool" or punchy.
- Let skills and experience come through subtly, through what's said and how it's built, not through loud self-promotion or over-the-top claims.
- Clear, understated statements over long paragraphs.
- Let typography size/weight communicate hierarchy instead of color-coding everything.

## 8. What to Avoid
- No gradients, drop shadows, glassmorphism, neumorphism.
- No more than one accent color.
- No filled, rounded, colorful buttons.
- No dense layouts, no clutter, no unnecessary icons.
- No pure black/white — stick to the off-white/near-black pair.

---

**Instruction to agent:** Apply this exact palette, typography pairing (bold serif headings + clean sans-serif utility text), and generous whitespace/left-aligned layout consistently across every section and page of the site (Home, Experience, Projects, and beyond), so the entire website feels like one cohesive extension of the hero section shown in the reference design.
