---
title: "Bachelor"
shortTitle: "Student & Roommate Manager"
description: "An Android application designed to simplify shared living by coordinating daily meal counts, roommate expense splitting, and academic task tracking."
category: "Product"
year: "2020 — Present"
featured: true
status: "In Progress"
technologies:
  - Android
  - Java
  - Firebase
  - SQLite
  - Google Classroom API
  - REST APIs
heroImage: "/assets/images/bachelor-icon.png"
website: "https://devbac.github.io"
github: "https://github.com/DevBac/CSE299Summer20"
role: "Co-Creator & Android Developer"
order: 3
---

## The Problem
Students and young professionals living away from home in shared apartments ("bachelors") face recurring organizational friction. Managing shared meal counts, calculating daily and monthly grocery expenses, dividing utility bills accurately, and keeping track of individual cash balances usually relies on messy paper ledgers or chaotic chat threads.

## The Idea
Build a dedicated Android application that serves as a central companion for bachelor living. The app provides automated shared meal tracking, accurate expense-splitting algorithms, direct cash ledger records, and academic task reminders in one unified mobile interface.

## The Approach
Developed natively on **Android (Java)** leveraging a hybrid data layer:
1. **Local Offline Cache:** Uses **SQLite** so roommates can log meal counts, grocery costs, and notes without requiring an active internet connection.
2. **Cloud Sync & Auth:** Integrates **Firebase Realtime Database** and Authentication for instantaneous updates across all apartment members' devices.
3. **Academic Integrations:** Connects with the **Google Classroom API** to automatically pull upcoming assignment deadlines and quiz schedules.

## Engineering Architecture
```
[ Roommate A (Android App) ] <---> [ Firebase Realtime DB ] <---> [ Roommate B (Android App) ]
              |                                                               |
    [ Local SQLite DB ]                                             [ Local SQLite DB ]
              |
[ Google Classroom API ]
```

### Core Capabilities
* **Bachelor Meal & Expense Ledger:** Calculates dynamic meal rates based on daily grocery purchases, deposit balances, and individual consumption counts, eliminating manual accounting errors.
* **Internal Cash Transfers:** Enables roommates to record peer-to-peer balance adjustments and verify settled debts.
* **Task & Deadline Assistant:** Synchronizes academic tasks with Google Classroom, firing localized push notifications before quiz dates and project submissions.
* **Focused Group Communication:** Features an integrated in-app messaging channel tailored specifically for flat notices, avoiding social media clutter.

## Challenges & Solutions
* **Challenge:** Multi-user concurrent updates to meal ledgers frequently created calculation desynchronization.
* **Solution:** Implemented atomic transaction operations in Firebase and structured database triggers so that all balance alterations recalculate historical meal rates uniformly.

## Current Status
Active product under continuous iteration and feature expansion to streamline shared living for students and young professionals.
