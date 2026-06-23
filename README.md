# Krishna Portfolio

A modern creative portfolio website for Krishna, built with React, Vite, and Tailwind CSS. The site is designed for web developer, website support, PHP developer, WordPress support, digital solutions, small-business website support, and digital marketing support opportunities.

## Features

- Responsive React portfolio website
- Sticky navigation with smooth scrolling
- Hero section with animated floating service cards
- Data-driven services, skills, experience, projects, and support capabilities
- Reusable components and accessible focus states
- Resume download call-to-action
- Production build through Vite

## Tech Stack

- React
- Vite
- Tailwind CSS
- Lucide React icons

## Local Setup

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Resume PDF

The resume download buttons point to:

```text
public/Krishna_Web_Developer_Resume.pdf
```

Place the final resume PDF at that exact path before deploying. The button is already wired up and will work as soon as the file is added.

## Deployment

This project can be deployed to platforms that support static Vite builds, including Netlify, Vercel, GitHub Pages, and Cloudflare Pages.

General deployment flow:

1. Run `npm install`
2. Run `npm run build`
3. Deploy the generated `dist` folder

For GitHub Pages, configure the Pages source to use a workflow or deploy the `dist` folder using your preferred GitHub Pages deployment action.
