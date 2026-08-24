import {
  ArrowRight, Search, FolderOpen, FileText,
  CheckCircle2, Sparkles, BookOpen, Dumbbell, Code,
} from 'lucide-react';
import { Link } from 'react-router-dom';

// ─── Data ────────────────────────────────────────────────────────────────────

const stats = [
  { emoji: '📚', value: '250+', label: 'Fichiers' },
  { emoji: '🎓', value: '6',    label: 'Filières'  },
  { emoji: '⚡', value: '100%', label: 'Gratuit'   },
];

const folders = [
  {
    id: 'f1',
    icon: <BookOpen  className="w-5 h-5" strokeWidth={1.8} />,
    name: 'Mathématiques',
    count: '84 fichiers',
    bg: 'bg-blue-50 border-blue-100 text-apex-blue',
    dot: 'bg-apex-blue',
  },
  {
    id: 'f2',
    icon: <Dumbbell  className="w-5 h-5" strokeWidth={1.8} />,
    name: 'Sport',
    count: '42 fichiers',
    bg: 'bg-emerald-50 border-emerald-100 text-emerald-600',
    dot: 'bg-emerald-500',
  },
  {
    id: 'f3',
    icon: <Code      className="w-5 h-5" strokeWidth={1.8} />,
    name: 'Informatique',
    count: '56 fichiers',
    bg: 'bg-violet-50 border-violet-100 text-violet-600',
    dot: 'bg-violet-500',
  },
  {
    id: 'f4',
    icon: <FileText  className="w-5 h-5" strokeWidth={1.8} />,
    name: 'Histoire & Géo',
    count: '38 fichiers',
    bg: 'bg-amber-50 border-amber-100 text-amber-600',
    dot: 'bg-amber-500',
  },
];

// ─── Right column: Vault mockup ──────────────────────────────────────────────
function VaultMockup() {
  return (
    <div className="relative">
      {/* Outer card */}
      <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">

        {/* ── Top bar (mock browser chrome) ────────────────────── */}
        <div className="bg-slate-50 border-b border-slate-100 px-4 py-3 flex items-center gap-3">
          {/* Traffic lights */}
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="w-2.5 h-2.5 rounded-full bg-red-300" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-300" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-300" />
          </div>
          {/* Breadcrumb path */}
          <div className="flex items-center gap-1 font-body text-[11px] text-slate-400 bg-white border border-slate-100 rounded-md px-3 py-1 flex-1 max-w-[260px]">
            <span>Vault</span>
            <span aria-hidden="true">/</span>
            <span className="text-apex-blue font-medium">Mathématiques</span>
            <span aria-hidden="true">/</span>
            <span>S3</span>
          </div>
          {/* Fake search */}
          <div className="ml-auto flex items-center gap-1.5 bg-white border border-slate-200 rounded-md px-2.5 py-1">
            <Search className="w-3 h-3 text-slate-300" strokeWidth={2} aria-hidden="true" />
            <span className="font-body text-[11px] text-slate-300">Chercher...</span>
          </div>
        </div>

        {/* ── Folder grid ──────────────────────────────────────── */}
        <div className="p-5 grid grid-cols-2 gap-3">
          {folders.map(folder => (
            <div
              key={folder.id}
              className="group flex items-start gap-3 bg-slate-50 border border-slate-100 rounded-xl p-4 hover:border-slate-200 hover:shadow-sm transition-all duration-150 cursor-default"
            >
              {/* Icon */}
              <div className={`w-9 h-9 rounded-lg border flex items-center justify-center flex-shrink-0 ${folder.bg}`}>
                {folder.icon}
              </div>
              {/* Text */}
              <div className="min-w-0">
                <p className="font-body font-semibold text-apex-dark text-[13px] leading-snug truncate">
                  {folder.name}
                </p>
                <div className="flex items-center gap-1 mt-0.5">
                  <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${folder.dot}`} aria-hidden="true" />
                  <p className="font-body text-[11px] text-slate-400">{folder.count}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom gradient fade (peekaboo effect) ───────────── */}
        <div
          className="h-10 bg-gradient-to-b from-transparent to-white"
          aria-hidden="true"
        />
      </div>

      {/* ── Floating toast notification ───────────────────────── */}
      <div
        className="absolute -bottom-4 -right-2 sm:right-4 z-10
                   bg-white border border-amber-300 rounded-xl shadow-lg
                   px-4 py-3 flex items-start gap-3 max-w-[260px]"
        role="status"
        aria-live="polite"
        aria-label="Nouveau fichier ajouté"
      >
        {/* Icon */}
        <div className="w-7 h-7 bg-amber-50 border border-amber-200 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" strokeWidth={2} aria-hidden="true" />
        </div>
        {/* Text */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 mb-0.5">
            <CheckCircle2 className="w-3 h-3 text-emerald-500 flex-shrink-0" strokeWidth={2.5} aria-hidden="true" />
            <span className="font-body text-[10px] font-bold uppercase tracking-wider text-emerald-600">
              Nouveau
            </span>
          </div>
          <p className="font-body text-[12px] font-semibold text-slate-700 leading-snug">
            Examen Final Analyse 3 ajouté
          </p>
          <p className="font-body text-[11px] text-slate-400 mt-0.5">
            il y a 2 heures · Mathématiques S3
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── Main section ─────────────────────────────────────────────────────────────
export default function PopularResources() {
  return (
    <section
      id="vault"
      className="bg-slate-50 py-20"
      aria-labelledby="vault-showcase-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ══════════════════════════════════════════════════════
              LEFT COLUMN — The Pitch
          ══════════════════════════════════════════════════════ */}
          <div className="flex flex-col">

            {/* Badge */}
            <div className="inline-flex self-start items-center gap-1.5 bg-blue-50 border border-blue-100 text-apex-blue font-body text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
              <FolderOpen className="w-3.5 h-3.5" strokeWidth={2} aria-hidden="true" />
              Solution Académique
            </div>

            {/* Heading */}
            <h2
              id="vault-showcase-heading"
              className="font-heading font-bold text-slate-900 text-3xl sm:text-4xl leading-[1.1] tracking-tight mb-4"
            >
              Ne perdez plus de temps à chercher vos cours.
            </h2>

            {/* Subtext */}
            <p className="font-body text-slate-600 text-[15px] leading-relaxed mb-8">
              Prenez de l'avance sur vos modules. APEX centralise la plus grande base de données de l'ENS :
              des centaines de cours, TDs, TPs et anciens examens organisés par filière, prêts à être
              téléchargés instantanément.
            </p>

            {/* Live stats */}
            <div
              className="flex items-center gap-6 sm:gap-8 mb-10 pb-10 border-b border-slate-200"
              aria-label="Statistiques du Vault"
            >
              {stats.map(s => (
                <div key={s.label} className="flex flex-col">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-lg" aria-hidden="true">{s.emoji}</span>
                    <span className="font-heading font-bold text-apex-dark text-xl">
                      {s.value}
                    </span>
                  </div>
                  <span className="font-body text-[12px] text-slate-500 mt-0.5">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                to="/vault"
                className="group inline-flex items-center gap-2.5 bg-apex-blue text-white
                           font-body font-bold text-[15px] px-7 py-4 rounded-xl
                           hover:-translate-y-1 hover:shadow-lg transition-all duration-200
                           focus:outline-none focus:ring-2 focus:ring-apex-blue focus:ring-offset-2 shadow-md"
                aria-label="Ouvrir le Vault Académique"
              >
                Ouvrir le Vault Académique
                <ArrowRight
                  className="w-5 h-5 group-hover:translate-x-0.5 transition-transform duration-200"
                  strokeWidth={2.5}
                  aria-hidden="true"
                />
              </Link>

              {/* Secondary link */}
              <a
                href="/articles"
                className="font-body text-[13px] font-medium text-slate-500 hover:text-apex-blue transition-colors duration-150 focus:outline-none focus-visible:underline"
              >
                Voir les articles de méthode →
              </a>
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════
              RIGHT COLUMN — Dynamic System Preview
          ══════════════════════════════════════════════════════ */}
          <div className="lg:pt-6 pb-8">
            <VaultMockup />
          </div>

        </div>
      </div>
    </section>
  );
}
