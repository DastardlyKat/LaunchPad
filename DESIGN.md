---
name: Orbital Glass
colors:
  surface: '#10131e'
  surface-dim: '#10131e'
  surface-bright: '#363945'
  surface-container-lowest: '#0b0e19'
  surface-container-low: '#181b27'
  surface-container: '#1c1f2b'
  surface-container-high: '#272936'
  surface-container-highest: '#313441'
  on-surface: '#e0e1f2'
  on-surface-variant: '#cfc2d6'
  inverse-surface: '#e0e1f2'
  inverse-on-surface: '#2d303c'
  outline: '#988d9f'
  outline-variant: '#4d4354'
  surface-tint: '#ddb7ff'
  primary: '#ddb7ff'
  on-primary: '#490080'
  primary-container: '#b76dff'
  on-primary-container: '#400071'
  inverse-primary: '#842bd2'
  secondary: '#7bd0ff'
  on-secondary: '#00354a'
  secondary-container: '#00a6e0'
  on-secondary-container: '#00374d'
  tertiary: '#ddb8ff'
  on-tertiary: '#490081'
  tertiary-container: '#b175ec'
  on-tertiary-container: '#400071'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#f0dbff'
  primary-fixed-dim: '#ddb7ff'
  on-primary-fixed: '#2c0051'
  on-primary-fixed-variant: '#6900b3'
  secondary-fixed: '#c4e7ff'
  secondary-fixed-dim: '#7bd0ff'
  on-secondary-fixed: '#001e2c'
  on-secondary-fixed-variant: '#004c69'
  tertiary-fixed: '#f0dbff'
  tertiary-fixed-dim: '#ddb8ff'
  on-tertiary-fixed: '#2c0051'
  on-tertiary-fixed-variant: '#62259b'
  background: '#10131e'
  on-background: '#e0e1f2'
  surface-variant: '#313441'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.025em
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.005em
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  label-mono-md:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: 0.04em
  label-mono-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.06em
  badge-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.08em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system blends deep-space minimalism with high-precision aerospace glassmorphism. It is built for mission control consoles, telemetry dashboards, satellite management fleets, and orbital logistics platforms.

The aesthetic evokes focus, cinematic scale, and calibrated technical precision. Rather than a flat dark mode or a retro-neon arcade aesthetic, the visual atmosphere is grounded in deep vacuum obsidian and cold cosmic indigo, punctuated by concentrated charges of ultraviolet photon emissions and hyper-accurate cyan telemetry readouts.

Key design principles:
- **Atmospheric Depth:** Multi-tiered layers of frosted cosmic glass (`backdrop-blur-md` through `backdrop-blur-xl`) floating over deep midnight voids.
- **Directional Illumination:** Interfaces leverage delicate rim lighting, linear gradient strokes, and localized photon glows rather than broad diffuse drop shadows.
- **Instrumental Density:** UI elements reflect high-density avionics panels—crisp, monospaced coordinate tags, micro-labels, and surgical interaction boundaries.

## Colors

The palette is engineered around cosmic depth, optical radiance, and high-readability telemetry.

### Surface Architecture
- **Space Void (Base 0):** `#080B16` — The deep foundation canvas representing raw vacuum.
- **Sub-Orbital Slate (Surface 1):** `#0D1226` — Canvas for layout sections, sidebars, and structural wells.
- **Orbital Glass (Surface 2):** `#121833` — The baseline surface for elevated cards, modular panels, and interactive pods, rendered with `rgba(18, 24, 51, 0.7)` when combined with backdrop filters.
- **Docking Layer (Surface 3):** `#1B234B` — Modals, dropdown flyouts, active popovers, and elevated hover states.

### Core Chromatics
- **Electric Violet (Primary Accent):** `#A855F7` — Core action color, critical callouts, and primary telemetry pulses.
- **Photon Iris (Tertiary Glow):** `#C084FC` — Specular highlights, active state gradients, and secondary accents.
- **Deep Thruster (Primary Deep):** `#9333EA` — Pressed states, saturated glow undersills, and active tab indicators.
- **Telemetry Cyan (Secondary System):** `#38BDF8` — Secondary interactive elements, altitude/vector metrics, nominal system statuses, and cold calibration pings.

### Edge & Border Tones
- **Starlight Rim:** `rgba(255, 255, 255, 0.08)` to `rgba(255, 255, 255, 0.15)` — Crisp edge boundary defining upper and left glass faces.
- **Ion Sheen:** `rgba(168, 85, 247, 0.20)` to `rgba(168, 85, 247, 0.35)` — Active borders and focus state containment.

### Functional States
- **Nominal (Success):** `#10B981` (Emerald vector)
- **Warning (Propulsion Alert):** `#F59E0B` (Amber flare)
- **Critical (Abort Vector):** `#EF4444` (Laser crimson)
- **Telemetry Info:** `#38BDF8` (Orbital cyan)

## Typography

The typographic hierarchy balances modern engineering elegance with cold-line readability:
- **Headlines (Plus Jakarta Sans):** Display titles leverage the geometric precision, wide stance, and contemporary forward momentum of Plus Jakarta Sans. Large display headings should utilize tight negative tracking to maintain punch and solid cohesion against stark dark canvases.
- **Interface & Body Text (Inter):** Inter provides maximum optical clarity across tabular data views, nested sidebars, and analytical copy blocks, rendering effortlessly under complex glowing backdrops.
- **Instruments, Timestamps & Identifiers (JetBrains Mono):** Mission elapsed times (T-minus counters), latitude/longitude coordinates, telemetry packet readouts, and status codes are set exclusively in JetBrains Mono with expanded letter-spacing to prevent ocular drift during operational monitoring.

## Layout & Spacing

The design system implements a 12-column fluid grid tailored for data-dense control rooms and orbital telemetry feeds.

- **Desktop (1440px+):** 12 columns, 24px (`1.5rem`) gutters, 32px (`2rem`) screen margins. Maximum container bound is set to `1600px` for high-resolution displays.
- **Tablet / Secondary Viewport (768px - 1439px):** 8 columns, 16px (`1rem`) gutters, 24px (`1.5rem`) margins. Side navigation collapses into an anchored or frosted utility drawer.
- **Mobile (Below 768px):** 4 columns, 16px (`1rem`) gutters, 16px (`1rem`) safe margins. Multi-column telemetry instruments wrap vertically into stacked glass modules.

Component rhythm adheres to an 8px vertical baseline (with 4px micro-increments used strictly for compact chips, status pills, and monospaced telemetry headers). Gaps between modular panels favor `space-lg` (24px) to let dark boundaries breathe, preventing visual saturation.

## Elevation & Depth

Visual hierarchy is constructed via photonic luminance and translucency rather than opaque dropshadows.

1. **Base Vacuum (Level 0):** Unlit, pure foundation (`#080B16`). No border, no elevation.
2. **Frosted Hull (Level 1 - Panels, Cards):**
   - Background: `rgba(18, 24, 51, 0.65)`
   - Backdrop filter: `blur(16px) saturate(180%)`
   - Border: 1px continuous solid `rgba(255, 255, 255, 0.08)`
   - Inner highlight: `inset 0 1px 1px 0 rgba(255, 255, 255, 0.08)`
3. **Orbital Apex (Level 2 - Modals, Command Drawers):**
   - Background: `rgba(27, 35, 75, 0.85)`
   - Backdrop filter: `blur(24px)`
   - Border: 1px continuous solid `rgba(168, 85, 247, 0.28)`
   - Shadow: `0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(168, 85, 247, 0.12)`
4. **Energy Glow (Level 3 - Active Focus, Live Rockets, Critical Triggers):**
   - Border: `1px solid #A855F7`
   - Shadow: `0 0 20px rgba(168, 85, 247, 0.45), inset 0 0 12px rgba(192, 132, 252, 0.25)`

## Shapes

The geometric framework uses structural roundedness (`roundedness: 2`), applying an 8px (`0.5rem`) base corner radius to panels, buttons, and form inputs, scaled to 16px (`1rem`) on outer modular cards and 24px (`1.5rem`) on hero dialogs. 

Small telemetry badges, status indicators, and micro-tags deviate into full pill structures (`rounded-full` / `9999px`) to visually separate operational metadata from operational surface geometry.

## Components

### Buttons
- **Primary Violet Thrust:** Background set to a linear gradient from `#A855F7` to `#9333EA` (135deg). Border: `1px solid rgba(255, 255, 255, 0.2)`. Text: white bold. Hover produces an outer glow: `box-shadow: 0 0 24px rgba(168, 85, 247, 0.55)`.
- **Secondary Cyan Pulse:** Background: `rgba(56, 189, 248, 0.08)`. Border: `1px solid rgba(56, 189, 248, 0.4)`. Text: `#38BDF8`. Hover state elevates to `rgba(56, 189, 248, 0.16)` with a crisp cyan edge bloom.
- **Glass Ghost:** Background: `rgba(255, 255, 255, 0.03)`. Border: `1px solid rgba(255, 255, 255, 0.1)`. Text: `#E2E8F0`. Hover transitions to `rgba(255, 255, 255, 0.08)` and border becomes `rgba(255, 255, 255, 0.2)`.

### High-Tech Pill Badges & Telemetry Chips
- Capsule geometry (`rounded-full`) with `label-mono-sm` typography.
- Structure: 1px border with a soft matching ambient glow and an integrated 6px pulsing LED status beacon.
- Variants:
  - *Nominal Orbit:* Border `rgba(16, 185, 129, 0.3)`, Background `rgba(16, 185, 129, 0.1)`, Text `#34D399`.
  - *Telemetry Lock:* Border `rgba(56, 189, 248, 0.3)`, Background `rgba(56, 189, 248, 0.1)`, Text `#38BDF8`.
  - *Ion Thruster Active:* Border `rgba(168, 85, 247, 0.4)`, Background `rgba(168, 85, 247, 0.12)`, Text `#C084FC`.

### Input Fields & Controls
- **Text Inputs:** Height 42px, radius 8px. Surface `rgba(13, 18, 38, 0.8)` with a 1px border of `rgba(255, 255, 255, 0.12)`. On focus: border shifts to `#A855F7` accompanied by an electric halo `0 0 0 3px rgba(168, 85, 247, 0.25)`. Monospaced placeholder tokens with low opacity (`#64748B`).
- **Checkboxes & Radios:** Sharp square-rounded (4px radius) for checkboxes, circular for radios. Base background is midnight void with a 1px boundary. Checked state uses solid `#A855F7` fill with a white vector glyph and a centered neon glow point.

### Modular Avionics Cards
- Built using Orbital Glass specifications: `rgba(18, 24, 51, 0.7)` with `backdrop-filter: blur(16px)` and radius 16px.
- Card headers feature an optional horizontal telemetry hairline border (`1px solid rgba(255, 255, 255, 0.06)`) separating metric displays from primary control zones.

### Mission-Specific Components
- **Countdown HUD Matrix:** Monospaced real-time ticker displaying T-minus countdowns with cyan status readouts, high-contrast numeric dividers, and violet phase markers.
- **Vector Stream Lists:** High-density table/list hybrids with transparent backgrounds, dividing lines rendered as subtle starlight gradients (`linear-gradient(90deg, rgba(255,255,255,0.08), transparent)`), and hover highlights tinting rows in ultra-subtle purple mist (`rgba(168, 85, 247, 0.05)`).
