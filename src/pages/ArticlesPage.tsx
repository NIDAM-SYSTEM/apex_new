import { useState } from 'react';
import { ArrowRight, Clock, User, BookOpen, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

// ─── Data ────────────────────────────────────────────────────────────────────

type Category = 'Tous' | 'Méthodologie' | 'Vie Campus' | 'Tech & Code' | 'Événements';

const CATEGORIES: Category[] = ['Tous', 'Méthodologie', 'Vie Campus', 'Tech & Code', 'Événements'];

interface Article {
  id: string;
  slug: string;
  category: Exclude<Category, 'Tous'>;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  patternStyle: string; // CSS gradient / pattern class combo
}

const featuredArticle = {
  id: 'featured',
  tag: 'À la Une',
  title: 'Guide Stratégique : Comment exceller en Analyse 3 et Algèbre',
  excerpt:
    'Maîtriser les deux piliers du semestre 3. Techniques éprouvées, erreurs classiques à éviter, et méthode de révision active pour maximiser vos notes.',
  author: 'Nidal H.',
  readTime: '5 min de lecture',
  date: '20 Août 2026',
};

const articles: Article[] = [
  {
    id: 'a1',
    slug: 'erreurs-tds-maths',
    category: 'Méthodologie',
    title: 'Les 5 erreurs à éviter lors des TDs de Mathématiques',
    excerpt: 'Analyse des pièges récurrents observés en TD et comment les transformer en points forts lors des évaluations finales.',
    author: 'Salma B.',
    date: '12 Sept 2026',
    readTime: '4 min',
    patternStyle: 'from-blue-800 via-blue-700 to-indigo-700',
  },
  {
    id: 'a2',
    slug: 'hackathon-ens-2026',
    category: 'Événements',
    title: 'Compte-rendu : Hackathon ENS Tétouan 2026',
    excerpt: '48h d\'innovation. Retour sur les projets lauréats, les apprentissages collectifs et ce qui attend les participants en 2027.',
    author: 'Amine K.',
    date: '10 Sept 2026',
    readTime: '6 min',
    patternStyle: 'from-amber-600 via-orange-500 to-amber-700',
  },
  {
    id: 'a3',
    slug: 'python-debutants-s1',
    category: 'Tech & Code',
    title: 'Débuter avec Python : Guide complet pour les S1',
    excerpt: 'Installation, premiers scripts, structures de données. Un parcours pratique conçu spécifiquement pour les étudiants ENS.',
    author: 'Omar Z.',
    date: '8 Sept 2026',
    readTime: '8 min',
    patternStyle: 'from-emerald-700 via-teal-600 to-emerald-800',
  },
  {
    id: 'a4',
    slug: 'organisation-partiels',
    category: 'Méthodologie',
    title: 'Comment organiser sa révision pour les partiels de fin de semestre ?',
    excerpt: 'Plan de révision sur 3 semaines, techniques de mémorisation active et gestion du stress pour performer le jour J.',
    author: 'Hiba C.',
    date: '5 Sept 2026',
    readTime: '5 min',
    patternStyle: 'from-violet-700 via-purple-600 to-violet-800',
  },
  {
    id: 'a5',
    slug: 'vie-associative-ens',
    category: 'Vie Campus',
    title: 'La vie associative à l\'ENS Tétouan : clubs, opportunités et impact',
    excerpt: 'Comment les clubs universitaires transforment le parcours académique et créent des compétences transversales durables.',
    author: 'Fatima E.',
    date: '3 Sept 2026',
    readTime: '4 min',
    patternStyle: 'from-rose-600 via-pink-500 to-rose-700',
  },
  {
    id: 'a6',
    slug: 'latex-rapports-tp',
    category: 'Tech & Code',
    title: 'Utiliser LaTeX pour rédiger ses rapports de TP comme un pro',
    excerpt: 'Du template vierge au rendu professionnel : formules, figures, bibliographies. Workflow complet avec Overleaf.',
    author: 'Rachid A.',
    date: '1 Sept 2026',
    readTime: '7 min',
    patternStyle: 'from-sky-700 via-blue-600 to-sky-800',
  },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function categoryColor(cat: string): string {
  switch (cat) {
    case 'Méthodologie': return 'text-apex-blue';
    case 'Événements':   return 'text-amber-600';
    case 'Tech & Code':  return 'text-emerald-600';
    case 'Vie Campus':   return 'text-rose-600';
    default:             return 'text-slate-500';
  }
}

// ─── Article Card Pattern Header ─────────────────────────────────────────────
function CardPattern({ gradient }: { gradient: string }) {
  return (
    <div className={`h-40 w-full bg-gradient-to-br ${gradient} relative overflow-hidden flex-shrink-0 rounded-t-xl`} aria-hidden="true">
      {/* Geometric overlay pattern */}
      <div className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.15) 0px, rgba(255,255,255,0.15) 1px, transparent 1px, transparent 20px), repeating-linear-gradient(-45deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 1px, transparent 1px, transparent 20px)',
        }}
      />
      {/* Dot accent */}
      <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-white/10 border border-white/20" />
      <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full bg-white/5 border border-white/10" />
      <BookOpen className="absolute bottom-4 right-5 w-8 h-8 text-white/30" strokeWidth={1.5} />
    </div>
  );
}

// ─── Article Card ─────────────────────────────────────────────────────────────
function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="group bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden hover:-translate-y-1 hover:shadow-md transition-all duration-200 flex flex-col">
      <CardPattern gradient={article.patternStyle} />

      <div className="p-6 flex flex-col flex-1">
        {/* Category tag */}
        <p className={`font-body text-[10px] font-bold uppercase tracking-widest mb-2 ${categoryColor(article.category)}`}>
          {article.category}
        </p>

        {/* Title */}
        <h2 className="font-heading font-bold text-apex-dark text-[15px] leading-snug mb-2 line-clamp-2 group-hover:text-apex-blue transition-colors duration-150">
          {article.title}
        </h2>

        {/* Excerpt */}
        <p className="font-body text-[13px] text-slate-500 leading-relaxed line-clamp-2 flex-1">
          {article.excerpt}
        </p>

        {/* Card footer */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100">
          <div className="flex items-center gap-3">
            <span className="font-body text-[11px] text-slate-400">{article.date}</span>
            <span className="text-slate-200" aria-hidden="true">·</span>
            <span className="font-body text-[11px] text-slate-400 flex items-center gap-1">
              <Clock className="w-3 h-3" strokeWidth={2} aria-hidden="true" />
              {article.readTime}
            </span>
          </div>
          <a
            href={`/articles/${article.slug}`}
            className="font-body text-[12px] font-semibold text-apex-blue hover:underline flex items-center gap-1 group-hover:gap-1.5 transition-all duration-150"
            aria-label={`Lire l'article : ${article.title}`}
          >
            Lire <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ArticlesPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('Tous');

  const filtered = activeCategory === 'Tous'
    ? articles
    : articles.filter(a => a.category === activeCategory);

  // Split for funnel placement: first 3 above banner, rest below
  const above = filtered.slice(0, 3);
  const below  = filtered.slice(3);

  return (
    <>
      <Header activePage="articles" />

      <main className="bg-slate-50 min-h-screen" id="main-content">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* ══════════════════════════════════════════════════════════════
              SECTION 1 — Featured Article Hero
          ══════════════════════════════════════════════════════════════ */}
          <section aria-labelledby="featured-heading" className="mt-8">
            <div className="bg-[#0f2560] rounded-2xl p-8 md:p-12 relative overflow-hidden">
              {/* Background grid texture */}
              <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                  backgroundImage: 'repeating-linear-gradient(0deg, white 0px, white 1px, transparent 1px, transparent 36px), repeating-linear-gradient(90deg, white 0px, white 1px, transparent 1px, transparent 36px)',
                }}
                aria-hidden="true"
              />
              {/* Glow */}
              <div
                className="absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(96,165,250,0.12) 0%, transparent 70%)' }}
                aria-hidden="true"
              />

              <div className="relative max-w-3xl">
                {/* Gold badge */}
                <div className="inline-flex items-center gap-2 bg-amber-400/15 border border-amber-400/30 text-amber-300 font-body text-[11px] font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                  {featuredArticle.tag}
                </div>

                {/* Headline */}
                <h1
                  id="featured-heading"
                  className="font-heading font-bold text-white text-2xl sm:text-3xl lg:text-4xl leading-tight mb-4 max-w-2xl"
                >
                  {featuredArticle.title}
                </h1>

                {/* Excerpt */}
                <p className="font-body text-blue-200 text-[14px] leading-relaxed mb-6 max-w-xl line-clamp-2">
                  {featuredArticle.excerpt}
                </p>

                {/* Metadata + CTA */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                  <div className="flex items-center gap-3 text-blue-300">
                    <span className="flex items-center gap-1.5 font-body text-[12px]">
                      <User className="w-3.5 h-3.5" strokeWidth={2} aria-hidden="true" />
                      Par {featuredArticle.author}
                    </span>
                    <span className="text-blue-600" aria-hidden="true">·</span>
                    <span className="flex items-center gap-1.5 font-body text-[12px]">
                      <Clock className="w-3.5 h-3.5" strokeWidth={2} aria-hidden="true" />
                      {featuredArticle.readTime}
                    </span>
                    <span className="text-blue-600" aria-hidden="true">·</span>
                    <span className="font-body text-[12px]">{featuredArticle.date}</span>
                  </div>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 bg-white text-[#0f2560] font-body font-bold text-[13px] px-5 py-2.5 rounded-xl hover:bg-blue-50 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-white"
                    aria-label="Lire l'article à la une"
                  >
                    Lire l'article <ArrowRight className="w-4 h-4" strokeWidth={2.5} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════════
              SECTION 2 — Filter Bar
          ══════════════════════════════════════════════════════════════ */}
          <nav
            aria-label="Filtrer les articles par catégorie"
            className="flex flex-wrap items-center gap-2 mt-8 mb-6"
          >
            <span className="font-body text-[13px] font-semibold text-slate-500 mr-1">
              Catégories :
            </span>
            {CATEGORIES.map(cat => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`font-body text-[13px] font-medium px-4 py-1.5 rounded-full border transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-apex-blue ${
                    isActive
                      ? 'bg-apex-blue text-white border-apex-blue shadow-sm'
                      : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:text-slate-800'
                  }`}
                  aria-pressed={isActive}
                >
                  {cat}
                </button>
              );
            })}
            <span className="ml-auto font-body text-[12px] text-slate-400">
              {filtered.length} article{filtered.length !== 1 ? 's' : ''}
            </span>
          </nav>

          {/* ══════════════════════════════════════════════════════════════
              SECTION 3A — Article Grid (first 3)
          ══════════════════════════════════════════════════════════════ */}
          {above.length > 0 && (
            <section aria-label="Articles récents" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {above.map(article => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </section>
          )}

          {/* Show empty state only if NO articles at all */}
          {filtered.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-slate-300" strokeWidth={2} />
              </div>
              <p className="font-heading font-semibold text-apex-dark text-[15px] mb-1">
                Aucun article dans cette catégorie
              </p>
              <p className="font-body text-slate-400 text-sm">
                Revenez bientôt ou choisissez une autre catégorie.
              </p>
            </div>
          )}

          {/* ══════════════════════════════════════════════════════════════
              SECTION 4 — Integration Banner (Vault funnel)
          ══════════════════════════════════════════════════════════════ */}
          {above.length > 0 && (
            <aside
              aria-label="Accéder au Vault Académique"
              className="bg-white border border-blue-100 rounded-2xl p-7 md:p-8 mt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
            >
              {/* Left */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-apex-blue" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <div>
                  <p className="font-heading font-bold text-apex-dark text-[17px] leading-snug mb-1">
                    Appliquez ces conseils immédiatement.
                  </p>
                  <p className="font-body text-[13px] text-slate-500 leading-relaxed max-w-lg">
                    Accédez à tous les anciens examens, TDs et cours dans notre{' '}
                    <span className="font-semibold text-apex-blue">Vault Académique</span> — 250+ ressources classées par module.
                  </p>
                </div>
              </div>

              {/* Right CTA */}
              <Link
                to="/vault"
                className="inline-flex items-center gap-2 bg-apex-blue text-white font-body font-bold text-[13px] px-6 py-3 rounded-xl hover:bg-[#1d4ed8] transition-colors duration-150 shadow-sm flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-apex-blue focus:ring-offset-2"
                aria-label="Ouvrir le Vault Académique"
              >
                <ExternalLink className="w-4 h-4" strokeWidth={2} aria-hidden="true" />
                Ouvrir le Vault Académique
              </Link>
            </aside>
          )}

          {/* ══════════════════════════════════════════════════════════════
              SECTION 3B — Remaining articles (below banner)
          ══════════════════════════════════════════════════════════════ */}
          {below.length > 0 && (
            <section aria-label="Plus d'articles" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 mb-16">
              {below.map(article => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </section>
          )}

          {/* Bottom padding when no below-banner articles */}
          {below.length === 0 && <div className="pb-16" />}

        </div>
      </main>

      <Footer />
    </>
  );
}
