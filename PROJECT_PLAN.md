# Project Plan

The portfolio currently lists project ideas only. No project is presented as completed until it exists in its own repository and has been reviewed.

## First project to build

### SOC alert investigation dashboard

A small, focused project aligned with the SOC Analyst direction:

- frontend: React + TypeScript + Vite
- design: Figma first, then accessible responsive UI
- data: synthetic alerts only; no real personal, company, or security-sensitive data
- core flow: alert -> evidence -> severity -> investigation notes -> response status
- deployment: Vercel after local build, security checks, and production review

## Separate repository structure

Create the project outside this portfolio repository:

```text
soc-alert-dashboard/
  src/
  public/
  tests/
  .github/workflows/
  .env.example
  README.md
  package.json
```

## Security baseline before Vercel

- Keep secrets out of Git, Figma exports, frontend source, and client-side environment variables.
- Use synthetic data in the first version.
- Validate and sanitize all user-controlled input.
- If an API is needed, keep it server-side and enforce authentication and authorization there.
- Add security headers, a restrictive Content Security Policy, HTTPS-only production settings, and no-store handling for sensitive responses.
- Pin dependency versions, run audit checks, and keep the dependency surface small.
- Add rate limiting and abuse protection to any server/API route.
- Review logs for accidental secrets or personal data before deployment.
- Configure Vercel environment variables by environment and use least privilege for external services.
- Test the deployed site, preview deployments, forms, redirects, and error states before sharing the URL.

## Later project options

1. IT troubleshooting knowledge base
2. Operations data dashboard
3. ERP workflow map

Each project should stay small: one clear problem, one focused user flow, safe sample data, documented decisions, and a short security review.
