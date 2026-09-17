import { useState } from 'react';
import { ArrowRight, Clock, User, BookOpen, ExternalLink, Sparkles, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

// ─── Data ────────────────────────────────────────────────────────────────────
// (Data remains the same as provided)
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
  patternStyle: string; 
}

const featuredArticle = {
  id: 'featured',
  tag: 'Édition Spéciale',
  title: 'Guide Stratégique : Comment exceller en Analyse 3 et Algèbre',
  excerpt:
    'Maîtriser les deux piliers du semestre 3. Techniques éprouvées, erreurs classiques à éviter, et méthode de révision active pour maximiser vos notes dès la première semaine.',
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
    patternStyle: 'from-blue-600 to-indigo-900',
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
    patternStyle: 'from-amber-500 to-orange-700',
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
    patternStyle: 'from-emerald-500 to-teal-800',
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
    patternStyle: 'from-violet-500 to-purple-900',
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
    patternStyle: 'from-rose-500 to-pink-800',
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
    patternStyle: 'from-sky-500 to-blue-800',
  },
];



// ─── Article Card ─────────────────────────────────────────────────────────────
function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="group bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col overflow-hidden">
      
      {/* Card Header (Magazine Cover Style) */}
      <div className={`h-48 w-full bg-gradient-to-br ${article.patternStyle} relative overflow-hidden flex-shrink-0`}>
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-20 mix-blend-overlay group-hover:scale-110 transition-transform duration-700 ease-out"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        />
        
        {/* Floating Category Badge inside the cover */}
        <div className="absolute top-4 left-4 z-10">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/90 backdrop-blur-md font-body text-[10px] font-black uppercase tracking-widest text-slate-900 shadow-sm">
            {article.category}
          </span>
        </div>

        {/* Abstract Graphic Elements */}
        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-colors duration-500" />
        <BookOpen className="absolute bottom-4 right-4 w-12 h-12 text-white/20 group-hover:text-white/40 transition-colors duration-500 transform group-hover:-rotate-12" strokeWidth={1} />
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-1 bg-white relative">
        <h2 className="font-heading font-black text-slate-900 text-[17px] leading-snug mb-3 line-clamp-2 group-hover:text-apex-blue transition-colors duration-200">
          {article.title}
        </h2>

        <p className="font-body text-[14px] text-slate-500 leading-relaxed line-clamp-2 flex-1 mb-5">
          {article.excerpt}
        </p>

        {/* Card footer */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center">
              <User className="w-3 h-3 text-slate-500" />
            </div>
            <span className="font-body text-[12px] font-semibold text-slate-700">{article.author}</span>
          </div>
          <span className="flex items-center gap-1.5 font-body text-[11px] font-medium text-slate-400 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-100">
            <Clock className="w-3 h-3" /> {article.readTime}
          </span>
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

  const above = filtered.slice(0, 3);
  const below  = filtered.slice(3);

  return (
    <>
      <Header activePage="articles" />

      <main className="bg-[#f8fafc] min-h-screen" id="main-content">
        
        {/* ══════════════════════════════════════════════════════════════
            SECTION 1 — Editorial Hero (Premium Vibe)
        ══════════════════════════════════════════════════════════════ */}
        <section aria-labelledby="featured-heading" className="pt-8 pb-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="bg-[#0a1128] rounded-[2rem] p-8 md:p-14 relative overflow-hidden shadow-2xl border border-slate-800">
              
              {/* Background Glows & Texture */}
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen translate-x-1/3 -translate-y-1/3" />
              <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[80px] pointer-events-none mix-blend-screen -translate-x-1/4 translate-y-1/4" />
              
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                {/* Content Side */}
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/20 text-amber-400 font-body text-[11px] font-black uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                    <Sparkles className="w-3.5 h-3.5" />
                    {featuredArticle.tag}
                  </div>

                  <h1 id="featured-heading" className="font-heading font-black text-white text-3xl sm:text-4xl lg:text-5xl leading-[1.1] mb-6 tracking-tight">
                    {featuredArticle.title}
                  </h1>

                  <p className="font-body text-slate-300 text-[16px] sm:text-[18px] leading-relaxed mb-8 max-w-2xl">
                    {featuredArticle.excerpt}
                  </p>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                    <Link
                      to="#"
                      className="group inline-flex items-center gap-3 bg-white text-[#0a1128] font-body font-bold text-[15px] px-8 py-4 rounded-xl hover:bg-slate-100 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] focus:ring-4 focus:ring-white/30"
                    >
                      Lire l'édition spéciale 
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    
                    <div className="flex items-center gap-4 text-slate-400 font-body text-[13px] font-medium border-l border-slate-700 pl-6 h-10">
                      <span className="flex items-center gap-1.5 text-white">
                        <User className="w-4 h-4 text-slate-500" /> {featuredArticle.author}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-slate-500" /> {featuredArticle.readTime}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Visual Side (Abstract Representation) */}
                <div className="hidden lg:flex lg:col-span-5 justify-end">
                  <div className="relative w-72 h-72">
                    <div className="absolute inset-0 border-2 border-dashed border-slate-700 rounded-full animate-[spin_60s_linear_infinite]" />
                    <div className="absolute inset-4 border border-blue-500/30 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <TrendingUp className="w-24 h-24 text-amber-400 opacity-80" strokeWidth={1} />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* ══════════════════════════════════════════════════════════════
              SECTION 2 — Filter Bar (Pill Tabs)
          ══════════════════════════════════════════════════════════════ */}
          <nav
            aria-label="Filtrer les articles"
            className="flex flex-wrap items-center gap-3 mt-10 mb-8 border-b border-slate-200/60 pb-6"
          >
            <span className="font-body text-[14px] font-bold text-slate-400 uppercase tracking-widest mr-2 hidden sm:block">
              Explorer
            </span>
            {CATEGORIES.map(cat => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`font-body text-[14px] font-bold px-5 py-2.5 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-apex-blue/50 ${
                    isActive
                      ? 'bg-apex-blue text-white shadow-md shadow-blue-500/20'
                      : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-200 hover:bg-blue-50 hover:text-apex-blue'
                  }`}
                  aria-pressed={isActive}
                >
                  {cat}
                </button>
              );
            })}
            <div className="ml-auto flex items-center gap-2 font-body text-[13px] font-semibold text-slate-400 bg-white px-3 py-1.5 rounded-lg border border-slate-200">
               <span className="w-2 h-2 rounded-full bg-emerald-500" />
               {filtered.length} Résultat{filtered.length !== 1 ? 's' : ''}
            </div>
          </nav>

          {/* ══════════════════════════════════════════════════════════════
              SECTION 3A — Article Grid (Top Row)
          ══════════════════════════════════════════════════════════════ */}
          {above.length > 0 && (
            <section aria-label="Articles récents" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {above.map(article => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </section>
          )}

          {/* Empty State */}
          {filtered.length === 0 && (
            <div className="flex flex-col items-center justify-center py-32 text-center bg-white rounded-3xl border border-dashed border-slate-300">
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-5 border border-slate-100">
                <BookOpen className="w-8 h-8 text-slate-300" strokeWidth={1.5} />
              </div>
              <p className="font-heading font-black text-slate-800 text-xl mb-2">
                Aucun article publié
              </p>
              <p className="font-body text-slate-500 text-[15px]">
                Nous préparons du nouveau contenu pour cette catégorie.
              </p>
            </div>
          )}

          {/* ══════════════════════════════════════════════════════════════
              SECTION 4 — The Interruption (Vault Funnel)
          ══════════════════════════════════════════════════════════════ */}
          {above.length > 0 && (
            <aside
              aria-label="Accéder au Vault Académique"
              className="bg-gradient-to-r from-[#0a1128] to-apex-blue rounded-[2rem] p-8 md:p-10 mt-16 mb-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden"
            >
              {/* Decorative elements */}
              <div className="absolute right-0 top-0 w-64 h-full bg-white/5 skew-x-12 translate-x-1/2 pointer-events-none" />
              
              <div className="flex items-center gap-6 relative z-10 w-full md:w-auto">
                <div className="w-16 h-16 bg-white/10 border border-white/20 rounded-2xl flex items-center justify-center flex-shrink-0 backdrop-blur-md">
                  <TrendingUp className="w-8 h-8 text-amber-400" strokeWidth={2} />
                </div>
                <div>
                  <p className="font-heading font-black text-white text-2xl leading-snug mb-2">
                    Assez de lecture. <span className="text-amber-400">Passez à la pratique.</span>
                  </p>
                  <p className="font-body text-[15px] text-blue-100 leading-relaxed max-w-xl">
                    Appliquez ces stratégies dès maintenant. Accédez à la plus grande base de données d'anciens examens et TDs de l'ENS Tétouan.
                  </p>
                </div>
              </div>

              <Link
                to="/vault"
                className="group w-full md:w-auto inline-flex items-center justify-center gap-2 bg-amber-400 text-slate-900 font-body font-black text-[15px] px-8 py-4 rounded-xl hover:bg-amber-300 transition-all duration-300 shadow-lg hover:shadow-amber-400/30 flex-shrink-0 relative z-10 hover:-translate-y-1"
                aria-label="Ouvrir le Vault Académique"
              >
                Accéder au Vault
                <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform" strokeWidth={2.5} />
              </Link>
            </aside>
          )}

          {/* ══════════════════════════════════════════════════════════════
              SECTION 3B — Remaining articles (below banner)
          ══════════════════════════════════════════════════════════════ */}
          {below.length > 0 && (
            <section aria-label="Plus d'articles" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
              {below.map(article => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </section>
          )}

        </div>
      </main>

      <Footer />
    </>
  );
}