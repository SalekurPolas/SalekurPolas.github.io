---
title: "Lagbe"
shortTitle: "Marketplace Ecosystem"
description: "A robust, multi-sided marketplace ecosystem connecting service providers, vendors, and customers from the ground up."
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
  - WebSockets
  - Flutter
heroImage: "/assets/images/lagbe.png"
website: "https://lagbe.co"
role: "Founder"
order: 1
---

## The Problem
Local service booking, vendor commerce, and customer interactions are typically fragmented across various disjointed channels. Traditional systems lack unified billing, real-time coordination, location-based dispatching, and dynamic vendor scheduling. This leads to friction for clients and scheduling inefficiencies for merchants.

## The Idea
Build a cohesive, multi-tenant marketplace platform that bridges customers, service professionals, and retail merchants. The platform coordinates real-time booking, dispatch, communication, and payment processing under a unified dashboard, enabling a seamless local economy.

## The Approach
Leverage **Laravel** to build a highly scalable, queue-driven backend engine, combined with a modular **Vue.js** single-page application for the admin and merchant consoles. For the mobile experience, use **Flutter** to deliver performant, native iOS and Android apps using a shared Dart codebase.

## Engineering Architecture
```
[ Customers / Mobile App ] <--- WebSockets ---> [ Laravel Server ] <---> [ Redis Queue ]
                                                       |
                                                 [ MySQL DB ]
                                                       |
[ Vendors / Web Dashboard ] <--------------------------+
```

### Real-Time Synchronization
To coordinate bookings, we built a real-time notification engine using WebSockets. When a customer requests a service, the system runs a spatial proximity query in MySQL, identifies eligible local vendors, and dispatches job opportunities through a background worker queue in Redis.

### Payment & Escrow System
Implemented split-payment flows using local payment gateways (SSLCommerz) and international processors (Stripe). Transactions support authorization-and-capture cycles, allowing funds to remain in escrow until a service contract is verified.

## Challenges & Solutions
* **Challenge:** High database read-write loads during peak morning dispatch hours caused query blocking.
* **Solution:** We introduced a layered caching system using Redis, offloaded analytical metrics calculations to asynchronous queue jobs, and optimized spatial indexes for coordinate searches. This minimized API request overhead and sustained sub-100ms response times.

## Current Status
Currently in active development and live beta testing. We are monitoring system throughput, refining merchant onboarding flows, and expanding mobile features.
