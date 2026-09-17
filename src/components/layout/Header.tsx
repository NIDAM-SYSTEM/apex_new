import { useState, useEffect, useRef } from 'react';
import { Search, BookOpen, Menu, X, Command } from 'lucide-react';

const navLinks = [
  { label: 'Accueil',          href: '/',         page: 'home'     },
  { label: 'Vault Académique', href: '/vault',    page: 'vault'    },
  { label: 'Aide Étudiante',   href: '/help',     page: 'help'     },
  { label: 'Articles',         href: '/articles', page: 'articles' },
  { label: 'Événements',       href: '/events',   page: 'events'   },
  { label: 'Club APEX',        href: '/club',     page: 'club'     },
];

interface HeaderProps {
  activePage?: 'home' | 'vault' | 'help' | 'articles' | 'events' | 'club';
}

export default function Header({ activePage = 'home' }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled,   setScrolled]   = useState(false);
  const searchRef = useRef<HTMLButtonElement>(null);

  /* Scroll shadow & blur trigger */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ⌘K / Ctrl+K trigger */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        searchRef.current?.click();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  /* Lock body scroll when mobile nav is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/85 backdrop-blur-md shadow-sm border-b border-slate-200/50 py-0' 
          : 'bg-white border-b border-slate-100 py-1'
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-[60px] flex items-center justify-between gap-6">

        {/* ── Left: Branding (The Anchor) ─────────────────────────── */}
        <a
          href="/"
          className="group flex items-center gap-2.5 flex-shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-apex-blue rounded-lg transition-transform duration-200 active:scale-95"
          aria-label="APEX ENS Tétouan — retour à l'accueil"
        >
          <div className="w-8 h-8 bg-gradient-to-br from-apex-blue to-blue-700 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm group-hover:shadow-md transition-shadow">
            <BookOpen className="w-4 h-4 text-white" strokeWidth={2.5} aria-hidden="true" />
          </div>
          <span className="font-heading font-black text-[16px] text-slate-900 leading-none tracking-tight">
            <span className="text-apex-blue">APEX</span>{' '}
            <span className="hidden sm:inline text-slate-600 font-bold text-[14px]">ENS Tétouan</span>
          </span>
        </a>

        {/* ── Center: Desktop nav (The Map) ───────────────────────── */}
        <nav
          className="hidden lg:flex items-center gap-1.5"
          aria-label="Navigation principale"
        >
          {navLinks.map((link) => {
            const isActive = link.page === activePage;
            return (
              <a
                key={link.page}
                href={link.href}
                aria-current={isActive ? 'page' : undefined}
                className={`font-body text-[13.5px] px-3.5 py-1.5 rounded-full whitespace-nowrap transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-apex-blue ${
                  isActive
                    ? 'text-apex-blue bg-blue-50/80 font-bold shadow-sm ring-1 ring-blue-100/50'
                    : 'text-slate-500 font-semibold hover:text-slate-900 hover:bg-slate-100/70'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* ── Right: Actions (The Accelerator) ────────────────────── */}
        <div className="flex items-center gap-3 flex-shrink-0">

          {/* Desktop SaaS-style Search Bar */}
          <button
            ref={searchRef}
            type="button"
            aria-label="Rechercher (⌘K)"
            onClick={() => console.log('open search global modal')}
            className="hidden sm:flex items-center gap-3 bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-blue-300 hover:shadow-[0_0_0_2px_rgba(37,99,235,0.1)] transition-all duration-200 rounded-full pl-3 pr-1.5 py-1.5 focus:outline-none"
          >
            <div className="flex items-center gap-2 text-slate-400">
              <Search className="w-4 h-4" strokeWidth={2.5} aria-hidden="true" />
              <span className="font-body text-[13px] font-medium mr-2">Rechercher...</span>
            </div>
            <kbd
              className="hidden md:flex items-center gap-1 font-body font-bold text-[10px] text-slate-400 bg-white border border-slate-200 shadow-sm rounded-md px-1.5 py-0.5 select-none"
              aria-label="Raccourci clavier commande K"
            >
              <Command className="w-3 h-3" strokeWidth={2.5} /> K
            </kbd>
          </button>

          {/* Mobile Search Icon (Fallback) */}
          <button
            type="button"
            className="sm:hidden p-2 rounded-full text-slate-500 hover:bg-slate-100 transition-colors"
            aria-label="Rechercher"
          >
            <Search className="w-5 h-5" strokeWidth={2.5} />
          </button>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 hover:bg-slate-100 transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-apex-blue active:scale-95"
            aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen(v => !v)}
          >
            {mobileOpen
              ? <X    className="w-5 h-5" strokeWidth={2.5} aria-hidden="true" />
              : <Menu className="w-5 h-5" strokeWidth={2.5} aria-hidden="true" />
            }
          </button>
        </div>
      </div>

      {/* ── Mobile nav drawer ─────────────────────────────────────── */}
      {mobileOpen && (
        <div
          id="mobile-nav"
          className="lg:hidden absolute inset-x-0 top-[100%] bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-2xl z-40 overflow-hidden"
          aria-label="Navigation mobile"
        >
          <nav className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-2 h-[calc(100vh-60px)] overflow-y-auto">
            
            {/* Mobile search bar (Prominent) */}
            <div className="relative mb-6">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" strokeWidth={2.5} />
              <input
                type="search"
                placeholder="Rechercher une ressource, un événement..."
                aria-label="Rechercher sur APEX"
                className="w-full h-12 pl-10 pr-4 bg-slate-50 border border-slate-200 rounded-xl font-body text-[14.5px] text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-apex-blue focus:bg-white shadow-sm transition-all"
              />
            </div>

            <p className="font-body text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-2 px-2">
              Menu Principal
            </p>

            {navLinks.map((link) => {
              const isActive = link.page === activePage;
              return (
                <a
                  key={link.page}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`font-body text-[15px] font-bold px-4 py-3.5 rounded-xl transition-all duration-200 flex items-center justify-between ${
                    isActive
                      ? 'text-apex-blue bg-blue-50 border border-blue-100/50'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  {link.label}
                  {isActive && <div className="w-1.5 h-1.5 rounded-full bg-apex-blue shadow-[0_0_8px_rgba(37,99,235,0.5)]" />}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}