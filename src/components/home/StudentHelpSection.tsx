import { Search, CheckCircle2, MapPin, FileText, Clock, ArrowRight, HelpCircle, Flame, ShieldCheck, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function StudentHelpSection() {
  return (
    <section
      id="help-desk"
      className="bg-white py-20 border-t border-slate-100 relative overflow-hidden"
      aria-labelledby="help-showcase-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ══════════════════════════════════════════════════════
              LEFT COLUMN — The Dynamic System Preview (Mini-App)
              (Order 2 on mobile, Order 1 on desktop)
          ══════════════════════════════════════════════════════ */}
          <div className="order-2 lg:order-1 relative pb-6 lg:pb-0">
            {/* Outer card container */}
            <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 relative shadow-sm">
              
              {/* Header of Mock UI */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-200/60">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span className="font-body text-[11px] font-medium text-slate-400 ml-2">
                    APEX · Moteur de Résolution Rapide
                  </span>
                </div>
                <span className="inline-flex items-center gap-1 font-body text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  En direct
                </span>
              </div>

              {/* The Search Bar Mockup */}
              <div className="bg-white rounded-xl p-3.5 sm:p-4 shadow-sm border border-slate-200/90 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-apex-blue flex-shrink-0">
                  <Search className="w-4 h-4" strokeWidth={2.2} aria-hidden="true" />
                </div>
                <div className="flex-1 min-w-0 flex items-center">
                  <span className="font-body text-[13px] sm:text-[14px] text-slate-900 font-medium truncate">
                    Comment corriger une note d'examen ?
                  </span>
                  <span className="inline-block w-0.5 h-4 bg-apex-blue ml-1 animate-pulse" aria-hidden="true" />
                </div>
                <span className="hidden sm:inline-flex font-body text-[10px] font-semibold uppercase tracking-wider text-slate-400 bg-slate-100 px-2 py-1 rounded">
                  Entrée ↵
                </span>
              </div>

              {/* The Instant Answer Block */}
              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 mt-4 shadow-sm">
                
                {/* Result header */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-body text-[10px] font-bold uppercase tracking-wider text-apex-blue bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full">
                      Guide Officiel
                    </span>
                    <span className="font-body text-[11px] text-slate-400">
                      Mis à jour pour 2026
                    </span>
                  </div>
                  <span className="flex items-center gap-1 font-body text-[11px] text-emerald-600 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5" strokeWidth={2} />
                    Procédure Validée
                  </span>
                </div>

                <h3 className="font-heading font-bold text-apex-dark text-[16px] leading-snug mb-3">
                  Procédure de correction de note
                </h3>

                {/* Checklist (3 steps) */}
                <div className="space-y-2.5 my-4">
                  <div className="flex items-start gap-3 p-2 rounded-lg bg-slate-50/80 border border-slate-100">
                    <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-apex-blue" strokeWidth={2.5} />
                    </div>
                    <div className="text-left flex-1 min-w-0">
                      <p className="font-body text-[12.5px] font-semibold text-slate-800">
                        1. Récupérer le formulaire de réclamation
                      </p>
                      <p className="font-body text-[11px] text-slate-500">
                        Disponible au Bureau 104 ou en téléchargement PDF direct
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-2 rounded-lg bg-slate-50/80 border border-slate-100">
                    <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-apex-blue" strokeWidth={2.5} />
                    </div>
                    <div className="text-left flex-1 min-w-0">
                      <p className="font-body text-[12.5px] font-semibold text-slate-800">
                        2. Faire signer par le professeur responsable
                      </p>
                      <p className="font-body text-[11px] text-slate-500">
                        Délai limite : 72h après publication des résultats
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-2 rounded-lg bg-slate-50/80 border border-slate-100">
                    <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-apex-blue" strokeWidth={2.5} />
                    </div>
                    <div className="text-left flex-1 min-w-0">
                      <p className="font-body text-[12.5px] font-semibold text-slate-800">
                        3. Déposer le dossier au Secrétariat Général
                      </p>
                      <p className="font-body text-[11px] text-slate-500">
                        Bâtiment Principal · Rez-de-chaussée, Bureau 04
                      </p>
                    </div>
                  </div>
                </div>

                {/* Sub-card quick info footer */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-slate-500 font-body text-[11.5px]">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    Temps estimé : <strong>2 jours ouvrés</strong>
                  </span>
                  <span className="text-apex-blue font-semibold flex items-center gap-1 hover:underline cursor-pointer">
                    <Download className="w-3.5 h-3.5" />
                    Formulaire .PDF
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Element (The Hook) */}
            <div
              className="absolute -bottom-3 left-4 sm:-left-2 z-10
                         bg-white border-2 border-amber-400 rounded-2xl shadow-lg
                         px-4 py-2.5 flex items-center gap-2.5 animate-bounce-subtle"
              role="status"
            >
              <div className="w-7 h-7 rounded-lg bg-amber-50 flex items-center justify-center text-amber-500 flex-shrink-0">
                <Flame className="w-4 h-4 fill-amber-400 text-amber-500" />
              </div>
              <span className="font-heading font-bold text-[12.5px] text-slate-900 tracking-tight whitespace-nowrap">
                20+ Guides Administratifs Disponibles
              </span>
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════
              RIGHT COLUMN — The Pitch (Selling the Support)
              (Order 1 on mobile, Order 2 on desktop)
          ══════════════════════════════════════════════════════ */}
          <div className="order-1 lg:order-2 flex flex-col">

            {/* Gold Pill Badge */}
            <div className="inline-flex self-start items-center gap-1.5 bg-amber-50 border border-amber-200/80 text-amber-700 font-body text-[10px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-6">
              <HelpCircle className="w-3.5 h-3.5 text-amber-600" strokeWidth={2.2} aria-hidden="true" />
              Centre d'Aide
            </div>

            {/* Main Headline */}
            <h2
              id="help-showcase-heading"
              className="font-heading font-bold text-slate-900 text-3xl sm:text-4xl leading-[1.15] tracking-tight mb-4"
            >
              Ne soyez plus jamais perdu sur le campus.
            </h2>

            {/* Subtext */}
            <p className="font-body text-slate-600 text-[15px] leading-relaxed mb-8">
              Fini le stress administratif. APEX a documenté toutes les procédures, localisé tous les bureaux
              et simplifié les règles de l'ENS Tétouan dans des guides simples, étape par étape.
            </p>

            {/* Trust / Scale Indicators */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-apex-blue flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" strokeWidth={2.2} aria-hidden="true" />
                </div>
                <div>
                  <p className="font-body font-semibold text-slate-900 text-[14px] leading-snug">
                    Cartographie de tous les bureaux
                  </p>
                  <p className="font-body text-[12.5px] text-slate-500 mt-0.5">
                    Trouvez instantanément l'emplacement exact et les horaires des services administratifs.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-apex-blue flex-shrink-0 mt-0.5">
                  <FileText className="w-4 h-4" strokeWidth={2.2} aria-hidden="true" />
                </div>
                <div>
                  <p className="font-body font-semibold text-slate-900 text-[14px] leading-snug">
                    Formulaires téléchargeables
                  </p>
                  <p className="font-body text-[12.5px] text-slate-500 mt-0.5">
                    Tous les modèles officiels pré-remplis pour attestations, réclamations et inscriptions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-apex-blue flex-shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" strokeWidth={2.2} aria-hidden="true" />
                </div>
                <div>
                  <p className="font-body font-semibold text-slate-900 text-[14px] leading-snug">
                    Résolution de problèmes en 3 étapes
                  </p>
                  <p className="font-body text-[12.5px] text-slate-500 mt-0.5">
                    Des check-lists ultra claires pour résoudre chaque démarche sans faire d'allers-retours inutiles.
                  </p>
                </div>
              </div>
            </div>

            {/* Main CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                to="/help"
                className="group inline-flex items-center gap-2.5 bg-apex-blue text-white
                           font-body font-bold text-[15px] px-8 py-4 rounded-xl
                           hover:bg-[#1d4ed8] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200
                           focus:outline-none focus:ring-2 focus:ring-apex-blue focus:ring-offset-2 shadow-md"
                aria-label="Accéder au Centre d'Aide"
              >
                Accéder au Centre d'Aide
                <ArrowRight
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200"
                  strokeWidth={2.5}
                  aria-hidden="true"
                />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
