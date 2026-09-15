import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import BentoHero from '../components/home/BentoHero';
import PopularResources from '../components/home/PopularResources';
import StudentHelpSection from '../components/home/StudentHelpSection';
import ClubSection from '../components/home/ClubSection';

/**
 * HomePage — APEX student platform (Strategy 2: Bento Box Dashboard)
 *
 * Page order:
 *   Header (sticky, pill search) →
 *   BentoHero (3-col grid dashboard) →
 *   BranchAccess (horizontal branch tags strip) →
 *   PopularResources (software-style list view) →
 *   StudentHelpSection (3-col guide cards) →
 *   ClubSection (2-col: community + upload) →
 *   Footer
 *
 * Background rhythm:
 *   white → slate-50 → white → slate-50 → white → slate-50 → slate-900
 */
export default function HomePage() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[999]
                   bg-apex-blue text-white text-sm font-body font-medium px-4 py-2 rounded-lg"
      >
        Aller au contenu principal
      </a>

      <Header activePage="home" />


      <main id="main-content">
        {/* 1. Bento Box hero grid */}
        <BentoHero />

        {/* 2. Popular resources — software list view */}
        <PopularResources />

        {/* 4. Student Help Desk — 3-col cards */}
        <StudentHelpSection />

        {/* 5. Club APEX — community + upload contribution */}
        <ClubSection />
      </main>

      <Footer />
    </>
  );
}
