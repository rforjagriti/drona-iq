# Drona IQ - Unified Education Operating System

The strongest student success ecosystem in North India. One Backend. One Database. Multiple Portals.

## 🚀 CRITICAL: Fix auth/unauthorized-domain Error

This error happens when you try to log in from a URL that isn't whitelisted in Firebase.

1.  **Identify your Domain**: Your main production domain is `doondefenceexam.com`. Also include development URLs like `*.workstations.googleusercontent.com`.
2.  **Go to Firebase Console**: Navigate to [Authentication > Settings > Authorized Domains](https://console.firebase.google.com/u/0/project/dronaiq/authentication/settings).
3.  **Add the Domains**:
    - Add `doondefenceexam.com` for production.
    - Add `drona-iq.vercel.app` (if still using for staging).
    - Add `*.workstations.googleusercontent.com` (using the asterisk `*` as a wildcard) to cover all development preview URLs.

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
