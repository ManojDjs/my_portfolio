import { skillCategories } from '../data/skills';
import AiProjectSkills from './AiProjectSkills';

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="bg-[#0b0b0b] px-6 py-24 text-white md:px-12">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-xs font-mono uppercase tracking-widest text-red-400">Technical toolkit</p>
        <h2 id="skills-title" className="text-4xl font-black tracking-tight md:text-5xl">Skills behind the work.</h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 md:text-base">Tools and capabilities from my professional experience and recent AI application work, grouped by how I use them.</p>
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category, index) => (
            <article key={category.title} className={`min-w-0 rounded-2xl border p-6 transition-colors hover:border-red-500/60 ${index === 0 ? 'border-red-500/45 bg-gradient-to-br from-red-500/10 to-[#141414]' : 'border-white/10 bg-[#141414]'}`}>
              <p className="mb-5 text-[10px] font-mono uppercase tracking-widest text-red-400">{index === 0 ? 'FastAPI & test-driven development' : category.tag}</p>
              <h3 className="mb-3 text-xl font-bold">{category.title}</h3>
              <p className="mb-6 text-base leading-relaxed text-white/75">{category.description}</p>
              <ul className="flex flex-wrap gap-2" aria-label={category.title}>
                {category.skills.map(skill => <li key={skill} className={`rounded border px-2.5 py-1.5 text-xs ${index === 0 && ['FastAPI', 'Test-Driven Development (TDD)', 'PyTest'].includes(skill) ? 'border-red-500/30 bg-red-500/10 text-red-200' : 'border-white/10 bg-white/5 text-white/75'}`}>{skill}</li>)}
              </ul>
            </article>
          ))}
        </div>
        <AiProjectSkills id="azure-ai-skills" context="skills" />
      </div>
    </section>
  );
}
