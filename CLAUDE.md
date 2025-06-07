# Claude Instructions for Animated Spoon Project

## Project Overview
This is an Astro-based website for AARBAA (Americans Against Road Bikers Association of America) - a satirical organization that advocates for road safety and cyclist accountability.

## Key Technologies
- **Framework**: Astro
- **Styling**: Bootstrap 5 (CDN) + Custom CSS
- **Build Tool**: Vite
- **Package Manager**: npm
- **Deployment**: Vercel
- **Form Backend**: Google Sheets via Apps Script

## Project Structure
- `/src/pages/` - Astro page components
- `/src/pages/news/` - News/blog articles (renamed from /blog)
- `/src/components/` - Reusable Astro components
- `/src/layouts/` - Layout components (MainLayout.astro)
- `/src/styles/` - Global styles
- `/public/images/` - Static image assets
- `/dist/` - Built output directory

## Common Commands
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Lint and Type Check Commands
Please ask the user for the specific lint and typecheck commands for this project if needed.

## Important Files
- `astro.config.mjs` - Astro configuration (configured for Vercel deployment)
- `tsconfig.json` - TypeScript configuration
- `package.json` - Project dependencies and scripts
- `src/config.ts` - Site configuration and navigation
- `src/components/ContactForm.astro` - Contact form with Google Sheets integration

## Key Components
- **MainLayout.astro** - Main site layout with navigation and footer
- **ContactForm.astro** - Reusable contact form component
- **NewsCard.astro** - News article preview cards
- **IssueCard.astro** - Issue/concern display cards
- **StatsCounter.astro** - Animated statistics counter

## Recent Updates
- Renamed `/blog` to `/news` throughout the site
- Created two new news articles: operation-rush-hour.astro and membership-milestone.astro
- Replaced JotForm with custom contact form using Google Sheets backend
- Added thank-you page with personalization
- Fixed navigation spacing to prevent logo overlap
- Enhanced "You've Seen Them" section with dramatic styling
- Reverted index.astro to pre-pinecone animation version
- Added `/tusk` calculator page with authentication (from cavinder fr folder)
- Added `/tusk-login` page for calculator authentication
- Fixed Vercel deployment Node.js runtime issue by simplifying configuration

## Contact Form Integration
The contact form uses Google Apps Script to save submissions to Google Sheets:
- Webhook URL is in `src/components/ContactForm.astro` line 42
- Form validates email client-side
- Redirects to /thank-you on success
- Uses sessionStorage for personalization

## Guidelines
1. Follow existing code conventions and patterns
2. Use Astro components and features appropriately
3. Maintain consistency with existing styling (Bootstrap 5 + custom CSS)
4. Test changes in development before considering complete
5. Run lint and type checks when available
6. Keep the satirical but professional tone consistent

## Vercel Deployment Notes
- The project uses `@astrojs/vercel` adapter for serverless deployment
- Node.js runtime is auto-detected by Vercel (currently 20.x)
- Configuration is kept minimal to avoid runtime conflicts
- Build artifacts (.vercel, dist) are gitignored to prevent cache issues
- If deployment fails with runtime errors, ensure vercel.json is minimal

## Authentication Pages
- `/tusk` - Protected calculator page requiring login
- `/tusk-login` - Login page for calculator access
- Credentials: sales@tech.com / jackson1
- Uses sessionStorage for client-side auth persistence