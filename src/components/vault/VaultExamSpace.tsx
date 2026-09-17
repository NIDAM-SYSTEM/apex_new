import { FileText, Sparkles, Clock, CheckCircle2, Upload, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';

interface VaultExamSpaceProps {
  moduleLabel: string;
  semesterLabel: string;
  branchLabel: string;
  onOpenContributeModal: () => void;
  onViewFiles: () => void;
}

export default function VaultExamSpace({
  moduleLabel,
  semesterLabel,
  branchLabel,
  onOpenContributeModal,
  onViewFiles,
}: VaultExamSpaceProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
      {/* Top Banner with gradient */}
      <div className="relative bg-gradient-to-br from-[#0f2560] via-[#1e3a8a] to-[#2563eb] text-white p-6 sm:p-8 overflow-hidden">
        {/* Glow decoration */}
        <div className="absolute -right-16 -top-16 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-12 -bottom-12 w-48 h-48 bg-amber-400/15 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-200 border border-amber-300/30 text-[11px] font-semibold tracking-wide uppercase mb-3.5 backdrop-blur-sm">
            <Clock className="w-3.5 h-3.5" />
            Espace Séparé en Préparation
          </div>

          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white tracking-tight leading-snug">
            Banque d'Anciens Examens — {moduleLabel}
          </h2>

          <p className="mt-3 font-body text-blue-100 text-sm sm:text-[15px] leading-relaxed">
            Pour garantir une consultation optimale et des corrigés vérifiés, tous les examens (Sessions Normales et Rattrapages) feront l'objet d'un espace dédié et séparé très prochainement.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={onOpenContributeModal}
              className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-900 font-heading font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl shadow-sm transition-all duration-150 active:scale-95"
            >
              <Upload className="w-4 h-4 text-slate-900" />
              Proposer un examen pour ce module
            </button>

            <button
              type="button"
              onClick={onViewFiles}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-body font-semibold text-xs sm:text-sm px-4 py-2.5 rounded-xl transition-all duration-150"
            >
              <span>Accéder aux Cours & TDs ({moduleLabel})</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Pillars of the upcoming Exam Space */}
      <div className="p-6 sm:p-8">
        <div className="flex items-center justify-between mb-5">
          <p className="font-heading font-bold text-slate-900 text-base sm:text-lg">
            Ce qui sera disponible dans le futur Espace Examens :
          </p>
          <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-slate-400 font-medium">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            Filière {branchLabel} · {semesterLabel}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card 1 */}
          <div className="p-4 rounded-xl border border-slate-200/80 bg-slate-50/60 hover:bg-slate-50 transition-colors">
            <div className="w-9 h-9 rounded-lg bg-blue-100/80 text-blue-700 flex items-center justify-center mb-3">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-[14px] text-slate-900 mb-1">
              Épreuves Complètes
            </h3>
            <p className="font-body text-slate-500 text-[12px] leading-relaxed">
              Sessions Normales et Sessions de Rattrapage classées par année universitaire (2018 à 2025).
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-4 rounded-xl border border-slate-200/80 bg-slate-50/60 hover:bg-slate-50 transition-colors">
            <div className="w-9 h-9 rounded-lg bg-emerald-100/80 text-emerald-700 flex items-center justify-center mb-3">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-[14px] text-slate-900 mb-1">
              Corrigés Types & Barèmes
            </h3>
            <p className="font-body text-slate-500 text-[12px] leading-relaxed">
              Solutions détaillées, barèmes de notation officiels et conseils de rédaction méthodologiques.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-4 rounded-xl border border-slate-200/80 bg-slate-50/60 hover:bg-slate-50 transition-colors">
            <div className="w-9 h-9 rounded-lg bg-indigo-100/80 text-indigo-700 flex items-center justify-center mb-3">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-[14px] text-slate-900 mb-1">
              Vérification Qualité
            </h3>
            <p className="font-body text-slate-500 text-[12px] leading-relaxed">
              Chaque épreuve est revue et numérisée en haute qualité par l'équipe étudiante APEX ENS.
            </p>
          </div>
        </div>

        {/* Contribution card */}
        <div className="mt-6 p-5 rounded-xl bg-gradient-to-r from-amber-50 via-orange-50/60 to-amber-50 border border-amber-200/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-700 flex items-center justify-center flex-shrink-0 mt-0.5">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="font-heading font-bold text-amber-950 text-sm">
                Vous avez un sujet d'examen ou un contrôle continu dans vos archives ?
              </p>
              <p className="font-body text-amber-800/90 text-xs mt-0.5 max-w-xl">
                Prenez-le en photo ou envoyez votre PDF. Votre contribution permettra à des centaines d'étudiants de mieux préparer leurs examens !
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onOpenContributeModal}
            className="flex-shrink-0 inline-flex items-center gap-1.5 bg-amber-500 hover:bg-amber-600 text-white font-heading font-semibold text-xs px-4 py-2.5 rounded-lg shadow-xs transition-colors"
          >
            <Upload className="w-3.5 h-3.5" />
            Partager mon examen
          </button>
        </div>
      </div>
    </div>
  );
}
