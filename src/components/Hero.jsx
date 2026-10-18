import { profile } from '../profile';
import ProfilePortrait from './ProfilePortrait';

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="relative overflow-hidden bg-[#050505] px-6 py-16 text-white md:px-12 md:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,rgba(229,9,20,0.09),transparent_65%)]" />
      <div aria-hidden="true" className="hero-motion">
        <div className="hero-marquee">
          {[0, 1].map(copy => (
            <span key={copy}>FASTAPI · AI AGENTS · DATA ENGINEERING · TDD ·&nbsp;</span>
          ))}
        </div>
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 flex flex-wrap items-center justify-between gap-4 text-xs font-mono uppercase tracking-widest">
          <span className="rounded border border-red-600/30 bg-red-600/5 px-3 py-2 text-red-400">Software · AI · Data Engineering</span>
          <span className="text-white/60">{profile.location}</span>
        </div>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <p className="mb-5 max-w-lg text-sm leading-relaxed text-white/75">{profile.role}</p>
            <h1 id="hero-title" className="text-5xl font-black leading-[1.02] tracking-tighter sm:text-6xl xl:text-7xl">
              <span className="mb-2 block text-white">{profile.name.toUpperCase()}</span>
              <span className="text-red-500">SOFTWARE.<br />AI & DATA.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">{profile.summary}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#current-work" className="inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-6 py-3 font-semibold text-black transition-colors hover:bg-red-500 hover:text-white">Explore my work <span aria-hidden="true" className="ml-2">↗</span></a>
              <a href="#contact" className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/25 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10">Get in touch</a>
            </div>
            <ul className="mt-8 flex flex-wrap gap-2 text-xs text-white/75" aria-label="Core tools">
              {['FastAPI', 'Python', 'TDD', 'LangGraph', 'MLflow', 'Databricks'].map(tool => <li key={tool} className="rounded border border-white/10 bg-white/5 px-3 py-1.5">{tool}</li>)}
            </ul>
          </div>
          <div className="mx-auto w-full max-w-sm lg:col-span-4 lg:col-start-8">
            <ProfilePortrait />
            <p className="mt-5 text-sm leading-relaxed text-white/70">FastAPI services. Tested behaviour. Intelligent agents.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
