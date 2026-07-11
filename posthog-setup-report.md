# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the PixelPro Studios Next.js website. PostHog is initialized client-side via `instrumentation-client.ts` (Next.js 15.3+ approach) using environment variables. Since this project uses `output: 'export'` (static export), the SDK connects directly to the PostHog ingestion host — no reverse proxy is used. Eleven events covering the key user journeys are now tracked: lead generation, service exploration, portfolio engagement, and navigation.

| Event Name | Description | File |
|---|---|---|
| `contact_form_submitted` | User successfully submits the Tally contact/enquiry form | `app/contact/page.tsx` |
| `quote_form_viewed` | The faster-quote follow-up form is shown after the initial form is submitted | `app/contact/page.tsx` |
| `contact_method_clicked` | User clicks a contact method card (WhatsApp, Email, or Book a Call) | `app/contact/page.tsx` |
| `book_a_call_clicked` | User clicks the Book a Call CTA in the hero section | `components/HeroSection.tsx` |
| `book_a_call_clicked` | User clicks the Book a Call CTA in the bottom CTA section | `components/CTASection.tsx` |
| `service_card_clicked` | User clicks a service card on the homepage | `components/ServicesSection.tsx` |
| `services_deck_downloaded` | User clicks the download services deck button | `components/ServicesSection.tsx` |
| `nav_link_clicked` | User clicks a navigation link in the expanded navbar | `components/Navbar.tsx` |
| `portfolio_category_changed` | User switches between portfolio categories | `app/portfolio/page.tsx` |
| `portfolio_image_viewed` | User clicks a portfolio image to open it in the lightbox | `app/portfolio/page.tsx` |
| `get_a_quote_clicked` | User clicks Get a Quote on a service detail page | `app/services/av-systems/page.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- **Dashboard**: [Analytics basics (wizard)](https://us.posthog.com/project/507530/dashboard/1833304)
- **Insight**: [Contact form submissions](https://us.posthog.com/project/507530/insights/803Fv8mu)
- **Insight**: [Book a Call clicks by source](https://us.posthog.com/project/507530/insights/RqAj4kBW)
- **Insight**: [Service card clicks by service](https://us.posthog.com/project/507530/insights/MzT0nTc2)
- **Insight**: [Contact method preference](https://us.posthog.com/project/507530/insights/nswp0xLC)
- **Insight**: [Lead conversion funnel](https://us.posthog.com/project/507530/insights/qcDPrCoE)

## Verify before merging

- [ ] Run a full production build (`npm run build`) and fix any lint or type errors introduced by the generated code.
- [ ] Run the test suite — call sites that were rewritten or instrumented may need updated mocks or fixtures.
- [ ] Add `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` and `NEXT_PUBLIC_POSTHOG_HOST` to `.env.example` and any deployment environment configuration (Vercel, Netlify, etc.) so collaborators know what to set.
- [ ] Wire source-map upload (`posthog-cli sourcemap` or your bundler's upload step) into CI so production stack traces de-minify.
- [ ] Extend `get_a_quote_clicked` tracking to the other service pages (`photography`, `videography`, `talent`) by adding the same `import posthog from 'posthog-js'` and `onClick` handler pattern used in `av-systems/page.tsx`.

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.
