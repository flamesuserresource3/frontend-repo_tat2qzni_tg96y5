const skills = [
  { name: 'JavaScript', note: 'Can debug undefined faster than you can say NaN.' },
  { name: 'TypeScript', note: 'Safety net for my questionable choices.' },
  { name: 'React', note: 'Hooks, context, vibes.' },
  { name: 'Tailwind', note: 'Utility enjoyer.' },
  { name: 'Node.js', note: 'async/await appreciation club.' },
  { name: 'Python', note: 'For when I want fewer semicolons.' },
  { name: 'FastAPI', note: 'Fast routes, faster snacks.' },
  { name: 'MongoDB', note: 'Documents > my docs.' },
  { name: 'Git', note: 'Commit early, commit often, commit messages later.' },
  { name: 'Framer Motion', note: 'If it moves, it grooves.' },
];

export default function Skills() {
  return (
    <div className="rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur p-6">
      <div className="flex flex-wrap gap-2">
        {skills.map((s) => (
          <span
            key={s.name}
            className="text-sm rounded-full px-3 py-1 border border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-white/5 text-slate-800 dark:text-slate-200 hover:-translate-y-0.5 hover:shadow transition"
            title={s.note}
          >
            {s.name}
          </span>
        ))}
      </div>

      <div className="mt-6 grid sm:grid-cols-2 gap-4">
        <SkillBar label="Frontend" value={85} color="from-fuchsia-500 to-cyan-500" />
        <SkillBar label="Backend" value={75} color="from-emerald-500 to-cyan-500" />
        <SkillBar label="UI/UX" value={70} color="from-violet-500 to-fuchsia-500" />
        <SkillBar label="DevOps" value={60} color="from-blue-500 to-cyan-500" />
      </div>
    </div>
  );
}

function SkillBar({ label, value, color }) {
  return (
    <div className="bg-white/60 dark:bg-white/5 border border-slate-200/70 dark:border-white/10 rounded-xl p-4">
      <div className="flex items-center justify-between text-sm mb-2">
        <span className="font-semibold">{label}</span>
        <span className="text-slate-500">{value}%</span>
      </div>
      <div className="h-2 rounded-full bg-slate-200/70 dark:bg-white/10 overflow-hidden">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}
