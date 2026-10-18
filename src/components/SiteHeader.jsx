import { profile } from '../profile';

const links = [
  ['About', '#about'], ['Experience', '#experience'], ['Work', '#current-work'],
  ['Skills', '#skills'], ['Projects', '#projects'], ['Reviews', '#recommendations'],
  ['Certifications', '#certifications'], ['Contact', '#contact'],
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050505]/95 backdrop-blur-md">
      <div className="relative mx-auto flex min-h-18 max-w-7xl items-center justify-between gap-4 px-6 md:px-12">
        <a href="#home" className="shrink-0 text-xl font-black tracking-tight text-red-500" aria-label={`${profile.name} home`}>{profile.name.toUpperCase()}<span aria-hidden="true" className="text-white">.</span></a>
        <nav aria-label="Primary navigation" className="hidden items-center gap-5 text-sm text-white/80 xl:flex">
          {links.map(([label, href]) => <a key={href} href={href} className="py-3 transition-colors hover:text-red-400">{label}</a>)}
        </nav>
        <details className="group xl:hidden">
          <summary className="flex min-h-11 cursor-pointer list-none items-center gap-2 rounded-lg border border-white/20 px-4 text-sm font-semibold [&::-webkit-details-marker]:hidden">
            <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 20 20" fill="none" stroke="currentColor"><path d="M3 5h14M3 10h14M3 15h14" strokeWidth="1.5" /></svg>
            Menu
          </summary>
          <nav aria-label="Mobile navigation" className="absolute left-4 right-4 top-full mt-2 grid grid-cols-2 gap-1 rounded-xl border border-white/15 bg-[#141414] p-3 shadow-2xl">
            {links.map(([label, href]) => <a key={href} href={href} onClick={event => event.currentTarget.closest('details').removeAttribute('open')} className="flex min-h-12 items-center rounded-lg px-4 text-sm text-white/90 hover:bg-white/10">{label}</a>)}
            <a href="#education" onClick={event => event.currentTarget.closest('details').removeAttribute('open')} className="flex min-h-12 items-center rounded-lg px-4 text-sm text-white/90 hover:bg-white/10">Education</a>
          </nav>
        </details>
      </div>
    </header>
  );
}
