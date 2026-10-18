import AiProjectSkills from './AiProjectSkills';

const practices = [
  { step: '01', title: 'Write the test', description: 'Define the expected behaviour before implementation.', tone: 'text-rose-300' },
  { step: '02', title: 'Make it pass', description: 'Implement the FastAPI service against the test.', tone: 'text-emerald-300' },
  { step: '03', title: 'Refactor', description: 'Improve the design while keeping the tests passing.', tone: 'text-white' },
];
const capabilities = [
  { title: 'API & backend engineering', description: 'Python services, REST APIs and application integrations.', tools: ['FastAPI', 'Python', 'REST APIs'] },
  { title: 'Agent workflows', description: 'Agent orchestration and the AI application lifecycle.', tools: ['LangGraph', 'MLflow', 'RAG'] },
  { title: 'Data & cloud delivery', description: 'AI data workloads, containers and application delivery.', tools: ['Azure', 'Databricks', 'Docker', 'Kubernetes', 'Azure DevOps'] },
];

export default function CurrentWork() {
  return (
    <section id="current-work" aria-labelledby="current-work-title" className="relative overflow-hidden border-y border-white/10 bg-[#0b0b0b] px-6 py-20 text-white md:px-12 md:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute right-0 top-0 h-[460px] w-[460px] bg-[radial-gradient(ellipse_at_top_right,rgba(229,9,20,0.12),transparent_70%)]" />
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-10 grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-mono uppercase tracking-widest text-red-400">Current work / Agentic AI application</p>
            <h2 id="current-work-title" className="text-4xl font-black leading-[1.08] tracking-tight md:text-5xl">FastAPI at the core.<br /><span className="text-red-500">Intelligence built in.</span></h2>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-white/75">My current work brings software, AI and data engineering together: FastAPI services built with test-driven development, AI agents with LangGraph and MLflow, and data platforms on Azure and Databricks.</p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/15 bg-[#141414]">
          <div className="grid lg:grid-cols-[1.1fr_1fr]">
            <div className="relative border-b border-white/10 p-7 md:p-9 lg:border-b-0 lg:border-r">
              <div aria-hidden="true" className="absolute left-0 top-0 h-full w-1 bg-red-500" />
              <div className="mb-7 flex items-center justify-between gap-4">
                <p className="text-xs font-mono uppercase tracking-wider text-red-400">Primary engineering focus</p>
                <svg aria-hidden="true" className="h-8 w-8 text-white/35" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m11 8-8 8 8 8m10-16 8 8-8 8M19 4l-6 24" /></svg>
              </div>
              <h3 className="text-4xl font-bold tracking-tight md:text-5xl">FastAPI<span className="text-red-500">.</span></h3>
              <p className="mt-4 max-w-lg text-lg leading-relaxed text-white/85">The backend foundation for the AI application.</p>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-white/70">I use Python and FastAPI to build the services that connect application workflows, AI agents and data. Automated tests guide implementation and refactoring.</p>
              <ul className="mt-7 flex flex-wrap gap-2" aria-label="Primary backend skills">
                {['FastAPI', 'Python', 'TDD', 'PyTest'].map(tool => <li key={tool} className="rounded-md border border-white/15 bg-white/5 px-3 py-2 text-sm font-medium text-white/90">{tool}</li>)}
              </ul>
            </div>
            <div className="p-7 md:p-9">
              <p className="mb-3 text-xs font-mono uppercase tracking-wider text-white/60">How I build</p>
              <h3 className="text-2xl font-bold tracking-tight">Test-driven development.</h3>
              <p className="mt-3 text-base leading-relaxed text-white/70">Short feedback loops, reliable behaviour and room to improve the design.</p>
              <ol className="mt-6 space-y-5" aria-label="Test-driven development workflow">
                {practices.map(practice => (
                  <li key={practice.step} className="flex gap-4">
                    <span aria-hidden="true" className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 text-xs font-mono ${practice.tone}`}>{practice.step}</span>
                    <div>
                      <p className={`font-semibold ${practice.tone}`}>{practice.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-white/70">{practice.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="mt-6 border-t border-white/10 pt-4 text-sm text-white/65">Unit testing · Integration testing · PyTest</p>
            </div>
          </div>
          <div className="grid border-t border-white/10 md:grid-cols-3">
            {capabilities.map((item, index) => (
              <article key={item.title} className={`p-6 md:p-7 ${index ? 'border-t border-white/10 md:border-l md:border-t-0' : ''}`}>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{item.description}</p>
                <p className="mt-4 text-xs leading-relaxed text-red-300">{item.tools.join(' · ')}</p>
              </article>
            ))}
          </div>
        </div>
        <p className="mt-5 text-sm leading-relaxed text-white/60">The application uses a React frontend. My focus is software, AI and data engineering.</p>
        <AiProjectSkills id="azure-ai-work" context="work" />
        <div className="mt-9 flex flex-wrap items-center justify-between gap-5 border-t border-white/10 pt-6">
          <p className="max-w-xl text-base text-white/75">From a tested API to an intelligent application.</p>
          <a href="#contact" className="inline-flex min-h-11 items-center gap-2 font-semibold text-red-400 transition-colors hover:text-white">Let’s talk engineering <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  );
}
