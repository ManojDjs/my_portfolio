import { aiProjectSkillGroups } from '../data/skills';

function CapabilityGroups() {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2 xl:grid-cols-3">
      {aiProjectSkillGroups.map(group => (
        <article key={group.title} className="min-w-0 border-t border-white/15 pt-5">
          <p className="mb-2 text-[10px] font-mono uppercase tracking-wider text-white/60">{group.platform}</p>
          <h4 className="mb-3 text-base font-semibold text-white/90">{group.title}</h4>
          <ul className="flex flex-wrap gap-2" aria-label={group.title}>
            {group.skills.map(skill => <li key={skill} className="rounded border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-xs text-white/80">{skill}</li>)}
          </ul>
        </article>
      ))}
    </div>
  );
}

export default function AiProjectSkills({ id, context = 'skills' }) {
  const isWork = context === 'work';
  return (
    <div id={id} className="mt-12 border-t border-white/10 pt-9" aria-labelledby={`${id}-title`}>
      {isWork && <p className="mb-3 text-[11px] font-mono uppercase tracking-widest text-red-400">Applied in my current AI project</p>}
      <h3 id={`${id}-title`} className="text-2xl font-bold tracking-tight">{isWork ? 'Azure AI + Databricks GenAI.' : 'AI & Cloud Engineering'}</h3>
      {isWork ? (
        <>
          <p className="mb-7 mt-3 max-w-3xl text-base leading-relaxed text-white/75">Azure AI-200 and Databricks GenAI capabilities supporting the application—from retrieval and model lifecycle management to deployment and observability.</p>
          <CapabilityGroups />
        </>
      ) : (
        <details className="mt-5 rounded-xl border border-white/15 bg-white/[0.02] px-5 py-2">
          <summary className="cursor-pointer py-2 font-medium text-white/90">Explore the Azure & Databricks toolkit</summary>
          <div className="pb-4 pt-5"><CapabilityGroups /></div>
        </details>
      )}
    </div>
  );
}
