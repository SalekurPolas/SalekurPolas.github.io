---
title: "Tuhur"
shortTitle: "Mosque Discovery Platform"
description: "A localized Flutter and Laravel discovery platform helping users locate nearby mosques and track real-time prayer information."
category: "Product"
year: "2023 — Present"
featured: true
status: "In Progress"
technologies:
  - Flutter
  - Dart
  - Laravel
  - MySQL
  - Google Maps API
  - Geolocation
heroImage: "/assets/images/tuhur.png"
website: "https://tuhur.org"
role: "Developer"
order: 2
---

## The Problem
For travelers and local residents alike, locating nearby mosques in unfamiliar areas is often difficult. Furthermore, daily prayer timings vary slightly by location and local community consensus. Traditional mapping applications frequently fail to list localized prayer schedules, facilities (such as dedicated spaces for women), or accessibility amenities.

## The Idea
Build a map-centric, crowdsourced mobile application that provides real-time proximity calculations, offline prayer schedules, and detailed facility directories. The platform enables community moderation so that information remains accurate and current.

## The Approach
Leverage **Flutter** and **Dart** for a highly responsive, native mobile application that feels premium on both iOS and Android. Combine it with a robust **Laravel** REST API to serve location metadata, handle search calculations, and process crowdsourced listings.

## Engineering Architecture
```
[ Flutter Geolocation API ] ---> [ Geohash Query ] ---> [ Laravel API ]
                                                             |
[ SQLite Local Database ] <--- Offline Sync Cache <--- [ MySQL DB ]
```

### Geolocation & Spatial Queries
To minimize latency during map navigation, the backend calculates coordinates using Geohashes. Instead of evaluating heavy floating-point distances for thousands of records on every zoom event, the API retrieves bounding-box matches in a single lookup and sends them as light JSON payloads to the Flutter app.

### Offline Resilience
Because network reliability fluctuates when users are on the move, we designed an offline-first scheduler. Daily prayer timetables and visited mosque listings are serialized and cached in a local **SQLite** database on the device, ensuring the app remains fully functional without internet access.

## Challenges & Solutions
* **Challenge:** Heavy marker clustering on the map degraded map render frame rates to 30fps on older devices.
* **Solution:** We implemented customized coordinate clustering in Dart. Markers within specific coordinate grids are dynamically combined into numbered cluster indicators at high zoom levels, restoring smooth 60fps animations.

## Current Status
Successfully completed and deployed to developers for review. The core architecture is stable and serves as a blueprint for localized, utility-focused mobile products.
