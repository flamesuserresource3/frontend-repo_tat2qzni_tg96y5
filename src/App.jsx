import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ContactCTA from './components/ContactCTA';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-[#0a0a0f] dark:text-white selection:bg-fuchsia-400 selection:text-white">
      <main className="mx-auto max-w-7xl px-6 py-10 space-y-20 md:space-y-28">
        <Hero />

        <section id="projects" className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Projects</h2>
          <p className="text-slate-600 dark:text-slate-300">A curated selection of things I built instead of sleeping.</p>
          <Projects />
        </section>

        <section id="skills" className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Skills</h2>
          <p className="text-slate-600 dark:text-slate-300">Can write 10 lines of CSS without crying (sometimes).</p>
          <Skills />
        </section>

        <section id="timeline" className="space-y-10">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Background</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur">
              <div className="p-6 border-b border-slate-200/70 dark:border-white/10">
                <h3 className="text-xl font-bold">Education</h3>
                <p className="text-slate-600 dark:text-slate-300">Graduated with a degree and caffeine addiction.</p>
              </div>
              <ol className="p-6 space-y-6">
                <li className="relative pl-6">
                  <span className="absolute left-0 top-2 h-3 w-3 rounded-full bg-cyan-500"></span>
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold">B.S. in Computer Science</h4>
                    <span className="text-xs text-slate-500">2019 — 2023</span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300">University of Somewhere • Specialized in web, systems, and chronically late-night debugging.</p>
                </li>
                <li className="relative pl-6">
                  <span className="absolute left-0 top-2 h-3 w-3 rounded-full bg-fuchsia-500"></span>
                  <h4 className="font-semibold">Courses & Certs</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">ML, Cloud, and UI/UX workshops—because why have one rabbit hole when you can have five?</p>
                </li>
              </ol>
            </div>

            <div className="rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur">
              <div className="p-6 border-b border-slate-200/70 dark:border-white/10">
                <h3 className="text-xl font-bold">Experience</h3>
                <p className="text-slate-600 dark:text-slate-300">Where the coffee consumption peaked.</p>
              </div>
              <ol className="p-6 space-y-6">
                <li className="relative pl-6">
                  <span className="absolute left-0 top-2 h-3 w-3 rounded-full bg-emerald-500"></span>
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold">Frontend Engineer • TechCorp</h4>
                    <span className="text-xs text-slate-500">2023 — Present</span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300">Built component systems, optimized performance, and tried not to push to main on Fridays.</p>
                  <p className="mt-2 text-xs text-cyan-400">Robot says: “This is where the coffee consumption peaked.”</p>
                </li>
                <li className="relative pl-6">
                  <span className="absolute left-0 top-2 h-3 w-3 rounded-full bg-violet-500"></span>
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold">Side Projects • Indie Dev</h4>
                    <span className="text-xs text-slate-500">Ongoing</span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300">Shipped tools, bots, and random ideas that somehow turned into useful things.</p>
                  <p className="mt-2 text-xs text-cyan-400">Robot says: “Feature creep? I prefer feature vibes.”</p>
                </li>
              </ol>
            </div>
          </div>
        </section>

        <ContactCTA />
      </main>

      <footer className="mx-auto max-w-7xl px-6 py-10 text-sm text-slate-500">
        Built with way too much caffeine and not enough sleep.
      </footer>
    </div>
  );
}
