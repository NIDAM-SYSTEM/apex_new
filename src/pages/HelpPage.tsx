import { useState } from 'react';
import {
  Search, Building2, FileText, MapPin,
  ArrowRight, Plus, Minus, Phone, ChevronRight,
} from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

// ─── Data ────────────────────────────────────────────────────────────────────

const categories = [
  {
    id: 'admin',
    icon: <Building2 className="w-7 h-7" strokeWidth={1.5} />,
    label: 'Administration',
    sub: 'Inscriptions, attestations, cartes.',
    color: 'text-apex-blue bg-blue-50 border-blue-100',
  },
  {
    id: 'exams',
    icon: <FileText className="w-7 h-7" strokeWidth={1.5} />,
    label: 'Examens & Notes',
    sub: 'Règles, corrections, plannings.',
    color: 'text-amber-600 bg-amber-50 border-amber-100',
  },
  {
    id: 'newcomers',
    icon: <MapPin className="w-7 h-7" strokeWidth={1.5} />,
    label: 'Nouveaux Étudiants',
    sub: 'Campus, localisation, intégration.',
    color: 'text-emerald-600 bg-emerald-50 border-emerald-100',
  },
];

const popularGuides = [
  {
    id: 'g1',
    title: 'Procédure pour corriger une note d\'examen',
    category: 'Examens & Notes',
  },
  {
    id: 'g2',
    title: 'Où récupérer sa carte d\'étudiant ?',
    category: 'Administration',
  },
  {
    id: 'g3',
    title: 'Comment demander une attestation de scolarité ?',
    category: 'Administration',
  },
  {
    id: 'g4',
    title: 'Règles d\'absence aux TDs',
    category: 'Examens & Notes',
  },
];

const faqItems = [
  {
    id: 'faq1',
    question: 'Où se trouve le bureau des affaires estudiantines ?',
    answer: 'Bâtiment principal, 1er étage, Bureau 104. Ouvert du lundi au vendredi de 9h à 14h.',
  },
  {
    id: 'faq2',
    question: 'Comment récupérer ma carte d\'étudiant ?',
    answer: 'Rendez-vous au bureau de la scolarité (rez-de-chaussée, Bureau 02) avec une photo d\'identité et votre reçu d\'inscription. Délai de traitement : 3 à 5 jours ouvrés.',
  },
  {
    id: 'faq3',
    question: 'Que faire si j\'ai raté un TD ?',
    answer: 'Justifiez votre absence auprès du responsable du module dans les 48h. Au-delà de 3 absences injustifiées, vous pouvez être exclu(e) du module.',
  },
  {
    id: 'faq4',
    question: 'Comment contacter l\'administration pour une urgence ?',
    answer: 'Pendant les heures d\'ouverture (9h–15h), rendez-vous directement au bureau du secrétariat. En dehors de ces heures, un email à la direction de l\'école est possible.',
  },
];

// ─── Accordion item ───────────────────────────────────────────────────────────
function AccordionItem({ item, isOpen, onToggle }: {
  item: typeof faqItems[number];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left bg-white hover:bg-slate-50 transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-apex-blue focus-visible:ring-inset"
        aria-expanded={isOpen}
      >
        <span className={`font-body text-[14px] font-semibold leading-snug transition-colors duration-150 ${isOpen ? 'text-apex-blue' : 'text-apex-dark'}`}>
          {item.question}
        </span>
        <span className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-150 ${isOpen ? 'bg-apex-blue text-white' : 'bg-slate-100 text-slate-500'}`}>
          {isOpen
            ? <Minus className="w-3 h-3" strokeWidth={2.5} aria-hidden="true" />
            : <Plus  className="w-3 h-3" strokeWidth={2.5} aria-hidden="true" />
          }
        </span>
      </button>
      {isOpen && (
        <div className="px-5 pb-5 pt-1 bg-white border-t border-slate-100">
          <p className="font-body text-sm text-slate-600 leading-relaxed">
            {item.answer}
          </p>
        </div>
      )}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function HelpPage() {
  const [query,    setQuery]    = useState('');
  const [openFaq,  setOpenFaq]  = useState<string | null>('faq1');

  const toggleFaq = (id: string) => setOpenFaq(prev => prev === id ? null : id);

  return (
    <>
      <Header activePage="help" />

      <main className="bg-slate-50 min-h-screen" id="main-content">

        {/* ──────────────────────────────────────────────────────────────
            SECTION 1 — Hero (solid blue, pt-16 pb-24)
        ────────────────────────────────────────────────────────────── */}
        <section
          className="bg-[#0f2560] pt-16 pb-28"
          aria-labelledby="help-hero-heading"
        >
          <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
            {/* Label */}
            <div className="inline-flex items-center gap-1.5 text-[11px] font-body font-semibold uppercase tracking-widest text-blue-300 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              Aide Étudiante · APEX ENS Tétouan
            </div>

            {/* Heading */}
            <h1
              id="help-hero-heading"
              className="font-heading font-bold text-white text-3xl sm:text-4xl leading-tight mb-4"
            >
              Comment pouvons-nous vous aider ?
            </h1>
            <p className="font-body text-blue-200 text-sm leading-relaxed mb-8">
              Trouvez instantanément les procédures, bureaux et règles dont vous avez besoin.
            </p>

            {/* Big search */}
            <div className="relative">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none"
                strokeWidth={2}
                aria-hidden="true"
              />
              <input
                type="search"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Chercher une procédure, un bureau, une règle..."
                aria-label="Rechercher dans l'aide étudiante"
                className="w-full h-14 pl-12 pr-5 bg-white border-2 border-white/10 rounded-xl
                           font-body text-[15px] text-apex-dark placeholder-slate-400
                           focus:outline-none focus:ring-2 focus:ring-white focus:border-white
                           shadow-lg transition-all duration-150"
              />
            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────────────────────────────
            SECTION 2 — Category Cards (overlapping the hero with -mt-12)
        ────────────────────────────────────────────────────────────── */}
        <section
          className="relative z-10 -mt-12 pb-4"
          aria-label="Catégories d'aide"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  type="button"
                  className="group text-left bg-white border border-slate-200 rounded-xl shadow-md p-6
                             hover:-translate-y-1 hover:shadow-lg transition-all duration-200
                             focus:outline-none focus-visible:ring-2 focus-visible:ring-apex-blue"
                  aria-label={`Accéder à la catégorie ${cat.label}`}
                >
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-4 ${cat.color}`}>
                    {cat.icon}
                  </div>
                  {/* Text */}
                  <h2 className="font-heading font-bold text-apex-dark text-[16px] leading-snug mb-1 group-hover:text-apex-blue transition-colors duration-150">
                    {cat.label}
                  </h2>
                  <p className="font-body text-[13px] text-slate-500">
                    {cat.sub}
                  </p>
                  {/* Link hint */}
                  <div className="flex items-center gap-1 mt-4 font-body text-[12px] font-semibold text-apex-blue opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                    Voir les guides <ChevronRight className="w-3.5 h-3.5" strokeWidth={2.5} />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────────────────────────────
            SECTION 3 — Guides Populaires (list view)
        ────────────────────────────────────────────────────────────── */}
        <section className="py-10" aria-labelledby="guides-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            {/* Section header */}
            <div className="flex items-center justify-between mb-5">
              <div>
                <p className="text-[11px] font-body font-semibold uppercase tracking-widest text-apex-blue mb-1">
                  Aide Étudiante
                </p>
                <h2
                  id="guides-heading"
                  className="font-heading font-bold text-apex-dark text-xl"
                >
                  Guides les plus consultés
                </h2>
              </div>
              <a
                href="#"
                className="hidden sm:inline-flex items-center gap-1 font-body text-sm font-medium text-apex-blue hover:underline"
              >
                Tous les guides <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
              </a>
            </div>

            {/* List card */}
            <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
              <ul aria-label="Guides les plus consultés">
                {popularGuides.map((guide, i) => (
                  <li key={guide.id}>
                    <a
                      href={`#guide-${guide.id}`}
                      className={`group flex items-center gap-4 px-6 py-4 hover:bg-slate-50 transition-colors duration-150 ${
                        i < popularGuides.length - 1 ? 'border-b border-slate-100' : ''
                      }`}
                      aria-label={guide.title}
                    >
                      {/* Icon */}
                      <div className="w-9 h-9 bg-blue-50 border border-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FileText className="w-4 h-4 text-apex-blue" strokeWidth={2} aria-hidden="true" />
                      </div>

                      {/* Text */}
                      <div className="flex-1 min-w-0">
                        <p className="font-body font-semibold text-apex-dark text-[14px] group-hover:text-apex-blue transition-colors duration-150 leading-snug">
                          {guide.title}
                        </p>
                        <p className="font-body text-[11px] text-slate-400 mt-0.5">
                          {guide.category}
                        </p>
                      </div>

                      {/* Arrow */}
                      <ArrowRight
                        className="w-4 h-4 text-slate-300 group-hover:text-apex-blue group-hover:translate-x-0.5 transition-all duration-150 flex-shrink-0"
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────────────────────────────
            SECTION 4 — Quick FAQ (2-column with accordions)
        ────────────────────────────────────────────────────────────── */}
        <section className="py-10 border-t border-slate-100" aria-labelledby="faq-heading">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">

              {/* Left: text (1 col) */}
              <div className="md:col-span-1 flex flex-col justify-center">
                <p className="text-[11px] font-body font-semibold uppercase tracking-widest text-amber-600 mb-2">
                  FAQ
                </p>
                <h2
                  id="faq-heading"
                  className="font-heading font-bold text-apex-dark text-xl leading-tight mb-3"
                >
                  Questions Rapides
                </h2>
                <p className="font-body text-slate-500 text-sm leading-relaxed">
                  Les réponses immédiates aux problèmes les plus urgents. Pas de jargon, pas de délai.
                </p>
              </div>

              {/* Right: accordions (2 cols) */}
              <div className="md:col-span-2 flex flex-col gap-3">
                {faqItems.map(item => (
                  <AccordionItem
                    key={item.id}
                    item={item}
                    isOpen={openFaq === item.id}
                    onToggle={() => toggleFaq(item.id)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────────────────────────────
            SECTION 5 — Emergency / Contact banner
        ────────────────────────────────────────────────────────────── */}
        <section className="pb-10" aria-label="Contact d'urgence">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-amber-50 border border-amber-200 rounded-xl px-6 py-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-amber-100 border border-amber-200 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-amber-600" strokeWidth={2} aria-hidden="true" />
                </div>
                <div>
                  <p className="font-body font-semibold text-amber-900 text-[14px] leading-snug">
                    Vous ne trouvez pas votre réponse ?
                  </p>
                  <p className="font-body text-[13px] text-amber-700 mt-0.5 leading-relaxed">
                    L'administration principale est ouverte du lundi au vendredi de{' '}
                    <strong>9h à 15h</strong>. Bâtiment principal, rez-de-chaussée.
                  </p>
                </div>
              </div>
              <a
                href="mailto:admin@ens-tetouan.ma"
                className="flex-shrink-0 inline-flex items-center gap-2 border border-amber-400 text-amber-800 bg-white font-body font-semibold text-sm px-4 py-2 rounded-lg hover:bg-amber-50 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400"
              >
                Contacter l'administration
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
