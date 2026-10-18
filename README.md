# Manoj DJS · Software, AI & Data Engineering

My professional portfolio, showcasing experience, engineering projects, certifications and recommendations from colleagues and clients.

I am a Technical Lead based in Derby, United Kingdom, working across software engineering, AI engineering and data engineering. My current work centres on FastAPI services and test-driven development, LangGraph agents, MLflow, and data platforms on Azure and Databricks.

**[View portfolio on Netlify](https://manojdjs-cv.netlify.app/)** · **[GitHub Pages](https://manojdjs.github.io/my_portfolio/)** · **[Source code](https://github.com/ManojDjs/my_portfolio)** · **[LinkedIn](https://www.linkedin.com/in/jaya-deep-satya-manoj-doddi-8b5064118/)**

## What you’ll find

- Professional experience across software, AI and data engineering.
- Current work with FastAPI, Python, TDD, LangGraph, MLflow, Azure and Databricks.
- Selected API, data, AI and web application projects with repository links.
- Recommendations, education and professional certifications.
- An interactive portrait, animated background and glowing mouse pointer, with reduced-motion support.
- Responsive navigation, keyboard access and a contact form that opens an email draft.

## Run locally

Built with React, Vite and Tailwind CSS. Use Node.js **24.13.0** and npm **11.6.2** to match the validated GitHub Pages build.

```sh
npm ci
npm run dev -- --host 127.0.0.1
```

Open [localhost:5173](http://127.0.0.1:5173/). No API keys or environment variables are required.

```sh
npm run lint
npm run build
npm run preview -- --host 127.0.0.1
```

## Project structure

| Location | Content |
| --- | --- |
| `src/profile.js` | Profile, contact details and portfolio links |
| `src/data/professional-background.json` | Experience, education, certifications and recommendations |
| `src/data/skills.js` | Engineering skills and current project capabilities |
| `src/components/CurrentWork.jsx` | FastAPI and agentic AI project overview |
| `src/components/Projects.jsx` | Selected projects |
| `public/profile.webp` | Optimized profile portrait |

Professional background and recommendations are saved snapshots, rather than an automatic LinkedIn sync. See [content source notes](docs/linkedin-import.md) for maintenance details.

The contact form prepares an email in the visitor’s mail app. The visitor must send the email; the site has no message submission backend.

## Deployment

Both live sites deploy automatically when changes are pushed to `main`.

- **[Netlify](https://manojdjs-cv.netlify.app/)** uses `netlify.toml`, `npm run build` and the `dist` publish directory.
- **[GitHub Pages](https://manojdjs.github.io/my_portfolio/)** uses [the Pages workflow](.github/workflows/deploy-pages.yml), which installs dependencies, lints, builds with the `/my_portfolio/` base path and publishes the result.

Public asset paths use Vite’s base URL so the same source works on both hosts.

## Connect

[GitHub](https://github.com/ManojDjs) · [LinkedIn](https://www.linkedin.com/in/jaya-deep-satya-manoj-doddi-8b5064118/) · [Email](mailto:djsmanoj0000@gmail.com)
