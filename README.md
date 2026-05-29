# Drona IQ - Unified Education Operating System

The strongest student success ecosystem in North India. One Backend. One Database. Multiple Portals.

## 🚀 Setup Instructions

To resolve `auth/unauthorized-domain` error:

1. Go to [Firebase Authentication Settings](https://console.firebase.google.com/u/0/project/dronaiq/authentication/settings).
2. Click on the **Authorized Domains** tab.
3. Add these two domains:
   - `drona-iq.vercel.app` (Your Production URL)
   - `*.workstations.googleusercontent.com` (Your Development URL)

To resolve Firestore permissions:
1. Go to [Firestore Database](https://console.firebase.google.com/u/0/project/dronaiq/firestore).
2. Ensure you have created a database in **Test Mode** or updated the rules to allow reads/writes for prototyping.

## 🛠 Key Modules
- **Public Site**: Home page & SEO-optimized local landing pages.
- **Student Hub**: `/student` - Gamified learning, XP tracking, AI Doubt Solver.
- **Parent Portal**: `/parent-dashboard` - Performance monitoring, fee status, academic alerts.
- **Tutor Network**: `/tutor-portal` - Educator registration & verification.
- **Admin CRM**: `/admin/leads` - Unified enrollment & allocation management.
- **AI Ecosystem**: `/revision-generator`, `/ai-study-planner`, `/academic-health-check`.

## 🌐 SEO Strategy
Local landing pages are dynamically generated at `/tuition-in/[locality]`. 
Example: `/tuition-in/rajpur-road`.
