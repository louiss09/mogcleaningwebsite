# MOG Clean Website - Commercial Cleaning Services

MOG Clean Website is a React 18.3.1 + TypeScript + Vite 7.1.6 + TailwindCSS commercial cleaning website for Brisbane businesses. The application features a modern responsive design with service pages, quote forms, and business information.

**ALWAYS reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.**

## Working Effectively

### Bootstrap and Dependencies
Install dependencies and validate the environment:
```bash
npm install --legacy-peer-deps
```
- **Duration**: ~21 seconds
- **NEVER CANCEL**: Dependencies must fully install
- **Set timeout**: 60+ seconds minimum to avoid premature cancellation
- **Validation**: Should complete without errors and show "0 vulnerabilities"
- **Note**: The `--legacy-peer-deps` flag is required due to peer dependency conflicts between @types/react versions 18.x and 19.x

### Build Process
Build the production application:
```bash
npm run build
```
- **Duration**: ~4 seconds (very fast)
- **NEVER CANCEL**: Build completes quickly but always wait for completion
- **Set timeout**: 30+ seconds minimum
- **Output**: Creates `dist/` folder with HTML, CSS (~26KB), and JS (~280KB) files
- **Validation**: Build must show "✓ built in X.XXs" without errors

### Development Server
Start the development server:
```bash
npm run dev
```
- **Duration**: ~0.3 seconds to start
- **NEVER CANCEL**: Server starts quickly, runs until stopped
- **URL**: http://localhost:5173/
- **Set timeout**: Use async=true for interactive development
- **Validation**: Should show "VITE vX.X.X ready in XXXms" with local URL

### Preview Built Application
Preview the production build:
```bash
npm run preview
```
- **Prerequisites**: Must run `npm run build` first
- **URL**: http://localhost:4173/
- **Usage**: For testing production build locally
- **Set timeout**: Use async=true, runs until stopped

### Linting
Run code linting:
```bash
npm run lint
```
- **Duration**: ~1 second
- **Current Status**: Linting works correctly, may show minor unused variable warnings
- **Note**: There are 2 known lint warnings in the codebase (unused variables) that don't affect functionality

## Manual Validation Requirements

**CRITICAL**: After making changes, ALWAYS run through these complete end-to-end scenarios:

### Core User Journey Testing
1. **Homepage Navigation Test**:
   ```bash
   npm run dev
   # Wait for server start, then navigate to localhost:5173
   ```
   - Verify homepage loads with hero section
   - Test navigation menu (Home, About Us, Services, Our Process, Contact)
   - Verify all page transitions work without errors
   - Test responsive design by resizing browser

2. **Quote Form Testing**:
   - Navigate to Contact page or use homepage quote form
   - Fill all required fields: Full Name, Phone, Email, Message
   - Submit form and verify success message appears
   - Test form validation with empty fields
   - **Expected Behavior**: Shows alert "Thank you! We'll contact you within 24 hours with your free quote."

3. **Services Page Testing**:
   - Navigate to Services page (/services)
   - Click through to individual service pages:
     - Office Cleaning (/services/offices)
     - Fitness Centers (/services/fitness) 
     - Medical Facilities (/services/health)
     - Educational Institutions (/services/education)
     - Hospitality (/services/hospitality)
     - Retail Spaces (/services/retail)
   - Verify all service detail pages load correctly
   - Test embedded quote forms on service pages

4. **Process and About Pages**:
   - Navigate to Our Process page (/process)
   - Navigate to About Us page (/about)
   - Verify content displays properly with animations

### Phone and Email Link Testing
- Test all phone links: `(07) 1234 5678` should open phone dialer
- Test email links: `info@mogcleaning.com.au` should open email client
- Test social media links: Instagram link should work

### Performance and Error Validation
- Check browser console for JavaScript errors (none should appear)
- Verify all images load (external images may be blocked in some environments - this is normal)
- Test browser back/forward navigation
- Verify URL routing works for all pages

## Repository Structure and Navigation

### Key Directories
```
/src
├── App.tsx                 # Main application component with routing
├── main.tsx               # React application entry point  
├── App.css               # Global styles and animations
├── index.css             # Tailwind CSS imports
├── components/
│   ├── Header.tsx        # Navigation header with logo and menu
│   ├── Footer.tsx        # Site footer with contact info
│   ├── QuoteForm.tsx     # Reusable quote request form
│   └── ScrollToTop.tsx   # Auto-scroll to top on route changes
└── pages/
    ├── Home.tsx          # Homepage with hero and service overview
    ├── About.tsx         # About us page with company info
    ├── Services.tsx      # Services overview page
    ├── Process.tsx       # How it works process page
    ├── Contact.tsx       # Contact page with forms and info
    ├── Testimonials.tsx  # Testimonials page (currently unused)
    └── services/         # Individual service detail pages
        ├── OfficesCleaning.tsx
        ├── FitnessCleaning.tsx
        ├── HealthCleaning.tsx
        ├── EducationCleaning.tsx
        ├── HospitalityCleaning.tsx
        └── RetailCleaning.tsx
```

### Configuration Files
- `package.json`: Dependencies and npm scripts
- `vite.config.ts`: Vite bundler configuration
- `tailwind.config.js`: TailwindCSS styling configuration
- `tsconfig.json`: TypeScript compilation settings
- `eslint.config.js`: ESLint linting rules (has compatibility issue)

## Technologies and Dependencies

### Core Stack
- **React**: 18.3.1 with hooks and functional components
- **TypeScript**: 5.5.3 for type safety
- **Vite**: 7.1.6 for fast development and building
- **TailwindCSS**: 3.4.1 for utility-first styling
- **React Router DOM**: 7.9.1 for client-side routing

### Key Libraries
- **Lucide React**: 0.544.0 for icons throughout the application
- **Supabase**: 2.57.4 (installed but not actively used in current version)

### Development Tools
- **ESLint**: Code linting (has compatibility issue)
- **PostCSS**: CSS processing with Autoprefixer
- **TypeScript ESLint**: TypeScript-specific linting rules

## Common Development Tasks

### Making Code Changes
1. Always start with `npm run dev` in the background
2. Edit files in `src/` directory
3. Changes hot-reload automatically in browser
4. Test your changes using manual validation scenarios above
5. Run `npm run build` to verify production build works
6. **ALWAYS** test the complete user journey before finishing

### Adding New Pages
1. Create new `.tsx` file in `src/pages/`
2. Add route in `src/App.tsx` in the `<Routes>` section
3. Add navigation link in `src/components/Header.tsx` if needed
4. Add footer link in `src/components/Footer.tsx` if appropriate

### Styling Changes
- Use TailwindCSS utility classes primarily
- Custom styles go in `src/App.css`
- Global styles and animations are defined in `src/App.css`
- CSS custom properties for gradients: `.gradient-bg` class available

### Form Changes
- Quote forms use the `QuoteForm` component
- Forms show browser alert on submission (currently no backend)
- Validation is basic HTML5 required field validation
- Forms are in Contact page and individual service pages

## Troubleshooting

### Known Issues and Workarounds
1. **NPM Peer Dependency Conflict**:
   - Error: `ERESOLVE could not resolve` - conflict between @types/react 18.x and 19.x
   - Cause: @types/react-dom@19.1.9 requires @types/react@^19.0.0, but project uses @types/react@^18.3.5
   - Solution: Always use `npm install --legacy-peer-deps` instead of `npm install`
   - Impact: No functional impact - application builds and runs perfectly
   - Status: Known compatibility issue, tracked for future resolution

2. **Lint Warnings**:
   - Warning: Unused variables in QuoteForm.tsx and Home.tsx
   - Impact: No functional impact - these are minor code cleanup items
   - Status: Non-blocking, can be cleaned up in future updates

3. **External Image Loading**:
   - Images from Pexels may be blocked by browser/network security
   - This is normal in some development environments
   - Application functions normally without images
   - Images will load properly in production environments

4. **Font Loading**:
   - Google Fonts may be blocked in some environments
   - Fallbacks are configured: system fonts will be used
   - Does not affect functionality

### Performance Expectations
- **Cold start** (first npm run dev): ~21s for deps + ~0.3s for server = ~21.3s total
- **Warm start** (dev server restart): ~0.3s
- **Production build**: ~4s
- **Hot reload** during development: <1s
- **Page navigation**: Instant (client-side routing)

### Debugging Steps
1. Check console for JavaScript errors (should be none)
2. Verify all routes work: /, /about, /services, /process, /contact
3. Test service detail pages: /services/offices, /services/fitness, etc.
4. Verify forms submit and show success message
5. Check responsive design on different screen sizes
6. Test all links (phone, email, internal navigation)

## Quality Assurance Checklist

Before committing any changes, complete this checklist:

- [ ] `npm install --legacy-peer-deps` completes without errors (21s, set 60s timeout)
- [ ] `npm run build` completes successfully (4s, set 30s timeout)  
- [ ] `npm run dev` starts development server (0.3s, async mode)
- [ ] Homepage loads at localhost:5173 without console errors
- [ ] All navigation links work (Home, About, Services, Process, Contact)
- [ ] Quote form submits and shows success message
- [ ] At least 2 service detail pages load correctly
- [ ] Phone/email links function properly
- [ ] Browser back/forward navigation works
- [ ] No breaking JavaScript errors in console
- [ ] Responsive design works on different screen sizes

## Emergency Information

- **No test suite**: Application has no automated tests configured
- **No CI/CD**: No GitHub Actions or build pipelines configured  
- **No backend**: Forms show alerts only, no actual data submission
- **Development only**: Application is client-side only, requires web server for production
- **Dependencies**: Node.js 20+ and npm 10+ required

Always validate manually using the complete user journey scenarios above. The application is fully functional for development and testing purposes with these instructions.
