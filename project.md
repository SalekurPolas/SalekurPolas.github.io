# Salekur Rahaman --- Premium Personal Portfolio

## 1. Project Overview

Build a highly polished, premium personal portfolio website for
**Salekur Rahaman**, a software engineer and product builder from
Bangladesh.

The website will be hosted on **GitHub Pages** using the repository:

-   GitHub: `SalekurPolas/SalekurPolas.github.io`
-   Production URL: `https://salekurpolas.github.io`

The website must be a **static-first website**. It must not require a
backend server, PHP runtime, Laravel runtime, database, or server-side
API.

The goal is to create a portfolio that feels like a premium personal
brand and product showcase---not a generic developer resume.

The website should communicate:

> **Salekur Rahaman builds software products, developer tools,
> AI-powered systems, and technology with purpose.**

The portfolio should position Salekur primarily as:

> **Engineer · Product Architect · AI Specialist**

Do not position him merely as a "Laravel Developer". Laravel is one of
his strongest tools, but his actual experience spans backend
engineering, product development, e-commerce, payments, social APIs,
AI/ML, semantic search, mobile applications, developer tools, and
business systems.

------------------------------------------------------------------------

# 2. Primary Goals

## 2.1 Brand Goals

The website should make visitors quickly understand that Salekur:

1.  Is a serious software engineer.
2.  Builds real products, not only tutorial projects.
3.  Thinks about both technology and products.
4.  Has experience with complex integrations and systems.
5.  Is interested in AI, emerging technology, and meaningful products.
6.  Has entrepreneurial ambition and a long-term vision.

## 2.2 Technical Goals

The website must:

-   Deploy cleanly to GitHub Pages.
-   Be fully static after build.
-   Be extremely fast.
-   Be responsive on mobile, tablet, and desktop.
-   Have excellent SEO.
-   Have accessible semantic HTML.
-   Support static project case studies.
-   Be easy to update by an AI agent or developer.
-   Avoid unnecessary backend infrastructure.
-   Work correctly at the root domain: `https://salekurpolas.github.io`

## 2.3 Design Goals

The website should feel:

-   Premium
-   Minimal
-   Editorial
-   Technical
-   Confident
-   Modern
-   Sophisticated
-   Personal
-   Purposeful

Avoid making it look like:

-   A generic Bootstrap portfolio
-   A typical junior developer portfolio
-   A dashboard
-   A collection of random animations
-   An AI-generated template
-   A resume copied into a website
-   A page filled with technology logos

------------------------------------------------------------------------

# 3. Recommended Technology Stack

## Core

-   Astro
-   TypeScript
-   HTML
-   CSS
-   Tailwind CSS if it improves development speed and consistency

## Content

Use Astro Content Collections or an equivalent structured content
system.

Project content should be stored in Markdown/MDX files, for example:

``` text
src/content/projects/lagbe.md
src/content/projects/tuhur.md
src/content/projects/v-signature.md
src/content/projects/semantic-search.md
src/content/projects/smart-mirror.md
```

## Animation

Use subtle, high-quality animation.

Possible tools:

-   Motion
-   GSAP
-   Native CSS transitions
-   IntersectionObserver

Do not add an animation library merely for the sake of using one.

Prefer:

-   CSS transitions for simple interactions.
-   Motion for UI transitions.
-   GSAP only where advanced timeline-based animation is genuinely
    useful.

## Deployment

GitHub Actions → Astro build → GitHub Pages.

------------------------------------------------------------------------

# 4. GitHub Pages Requirements

The repository is:

``` text
SalekurPolas/SalekurPolas.github.io
```

The site is deployed at:

``` text
https://salekurpolas.github.io
```

Because this is the root GitHub Pages repository, the site should not
use a repository subpath such as `/portfolio`.

The Astro configuration should be compatible with:

``` text
site: https://salekurpolas.github.io
```

The build must generate static output.

The site must not depend on runtime server-side code.

Recommended deployment flow:

``` text
Local development
      ↓
git push
      ↓
GitHub Actions
      ↓
npm run build
      ↓
Deploy dist/
      ↓
GitHub Pages
```

Create a GitHub Actions workflow such as:

``` text
.github/workflows/deploy.yml
```

The workflow should:

1.  Checkout the repository.
2.  Install Node.js.
3.  Install dependencies.
4.  Build the Astro site.
5.  Upload the generated static site.
6.  Deploy to GitHub Pages.

------------------------------------------------------------------------

# 5. Overall Website Concept

The website should feel like a living digital identity.

It should communicate:

> "This is not just my resume. This is the work I am building and the
> way I think."

The website should be structured around:

-   Selected work
-   Engineering thinking
-   Product building
-   Open source
-   Current focus
-   Personal philosophy
-   Future direction

------------------------------------------------------------------------

# 6. Recommended Site Structure

``` text
/
├── Home
├── Work
│   ├── Lagbe
│   ├── Tuhur
│   ├── V-Signature
│   ├── Semantic Search
│   └── Smart Mirror
├── About
├── Engineering
├── Lab / Experiments
├── Open Source
└── Contact
```

The primary navigation should remain minimal.

Recommended navigation:

``` text
Work
About
Lab
GitHub
Contact
```

The navigation should be responsive and elegant.

On mobile, use a clean menu rather than an overly complicated navigation
system.

------------------------------------------------------------------------

# 7. Homepage Concept

The homepage should not start with:

> Hello, I'm Salekur.

It should start with a strong positioning statement.

Suggested hero:

``` text
SALekur RAHAMAN

Software Engineer · Product Builder

I turn complex ideas into
software products.

I build scalable systems, developer tools,
AI-powered experiences, and products with purpose.
```

Primary actions:

``` text
Explore my work
GitHub
```

Optional current status:

``` text
Currently building
Lagbe · Tuhur · Developer Tools
```

The exact copy can be refined during implementation, but the tone should
be:

-   Clear
-   Confident
-   Not arrogant
-   Human
-   Technical
-   Memorable

------------------------------------------------------------------------

# 8. Homepage Sections

## 8.1 Hero

Purpose:

Immediately explain who Salekur is and what he builds.

Required elements:

-   Name
-   Role
-   Strong positioning statement
-   Short supporting description
-   Primary CTA to Work
-   Secondary CTA to GitHub
-   Optional current status

The hero should have excellent typography and spacing.

Avoid:

-   Generic profile photo as the main visual
-   Huge animated 3D objects
-   Excessive gradients
-   Excessive text effects

A subtle visual system is preferred.

Possible visual concept:

A subtle animated system/map/constellation representing:

``` text
Ideas
   ↓
Systems
   ↓
Products
   ↓
Impact
```

This should remain optional. Do not let visual effects harm readability
or performance.

------------------------------------------------------------------------

## 8.2 Selected Work

This should be one of the most important sections.

Display only the strongest projects.

Recommended featured projects:

### 01 --- Lagbe

A marketplace ecosystem connecting customers, vendors, services, and
commerce.

Potential technologies:

-   Laravel
-   PHP
-   Vue.js
-   MySQL
-   Redis
-   Payment integrations
-   Social APIs
-   Search systems
-   Real-time systems

Positioning:

> Building a marketplace ecosystem from the ground up.

------------------------------------------------------------------------

### 02 --- Tuhur

A mosque discovery and prayer information platform.

Potential technologies:

-   Flutter
-   Laravel
-   Google Maps
-   Real-time data
-   Location-based discovery

Positioning:

> Helping people find mosques and prayer information wherever they are.

Tuhur should be presented as a meaningful product, not merely an app.

------------------------------------------------------------------------

### 03 --- V-Signature

A JavaScript signature capture library.

Potential technologies:

-   JavaScript
-   Canvas
-   npm
-   Browser APIs

Positioning:

> A reusable signature capture library for web applications.

This project demonstrates:

-   Developer tool creation
-   Open-source thinking
-   Package distribution
-   Reusability

------------------------------------------------------------------------

### 04 --- Semantic Search

A semantic search architecture combining:

-   Laravel
-   Python
-   Embeddings
-   Qdrant
-   MySQL
-   OpenAI embeddings where appropriate

Positioning:

> Making traditional software understand meaning.

This project should explain:

-   Traditional keyword search limitations
-   Embeddings
-   Vector similarity
-   Qdrant
-   Python embedding service
-   Laravel integration
-   Data synchronization
-   Updating embeddings when content changes

------------------------------------------------------------------------

### 05 --- Smart Mirror

An AI/IoT product concept.

Potential technologies:

-   Raspberry Pi
-   Flutter
-   Laravel
-   Face detection
-   Voice recognition
-   Action detection
-   Object detection

Positioning:

> Exploring the intersection of AI, hardware, and everyday experiences.

------------------------------------------------------------------------

# 9. Project Case Study System

Every important project should have a dedicated case study page.

Do not make project pages simple:

``` text
Title
Description
Tech stack
Screenshot
```

Instead, structure case studies around engineering and product thinking.

Recommended structure:

``` text
Project title
One-line positioning
Project metadata
Hero visual

The idea
The problem
The approach
How it works
Architecture
Important technical decisions
Challenges
What I built
Technologies
Current status
Links
```

Example:

``` text
# V-Signature

A lightweight JavaScript signature capture library for web applications.

## The problem

Many applications need users to draw or submit a signature directly in the browser.

## The idea

Build a reusable, framework-independent JavaScript library.

## Engineering

- Canvas rendering
- Mouse input
- Touch input
- Export functionality
- Browser compatibility
- npm distribution

## Result

A reusable developer tool that can be installed and integrated into web applications.
```

------------------------------------------------------------------------

# 10. Project Content Model

Use a structured content schema.

Example:

``` yaml
---
title: "Lagbe"
slug: "lagbe"
shortTitle: "Marketplace Ecosystem"
description: "Building a marketplace ecosystem from the ground up."
category: "Product"
year: "2024 — Present"
featured: true
status: "In Progress"
technologies:
  - Laravel
  - PHP
  - Vue.js
  - MySQL
  - Redis
heroImage: "/images/projects/lagbe/hero.webp"
github: ""
website: ""
---
```

Additional optional fields:

``` yaml
role: "Founder / Software Engineer"
impact: ""
problem: ""
solution: ""
featured: true
order: 1
```

Do not invent statistics or achievements.

If exact metrics are unavailable, omit them or use qualitative
descriptions.

------------------------------------------------------------------------

# 11. About Section

The About page should not be a generic resume.

It should explain how Salekur thinks.

Suggested direction:

``` text
I don't want to only write code.

I want to build things that matter.

My work sits at the intersection of software engineering,
product thinking, and curiosity about what technology can become.
```

Then explain his areas of interest:

-   Software engineering
-   Product development
-   AI and machine learning
-   Developer tools
-   E-commerce
-   Mobile applications
-   Business systems
-   Social-impact technology

The tone should be personal but professional.

------------------------------------------------------------------------

# 12. Engineering Section

Create a section called something like:

``` text
How I build
```

or:

``` text
Engineering
```

Instead of showing skill bars, explain engineering capabilities.

Recommended categories:

## Backend Systems

Laravel, PHP, MySQL, APIs, queues, caching, Redis, architecture.

## Product Development

Turning ideas into usable products and systems.

## Payments and Integrations

Experience with payment systems and external platforms.

Potential integrations include:

-   Stripe
-   Google Pay
-   Apple Pay
-   SSLCommerz
-   Cryptomus
-   Paysera
-   GoldenPay
-   Xero
-   MYOB

## Social APIs

Experience integrating social platforms and content publishing systems.

Potential integrations include:

-   LinkedIn
-   Pinterest
-   X/Twitter

## Search and AI

-   Python
-   Embeddings
-   Qdrant
-   Semantic search
-   OpenAI APIs
-   Machine learning concepts

## Mobile and Hardware

-   Flutter
-   Dart
-   Raspberry Pi
-   AI/IoT concepts

------------------------------------------------------------------------

# 13. Technology Section

Do not use traditional skill bars.

Do not show:

``` text
Laravel 95%
PHP 90%
Vue 80%
```

This is meaningless.

Instead, show technology groups:

``` text
Backend
Laravel · PHP · MySQL · Redis

Frontend
Vue · Livewire · Alpine.js · Tailwind CSS

Mobile
Flutter · Dart

AI & Search
Python · Embeddings · Qdrant · OpenAI

Infrastructure
GitHub · Docker · Queues · WebSockets
```

Potentially make technology items interactive:

Clicking a technology can show projects where it was used.

This is optional and should only be implemented if it improves the user
experience.

------------------------------------------------------------------------

# 14. "Now" Section

Create a living section called:

``` text
Now
```

or:

``` text
Currently
```

Suggested content:

``` text
Building
Lagbe — a marketplace ecosystem.

Exploring
AI-powered search and intelligent systems.

Maintaining
V-Signature — an open-source JavaScript package.

Thinking about
Building products that combine software, business, and social impact.
```

This makes the portfolio feel alive.

------------------------------------------------------------------------

# 15. Open Source Section

The portfolio should include a dedicated open-source section.

Feature:

-   V-Signature
-   Important GitHub repositories
-   Technical experiments
-   Selected packages

Potential repository card:

``` text
v-signature

JavaScript signature capture library.

JavaScript
npm
Open Source
```

Optional dynamic data:

-   GitHub stars
-   Forks
-   Languages
-   Last updated

Important:

Do not make the entire website dependent on GitHub API calls at runtime.

If GitHub data is fetched, prefer:

1.  Build-time fetching, or
2.  Graceful fallback to static content.

The portfolio must remain functional if the GitHub API is unavailable.

------------------------------------------------------------------------

# 16. GitHub Integration

The GitHub profile is:

``` text
https://github.com/SalekurPolas
```

Use GitHub as a supporting element, not the entire identity.

The portfolio should have a clear GitHub CTA.

Possible CTA:

``` text
Explore the code
```

or:

``` text
See what I'm building
```

GitHub repository links should be provided for projects where
appropriate.

------------------------------------------------------------------------

# 17. Visual Design Direction

## General Style

Premium editorial technology portfolio.

Reference qualities:

-   Strong typography
-   Spacious layouts
-   High-quality spacing
-   Restrained color palette
-   Smooth but subtle motion
-   Strong visual hierarchy

The site should feel closer to:

-   A premium digital product
-   A modern technology studio
-   A high-end personal brand

than to:

-   A resume
-   A dashboard
-   A template

## Color

Use a restrained dark-first palette.

Possible direction:

``` text
Background: near-black / deep charcoal
Primary text: off-white
Secondary text: muted gray
Accent: one carefully chosen color
```

Do not use many accent colors.

Do not create a rainbow interface.

The exact color system should be selected carefully during design
implementation.

## Typography

Typography is extremely important.

Use a premium modern sans-serif.

Potential options:

-   Inter
-   Geist
-   Manrope
-   Satoshi
-   Plus Jakarta Sans

A secondary serif font may be used sparingly for editorial emphasis.

Do not use too many font families.

------------------------------------------------------------------------

# 18. Animation Philosophy

Animation should communicate quality, not distract.

Recommended animations:

-   Page transition
-   Fade and slide reveals
-   Text reveal
-   Hover transitions
-   Project card movement
-   Image scale on hover
-   Smooth navigation
-   Subtle scroll-based motion

Avoid:

-   Constant bouncing
-   Excessive particles
-   Excessive parallax
-   Long loading animations
-   Cursor effects that reduce usability
-   Animation on every element

Respect:

``` text
prefers-reduced-motion
```

Users who disable animation should receive a fully functional
experience.

------------------------------------------------------------------------

# 19. Responsive Design

The website must be designed mobile-first.

Required breakpoints:

-   Small mobile
-   Large mobile
-   Tablet
-   Desktop
-   Large desktop

The design must not simply shrink the desktop layout.

Mobile should have:

-   Clear typography
-   Comfortable spacing
-   Easy navigation
-   Touch-friendly buttons
-   No horizontal overflow
-   Optimized images

------------------------------------------------------------------------

# 20. Performance Requirements

Target:

-   Excellent Lighthouse performance
-   Minimal JavaScript
-   Optimized images
-   Modern image formats
-   Lazy loading where appropriate
-   Static HTML generation
-   No unnecessary client-side rendering

Avoid loading large libraries unless needed.

Use:

-   WebP/AVIF images where possible
-   SVG icons
-   Optimized font loading
-   Code splitting where appropriate

------------------------------------------------------------------------

# 21. SEO

Add:

-   Unique page title
-   Meta description
-   Open Graph metadata
-   Twitter/X card metadata
-   Canonical URL
-   Favicon
-   Web manifest if useful
-   Semantic headings

Homepage title example:

``` text
Salekur Rahaman — Software Engineer & Product Builder
```

Potential description:

``` text
The personal portfolio of Salekur Rahaman, a software engineer and product builder creating software products, developer tools, AI-powered systems, and technology with purpose.
```

Add structured data where appropriate:

-   Person schema
-   WebSite schema
-   SoftwareApplication schema for relevant projects

Do not create fake information in structured data.

------------------------------------------------------------------------

# 22. Accessibility

The website must:

-   Use semantic HTML.
-   Have proper heading hierarchy.
-   Have visible focus states.
-   Have accessible buttons.
-   Have meaningful link labels.
-   Provide alt text for meaningful images.
-   Avoid relying only on color.
-   Support keyboard navigation.
-   Respect reduced-motion preferences.
-   Maintain adequate contrast.

------------------------------------------------------------------------

# 23. Content Rules

Important:

Do not invent:

-   Fake awards
-   Fake clients
-   Fake metrics
-   Fake revenue
-   Fake user counts
-   Fake job titles
-   Fake achievements

If a fact is not known, write around it or leave it out.

Use qualitative language when exact numbers are unavailable.

For example:

Good:

> Designed and implemented a semantic search architecture using
> embeddings and vector similarity.

Bad:

> Increased search performance by 300%.

unless the metric is verified.

------------------------------------------------------------------------

# 24. Personal Story and Positioning

The portfolio should communicate the following themes:

## Building Products

Salekur wants to build products, not merely work on isolated tickets.

## Engineering Depth

He is comfortable working with:

-   Backend systems
-   Databases
-   APIs
-   Integrations
-   Queues
-   Caching
-   Search
-   AI systems
-   Mobile apps

## Curiosity

He explores:

-   AI/ML
-   Semantic search
-   Hardware
-   IoT
-   Developer tools
-   New technologies

## Purpose

His long-term vision includes building useful technology and
social-impact initiatives.

The website should communicate ambition without making unsupported
claims.

------------------------------------------------------------------------

# 25. Suggested Homepage Flow

``` text
[ HERO ]

I turn complex ideas
into software products.

Software Engineer · Product Builder

[ Explore my work ] [ GitHub ]

--------------------------------

[ CURRENTLY ]

Building:
Lagbe · Tuhur · Developer Tools

--------------------------------

[ SELECTED WORK ]

Lagbe
Marketplace ecosystem

Tuhur
Mosque discovery and prayer platform

V-Signature
JavaScript developer tool

Semantic Search
Making software understand meaning

--------------------------------

[ HOW I BUILD ]

Think
Build
Connect
Improve

--------------------------------

[ ENGINEERING ]

Backend
Product
AI & Search
Payments
Mobile
Systems

--------------------------------

[ PHILOSOPHY ]

I don't want to only write code.
I want to build things that matter.

--------------------------------

[ NOW ]

What I'm building and exploring currently.

--------------------------------

[ CTA ]

Let's build something useful.

GitHub
Contact
```

------------------------------------------------------------------------

# 26. Recommended Project Development Phases

## Phase 1 --- Foundation

Create:

-   Astro project
-   TypeScript configuration
-   Tailwind or design system
-   GitHub Pages deployment
-   Basic layout
-   Global styles
-   SEO foundation

## Phase 2 --- Visual System

Create:

-   Color tokens
-   Typography system
-   Spacing system
-   Buttons
-   Cards
-   Navigation
-   Footer
-   Animation primitives

## Phase 3 --- Homepage

Implement:

-   Hero
-   Current status
-   Selected work
-   Engineering philosophy
-   Technology areas
-   CTA

## Phase 4 --- Content System

Implement:

-   Project content schema
-   Markdown/MDX projects
-   Project listing page
-   Project detail pages

## Phase 5 --- Featured Case Studies

Create detailed case studies for:

1.  Lagbe
2.  Tuhur
3.  V-Signature
4.  Semantic Search
5.  Smart Mirror

## Phase 6 --- About and Engineering

Implement:

-   About page
-   Engineering page
-   Technology categories
-   Personal philosophy

## Phase 7 --- Open Source

Implement:

-   GitHub profile link
-   Selected repository cards
-   Optional build-time GitHub data

## Phase 8 --- Polish

Improve:

-   Responsive behavior
-   Animations
-   Accessibility
-   SEO
-   Performance
-   Image optimization
-   Error states
-   Loading states

## Phase 9 --- Deployment

Test:

``` bash
npm run build
```

Then deploy to GitHub Pages.

Verify:

``` text
https://salekurpolas.github.io
```

Test:

-   Desktop
-   Mobile
-   Tablet
-   Different browsers
-   Keyboard navigation
-   Reduced motion

------------------------------------------------------------------------

# 27. AI Agent Instructions

An AI coding agent working on this project must follow these principles.

## Before coding

1.  Inspect the existing repository.
2.  Determine whether a project already exists.
3.  Do not delete existing valuable work without understanding it.
4.  Review existing assets.
5.  Review existing GitHub Pages configuration.
6.  Check whether the repository already has a framework.
7.  Preserve useful existing content where possible.

## During implementation

1.  Build the design system before duplicating styles.
2.  Use reusable components.
3.  Keep project content separate from layout code.
4.  Use semantic HTML.
5.  Keep JavaScript minimal.
6.  Avoid unnecessary dependencies.
7.  Use responsive design from the beginning.
8.  Keep the site static-compatible.
9.  Do not add a backend.
10. Do not require environment secrets for the basic website.

## When making design decisions

Prefer:

``` text
Clarity > decoration
Typography > effects
Storytelling > statistics
Quality > quantity
Performance > unnecessary technology
```

## When adding animation

Ask:

> Does this animation improve understanding, hierarchy, or perceived
> quality?

If not, do not add it.

## When adding a project

Use a case-study mindset.

Do not merely add:

``` text
Title
Tech stack
Image
```

Explain:

``` text
Problem
Idea
Approach
Engineering
Challenges
Result
```

------------------------------------------------------------------------

# 28. Things to Avoid

Do not build:

-   Generic developer portfolio template
-   Huge skill progress bars
-   Fake statistics
-   Fake client logos
-   Excessive gradients
-   Excessive neon
-   Too many animations
-   Random 3D assets
-   Unnecessary login systems
-   Backend APIs
-   Database
-   Server-side rendering requirement
-   Runtime dependency on GitHub API
-   Massive JavaScript bundles
-   Overly complicated navigation

Do not make every section visually loud.

Premium design depends heavily on restraint.

------------------------------------------------------------------------

# 29. Success Criteria

The project is successful if a visitor can answer these questions
quickly:

### Who is Salekur?

A software engineer and product builder.

### What does he build?

Software products, systems, developer tools, AI-powered experiences, and
technology with purpose.

### What has he actually built?

Projects such as:

-   Lagbe
-   Tuhur
-   V-Signature
-   Semantic Search systems
-   Smart Mirror experiments

### Is he technically capable?

The case studies should demonstrate that.

### Is he more than a coder?

Yes. He thinks about products, systems, users, and long-term ideas.

### Can I explore his code?

Yes. GitHub should be easily accessible.

### Is this website memorable?

It should feel like a carefully designed personal product rather than a
resume.

------------------------------------------------------------------------

# 30. Final Product Vision

The final website should feel like:

``` text
A personal operating system for Salekur Rahaman's work,
ideas, experiments, and future direction.
```

The central message should be:

> **I build software products, systems, and tools for ideas that deserve
> to exist.**

The portfolio should be able to evolve over time.

New projects should be easy to add.

The design should remain useful as Salekur:

-   Builds more products
-   Creates more open-source tools
-   Explores AI
-   Develops businesses
-   Works on social-impact technology
-   Grows as an engineer

This is not just a portfolio website.

It is the foundation of a long-term personal digital identity.
