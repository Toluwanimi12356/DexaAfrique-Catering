# DexaAfrique's Catering Services

A responsive business website for DexaAfrique's Catering Services in Lagos, Nigeria. Built with React and Vite, it showcases catering and event services and helps visitors prepare enquiries through WhatsApp.

## Features

- **Service showcase:** 12 offerings, including social and corporate events, lunch box delivery, outdoor catering, pastries, private chef services, and event management.
- **Business information:** About section, client testimonials, contact details, and social links.
- **WhatsApp enquiries:** A form collects event details, validates required name and phone fields, and opens WhatsApp with a prefilled message for the visitor to send.
- **Responsive navigation:** Mobile menu, section links, floating WhatsApp button, and scroll-to-top control.
- **Motion and interaction:** Framer Motion animations, animated statistics, and Lenis smooth scrolling.
- **Loading improvements:** Lazy-loaded enquiry section and service images.
- **Page metadata:** Search description and Open Graph tags in the HTML entry point.

This is a frontend application. Enquiries are handed off to WhatsApp; the project does not include a backend, database, payment processing, or booking management system.

## Tech Stack

| Technology | Purpose |
| --- | --- |
| React 18 | Component-based user interface |
| JavaScript and CSS | Application logic and responsive styling |
| Vite 5 | Development server and production builds |
| Framer Motion | UI animations |
| Lenis | Smooth scrolling |
| React Hot Toast | Notifications |

## Getting Started

Install Node.js and npm using a version compatible with Vite 5 (Node.js 18 or 20+).

```bash
git clone https://github.com/Toluwanimi12356/DexaAfrique-Catering.git
cd DexaAfrique-Catering
npm ci
npm run dev
```

Open the local URL printed by Vite in your terminal.

No environment variables or API keys are required by the current application.

## Available Commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Generate the production site in `dist/` |
| `npm run preview` | Preview the production build locally |

To check a production build locally:

```bash
npm run build
npm run preview
```

## Project Structure

```text
public/                 Brand assets and service images
src/
  components/           Page sections and reusable UI components
  data/content.js       Services, testimonials, navigation, and contact details
  App.jsx               Page composition
  main.jsx              React entry point and scrolling provider
  styles.css            Site styling and responsive layouts
assets/                 Additional standalone CSS and JavaScript files
index.html              HTML entry point and page metadata
vite.config.js          Vite configuration
```

## Customization

- Update service cards, testimonials, navigation, and contact links in `src/data/content.js`.
- Edit enquiry fields and event options in `src/components/EnquirySection.jsx`. Its submit handler also contains the WhatsApp destination number; update it when changing the business contact.
- Update section-specific copy in `src/components/`.
- Replace images in `public/` and adjust their references where needed.
- Adjust colors, typography, spacing, and responsive layouts in `src/styles.css`.
- Update the page title, metadata, and social sharing URL in `index.html` before deploying under a different domain.

## Deployment

The production build can be hosted on a static hosting service such as Vercel.

Use these build settings:

```text
Build command:     npm run build
Output directory:  dist
```

The `dist/`, `node_modules/`, and local `.vercel/` directories are excluded from version control.
