# Drona IQ - Unified Education Operating System

The strongest student success ecosystem in North India.

## Setup Instructions

To resolve `auth/unauthorized-domain` error:

1. Go to [Firebase Authentication Settings](https://console.firebase.google.com/u/0/project/dronaiq/authentication/settings).
2. Click on the **Authorized Domains** tab.
3. Add the domain you see in your browser's address bar (e.g., `*.workstations.googleusercontent.com`).

To resolve Firestore permissions:
1. Go to [Firestore Database](https://console.firebase.google.com/u/0/project/dronaiq/firestore).
2. Ensure you have created a database in **Test Mode** or updated the rules to allow reads/writes for prototyping.

## Key Modules
- **Public Site**: Home page and local landing pages.
- **Student Hub**: `/student` - Gamified learning tracker.
- **Parent Portal**: `/parent-dashboard` - Performance monitoring.
- **Admin CRM**: `/admin/leads` - Enrollment management.
- **Tutor Network**: `/tutor-portal` - Educator registration.
- **AI Assistant**: `/assistant` - Neural doubt solver.
