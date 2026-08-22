---
title: "MMM-Pinfo"
shortTitle: "MagicMirror² Telemetry Module"
description: "A real-time hardware telemetry and system monitoring module for MagicMirror² smart displays with customizable threshold alerts."
category: "Developer Tool"
year: "2023"
featured: true
status: "Completed"
technologies:
  - Node.js
  - JavaScript
  - MagicMirror²
  - Raspberry Pi
  - Linux APIs
  - System Telemetry
heroImage: "/assets/images/mmm-pinfo.png"
github: "https://github.com/SalekurPolas/MMM-Pinfo"
role: "Creator & Maintainer"
order: 5
---

## The Problem
Smart mirror displays powered by **MagicMirror²** frequently run 24/7 on resource-constrained single-board computers like the Raspberry Pi. Without proactive monitoring, hardware degradation, CPU thermal throttling, memory leaks from third-party modules, and unexpected network dropouts go completely unnoticed until the mirror crashes or overheats.

## The Idea
Build a lightweight, highly configurable diagnostic module for the MagicMirror² ecosystem that continuously polls hardware health, network metrics, and storage telemetry—rendering real-time status indicators and firing warning notifications when system parameters exceed safe thresholds.

## The Approach
Developed using **Node.js** and the MagicMirror² module lifecycle architecture (`node_helper.js` background worker and front-facing UI renderer). The module uses low-overhead system inspection libraries to query kernel stats, hardware sensors, and network interfaces without imposing CPU load on the host device.

## Engineering Architecture
```
[ Linux Kernel / Sensors ] ---> [ node_helper.js (Node.js Backend) ]
                                             |
                                   ( Socket Notification )
                                             |
[ MagicMirror UI Display ] <--- [ MMM-Pinfo.js (Frontend Renderer) ]
```

### Telemetry Capabilities
* **Hardware & Device Info:** Queries device model, revision, and unique hardware serial number.
* **Network Diagnostics:** Detects active network interfaces (WLAN / LAN), resolving IPv4, IPv6, and MAC hardware addresses.
* **Resource Monitoring:** Live calculation of RAM utilization (total, used, and percentage) alongside filesystem storage quotas.
* **CPU Health & Thermal Alerts:** Tracks real-time CPU utilization, core temperature, and system uptime.

### Alerting & Threshold Triggers
Users can configure custom threshold boundaries in their MagicMirror `config.js`. If CPU temperature or RAM consumption surpasses defined safety limits, the module dispatches broadcast notifications across the MagicMirror event bus, allowing other modules (e.g., alert banners or buzzer integrations) to respond immediately.

```javascript
// Example MagicMirror Configuration
{
  module: "MMM-Pinfo",
  position: "top_left",
  config: {
    refresh: 5000,
    warning: {
      temp: 75, // Alert when CPU temp exceeds 75°C
      ram: 85   // Alert when RAM usage exceeds 85%
    }
  }
}
```

## Challenges & Solutions
* **Challenge:** Frequent synchronous system queries caused micro-stutters in smooth UI animations on Raspberry Pi 3/4 devices.
* **Solution:** Offloaded all sensor polling to an asynchronous event loop in `node_helper.js`, communicating back to the presentation layer via websocket message batches at configurable throttle intervals (default 5000ms).

## Current Status
Published and actively maintained on GitHub as an open-source module for the global MagicMirror community.
