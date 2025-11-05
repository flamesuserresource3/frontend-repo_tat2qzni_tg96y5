import { Mail, Linkedin } from 'lucide-react';
import { useState } from 'react';

export default function ContactCTA() {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! Your message has been launched into the void (aka my inbox).');
    setTimeout(() => setStatus(''), 4000);
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="space-y-10">
      <div className="rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur p-6 md:p-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact form */}
          <div>
            <h3 className="text-2xl font-extrabold tracking-tight">Contact</h3>
            <p className="text-slate-600 dark:text-slate-300">
              Drop a message! Or a meme. Either works.
            </p>
            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-sm mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  className="w-full rounded-xl border border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-white/5 px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-400"
                  placeholder="Ada Lovelace"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Email</label>
                <input
                  type="email"
                  required
                  className="w-full rounded-xl border border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-white/5 px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-400"
                  placeholder="hey@you.com"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Message</label>
                <textarea
                  required
                  rows="4"
                  className="w-full rounded-xl border border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-white/5 px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-400"
                  placeholder="Tell me about your project (or send your favorite meme)."
                />
              </div>
              <button
                type="submit"
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white font-semibold px-5 py-3 shadow-lg shadow-fuchsia-500/20 hover:shadow-xl transition"
              >
                Send message
              </button>
              {status && (
                <p className="text-sm text-emerald-500 mt-2">{status}</p>
              )}
            </form>
          </div>

          {/* Hire me CTA */}
          <div className="rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white/60 dark:bg-white/5 p-6">
            <h3 className="text-2xl font-extrabold tracking-tight">Hire Me</h3>
            <p className="text-slate-600 dark:text-slate-300">
              Need a dev who knows their semicolons from their syntax errors? Let’s talk.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="mailto:hello@example.com"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-white/5 text-slate-800 dark:text-slate-200 font-semibold hover:shadow-md transition"
              >
                <Mail className="h-5 w-5" />
                Email
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:shadow-lg transition"
              >
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </a>
            </div>
            <p className="mt-4 text-xs text-cyan-400">Robot says: “Deploying portfolio charm offensive…”</p>
          </div>
        </div>
      </div>
    </section>
  );
}
