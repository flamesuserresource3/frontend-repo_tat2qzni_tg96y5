import { useEffect, useState, useRef } from 'react';
import { Github, Linkedin, Twitter, Mail, Sun, Moon } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const socials = [
  { href: 'https://github.com/', label: 'GitHub', Icon: Github },
  { href: 'https://www.linkedin.com/', label: 'LinkedIn', Icon: Linkedin },
  { href: 'https://twitter.com/', label: 'Twitter/X', Icon: Twitter },
  { href: 'mailto:hello@example.com', label: 'Email', Icon: Mail },
];

export default function Hero() {
  const [theme, setTheme] = useState('dark');
  const robotClicksRef = useRef(0);
  const [easterEgg, setEasterEgg] = useState('');

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = stored || (prefersDark ? 'dark' : 'light');
    applyTheme(initial);
  }, []);

  const applyTheme = (next) => {
    setTheme(next);
    const root = document.documentElement;
    if (next === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
    localStorage.setItem('theme', next);
  };

  const toggleTheme = () => {
    applyTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const handleRobotClick = () => {
    robotClicksRef.current += 1;
    toggleTheme();
    const n = robotClicksRef.current;
    const quips = [
      'Deploying good vibes…',
      '404: Motivation not found',
      'Compiling sarcasm…',
      'BRB, refactoring feelings',
      'Beep boop, toggled the lights',
    ];
    const msg = quips[n % quips.length];
    setEasterEgg(msg);
    setTimeout(() => setEasterEgg(''), 2500);
  };

  return (
    <section className="relative w-full min-h-[90vh] overflow-hidden rounded-3xl bg-gradient-to-b from-white to-slate-50 dark:from-[#0b0b10] dark:to-[#0b0b10] border border-slate-200/70 dark:border-white/10">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/OG17yM2eUIs8MUmA/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/70 via-white/20 to-transparent dark:from-[#0b0b10]/80 dark:via-[#0b0b10]/20" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-16 md:pt-28 lg:pt-32">
        <div className="flex flex-col items-start gap-8 max-w-2xl">
          <button
            onClick={toggleTheme}
            className="group inline-flex items-center gap-2 rounded-full border border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-white/5 px-4 py-2 text-sm font-medium backdrop-blur transition hover:shadow-md"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="h-4 w-4 text-amber-400" />
            ) : (
              <Moon className="h-4 w-4 text-indigo-600" />
            )}
            <span className="text-slate-600 dark:text-slate-200">
              {theme === 'dark' ? 'Light mode' : 'Dark mode'}
            </span>
          </button>

          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop"
                alt="Profile"
                className="h-16 w-16 rounded-full ring-4 ring-cyan-500/30 object-cover"
              />
              <span className="rounded-full bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                Available for work
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Hey, I’m <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-blue-500">Alex</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
              I write code that mostly works and sometimes even looks good. Welcome to my corner of the internet.
            </p>

            <div className="flex items-center gap-3 pt-2">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur hover:scale-105 hover:-rotate-1 transition"
                  aria-label={label}
                  title={label}
                >
                  <Icon className="h-5 w-5 text-slate-700 dark:text-slate-200" />
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
            <span className="inline-block rounded-full bg-emerald-500/10 border border-emerald-400/30 px-2 py-1 text-emerald-600 dark:text-emerald-300">
              {easterEgg || 'Robot is online. Hover or click to say hi.'}
            </span>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <a href="#projects" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white font-semibold shadow-lg shadow-fuchsia-500/20 hover:shadow-xl transition">
              Check my projects
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-white/5 text-slate-800 dark:text-slate-200 font-semibold hover:shadow-md transition">
              Say hello
            </a>
          </div>
        </div>
      </div>

      <button
        className="absolute inset-0"
        onClick={handleRobotClick}
        aria-label="Toggle theme with robot"
        title="Beep boop! I flip the lights."
      >
        <span className="sr-only">Toggle theme</span>
      </button>
    </section>
  );
}
