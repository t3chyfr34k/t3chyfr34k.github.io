# Technology • Security • Data • Enterprise Systems

Personal portfolio for Shyam Daniel M, built with React, TypeScript, Vite, Tailwind CSS, and Lucide React.

The site presents one connected technical profile across:

- SOC and cybersecurity
- IT support and infrastructure
- Data analytics
- SAP and ERP workflows
- Figma and interface design

This is a static frontend. It has no backend, database, API server, or server-side secrets.

## Requirements

- Node.js 20 or newer
- npm 10 or newer

## Local development

```bash
npm install
npm run dev
```

For a production-like local check:

```bash
npm run build
npm run preview
```

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Type-check and create the production bundle in `dist/` |
| `npm run preview` | Serve the production bundle locally |
| `npm run lint` | Run Oxlint |

## Content updates

Portfolio content is kept separate from the UI. Update these files when adding real information:

- `qxjvmbn/xgewyguffwhc/plkjs.ts` — skills and tools
- `qxjvmbn/xgewyguffwhc/hfqwe.ts` — certifications
- `qxjvmbn/xgewyguffwhc/mnbqwe.ts` — planned projects
- `qxjvmbn/xgewyguffwhc/xgzxc.ts` — experience status

Project ideas are intentionally labeled as planned until they are actually built. Do not add invented experience, results, credentials, or links.

The first live project is OpsLab: [opslab-0kvf.onrender.com](https://opslab-0kvf.onrender.com/). Its project card is linked from the portfolio.

## Deploy to Render

This repository includes [`render.yaml`](render.yaml), so Render can configure the site automatically.

### Blueprint deployment

1. Push the repository to GitHub.
2. Sign in to [Render](https://render.com/).
3. Select **New +** and choose **Blueprint**.
4. Connect this GitHub repository and select its branch.
5. Render will read `render.yaml`.
6. Confirm the service and select **Apply**.
7. Wait for the build to finish and open the generated `onrender.com` URL.

The blueprint uses:

```text
Build command: npm ci && npm run build
Publish directory: dist
```

The `VITE_DEPLOY_TARGET=render` variable makes Vite use `/` as the asset base on Render. The rewrite sends requests to `index.html`, which keeps the static app resilient if client-side paths are added later.

### Manual Render deployment

Create a **Static Site** in the Render dashboard with:

- **Repository:** this GitHub repository
- **Branch:** your deployment branch, usually `main`
- **Build command:** `npm ci && npm run build`
- **Publish directory:** `dist`
- **Environment variable:** `VITE_DEPLOY_TARGET=render`

Add this rewrite rule if the dashboard asks for one:

```text
Source: /*
Destination: /index.html
Action: Rewrite
```

## Deploy to GitHub Pages

The Vite configuration keeps `/Portfolio/` as the default base for GitHub Pages. The existing GitHub Actions workflow builds and deploys `dist/`.

1. Push to the `main` branch.
2. Open the repository **Settings → Pages**.
3. Set the Pages source to **GitHub Actions**.
4. Wait for the workflow to complete.
5. Open `https://t3chyfr34k.github.io/Portfolio/`.

## Deployment checklist

```bash
npm ci
npm run lint
npm run build
```

Then check the deployed site:

- Hero portrait loads
- Navigation anchors work
- Contact links open the intended destinations
- WhatsApp opens the preloaded message
- Mobile layout is readable
- No planned project is presented as completed work
- Render or GitHub Pages assets load without 404 errors

## Security notes

This is a static portfolio, so there are no server secrets to configure. Keep it that way:

- Never commit API keys, passwords, tokens, or private certificates.
- Do not place secrets in `VITE_*` variables; Vite exposes them to browser code.
- Use only public contact links and non-sensitive portfolio content.
- Keep dependencies updated and review changes before deployment.
- Use a separate repository and server-side environment variables if a future project needs private APIs or user data.

## License

No license has been added yet. Add one before redistributing the project.
