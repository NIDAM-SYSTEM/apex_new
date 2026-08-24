import { BookOpen, HelpCircle, ArrowRight } from 'lucide-react';

export default function QuickActions() {
  return (
    <section
      className="py-12 sm:py-16"
      aria-labelledby="quick-actions-heading"
    >
      <div className="platform-container">
        <h2 id="quick-actions-heading" className="sr-only">
          Accès rapide aux sections principales
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">

          {/* ── Academic Vault ──────────────────────────────────── */}
          <a
            href="#vault"
            className="group card p-7 flex flex-col gap-5 hover:shadow-card-hover transition-all duration-200 focus-ring"
            aria-label="Accéder au Vault Académique — Cours, TDs, TPs et anciens examens"
          >
            {/* Icon */}
            <div className="w-12 h-12 bg-apex-blue rounded-card flex items-center justify-center flex-shrink-0">
              <BookOpen className="w-6 h-6 text-white" strokeWidth={2} aria-hidden="true" />
            </div>

            <div className="flex-1">
              <div className="section-label mb-2">Vault Académique</div>
              <h3 className="font-heading font-bold text-apex-dark text-xl mb-2 group-hover:text-apex-blue transition-colors duration-150">
                Trouver des ressources de cours
              </h3>
              <p className="font-body text-apex-gray text-sm leading-relaxed">
                Cours, TDs, TPs et anciens examens organisés par filière, semestre et module.
              </p>
            </div>

            <div className="flex items-center gap-2 font-body text-sm font-medium text-apex-blue group-hover:gap-3 transition-all duration-200">
              Explorer le Vault Académique
              <ArrowRight className="w-4 h-4" strokeWidth={2} aria-hidden="true" />
            </div>
          </a>

          {/* ── Student Help Desk ────────────────────────────────── */}
          <a
            href="#help-desk"
            className="group card p-7 flex flex-col gap-5 hover:shadow-card-hover transition-all duration-200 focus-ring border-l-4 border-l-apex-border-light hover:border-l-apex-gold"
            aria-label="Accéder à l'Aide Étudiante — Guides, bureaux et procédures universitaires"
          >
            {/* Icon */}
            <div className="w-12 h-12 bg-amber-50 border border-amber-200 rounded-card flex items-center justify-center flex-shrink-0">
              <HelpCircle className="w-6 h-6 text-amber-600" strokeWidth={2} aria-hidden="true" />
            </div>

            <div className="flex-1">
              <div className="section-label mb-2" style={{ color: '#B45309' }}>
                Aide Étudiante
              </div>
              <h3 className="font-heading font-bold text-apex-dark text-xl mb-2 group-hover:text-amber-700 transition-colors duration-150">
                Aide universitaire
              </h3>
              <p className="font-body text-apex-gray text-sm leading-relaxed">
                Guides simples pour les problèmes universitaires courants, procédures et informations sur les bureaux.
              </p>
            </div>

            <div className="flex items-center gap-2 font-body text-sm font-medium text-amber-700 group-hover:gap-3 transition-all duration-200">
              Obtenir de l'aide
              <ArrowRight className="w-4 h-4" strokeWidth={2} aria-hidden="true" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
