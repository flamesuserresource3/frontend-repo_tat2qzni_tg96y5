import { ExternalLink, Github } from 'lucide-react';

const data = [
  {
    title: 'Neon Notes',
    caption: "This app didn’t crash today. I’m proud.",
    stack: ['React', 'Tailwind', 'Vite'],
    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1200&auto=format&fit=crop',
    demo: '#',
    repo: '#',
  },
  {
    title: 'API Wizard',
    caption: 'Turns spaghetti endpoints into al dente.',
    stack: ['FastAPI', 'MongoDB', 'Docker'],
    image: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1200&auto=format&fit=crop',
    demo: '#',
    repo: '#',
  },
  {
    title: 'Pixel Playground',
    caption: 'Fun animations, zero regrets.',
    stack: ['Framer Motion', 'React'],
    image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1200&auto=format&fit=crop',
    demo: '#',
    repo: '#',
  },
  {
    title: 'Task Tamer',
    caption: 'Productivity, but make it cute.',
    stack: ['React', 'Zustand'],
    image: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1200&auto=format&fit=crop',
    demo: '#',
    repo: '#',
  },
  {
    title: 'Streamr',
    caption: 'Buffering banisher. Most of the time.',
    stack: ['Node', 'WebSockets'],
    image: 'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=1200&auto=format&fit=crop',
    demo: '#',
    repo: '#',
  },
  {
    title: 'RoboResume',
    caption: 'It writes cover letters so I don’t have to.',
    stack: ['Python', 'LLMs'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
    demo: '#',
    repo: '#',
  },
];

export default function Projects() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {data.map((p) => (
        <article
          key={p.title}
          className="group overflow-hidden rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur hover:-translate-y-1 hover:shadow-xl transition"
        >
          <div className="relative h-44 overflow-hidden">
            <img
              src={p.image}
              alt={p.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition" />
          </div>
          <div className="p-5 space-y-3">
            <h3 className="text-lg font-bold">{p.title}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">{p.caption}</p>
            <div className="flex flex-wrap gap-2">
              {p.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs rounded-full border border-slate-200/70 dark:border-white/10 bg-white/60 dark:bg-white/5 px-2 py-1 text-slate-600 dark:text-slate-300"
                  title={tech}
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={p.demo}
                className="inline-flex items-center gap-1 text-sm font-semibold text-cyan-600 dark:text-cyan-400 hover:underline"
                aria-label="Demo"
              >
                <ExternalLink className="h-4 w-4" />
                Demo
              </a>
              <a
                href={p.repo}
                className="inline-flex items-center gap-1 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:underline"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
