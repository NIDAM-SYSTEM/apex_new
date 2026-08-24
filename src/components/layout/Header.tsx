import { useState, useEffect, useRef } from 'react';
import { Search, BookOpen, Menu, X } from 'lucide-react';

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

  /* Scroll shadow */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
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
      className={`sticky top-0 z-50 bg-white border-b border-slate-200 transition-shadow duration-200 ${
        scrolled ? 'shadow-sm' : ''
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-6">

        {/* ── Left: Branding ──────────────────────────────────────── */}
        <a
          href="/"
          className="flex items-center gap-2.5 flex-shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-apex-blue focus-visible:ring-offset-2 rounded-md"
          aria-label="APEX ENS Tétouan — retour à l'accueil"
        >
          <div className="w-8 h-8 bg-apex-blue rounded-lg flex items-center justify-center flex-shrink-0">
            <BookOpen className="w-4 h-4 text-white" strokeWidth={2.5} aria-hidden="true" />
          </div>
          <span className="font-heading font-bold text-[15px] text-gray-900 leading-none">
            <span className="text-apex-blue">APEX</span>{' '}
            <span className="hidden sm:inline text-slate-700 font-semibold text-[13px]">ENS Tétouan</span>
          </span>
        </a>

        {/* ── Center: Desktop nav ─────────────────────────────────── */}
        <nav
          className="hidden lg:flex items-center gap-1"
          aria-label="Navigation principale"
        >
          {navLinks.map((link) => {
            const isActive = link.page === activePage;
            return (
              <a
                key={link.page}
                href={link.href}
                aria-current={isActive ? 'page' : undefined}
                className={`font-body text-sm font-medium px-3 py-1.5 rounded-md whitespace-nowrap transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-apex-blue ${
                  isActive
                    ? 'text-apex-blue bg-blue-50 font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* ── Right: Actions ──────────────────────────────────────── */}
        <div className="flex items-center gap-2 flex-shrink-0">

          {/* Search icon button + ⌘K badge */}
          <div className="hidden sm:flex items-center gap-1.5">
            <button
              ref={searchRef}
              type="button"
              aria-label="Rechercher (⌘K)"
              onClick={() => console.log('open search')}
              className="p-2 rounded-full hover:bg-slate-100 transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-apex-blue"
            >
              <Search className="w-5 h-5 text-slate-500" strokeWidth={2} aria-hidden="true" />
            </button>
            <kbd
              className="font-body text-[11px] text-slate-400 bg-slate-100 border border-slate-200 rounded px-1.5 py-0.5 leading-none select-none"
              aria-label="Raccourci clavier commande K"
            >
              ⌘K
            </kbd>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-md hover:bg-slate-100 transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-apex-blue"
            aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen(v => !v)}
          >
            {mobileOpen
              ? <X    className="w-5 h-5 text-slate-600" strokeWidth={2} aria-hidden="true" />
              : <Menu className="w-5 h-5 text-slate-600" strokeWidth={2} aria-hidden="true" />
            }
          </button>
        </div>
      </div>

      {/* ── Mobile nav drawer ─────────────────────────────────────── */}
      {mobileOpen && (
        <div
          id="mobile-nav"
          className="lg:hidden absolute inset-x-0 top-16 bg-white border-b border-slate-200 shadow-lg z-40"
          aria-label="Navigation mobile"
        >
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {/* Mobile search */}
            <div className="relative mb-2">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" strokeWidth={2} />
              <input
                type="search"
                placeholder="Rechercher..."
                aria-label="Rechercher sur APEX"
                className="w-full h-10 pl-9 pr-4 bg-slate-50 border border-slate-200 rounded-lg font-body text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-apex-blue"
              />
            </div>

            {navLinks.map((link) => {
              const isActive = link.page === activePage;
              return (
                <a
                  key={link.page}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`font-body text-sm font-medium px-3 py-2.5 rounded-md transition-colors duration-150 ${
                    isActive
                      ? 'text-apex-blue bg-blue-50 font-semibold'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
