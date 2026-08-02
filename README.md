# PT-Elgrano-Ega-website

This is a [Next.js](https://nextjs.org) project for PT Elgrano Garuda Angkasa's export website.

## Deployment

This site is deployed to two places:

- **GitHub Pages** — automatic on every push to `main` via the workflow in `.github/workflows/main.yml`, which builds with `output: 'export'` and publishes the `out/` folder.
- **Hostinger (shared hosting)** — built locally with `DEPLOY_TARGET=static npm run build`, then the `out/` folder is zipped and uploaded/extracted on the hosting panel.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
