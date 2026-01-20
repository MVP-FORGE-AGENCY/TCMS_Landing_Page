# CertifyCloud Landing Page

A stunning, conversion-focused landing page for CertifyCloud (Training & Competence Management System) built with Next.js 14, TypeScript, and Framer Motion.

## Features

- 🎨 **Modern Design**: Beautiful, conversion-focused design with large elements
- 🌍 **Internationalization**: Bulgarian (default) and English support
- ✨ **Animations**: Smooth microanimations and transitions using Framer Motion
- 📱 **Responsive**: Fully responsive design for all devices
- 🔍 **SEO Optimized**: Best practices for search engine optimization
- ⚡ **Performance**: Optimized for fast loading and smooth interactions

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

## Project Structure

```
CertifyCloud_Landing_Page/
├── app/
│   ├── [locale]/          # Locale-specific pages
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/
│   ├── sections/          # Page sections
│   ├── Navigation.tsx     # Navigation component
│   └── Footer.tsx         # Footer component
├── messages/              # Translation files
│   ├── bg.json           # Bulgarian translations
│   └── en.json           # English translations
├── i18n.ts               # i18n configuration
└── middleware.ts         # Next.js middleware for i18n
```

## Sections

1. **Hero**: Eye-catching hero section with animated background and CTAs
2. **Features**: Showcase of key features with icons and descriptions
3. **Benefits**: Benefits for different user types (organizations, training depts, employees)
4. **Industries**: Industries that CertifyCloud serves
5. **CTA**: Conversion-focused call-to-action section
6. **Footer**: Footer with links and social media

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme.

### Content

Update translation files in `messages/` directory to change content.

### Animations

Modify Framer Motion animations in component files to adjust animation behavior.

## SEO

The landing page includes:

- Semantic HTML structure
- Meta tags (title, description, keywords)
- Open Graph tags
- Twitter Card tags
- Structured data (can be added)
- Sitemap (can be generated)
- robots.txt (can be added)

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- AWS Amplify
- Self-hosted

## License

Proprietary - All rights reserved
