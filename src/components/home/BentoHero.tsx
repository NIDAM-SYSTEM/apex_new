import { ArrowRight, HelpCircle, Download, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const branchTags = [
  'Mathématiques',
  'Physique',
  'Sport',
  'Histoire',
  'Géographie',
  'Arabe',
];

const recentItems = [
  { label: 'Examen Final Analyse 3 — 2024', module: 'Mathématiques · S3', isNew: true },
  { label: 'TD 04 — Séries Entières',        module: 'Mathématiques · S3', isNew: false },
];

export default function BentoHero() {
  return (
    <section className="bg-slate-50 pt-8 pb-6" aria-labelledby="bento-hero-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/*
          ─── Bento Grid ─────────────────────────────────────────────────
          Desktop: 3 columns, 2 rows, fixed height 420px
          Block 1: col-span-2 row-span-2 (large, deep blue)
          Block 2: col-span-1 row-span-1 (top-right, white — Help Desk)
          Block 3: col-span-1 row-span-1 (bottom-right, white — Recent)
          ────────────────────────────────────────────────────────────────
        */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:h-[420px]"
          style={{ gridTemplateRows: 'repeat(2, 1fr)' }}
        >

          {/* ── BLOCK 1 — Main Hub (2×2, deep blue) ────────────── */}
        <Link
            to="/vault"
            className="group relative md:col-span-2 md:row-span-2 bg-[#0f2560] rounded-2xl p-8 flex flex-col
                       overflow-hidden min-h-[240px] md:min-h-0
                       hover:scale-[1.015] transition-transform duration-300 cursor-pointer
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4"
            aria-labelledby="bento-hero-heading"
          >
            {/* Subtle grid texture */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: 'repeating-linear-gradient(0deg, white 0px, white 1px, transparent 1px, transparent 32px), repeating-linear-gradient(90deg, white 0px, white 1px, transparent 1px, transparent 32px)',
              }}
              aria-hidden="true"
            />

            {/* Glow accent top-right */}
            <div
              className="absolute -top-16 -right-16 w-48 h-48 rounded-full opacity-10 pointer-events-none"
              style={{ background: 'radial-gradient(circle, #60a5fa 0%, transparent 70%)' }}
              aria-hidden="true"
            />

            {/* Content */}
            <div className="relative flex-1 flex flex-col">
              {/* Label */}
              <div className="flex items-center gap-1.5 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" aria-hidden="true" />
                <span className="font-body text-[11px] font-semibold uppercase tracking-widest text-blue-300">
                  Vault Académique
                </span>
              </div>

              {/* Heading */}
              <h1
                id="bento-hero-heading"
                className="font-heading font-bold text-white text-2xl sm:text-3xl lg:text-4xl leading-tight mb-3 max-w-md"
              >
                Votre Hub Académique ENS.
              </h1>

              {/* Subtext */}
              <p className="font-body text-blue-200 text-sm leading-relaxed max-w-sm mb-8">
                Accédez instantanément à vos ressources académiques et guides administratifs.
              </p>

              {/* CTA */}
              <div>
                <span
                  className="inline-flex items-center gap-2 bg-white text-[#0f2560] font-body font-semibold text-sm
                             px-5 py-2.5 rounded-xl hover:bg-blue-50 transition-colors duration-150 group-hover:gap-3"
                >
                  Ouvrir le Vault
                  <ArrowRight className="w-4 h-4 transition-all duration-200" strokeWidth={2.5} aria-hidden="true" />
                </span>
              </div>
            </div>

            {/* Branch tags — bottom */}
            <div className="relative mt-auto pt-6 flex flex-wrap gap-2" role="list" aria-label="Filières disponibles">
            {branchTags.map((tag) => (
                <span
                  key={tag}
                  role="listitem"
                  className="font-body text-[11px] font-medium text-blue-200 bg-white/10 border border-white/10 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>



          {/* ── BLOCK 2 — Help Desk (top-right) ─────────────────── */}
          <a
            href="#help-desk"
            className="group bg-white border border-slate-100 rounded-2xl p-6 flex flex-col justify-between shadow-sm
                       hover:scale-[1.02] transition-transform duration-200
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-apex-blue"
            aria-label="Aide Étudiante — voir les guides rapides"
          >
            <div>
              {/* Gold icon */}
              <div className="w-10 h-10 bg-amber-50 border border-amber-100 rounded-xl flex items-center justify-center mb-4">
                <HelpCircle className="w-5 h-5 text-amber-500" strokeWidth={2} aria-hidden="true" />
              </div>
              <h2 className="font-heading font-bold text-apex-dark text-base leading-snug mb-1">
                Besoin d'aide administrative ?
              </h2>
              <p className="font-body text-slate-500 text-xs leading-relaxed">
                Guides clairs pour corriger une note, trouver un bureau ou comprendre les procédures.
              </p>
            </div>
            <div className="flex items-center gap-1 font-body text-xs font-semibold text-amber-600 group-hover:gap-2 transition-all duration-150 mt-4">
              Voir les guides rapides
              <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} aria-hidden="true" />
            </div>
          </a>

          {/* ── BLOCK 3 — Recent Activity (bottom-right) ─────────── */}
          <div
            className="group bg-white border border-slate-100 rounded-2xl p-6 flex flex-col justify-between shadow-sm
                       hover:scale-[1.02] transition-transform duration-200"
            role="region"
            aria-label="Activité récente"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-apex-blue" strokeWidth={2} aria-hidden="true" />
                </div>
                <span className="font-body text-xs font-semibold text-apex-blue uppercase tracking-wide">
                  Récemment ajouté
                </span>
              </div>

              <ul className="space-y-3" aria-label="Ressources récentes">
                {recentItems.map((item) => (
                  <li
                    key={item.label}
                    className="flex items-start gap-3"
                  >
                    <button
                      type="button"
                      className="mt-0.5 w-6 h-6 bg-apex-blue rounded-md flex items-center justify-center flex-shrink-0
                                 hover:bg-[#1d4ed8] transition-colors focus:outline-none focus:ring-2 focus:ring-apex-blue focus:ring-offset-1"
                      aria-label={`Télécharger ${item.label}`}
                    >
                      <Download className="w-3 h-3 text-white" strokeWidth={2.5} />
                    </button>
                    <div className="min-w-0">
                      <p className="font-body text-xs font-medium text-apex-dark leading-snug">
                        {item.isNew && (
                          <span className="inline-block mr-1.5 text-[10px] bg-amber-50 text-amber-600 border border-amber-200 px-1.5 py-0.5 rounded-full font-semibold">
                            Nouveau
                          </span>
                        )}
                        {item.label}
                      </p>
                      <p className="font-body text-[11px] text-slate-400 mt-0.5">{item.module}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#vault"
              className="flex items-center gap-1 font-body text-xs font-semibold text-apex-blue hover:underline mt-4 focus:outline-none focus-visible:underline"
            >
              Voir toutes les ressources <ArrowRight className="w-3 h-3" strokeWidth={2.5} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
