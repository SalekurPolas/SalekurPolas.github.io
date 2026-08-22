---
title: "Smart Mirror"
shortTitle: "AI/IoT Smart Mirror"
description: "An interactive IoT smart mirror combining face recognition, real-time widget displays, and voice commands."
category: "Hardware"
year: "2023"
featured: true
status: "Completed"
technologies:
  - Raspberry Pi
  - Flutter
  - Python
  - OpenCV
  - Laravel
  - MQTT
heroImage: "/assets/images/smart-mirror.png"
website: "https://asmcse.github.io"
role: "Engineer"
order: 7
---

## The Problem
Standard smart mirror displays are generally non-interactive and static, displaying generic information (like date and weather) regardless of who is looking at them. Additionally, adding tactile touchscreen inputs to a glass mirror leads to smudges and degrades visibility.

## The Idea
Build a personalized, touchless IoT smart mirror. By utilizing facial recognition and distance sensors, the mirror automatically identifies the user standing in front of it and dynamically customizes the interface—loading their specific calendar events, custom widgets, commute routes, and notifications.

## The Approach
1. **Hardware:** Raspberry Pi 4, a 24-inch LCD panel, a two-way mirror glass frame, a camera module, and an ultrasonic distance sensor.
2. **Software Pipeline:** A Python-based computer vision script running OpenCV for face detection, communicating via MQTT to a responsive, hardware-optimized Flutter UI dashboard.

## Engineering Architecture
```
[ Ultrasonic Sensor ] ---> ( Within Range? ) ---> [ Camera + OpenCV Face Detection ]
                                                               |
[ Flutter UI Panel ] <------------- MQTT Message <--------------+
         |
[ External APIs (Weather / Calendar) ]
```

### Edge Face Detection
To avoid sending camera feeds to external servers, face recognition is executed locally on the Raspberry Pi using Python and OpenCV (utilizing optimized MobileNet-SSD deep learning models). When a face is recognized, a small MQTT payload containing the user ID is published locally.

### Fluid Local UI
The interface dashboard is built with **Flutter**. Since Flutter compiles to native ARM code, it achieves smooth 60fps animations directly on the Raspberry Pi's processor. The dashboard subscribes to the MQTT broker and instantly updates layout widgets when a user approaches or departs.

## Challenges & Solutions
* **Challenge:** Running computer vision models continuously on a Raspberry Pi 4 caused CPU overheating and thermal throttling.
* **Solution:** We integrated an ultrasonic distance sensor (HC-SR04) at the top of the frame. The camera and OpenCV recognition pipeline remain in a suspended state until the sensor registers an object within 1.2 meters. This dynamic sleep cycle reduced CPU utilization by 75%, cooling the system down to safe operational limits.

## Current Status
Successfully built as a functional hardware prototype. The project serves as an excellent demonstration of combining hardware design, local AI capabilities, and clean UI engineering.
