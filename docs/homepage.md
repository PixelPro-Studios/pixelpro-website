# PixelPro Studios - Homepage Specification

## Overview
The homepage serves as the digital storefront for PixelPro Studios, a premium AV service, photography, and videography company. The design should reflect the brand personality: **Professional, Sophisticated, Reliable, Detail-Oriented, and Premium**.

## Branding & Styling Guidelines
*Reference `docs/branding.md` for exact hex codes and font weights.*

- **Colors**:
  - **Backgrounds**: Dark Black (`#0A0A0A`) is primary. Use Charcoal (`#1A1A1A`) for section differentiation.
  - **Text**: Off White (`#fafdff`) on dark backgrounds. **Never pure white.**
  - **Accents**: Silver (`#C0C0C0`) for highlights, buttons, borders, and icons.
- **Typography**:
  - **Headings**: Montserrat (Bold 700 / SemiBold 600).
  - **Body**: Inter (Regular 400).
- **Visual Style**: Sleek, modern, metallic accents, ample whitespace (negative space), high contrast.

---

## Detailed Section Specifications

### 1. Hero Section
- **Goal**: Immediate impact, communicating premium quality and technical excellence.
- **Layout**: Full-screen height (`min-h-screen` or large `vh`), vertically centered content.
- **Background**: 
  - Dark Black (`#0A0A0A`) base.
  - Ideally a subtle, high-quality background video or cinematic image with a dark overlay to ensure text readability.
- **Content**:
  - **Headline (H1)**: "Every Moment, Perfectly Framed"
    - *Font*: Montserrat Bold, 48-64px.
    - *Color*: Silver (`#C0C0C0`) or Off White.
  - **Subheadline**: "Technical excellence meets creative vision to create visual legacies that endure."
    - *Font*: Inter, 18-24px.
  - **Primary CTA**: "View Our Portfolio"
    - *Style*: Silver (`#C0C0C0`) background, Dark Black text. Hover: slightly lighter silver or white glow.
- **Vibe**: Cinematic, authoritative, high-tech.

### 2. Infinite Scroll Logos (Social Proof)
- **Goal**: Establish trust and credibility immediately after the hook.
- **Background**: Charcoal (`#1A1A1A`) to distinguish from the Hero.
- **Interaction**: Continuous automatic horizontal scrolling (marquee effect).
- **Visuals**:
  - **Logos**: Single-color versions of client logos.
  - **Color**: Silver (`#C0C0C0`) or dimmed Off White to maintain the monochromatic, premium look.
- **Content**: Placeholder logos for now (e.g., TechCorp, GlobalEvents, LuxeWeddings, etc.).

### 3. Why Us (4 Reasons)
- **Goal**: Differentiate PixelPro from generic competitors using the Brand Promise.
- **Layout**: Grid layout (Responsive: 1 column mobile, 2 columns tablet, 4 columns desktop).
- **Background**: Dark Black (`#0A0A0A`).
- **Content**:
  1.  **Technical Precision**
      - *Icon*: Camera Lens or Precision Scope (Silver).
      - *Copy*: "State-of-the-art equipment and flawless execution for every frame."
  2.  **Creative Vision**
      - *Icon*: Eye or Lightbulb (Silver).
      - *Copy*: "Storytelling that transcends the ordinary, capturing the essence of your event."
  3.  **Unwavering Reliability**
      - *Icon*: Shield or Clock (Silver).
      - *Copy*: "On time, every time. We understand there are no second takes in live events."
  4.  **End-to-End Production**
      - *Icon*: Film Strip or Layers (Silver).
      - *Copy*: "From concept to final edit, we handle the entire production lifecycle seamlessly."

### 4. Services (4 Core Offerings)
- **Goal**: Clearly outline the primary business pillars.
- **Layout**: Grid layout (Responsive: 1 column mobile, 2 columns tablet/desktop).
- **Background**: Charcoal (`#1A1A1A`) for contrast.
- **Content**:
  1.  **AV Systems**
      - *Description*: Comprehensive audio-visual solutions for events of any scale.
  2.  **Photography**
      - *Description*: Professional event, corporate, and creative photography.
  3.  **Videography**
      - *Description*: Cinematic video production and live streaming services.
  4.  **Talent**
      - *Description*: Professional hosts, voiceover artists, and on-screen talent.
- **Style**: Cards or large clickable areas with images/icons.

### 5. Unique CTA Section
- **Goal**: Final conversion push with a unique, memorable hook.
- **Layout**: Centered, high-impact.
- **Background**: A subtle gradient involving Charcoal (`#1A1A1A`) and Graphite (`#3D3D3D`), or a bordered section with Silver accents.
- **Headline**: "Your Vision, Our Lens."
- **Subtext**: "Ready to create something extraordinary? Let’s discuss your next project."
- **Button**: "Start Your Legacy"
  - *Style*: Transparent border (Silver), Silver text. Hover: Fill with Silver, text turns Dark Black.

---

## Technical Implementation Notes for AI
- **Framework**: Next.js 14+ (App Router).
- **Styling**: Tailwind CSS.
  - Extend `tailwind.config.ts` with the branding colors: `brand-black`, `brand-silver`, `brand-white`, `brand-charcoal`.
- **Fonts**: Configure `next/font/google` for Montserrat and Inter.
- **Icons**: Use `lucide-react` for the "Why Us" icons.
- **Animations**: Use `framer-motion` for the logo scroll and fade-in effects on the Hero.
