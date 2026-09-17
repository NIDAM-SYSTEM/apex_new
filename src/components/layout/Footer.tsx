import { BookOpen } from 'lucide-react';

// Social icon SVGs (inline — no extra deps needed)
function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}
function IconLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
function IconGithub() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

const platformLinks = [
  { label: 'Vault Académique',    href: '/vault'    },
  { label: 'Aide Étudiante',      href: '/help'     },
  { label: 'Articles & Guides',   href: '/articles' },
  { label: 'Agenda & Événements', href: '/events'   },
];

const resourceLinks = [
  { label: 'Partager un fichier',  href: '#' },
  { label: 'Signaler un problème', href: '#' },
  { label: 'FAQ',                  href: '/help' },
  { label: 'Rejoindre l\'équipe',  href: '/club' },
];

const socialLinks = [
  { label: 'Instagram', href: '#', icon: <IconInstagram /> },
  { label: 'LinkedIn',  href: '#', icon: <IconLinkedIn  /> },
  { label: 'GitHub',    href: '#', icon: <IconGithub    /> },
];

export default function Footer() {
  return (
    <footer className="bg-[#050B18] text-slate-400 border-t border-white/5 relative overflow-hidden" aria-label="Pied de page APEX">
      
      {/* Subtle Glows */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none mix-blend-screen" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none mix-blend-screen" aria-hidden="true" />

      {/* ── Main grid ───────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-20 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">

          {/* ── Col 1: Branding & Mission (Span 5) ─────────────────────────── */}
          <div className="md:col-span-5 lg:pr-12">
            
            <a href="/" className="inline-flex items-center gap-2.5 mb-6 group focus:outline-none focus:ring-2 focus:ring-apex-blue rounded-lg">
              <div className="w-10 h-10 bg-gradient-to-br from-apex-blue to-blue-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
                <BookOpen className="w-5 h-5 text-white" strokeWidth={2.5} aria-hidden="true" />
              </div>
              <span className="font-heading font-black text-[22px] text-white tracking-tight">
                APEX
              </span>
            </a>
            
            <p className="font-body text-[14px] leading-relaxed text-slate-400 max-w-sm mb-6">
              Le moteur numérique et social des étudiants de l'ENS Tétouan. Centraliser le savoir, simplifier l'université, et construire les leaders de demain.
            </p>

            {/* System Status / Badge */}
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-slate-300 font-body text-[11px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Systèmes Opérationnels
            </div>
          </div>

          {/* ── Col 2: Plateforme (Span 2) ─────────────────────────────────── */}
          <div className="md:col-span-2 md:col-start-7">
            <h3 className="font-heading font-bold text-white text-[15px] mb-5 tracking-tight">
              Plateforme
            </h3>
            <ul className="space-y-3.5" role="list">
              {platformLinks.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group font-body text-[13px] font-medium text-slate-400 hover:text-white transition-all duration-200 flex items-center focus:outline-none focus-visible:text-white"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {link.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Ressources (Span 2) ─────────────────────────────────── */}
          <div className="md:col-span-2">
            <h3 className="font-heading font-bold text-white text-[15px] mb-5 tracking-tight">
              Ressources
            </h3>
            <ul className="space-y-3.5" role="list">
              {resourceLinks.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group font-body text-[13px] font-medium text-slate-400 hover:text-white transition-all duration-200 flex items-center focus:outline-none focus-visible:text-white"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {link.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 4: Réseaux & Contact (Span 3) ──────────────────────────── */}
          <div className="md:col-span-3">
            <h3 className="font-heading font-bold text-white text-[15px] mb-5 tracking-tight">
              Connectons-nous
            </h3>

            {/* Social icons */}
            <div className="flex items-center gap-3 mb-6">
              {socialLinks.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-apex-blue hover:border-apex-blue transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-apex-blue hover:-translate-y-1 shadow-sm"
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Contact Box */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <p className="font-body text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-1">
                Contact direct
              </p>
              <a
                href="mailto:contact@apex-ens.ma"
                className="font-body text-[14px] font-medium text-slate-300 hover:text-white transition-colors duration-150 focus:outline-none focus-visible:underline break-all"
              >
                contact@apex-ens.ma
              </a>
              <div className="w-full h-px bg-white/10 my-3" />
              <p className="font-body text-[12px] text-slate-500 font-medium leading-snug">
                École Normale Supérieure<br />Tétouan, Maroc
              </p>
            </div>
          </div>

        </div>

        {/* ── Bottom bar ──────────────────────────────────────────── */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-[12px] text-slate-500 font-medium">
            © {new Date().getFullYear()} APEX ENS Tétouan. Construit par des étudiants.
          </p>
          <div className="flex items-center gap-6">
            <a href="/terms" className="font-body text-[12px] font-medium text-slate-500 hover:text-slate-300 transition-colors duration-150">
              Conditions d'utilisation
            </a>
            <a href="/privacy" className="font-body text-[12px] font-medium text-slate-500 hover:text-slate-300 transition-colors duration-150">
              Confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}