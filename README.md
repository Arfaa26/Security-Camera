# AAN Security & IT Solutions — Interactive Website

Premium, responsive, interactive website built around the supplied AAN logo, business information, and the requested dark luxury / teal interactive visual language.

## Run locally
1. Copy `.env.example` to `.env`.
2. Run `npm install`.
3. Run `npm start`.
4. Open `http://localhost:3000`.

## Lead storage
Quote, assessment, technician booking, and contact submissions are stored in `data/leads.json`.
For a production deployment with multiple servers, replace this lightweight JSON store with PostgreSQL/Supabase or another managed database.

## Important
- WhatsApp and phone values are read from environment variables and are not embedded in UI components.
- Replace any placeholder/demo project/testimonial content with verified business data before publishing.
- The supplied logo is in `public/assets/aan-logo.png`.
- `public/assets/design-reference.png` is included only as the supplied design reference.

## Production
Set the environment variables on the hosting platform. The app is compatible with Node/Express hosts such as Render, Railway, or a VPS.


## Interactive security experience update
- Reworked section 06 into a 5-step Smart Assessment / Build My Security flow.
- Added dynamic preliminary security plan with priority zones and contextual WhatsApp message.
- Reworked section 07 into an interactive conceptual remote-monitoring dashboard with live-view, alerts, playback and device tabs.
- Reworked section 08 into a Night Security Lab with day/night comparison, low-light/IR/color-night concepts, environments and scenario simulator.
- Added responsive styling for the new interactive sections.
