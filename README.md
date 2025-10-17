# סהרה קייטרינג - Sahara Catering Website

A production-ready MVP website for a private chef catering service, built with Next.js, TypeScript, and TailwindCSS.

## Features

- **4 Pages**: Home, Menu, About, Contact
- **RTL Support**: Full Hebrew language support with right-to-left layout
- **Responsive Design**: Mobile-first approach with elegant design
- **WhatsApp Integration**: Floating CTA button and contact form integration
- **Accessibility**: Semantic HTML, focus states, and ARIA labels
- **Modern Stack**: Next.js 15, TypeScript, TailwindCSS, Google Fonts (Heebo)

## Design System

- **Colors**:
  - Gold: `#C7A142`
  - Charcoal: `#111827`
  - White: `#ffffff`
- **Typography**: Heebo font family (Google Fonts)
- **Layout**: Clean, elegant design with RTL support

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd golan-chef-landing
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
# Copy the example file
cp .env.example .env.local

# Edit .env.local and add your WhatsApp phone number
NEXT_PUBLIC_WHATSAPP_PHONE=+972501234567
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_WHATSAPP_PHONE=+972501234567
```

Replace with your actual WhatsApp phone number (include country code).

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── page.tsx        # Home page
│   ├── menu/page.tsx   # Menu page
│   ├── about/page.tsx  # About page
│   ├── contact/page.tsx # Contact page
│   ├── layout.tsx      # Root layout
│   └── globals.css     # Global styles
├── components/         # Reusable components
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Site footer
│   ├── Logo.tsx        # Logo component
│   └── WhatsAppCTA.tsx # Floating WhatsApp button
└── data/              # Static data
    └── menu.json      # Menu items data
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically

### Firebase Hosting

1. Install Firebase CLI:

```bash
npm install -g firebase-tools
```

2. Build the project:

```bash
npm run build
```

3. Export static files:

```bash
npm run export
```

4. Deploy to Firebase:

```bash
firebase deploy
```

## Menu Data

The menu data is stored in `src/data/menu.json` and includes:

- **סלטים** (Salads) - 19 items
- **עיקריות** (Main Courses) - 13 items
- **תוספות** (Sides) - 9 items
- **מנות ראשונות** (First Courses) - 7 items

Each item includes Hebrew name, English translation, and pricing information.

## Features Overview

### Home Page

- Hero section with logo and call-to-action
- Features section highlighting key benefits
- CTA section for lead generation

### Menu Page

- Organized by categories
- Bilingual descriptions (Hebrew/English)
- Pricing information
- WhatsApp integration for inquiries

### About Page

- Company story and values
- Team information
- Kosher certification details
- Trust-building elements

### Contact Page

- Comprehensive contact form
- WhatsApp integration
- Contact information
- Business hours
- Quick contact options

### Global Components

- **Header**: Responsive navigation with mobile menu
- **Footer**: Contact info, links, and company details
- **WhatsApp CTA**: Floating button with scroll-triggered visibility
- **Logo**: Custom SVG logo component

## Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators
- Screen reader friendly
- High contrast ratios
- Alt text for images

## Performance

- Next.js App Router for optimal performance
- Static generation where possible
- Optimized images and fonts
- Minimal JavaScript bundle
- CSS purging with TailwindCSS

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is proprietary software created for Sahara Catering.

## Support

For technical support or questions, please contact the development team.
