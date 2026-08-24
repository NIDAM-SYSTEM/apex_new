// Social icon SVGs (inline — no extra deps needed)
function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}
function IconLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
function IconGithub() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

const platformLinks = [
  { label: 'Vault Académique',    href: '/vault'    },
  { label: 'Aide Étudiante',      href: '/help'     },
  { label: 'Articles',            href: '/articles' },
  { label: 'Agenda & Événements', href: '/events'   },
];

const resourceLinks = [
  { label: 'Partager un fichier',  href: '#' },
  { label: 'Signaler un problème', href: '#' },
  { label: 'FAQ',                  href: '/help' },
  { label: 'Guide des nouveaux',   href: '/help' },
];

const socialLinks = [
  { label: 'Instagram', href: '#', icon: <IconInstagram /> },
  { label: 'LinkedIn',  href: '#', icon: <IconLinkedIn  /> },
  { label: 'GitHub',    href: '#', icon: <IconGithub    /> },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400" aria-label="Pied de page APEX">

      {/* ── Main grid ───────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

          {/* ── Col 1: Branding & Mission ─────────────────────────── */}
          <div className="md:col-span-1">
            <p className="font-heading font-bold text-white text-2xl tracking-tight mb-3">
              APEX
            </p>
            <p className="font-body text-[13px] leading-relaxed text-slate-400 max-w-[220px]">
              Le moteur numérique et social des étudiants de l'ENS Tétouan.
              Centraliser le savoir, simplifier l'université.
            </p>
            <div className="mt-5 inline-flex items-center gap-1.5 bg-white/5 border border-white/10 text-slate-300 font-body text-[11px] font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
              ENS Tétouan · 2026
            </div>
          </div>

          {/* ── Col 2: Plateforme ─────────────────────────────────── */}
          <div>
            <h3 className="font-heading font-bold text-white text-[14px] mb-4 tracking-tight">
              Plateforme
            </h3>
            <ul className="space-y-2.5" role="list">
              {platformLinks.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-[13px] text-slate-400 hover:text-white transition-colors duration-150 focus:outline-none focus-visible:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Ressources ─────────────────────────────────── */}
          <div>
            <h3 className="font-heading font-bold text-white text-[14px] mb-4 tracking-tight">
              Ressources
            </h3>
            <ul className="space-y-2.5" role="list">
              {resourceLinks.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-[13px] text-slate-400 hover:text-white transition-colors duration-150 focus:outline-none focus-visible:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 4: Réseaux & Contact ──────────────────────────── */}
          <div>
            <h3 className="font-heading font-bold text-white text-[14px] mb-4 tracking-tight">
              Connectons-nous
            </h3>

            {/* Social icons */}
            <div className="flex items-center gap-3 mb-5">
              {socialLinks.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Email */}
            <a
              href="mailto:contact@apex-ens.ma"
              className="font-body text-[13px] text-slate-400 hover:text-white transition-colors duration-150 break-all focus:outline-none focus-visible:underline"
            >
              contact@apex-ens.ma
            </a>

            {/* University affiliation */}
            <p className="font-body text-[12px] text-slate-600 mt-3 leading-snug">
              École Normale Supérieure<br />Tétouan, Maroc
            </p>
          </div>

        </div>

        {/* ── Bottom bar ──────────────────────────────────────────── */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-body text-[12px] text-slate-500">
            © 2026 APEX ENS Tétouan. Tous droits réservés.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="font-body text-[12px] text-slate-500 hover:text-slate-300 transition-colors duration-150">
              Conditions d'utilisation
            </a>
            <span className="text-slate-700 text-xs" aria-hidden="true">·</span>
            <a href="#" className="font-body text-[12px] text-slate-500 hover:text-slate-300 transition-colors duration-150">
              Confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
