import background from '../data/professional-background.json';
import { displaySkill } from '../data/skills';

const cardClass = 'min-w-0 rounded-2xl border border-white/10 bg-[#141414] p-6 md:p-8';
const headingClass = 'mb-8 text-3xl font-black tracking-tight md:text-4xl';

function SourceLink({ url, children }) {
  if (!url || !/^https:\/\//i.test(url)) return null;
  return <a href={url} target="_blank" rel="noopener noreferrer" className="mt-5 inline-block text-sm font-semibold text-red-400 hover:text-white">{children} <span aria-hidden="true">↗</span></a>;
}

function CertificationCard({ item }) {
  return (
    <article className={cardClass}>
      {item.status === 'earned' && <p className="mb-3 text-xs font-mono uppercase tracking-widest text-red-400">Certified</p>}
      <h3 className="text-xl font-bold">{item.name}</h3>
      <p className="mt-3 text-white/80">{item.issuer}</p>
      {item.issued && <p className="mt-3 text-sm text-red-400">Issued {item.issued}</p>}
      {item.expires && <p className="mt-2 text-sm text-white/75">{item.status === 'expired' ? 'Expired' : 'Expires'} {item.expires}</p>}
      {item.credentialId && <p className="mt-3 [overflow-wrap:anywhere] text-xs font-mono text-white/65">Credential: {item.credentialId}</p>}
      {item.showLink !== false && <SourceLink url={item.credentialUrl || item.sourceUrl || background.sourceUrl}>{item.credentialUrl ? 'View credential' : 'View on LinkedIn'}</SourceLink>}
    </article>
  );
}

const allSections = ['experience', 'recommendations', 'education', 'certifications'];

export default function ProfessionalBackground({ sections = allSections }) {
  const recommendations = sections.includes('recommendations') ? background.recommendations : [];
  const experience = sections.includes('experience') ? background.experience : [];
  const education = sections.includes('education') ? background.education : [];
  const certifications = sections.includes('certifications') ? background.certifications : [];
  if (![recommendations, experience, education, certifications].some(items => items.length)) return null;

  return (
    <section id={sections.includes('experience') ? 'background' : `${sections[0]}-section`} aria-label={sections.length === 1 ? sections[0] : 'Professional background'} className="border-y border-white/10 bg-[#0b0b0b] px-6 py-24 text-white md:px-12">
      <div className="mx-auto max-w-6xl space-y-20">
        {experience.length > 0 && <div className="flex flex-wrap items-center justify-between gap-5 border-b border-white/10 pb-6">
          <p className="text-xs font-mono uppercase tracking-widest text-red-400">Career & recognition</p>
          <nav aria-label="Professional background sections" className="flex flex-wrap gap-5 text-sm text-white/80">
            <a className="hover:text-red-400" href="#experience">Experience</a>
            <a className="hover:text-red-400" href="#recommendations">Recommendations</a>
            <a className="hover:text-red-400" href="#education">Education</a>
            <a className="hover:text-red-400" href="#certifications">Certifications</a>
          </nav>
        </div>}
        {recommendations.length > 0 && (
          <div id="recommendations" className="scroll-mt-8">
            <p className="mb-3 text-xs font-mono uppercase tracking-widest text-red-400">Recommendations received</p>
            <h2 className={headingClass}>What colleagues say.</h2>
            <p className="mb-8 max-w-2xl text-base leading-relaxed text-white/75">Recommendations from colleagues, a client and a direct manager. In their own words, on engineering, leadership and collaboration.</p>
            <div className="grid grid-cols-1 items-start gap-5 md:grid-cols-2 xl:grid-cols-3">
              {recommendations.map(item => (
                <figure key={item.id} className={cardClass}>
                  <blockquote className="text-lg font-medium leading-relaxed text-white/90">“{item.excerpt || item.quote}”</blockquote>
                  {item.excerpt && (
                    <details className="mt-5 border-t border-white/10 pt-4">
                      <summary className="cursor-pointer text-sm font-semibold text-red-400 hover:text-white">Read full recommendation<span className="sr-only"> from {item.author}</span></summary>
                      <blockquote className="mt-4 whitespace-pre-line [overflow-wrap:anywhere] text-sm leading-relaxed text-white/80">{item.quote}</blockquote>
                    </details>
                  )}
                  <figcaption className="mt-6 border-t border-white/10 pt-5">
                    <p className="font-semibold">{item.author}</p>
                    {item.authorRole && <p className="mt-1 text-sm text-white/75">{item.authorRole}</p>}
                    {item.relationship && <p className="mt-2 text-xs text-white/65">{item.relationship}</p>}
                    {item.date && <p className="mt-2 text-xs text-white/65">{item.date}</p>}
                    <SourceLink url={item.sourceUrl || background.sourceUrl}>Read on LinkedIn</SourceLink>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        )}
        {experience.length > 0 && (
          <div id="experience" className="scroll-mt-8">
            <h2 className={headingClass}>Professional experience.</h2>
            <div className="space-y-5">
              {experience.map(item => (
                <article key={item.id} className={cardClass}>
                  <p className="mb-2 text-xs font-mono text-red-400">{item.dates}</p>
                  <h3 className="text-xl font-bold">{item.role}</h3>
                  <p className="mt-2 text-white/80">{[item.company, item.location].filter(Boolean).join(' · ')}</p>
                  {item.description && <p className="mt-4 whitespace-pre-line [overflow-wrap:anywhere] text-base leading-relaxed text-white/75">{item.description}</p>}
                  {item.highlights?.length > 0 && <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-white/80">{item.highlights.map(text => <li key={text}>{text}</li>)}</ul>}
                  {item.currentProject && (
                    <div className="mt-6 rounded-xl border border-red-600/25 bg-red-600/5 p-5">
                      <p className="mb-2 text-[11px] font-mono uppercase tracking-widest text-red-400">Current project</p>
                      <h4 className="font-semibold">{item.currentProject.title}</h4>
                      <p className="mt-3 text-sm leading-relaxed text-white/80">{item.currentProject.description}</p>
                      <ul className="mt-4 space-y-1 text-xs text-red-300" aria-label="Current project skill frameworks">
                        {item.currentProject.frameworks.map(name => <li key={name}>{name}</li>)}
                      </ul>
                      <details className="mt-4">
                        <summary className="cursor-pointer text-sm font-semibold text-red-400">Current AI project skills</summary>
                        <ul className="mt-3 flex flex-wrap gap-2" aria-label="Current AI project skills">
                          {item.currentProject.skills.map(skill => <li key={skill} className="rounded border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80">{skill}</li>)}
                        </ul>
                      </details>
                    </div>
                  )}
                  {item.skills?.length > 0 && (
                    <details className="mt-5 border-t border-white/10 pt-4">
                      <summary className="cursor-pointer text-sm font-semibold text-red-400">Skills used in this role<span className="sr-only">: {item.role} at {item.company}</span></summary>
                      <ul className="mt-4 flex flex-wrap gap-2" aria-label={`Skills for ${item.role}`}>
                        {item.skills.map(skill => <li key={skill} className="rounded border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80">{displaySkill(skill)}</li>)}
                      </ul>
                    </details>
                  )}
                  <SourceLink url={item.sourceUrl || background.sourceUrl}>View experience</SourceLink>
                </article>
              ))}
            </div>
          </div>
        )}
        {(education.length > 0 || certifications.length > 0) && <div className="space-y-20">
          {education.length > 0 && (
            <div id="education" className="scroll-mt-8">
              <h2 className={headingClass}>Education.</h2>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">{education.map(item => (
                <article key={item.id} className={cardClass}>
                  <h3 className="text-xl font-bold">{item.institution}</h3>
                  <p className="mt-3 text-white/80">{item.qualification}</p>
                  {item.dates && <p className="mt-3 text-sm text-red-400">{item.dates}</p>}
                  {item.grade && <p className="mt-3 text-sm text-white/80">Grade: {item.grade}</p>}
                  {item.description && <p className="mt-3 text-base leading-relaxed text-white/75">{item.description}</p>}
                  <SourceLink url={item.sourceUrl || background.sourceUrl}>View education</SourceLink>
                </article>
              ))}</div>
            </div>
          )}
          {certifications.length > 0 && (
            <div id="certifications" className="scroll-mt-8">
              <h2 className={headingClass}>Certifications.</h2>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                {certifications.slice(0, 6).map(item => <CertificationCard key={item.id} item={item} />)}
              </div>
              {certifications.length > 6 && (
                <details className="mt-6 rounded-xl border border-white/10 p-5">
                  <summary className="cursor-pointer text-base font-semibold text-red-400">View {certifications.length - 6} more certifications & training</summary>
                  <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {certifications.slice(6).map(item => <CertificationCard key={item.id} item={item} />)}
                  </div>
                </details>
              )}
            </div>
          )}
        </div>}
        {recommendations.length > 0 && <p className="border-t border-white/10 pt-6 text-xs leading-relaxed text-white/60">Recommendations received on LinkedIn. Captured on 18 October 2026 with the authors’ wording and attribution.</p>}
        {certifications.length > 0 && <p className="border-t border-white/10 pt-6 text-xs leading-relaxed text-white/60">Azure AI-200 and Databricks Generative AI Engineer Associate qualifications confirmed directly. Other credential dates and expiry status are as listed on LinkedIn on 18 October 2026.</p>}
      </div>
    </section>
  );
}
