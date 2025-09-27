# WASL Corporate Website

A premium bilingual (Arabic/English) corporate website for WASL (Al-Sabereen Workforce Transportation & General Supplies).

## Features

- 🌐 **Bilingual Support**: Full Arabic (RTL) and English (LTR) support
- 🎨 **Premium Design**: Corporate luxury aesthetic with Deep Green (#0C5F3D) branding
- 📱 **Responsive**: Mobile-first design optimized for all devices  
- 🚀 **Performance**: Optimized for Core Web Vitals (LCP < 2s, CLS < 0.1)
- ♿ **Accessibility**: WCAG AA+ compliance with semantic HTML
- 🔍 **SEO Optimized**: Structured data, hreflang, sitemap, OpenGraph
- 🔄 **Auto-Translation**: Pipeline to keep Arabic content synchronized

## Tech Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS with RTL support
- **Internationalization**: next-intl
- **Icons**: Lucide React
- **Animation**: Framer Motion (respects reduced-motion)

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Open browser**: Visit [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/[locale]/          # Next.js 13+ app directory with locale routing
│   ├── page.tsx          # Home page
│   ├── about/            # About page
│   ├── services/         # Services page
│   ├── fleet/            # Fleet page
│   ├── clients/          # Clients page
│   └── contact/          # Contact page
├── components/           # Reusable components
│   ├── ui/              # UI components (Button, Card, Section)
│   ├── layout/          # Layout components (Navbar, Footer)
│   └── sections/        # Page sections (Hero, Features, etc.)
├── messages/            # Internationalization files
│   ├── en.json         # English content (source of truth)
│   └── ar.json         # Arabic content
└── lib/                # Utilities and configurations
```

## Content Management

### Adding/Editing Content

All content is managed through JSON files in `src/messages/`:

- **English**: `src/messages/en.json` (source of truth)
- **Arabic**: `src/messages/ar.json`

### Auto-Translation Pipeline

To keep Arabic content synchronized:

1. **Edit English content** in `src/messages/en.json`
2. **Run translation script**:
   ```bash
   npm run translate
   ```
3. **Review and refine** Arabic translations in `src/messages/ar.json`

> **Note**: To enable automatic translation, add your translation API key to `.env.local` and update `scripts/translate.js`

### Adding New Clients/Services

1. Edit the relevant arrays in `src/messages/en.json`
2. Run the translation script
3. The changes will appear automatically on the website

## SEO Configuration

Each page includes:
- Meta titles and descriptions (bilingual)
- OpenGraph tags for social sharing
- Structured data (Organization, WebSite, LocalBusiness)
- hreflang tags for language alternates
- Canonical URLs

## Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Deploy automatically on push to main branch
3. Preview builds for pull requests

### Other Platforms
- **Netlify**: Supports Next.js deployments
- **Cloudflare Pages**: With Node.js support

## Environment Variables

Create `.env.local` for local development:

```env
# Translation API (optional)
DEEPL_API_KEY=your_deepl_api_key
GOOGLE_TRANSLATE_API_KEY=your_google_api_key

# Analytics (optional)
NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id
```

## Performance

- ✅ Lighthouse score 95+ (Performance, Best Practices, SEO, Accessibility)
- ✅ Core Web Vitals optimized
- ✅ Image optimization with Next.js Image component
- ✅ Code splitting and lazy loading
- ✅ Reduced motion support

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

1. Edit content in `src/messages/en.json`
2. Run `npm run translate` to update Arabic
3. Test both languages: `/en` and `/ar`
4. Ensure accessibility with keyboard navigation
5. Check responsive design on mobile devices

## License

© 2025 WASL – Al-Sabereen Workforce Transportation & General Supplies. All rights reserved.