# Manoj DJS — Portfolio

A responsive engineering portfolio built with React, Vite and Tailwind CSS.

## Local setup

Use Node.js 22.12+ (Node.js 24 recommended) and npm.

```sh
npm ci
npm run dev -- --host 127.0.0.1
```

Open the URL printed by Vite, normally http://127.0.0.1:5173/.
No API keys or environment variables are required.

## Checks and production build

```sh
npm run lint
npm run build
npm run preview -- --host 127.0.0.1
```

## Content

Personal details and social links are in `src/profile.js`.
Skill groups and combined Azure/Databricks project capabilities are in `src/data/skills.js`. Expertise and project data are in their respective components.
The recent agentic AI application and its tools are highlighted in `src/components/CurrentWork.jsx`, based on the current work details provided by Manoj.
Content was adapted from https://manojdjs-cv.netlify.app/#/ and the earlier portfolio brief identifying Manoj as a Technical Lead working on AI products. The portrait is served from the optimized local `public/profile.webp`; the original image supplied by Manoj is retained at `public/profile.png`.

The contact form opens a prefilled email in the visitor's email app. It does not submit to a backend; the visitor must send the email themselves.

## LinkedIn background and recommendations

`src/data/professional-background.json` stores experience, education, certifications and received recommendations locally. `ProfessionalBackground.jsx` renders selected categories at their place in the page order and hides empty ones.

Imported on 18 October 2026 from Manoj’s signed-in LinkedIn profile: five experience entries, two degrees, nineteen LinkedIn certifications plus two qualifications confirmed directly by Manoj and six received recommendations. The recommendations follow projects, with excerpts and expandable original text. Expired credentials retain their source expiry status. These are saved snapshots; they do not sync automatically with LinkedIn. See `docs/linkedin-import.md` for source notes and field formats.

## Reading order and skill sources

Introduction → About → Experience → Recent work → Expertise → Skills → Projects → Recommendations → Education → Certifications → Contact.

The main and footer navigation follow this order. The skills grid shows all groups without a pinned carousel. Role-specific LinkedIn skill tags are retained on each experience entry and can be expanded on the page. Display names in the main skill grid normalize variants such as Python (Programming Language), Microsoft Power BI and the source typo Tabelaue.

`AiProjectSkills.jsx` is shared by Recent Work and Skills. It combines the current project capabilities mapped to Microsoft AI-200 and Databricks Generative AI Engineer Associate. Manoj confirmed these as current project skills and explicitly identified LangGraph and MLflow as tools used to build the agents. They are also included in the current experience entry and main skills grid. Manoj subsequently confirmed both qualifications as earned; they are included without links, dates or credential IDs.

Skill framework references:
- https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-200
- https://www.databricks.com/learn/certification/genai-engineer-associate
- https://www.databricks.com/sites/default/files/2026-10/databricks-certified-gen-ai-associate-exam-guide-august-2026.pdf

Positioning: software engineering, AI engineering and data engineering. React is a technology used by the current application frontend, not a claim of React specialism. Core skills emphasize Python services, APIs, agents, data platforms, cloud delivery and the professional experience imported from LinkedIn.

## Readability and performance review

The site now shows content immediately, uses the system cursor, provides a sticky desktop header and a mobile menu, and has visible keyboard focus, a skip link, persistent form labels and reduced-motion support. Projects use a responsive grid rather than overlapping animated cards. Six featured credentials are shown first, with the full collection expandable. Animation libraries were removed from the runtime dependencies.

Azure AI-200 and Databricks Generative AI Engineer Associate are earned qualifications confirmed directly by Manoj. Their cards deliberately have no links, issue dates or credential IDs. Existing credential links are retained for the other entries.

## FastAPI and TDD emphasis

Current Work leads with FastAPI and a test-driven development workflow (write a test, make it pass, refactor). FastAPI/TDD are also emphasized in the hero, primary Software Engineering skills group, expertise and current experience entry. These practice details were confirmed by Manoj. The phrase “Applied in my current AI project” appears only in Current Work; Skills uses “AI & Cloud Engineering” with an expandable toolkit to reduce repeated content.

## Deployment

GitHub Pages is built by `.github/workflows/deploy-pages.yml` on pushes to `main`, with the `/my_portfolio/` base path. Enable GitHub Actions as the Pages source in repository settings.

Netlify uses `netlify.toml`: Node 24, `npm run build`, and the `dist` publish directory. The root-path build replaces the existing `manojdjs-cv` site. Public assets use Vite's base URL so both hosts work.

The hero retains a scrolling background, glowing pointer, interactive photo tilt and a full 360° rotation on hover, click or tap, plus the FEATURED DEV badge. Effects respect reduced-motion preferences.
