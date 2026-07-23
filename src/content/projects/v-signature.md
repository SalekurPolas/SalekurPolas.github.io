---
title: "V-Signature"
shortTitle: "JavaScript Signature Library"
description: "A lightweight, high-performance vanilla JavaScript library for capturing and exporting digital signatures on HTML5 Canvas."
category: "Developer Tool"
year: "2023"
featured: true
status: "Completed"
technologies:
  - JavaScript
  - HTML5 Canvas
  - npm
  - Browser APIs
heroImage: "/assets/images/v-signature.png"
github: "https://github.com/SalekurPolas/v-signature"
role: "Creator & Lead Maintainer"
order: 3
---

## The Problem
Web applications frequently require users to sign documents, agreements, or checkout forms directly in the browser. Developers are forced to choose between importing large, bloated packages or building complex canvas drawing logic from scratch. Furthermore, standard canvas drawing looks pixelated on Retina screens and struggles to support stylus/touch input consistently.

## The Idea
Build a zero-dependency, high-performance library that wraps an HTML5 `<canvas>` element, automatically handling device-pixel-ratio scaling, inputs across multiple form-factors, and clean image/vector exports.

## The Approach
Write the engine in pure, modular Vanilla JavaScript. This ensures compatibility across any frontend framework (React, Vue, Angular, or static pages) without locking developers into a specific ecosystem. 

## Engineering Accomplishments
* **Unified Input Management:** Integrated the standard **Pointer Events API** instead of using separate listener stacks for mouse, touch, and pen. This single-handler pattern dramatically decreased bundle footprint and improved reliability.
* **Retina/DPR Scaling:** Automatically calculates the screen's `devicePixelRatio` on load and rescales the canvas width and height properties while maintaining CSS dimensions. This prevents lines from appearing blurry.
* **Vector Smoothing:** Utilizes **Quadratic Bézier Curves** mapping coordinate intervals. Rather than drawing disjointed straight lines between points, the library connects them with smooth curves, producing a realistic, organic signature stroke.

```javascript
// Example Smoothing Algorithm snippet
function drawCurve(p0, p1, p2) {
  ctx.beginPath();
  ctx.moveTo(p0.x, p0.y);
  ctx.quadraticCurveTo(p1.x, p1.y, p2.x, p2.y);
  ctx.stroke();
}
```

## Challenges & Solutions
* **Challenge:** Canvas lines offset or shifted when the page scrolled, or when styling scales was applied.
* **Solution:** Instead of referencing `offsetX` and `offsetY` directly, the library dynamically queries `getBoundingClientRect()` on pointer events, accounting for scroll offsets and CSS scale transforms.

## Current Status
Published and maintained as an open-source npm package. It serves as a lightweight alternative for developers seeking efficient canvas signature capabilities.
