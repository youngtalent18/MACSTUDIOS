# MACSTUDIOS

MACSTUDIOS is a React/Vite public website and admin dashboard backed by an Express API and MongoDB.

## Project structure

- `frontend/src/pages/client` contains public pages, including blog articles and portfolio projects.
- `frontend/src/pages/admin` contains the protected dashboard.
- `frontend/src/lib/axios.js` is the shared browser API client.
- `frontend/src/components/SEO.jsx` manages page metadata and JSON-LD.
- `backend/routes` contains API and SEO routes; `backend/controllers` contains request handlers.
- `backend/models` contains the existing MongoDB models.
- `.github/workflows/ci.yml` runs install, lint, build, and backend syntax checks.

## Requirements and local setup

Use Node.js 24 (or a current Node release supported by Vite 8) and MongoDB. Copy `.env.example` to `.env`, fill in the required values, then install and run each app:

```sh
npm ci
npm ci --prefix frontend
npm run dev
npm run dev --prefix frontend
```

The API listens on **port 5000** (`PORT=5000` by default). Vite runs on its usual development port and proxies `/api/*`, `/sitemap.xml`, and `/robots.txt` to the Express server on port 5000.

## Environment variables

Backend values belong in the root `.env`; never place server secrets in `frontend/.env` or variables prefixed with `VITE_`.

| Variable | Required | Purpose |
| --- | --- | --- |
| `PORT` | No | API port; defaults to `5000`. |
| `NODE_ENV` | No | Set to `production` for secure, cross-site auth cookies in production. |
| `MONGODB_URI` | Yes | MongoDB connection string. |
| `ACCESS_TOKEN_SECRET` | Yes | Secret used to sign administrator access tokens. |
| `REFRESH_TOKEN_SECRET` | Yes | Secret used to sign administrator refresh tokens. |
| `CLIENT_ORIGIN` | No | Comma-separated allowed browser origins; defaults to `http://localhost:5173`. |
| `SITE_URL` | Production | Canonical website origin used by sitemap and robots routes, for example `https://your-real-domain.example`. Set this to the verified production origin. |
| `YOUTUBE_API_KEY` | Optional | Server-side YouTube Data API key. Never expose it to Vite. |
| `YOUTUBE_CHANNEL_ID` | Optional | YouTube channel whose recent uploads are displayed. |

The committed `.env.example` contains variable names only. `.env` is ignored by Git. Keep database credentials, signing secrets, and provider keys in the deployment platform's secret settings.

## MongoDB and administrator access

Create a MongoDB database and provide its connection URI as `MONGODB_URI`. The application uses the existing `BlogPost`, `Portfolio`, `Review`, `Booking`, `Contact`, and `User` models; startup does not reset or replace database data.

There is no public account registration. Administrators sign in through the existing authentication routes. The browser stores authentication in HTTP-only cookies; API requests use Axios with credentials enabled. Production deployments using a different frontend origin must use HTTPS and set the allowed `CLIENT_ORIGIN` values accordingly.

## API architecture

Browser components use the centralized Axios client with relative resource paths. Its `/api` base path is routed by Vite to the Express API on port 5000. Public routes include `/api/blog`, `/api/portfolio`, `/api/reviews`, `/api/youtube/latest`, `/api/bookings`, and `/api/contact`. Blog and portfolio admin operations live below `/api/{blog,portfolio}/admin` and require the existing admin middleware. Review submissions remain pending until approved. Blog and portfolio public reads filter out unpublished content.

## YouTube

Set `YOUTUBE_API_KEY` and `YOUTUBE_CHANNEL_ID` on the backend only. `/api/youtube/latest` caches results for ten minutes to reduce API quota use. No YouTube key is bundled into the frontend.

## SEO and local discoverability

`SEO.jsx` sets unique title, description, canonical, Open Graph and Twitter metadata for public routes, and adds Organization, WebSite, WebPage, Service, BlogPosting and BreadcrumbList JSON-LD as applicable. Blog article data comes only from the published article API. Portfolio entries have public detail URLs. Business contact details and the Ghana service area use values already present in the site. Configure the verified production `SITE_URL` before deployment; browser canonical URLs otherwise use the current origin.

The Express `/sitemap.xml` route includes public pages and published blog and portfolio records. `/robots.txt` allows public pages, disallows admin and API paths, and references the sitemap. Route these paths to Express in production, or mirror these dynamic responses in the chosen static host's rewrite/edge configuration. No production hostname or hosting platform is configured in this repository.

## CI and deployment

GitHub Actions runs on pushes and pull requests. It uses `npm ci` for both lockfiles, runs the existing frontend lint command and production build, and checks backend JavaScript syntax. No test script or deployment platform is configured in this repository, so CI does not invent tests or deploy automatically.

For deployment, build the frontend with `npm run build --prefix frontend`, run the API with `npm start` (or `npm run dev` for local backend development), configure the provider to route `/api/*`, `/robots.txt`, and `/sitemap.xml` to the API on port 5000, and serve the built frontend for public routes including `/blog/:slug` and `/portfolio/:slug`. Set the environment variables above in the host's secret/configuration panel. Use a managed MongoDB instance and set `SITE_URL` and `CLIENT_ORIGIN` to the actual production origins.
