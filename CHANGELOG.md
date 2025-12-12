# Menakta Website - Development Changelog

## Summary

This document provides a comprehensive overview of all development work completed on the Menakta website project, organized chronologically from initial setup to the latest features.

---

## Latest Updates

### Hero Typography & UI Consistency Refactor
**Commit:** `(pending)`

#### Typography Changes
- Updated all hero section headings from Tusker to Clash font for subheadings
- Implemented responsive font sizing across breakpoints (2xl → 6xl)
- Adjusted secondary headline sizing and spacing (mt-2 → mt-5)

#### Gradient Overlay Updates
- Replaced brand gradient overlays (`menakta-primaryFirst/60`, `menakta-primarySecond/40`) with blue-gray scheme:
  - LandingHero, AboutHero, CareersHero, ProjectsHero, ServicesHero: `from-blue-900/60 via-gray-900/40`
  - MiddleImageSection: `from-gray-900/80 via-gray-900/70`

#### Button Visibility Improvements
- Increased secondary/outline button border opacity for better contrast:
  - Landing, About, Careers, Projects, Services hero buttons: `border-white/30` → `border-white/70`
  - MiddleImageSection contact button: `border-white/30` → `border-white/90`

#### Theme Toggle Redesign
- Simplified background styling with conditional dark/light colors
- Changed toggle circle from gradient to solid `bg-blue-700`
- Updated sun icon color to `text-yellow-500`

#### Logo Updates
- Added responsive width constraints to navbar logo (`w-30 md:w-50`)
- Added responsive width to footer logo
- Updated navbar logo to use `Menakta_White_Logo_2.png` variant

#### Other Changes
- Adjusted CoreMessage gradient direction (`from` → `to`) and title sizing
- Cleared default Next.js README content

---

### Careers Page & Button Styling Update
**Commit:** `2c24f98`

#### New Features
- **Careers Page** (`/careers`) - Complete new section with 4 components:
  - **CareersHero** - Animated hero section with wave effects and floating particles
  - **WhyJoinUs** - 6 benefit cards highlighting company culture:
    - Remote First
    - Continuous Learning
    - Cutting-Edge Technology
    - Work-Life Balance
    - Competitive Benefits
    - Inclusive Culture
  - **OpenPositions** - 6 expandable job listings with Apply Now functionality:
    - Senior Unreal Engine Developer
    - AI/ML Engineer
    - Full Stack Developer
    - 3D Artist
    - DevOps Engineer
    - Product Designer
  - **HiringProcess** - 5-step timeline visualization (Apply → Initial Call → Technical Assessment → Team Interview → Offer)

#### Bug Fixes
- Fixed mobile visibility issue for "Apply Now" button in job cards (increased max-height constraint)

#### UI Improvements
- Updated all transparent/outline buttons to use white text for better contrast against gradient backgrounds:
  - LandingHero.tsx
  - ServicesHero.tsx
  - ProjectsHero.tsx
  - AboutHero.tsx
  - CareersHero.tsx
  - MiddleImageSection.tsx

---

### CSS Theme System Implementation
**Commit:** `33a94c2`

#### Core Changes
- Replaced JavaScript-based `isDark` conditionals with CSS custom properties
- Added CSS variables in `globals.css` for light/dark themes:
  - Background: `--bg-primary`, `--bg-secondary`, `--bg-tertiary`
  - Text: `--text-primary`, `--text-secondary`, `--text-muted`
  - UI: `--border-color`, `--card-bg`, `--card-bg-gradient-end`
- Created Tailwind utility classes (`bg-theme-*`, `text-theme-*`, `border-theme-*`)
- Updated light theme with warm blue gradients instead of pure white

#### Components Updated (24 files)
- Landing page: LandingHero, Story, CoreMessage, Contact, Testimonials, TestimonialCard, MiddleImageSection
- Services page: ServicesHero, ServiceCard, services/page
- Projects page: ProjectsHero, ProjectCard, projects/page
- About page: AboutHero, Mission, Values, Team, Stats, about/page
- Global: Footer, Navbar, layout
- Legal: privacy-policy/page, terms-of-service/page

#### Benefits
- Removed ~50 `isDark` ternary conditionals
- Better performance (no re-renders on theme change)
- Easier to maintain and extend theme colors

---

### Splash Screen Video Animation
**Commit:** `423e762`

- Replaced Akta icon splash with Menakta logo animation video
- Full viewport coverage on all screen sizes
- Optimized video playback with mobile autoplay support
- Session-based display (shows only once per session)
- Graceful fallback handling

---

### Brand Color Overhaul
**Commit:** `a488def`

#### Color System Migration
- Replaced all purple variants (`#8B5CF6`, `#7C3AED`, etc.) with Menakta primary colors (`#0041D5`, `#00B0FF`)
- Updated dark backgrounds to deep blues (`#002060`, `#001845`)
- Standardized all gradients to use `from-menakta-primaryFirst to-menakta-primarySecond`

#### Icon Updates
- Replaced 5-pointed star with Gemini-style 4-pointed sparkle (Akta icon)
- Applied Menakta gradient colors to both 2D and 3D icons

#### Typography
- Added custom local fonts (TuskerGrotesk, ClashDisplay)
- Removed Google Fonts dependencies

---

### Performance Optimizations
**Commit:** `c862cc4`

- Created image optimization script using sharp
- Generated optimized WebP versions (97% size reduction: ~100MB → ~3MB)
- Added blur placeholders for better perceived performance
- Updated all components to use Next.js Image with priority loading

---

### Mobile Responsiveness Fix
**Commit:** `ab38574`

- Fixed testimonial section visibility on mobile screens
- Changed fixed height to `min-h-screen` for flexible content
- Added responsive padding

---

### 3D Animated Components & About Page
**Commit:** `1b4b329`

#### 3D Components
- AnimatedCube with blue/purple gradient shader
- AnimatedStar with pink/purple gradient shader
- Both feature bouncing and rotation animations using @react-three/fiber

#### About Page Sections
- AboutHero with 3D cube
- Mission statement
- Stats banner (20+ projects, 99% success rate, etc.)
- Core values (Innovation, Excellence, Collaboration, Integrity)
- Team members grid

#### Legal Pages
- Privacy Policy page
- Terms of Service page

#### Navbar Improvements
- Active state styling for current page
- Gradient background on scroll and mobile menu

---

### Projects Page
**Commit:** `9bb8946`

- ProjectsHero with animated waves and floating particles
- ProjectCard component with image, category badge, and tech tags
- Category filter tabs (All, Game Development, AI Automation, Web Development, Immersive Experience, Robotics)
- 8 sample projects with descriptions and technology stacks
- Scroll animations using IntersectionObserver

---

### Services Page, Footer & Landing Components
**Commit:** `8c1fc75`

#### Landing Page
- Testimonials carousel (5 testimonials, navigation)
- Contact section with form and company info
- MiddleImageSection component

#### Services Page
- ServicesHero with background image and animations
- 6 service cards: Unreal Engine, AI Automation, Web Development, Web 3D & WebXR, Robotics & IoT, UI/UX Design
- Scroll-triggered animations

#### Footer
- 4-column layout: Brand, Quick Links, Contact Info, Newsletter
- Social media links with gradient hover effects
- Animated background orbs and particles

---

### Initial Setup
**Commit:** `a6aee05`

- Hero section
- Responsive Navbar
- AboutSection
- ServicesSection
- ProjectGrid & ProjectCard
- Initial Footer

---

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS with CSS custom properties
- **3D Graphics:** @react-three/fiber, @react-three/drei
- **Fonts:** TuskerGrotesk, ClashDisplay (local)
- **Images:** WebP format with blur placeholders
- **Animations:** CSS keyframes, IntersectionObserver

## Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Primary First | `#0041D5` | Buttons, gradients, accents |
| Primary Second | `#00B0FF` | Gradients, highlights |
| Background Dark | `#002060` | Dark theme backgrounds |
| Background Darker | `#001845` | Dark theme secondary |

---

*Last updated: December 11, 2025*
