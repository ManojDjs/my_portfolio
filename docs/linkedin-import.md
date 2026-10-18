# LinkedIn content import

Source: https://www.linkedin.com/in/jaya-deep-satya-manoj-doddi-8b5064118/

Imported on 18 October 2026 from the signed-in LinkedIn profile with Manoj’s authorization.

## Captured sections

- Five experience entries: Senior Data Engineer and Data Engineer at Expleo Group; Associate Python Developer and Python Developer at RIG TECHNOLOGIES PRIVATE LIMITED; Student Worker at Northumbria University.
- Two degrees: Advanced Computer Science master’s at Northumbria University (Merit); Computer Science BTech at Andhra University (grade listed as 83, without assuming a percentage).
- Nineteen certifications/accreditations/course and virtual experience completions, retaining the source issuers, dates, identifiers and supplied verification links.
- Six received recommendations: Prashant Subedi, Minn Pongpaibul, Martin Fearon, Nipuni Karunaratne, Tarun M and Irene Virdis.

Section URLs are the main profile URL followed by `details/experience/`, `details/education/`, `details/certifications/` and `details/recommendations/`.

The data lives in `src/data/professional-background.json`. The page displays short verbatim recommendation excerpts with expandable source text. Employment responsibilities are condensed for readability. Repeated wording in Martin Fearon’s original recommendation is retained. Author roles are from profile headlines at capture time, rather than assumed roles at the date of the recommendation; Nipuni’s long headline is shortened to its professional title for display.

Databricks Fundamentals is explicitly listed as expired in June 2026. Generative AI Fundamentals is listed as expiring in June 2027. These statuses were read from LinkedIn; issuer links were preserved but not independently verified. The MTA entry has no external credential link on the profile, so its card links to LinkedIn.

The dataset contains only the requested professional sections. Private profile analytics, recruiter preferences, feed content, cookies and session tokens are not retained. LinkedIn safety redirect links were reduced to their visible credential destination URLs; redirect tracking parameters were not retained.

This is a local snapshot, not an automatic synchronization. Refresh from the source before changing `lastVerifiedAt`. The existing Technical Lead description and recent FastAPI / React AI application remain based on Manoj’s direct instructions, alongside the formal Senior Data Engineer title on LinkedIn.

## Entry fields

Every entry needs a unique `id`. Optional `sourceUrl` links to its source; otherwise the component links to the main profile.

- Experience: `role`, `company`, `location`, `dates`, `description`, `highlights` (array of strings).
- Education: `institution`, `qualification`, `dates`.
- Certifications: `name`, `issuer`, `issued`, `expires`, `credentialId`, `credentialUrl`.
- Recommendations: `author`, `authorRole`, `authorProfileUrl`, `relationship`, `date`, `excerpt`, `quote`.

Recommendations must be received recommendations about Manoj. Preserve the wording and attribution; recommendations written by Manoj about someone else are not testimonials for this portfolio. Do not invent dates, degrees, employers, credentials, ratings or quotations. Keep confidential performance reviews out unless the user explicitly supplies them for inclusion.

## Role skills update

Read all five role-specific LinkedIn skill association dialogs on 18 October 2026. Original skill labels and association source URLs are saved per role in the JSON dataset. The main skills grid normalizes spelling and duplicate labels and combines these with the previously documented toolkit and the current project tools provided directly by Manoj. The AI-200 focus is separately labeled and linked to Microsoft’s official objectives.

While revisiting the source for role skills, nine additional credentials had loaded beyond the initial ten-entry snapshot. These were added with their visible links and dates. Credentials are now listed newest first; the Intermediate Python entry has no issue date on LinkedIn and is placed last.

## Current agent project supplement

Manoj initially confirmed Azure AI-200 and Databricks Generative AI Engineer Associate as skills applied in the current project, and later confirmed both as earned qualifications (see the correction below). He also confirmed that the team is building agents using LangGraph and MLflow. The current Senior Data Engineer experience entry includes this as a separately sourced `currentProject` supplement; the original LinkedIn role details and tags are retained. The combined skills matrix is in `src/data/skills.js` and rendered in Recent Work and Skills by `AiProjectSkills.jsx`. Source frameworks are linked in the component and README.

## Earned qualifications correction

Manoj later explicitly confirmed that he holds both the Azure AI-200 and Databricks Generative AI Engineer Associate qualifications. Two earned certification entries were added based on that direct confirmation, without links, dates or credential IDs as requested. This supersedes the earlier project-skills-only classification.

## Readability review

The two directly confirmed qualifications lead the Certifications section and deliberately have no links. Active credentials precede expired ones; six entries are visible initially and the rest can be expanded. No qualification dates or credential identifiers were inferred.
