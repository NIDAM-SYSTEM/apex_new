import { CheckCircle2, Users, BookOpen, Lightbulb, Zap, Trophy, Calendar, ArrowRight } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

// ─── Data ────────────────────────────────────────────────────────────────────

const stats = [
  { value: '250+',  label: 'Ressources Partagées', icon: <BookOpen  className="w-5 h-5 mx-auto mb-2 opacity-60" /> },
  { value: '1 200+', label: 'Étudiants Aidés',     icon: <Users     className="w-5 h-5 mx-auto mb-2 opacity-60" /> },
  { value: '45+',   label: 'Membres Actifs',        icon: <Zap       className="w-5 h-5 mx-auto mb-2 opacity-60" /> },
];

const manifesto = [
  { icon: <Users     className="w-4 h-4" />, text: 'Connecter les étudiants entre eux et avec leurs ressources.' },
  { icon: <BookOpen  className="w-4 h-4" />, text: 'Centraliser le savoir académique en un seul endroit.' },
  { icon: <Lightbulb className="w-4 h-4" />, text: 'Développer les leaders de demain, dès aujourd\'hui.' },
];

const events = [
  {
    id: 'ev1',
    dotColor: 'bg-amber-400 border-amber-300',
    date: '12 Septembre',
    title: "Atelier d'Intégration S1",
    tag: 'Campus',
    tagColor: 'bg-amber-50 text-amber-700 border-amber-200',
    desc: 'Accueil des nouveaux étudiants, visite du campus et présentation des services APEX.',
  },
  {
    id: 'ev2',
    dotColor: 'bg-apex-blue border-blue-300',
    date: '25 Septembre',
    title: 'Hackathon / Code Session',
    tag: 'Tech',
    tagColor: 'bg-blue-50 text-apex-blue border-blue-200',
    desc: '48h pour concevoir des outils numériques au service des étudiants ENS.',
  },
  {
    id: 'ev3',
    dotColor: 'bg-slate-400 border-slate-300',
    date: '10 Octobre',
    title: "Tournoi d'Échecs Universitaire",
    tag: 'Loisir',
    tagColor: 'bg-slate-50 text-slate-600 border-slate-200',
    desc: 'Compétition ouverte à toutes les filières. Inscriptions sur place.',
  },
];

// Contributor initials colours cycling
const avatarColors = [
  'bg-blue-600',
  'bg-amber-500',
  'bg-emerald-600',
  'bg-violet-600',
  'bg-rose-500',
  'bg-sky-600',
  'bg-orange-500',
  'bg-teal-600',
];

const contributors = [
  { name: 'Yassine Moussaid',  role: 'Développement',  initials: 'YM' },
  { name: 'Salma Benali',      role: 'Design UI/UX',   initials: 'SB' },
  { name: 'Amine Kettani',     role: 'Logistique',     initials: 'AK' },
  { name: 'Hiba Chakir',       role: 'Communication',  initials: 'HC' },
  { name: 'Omar Znati',        role: 'Développement',  initials: 'OZ' },
  { name: 'Nadia Fathi',       role: 'Recherche',      initials: 'NF' },
  { name: 'Rachid Alami',      role: 'Coordination',   initials: 'RA' },
  { name: 'Fatima Ezzahra',    role: 'Relations',      initials: 'FE' },
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ClubPage() {
  return (
    <>
      <Header activePage="club" />

      <main className="min-h-screen bg-slate-50" id="main-content">

        {/* ══════════════════════════════════════════════════════════════
            SECTION 1 — Impact Dashboard Hero  (deep blue)
        ══════════════════════════════════════════════════════════════ */}
        <section
          className="bg-[#0f2560] pt-20 pb-32 px-4 sm:px-6"
          aria-labelledby="club-hero-heading"
        >
          <div className="max-w-4xl mx-auto text-center">

            {/* Gold mission badge */}
            <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/30
                            text-amber-300 font-body text-[11px] font-semibold uppercase tracking-widest
                            px-4 py-1.5 rounded-full mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
              Mission 2026
            </div>

            {/* Main headline */}
            <h1
              id="club-hero-heading"
              className="font-heading font-bold text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight mb-5"
            >
              Construire l'avenir<br className="hidden sm:block" /> de l'ENS Tétouan.
            </h1>

            {/* Subtext */}
            <p className="font-body text-blue-200 text-[15px] leading-relaxed max-w-2xl mx-auto">
              APEX n'est pas juste un club. C'est le moteur numérique et social de notre université
              — une infrastructure bâtie par des étudiants, pour des étudiants.
            </p>

            {/* Stats grid */}
            <div
              className="grid grid-cols-3 gap-4 mt-14"
              aria-label="Chiffres clés"
            >
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center"
                >
                  {s.icon}
                  <p className="font-heading font-bold text-white text-3xl sm:text-4xl tracking-tight leading-none mb-1">
                    {s.value}
                  </p>
                  <p className="font-body text-[12px] text-blue-200 font-medium mt-1 leading-snug">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            SECTION 2 — Le Manifeste  (overlaps the hero by -mt-16)
        ══════════════════════════════════════════════════════════════ */}
        <section className="bg-slate-50 pb-16 px-4 sm:px-6" aria-labelledby="manifesto-heading">
          <div className="max-w-5xl mx-auto -mt-16 relative z-10">
            <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                {/* Left — Notre Vision */}
                <div>
                  <p className="text-[11px] font-body font-semibold uppercase tracking-widest text-amber-600 mb-2">
                    Notre Vision
                  </p>
                  <h2
                    id="manifesto-heading"
                    className="font-heading font-bold text-apex-dark text-2xl leading-tight mb-4"
                  >
                    Simplifier la vie étudiante.
                  </h2>
                  <p className="font-body text-slate-600 text-[14px] leading-relaxed mb-3">
                    Chaque étudiant mérite un accès rapide à ses cours, à ses droits et à ses camarades.
                    APEX existe pour supprimer les barrières bureaucratiques et numériques qui freinent
                    la réussite académique.
                  </p>
                  <p className="font-body text-slate-600 text-[14px] leading-relaxed">
                    Nous croyons en une université où l'information est libre, le savoir est partagé
                    et la solidarité entre étudiants est notre force principale.
                  </p>
                </div>

                {/* Right — 3-point list */}
                <div className="flex flex-col justify-center gap-5">
                  {manifesto.map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-blue-50 border border-blue-100 rounded-lg flex items-center justify-center text-apex-blue flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <p className="font-body text-[14px] font-semibold text-apex-dark leading-snug">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            SECTION 3 — Agenda / Event Timeline
        ══════════════════════════════════════════════════════════════ */}
        <section className="bg-slate-50 py-16 px-4 sm:px-6" aria-labelledby="events-heading">
          <div className="max-w-4xl mx-auto">

            {/* Header */}
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="text-[11px] font-body font-semibold uppercase tracking-widest text-apex-blue mb-1.5">
                  Agenda
                </p>
                <h2
                  id="events-heading"
                  className="font-heading font-bold text-apex-dark text-2xl"
                >
                  Prochains Événements
                </h2>
              </div>
              <a href="#" className="hidden sm:inline-flex items-center gap-1 font-body text-sm font-medium text-apex-blue hover:underline">
                Voir tout <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
              </a>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Vertical line */}
              <div
                className="absolute left-[19px] top-4 bottom-4 w-px bg-slate-200"
                aria-hidden="true"
              />

              <ol className="space-y-6" aria-label="Événements à venir">
                {events.map((ev) => (
                  <li key={ev.id} className="flex items-start gap-6">

                    {/* Dot */}
                    <div className={`relative z-10 mt-1 w-10 h-10 rounded-full border-4 border-white shadow-sm flex items-center justify-center flex-shrink-0 ${ev.dotColor}`}>
                      <Calendar className="w-4 h-4 text-white" strokeWidth={2} aria-hidden="true" />
                    </div>

                    {/* Event card */}
                    <div className="flex-1 min-w-0 bg-white border border-slate-200 rounded-xl p-5 hover:border-apex-blue transition-colors duration-200 shadow-sm group">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-3 flex-wrap">
                          <h3 className="font-heading font-bold text-apex-dark text-[15px] group-hover:text-apex-blue transition-colors duration-200">
                            {ev.title}
                          </h3>
                          <span className={`font-body text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${ev.tagColor}`}>
                            {ev.tag}
                          </span>
                        </div>
                        <span className="font-body text-[12px] font-medium text-slate-400 flex-shrink-0">
                          {ev.date}
                        </span>
                      </div>
                      <p className="font-body text-[13px] text-slate-500 leading-relaxed">
                        {ev.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            SECTION 4 — Les Contributeurs  (white bg)
        ══════════════════════════════════════════════════════════════ */}
        <section className="bg-white py-16 px-4 sm:px-6 border-t border-slate-100" aria-labelledby="team-heading">
          <div className="max-w-5xl mx-auto">

            {/* Header */}
            <div className="text-center mb-10">
              <p className="text-[11px] font-body font-semibold uppercase tracking-widest text-apex-blue mb-1.5">
                L'Équipe
              </p>
              <h2
                id="team-heading"
                className="font-heading font-bold text-apex-dark text-2xl"
              >
                L'équipe derrière APEX
              </h2>
              <p className="font-body text-slate-500 text-sm mt-2 max-w-md mx-auto">
                Des étudiants qui donnent de leur temps pour améliorer l'expérience universitaire de tous.
              </p>
            </div>

            {/* Contributors grid */}
            <div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5"
              role="list"
              aria-label="Membres de l'équipe APEX"
            >
              {contributors.map((person, i) => (
                <div
                  key={person.name}
                  role="listitem"
                  className="group flex flex-col items-center text-center p-5 rounded-xl border border-slate-100 hover:border-apex-blue hover:shadow-sm transition-all duration-200 cursor-default"
                >
                  {/* Avatar with initials */}
                  <div
                    className={`w-14 h-14 rounded-full ${avatarColors[i % avatarColors.length]} flex items-center justify-center mb-3 shadow-sm`}
                    aria-hidden="true"
                  >
                    <span className="font-heading font-bold text-white text-[15px]">
                      {person.initials}
                    </span>
                  </div>

                  {/* Name */}
                  <p className="font-body font-semibold text-apex-dark text-[13px] leading-tight group-hover:text-apex-blue transition-colors duration-200">
                    {person.name}
                  </p>

                  {/* Role badge */}
                  <span className="mt-1.5 font-body text-[11px] text-slate-400 bg-slate-50 border border-slate-100 px-2.5 py-0.5 rounded-full">
                    {person.role}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            SECTION 5 — Join Us Terminal CTA
        ══════════════════════════════════════════════════════════════ */}
        <section className="bg-slate-50 py-16 px-4 sm:px-6" aria-labelledby="join-heading">
          <div className="max-w-3xl mx-auto">
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-10 text-center">

              {/* Icon */}
              <div className="w-14 h-14 bg-apex-blue rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Trophy className="w-7 h-7 text-white" strokeWidth={1.5} aria-hidden="true" />
              </div>

              {/* Heading */}
              <h2
                id="join-heading"
                className="font-heading font-bold text-apex-dark text-2xl sm:text-3xl leading-tight mb-3"
              >
                Prêt à impacter ton université ?
              </h2>
              <p className="font-body text-slate-600 text-[14px] leading-relaxed mb-8 max-w-lg mx-auto">
                Rejoins une équipe d'étudiants qui construisent de vrais outils pour de vraies personnes.
                Quel que soit ton domaine, il y a une place pour toi.
              </p>

              {/* CTA button */}
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 bg-apex-blue text-white
                           font-body font-bold text-[15px] px-8 py-4 rounded-xl
                           hover:bg-[#1d4ed8] active:scale-[0.98]
                           transition-all duration-150 shadow-md hover:shadow-lg
                           focus:outline-none focus:ring-2 focus:ring-apex-blue focus:ring-offset-2"
              >
                <ArrowRight className="w-5 h-5" strokeWidth={2.5} aria-hidden="true" />
                Postuler pour rejoindre APEX
              </button>

              {/* Sub-text */}
              <p className="font-body text-[12px] text-slate-400 mt-4">
                Recrutement ouvert pour le semestre actuel · Toutes les filières acceptées
              </p>

              {/* Three checkpoints */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-8 pt-8 border-t border-blue-100">
                {[
                  'Aucun prérequis technique',
                  'Bénévole & flexible',
                  'Certificat de participation',
                ].map((point) => (
                  <div key={point} className="flex items-center gap-2 text-[13px] font-body text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-apex-blue flex-shrink-0" strokeWidth={2} aria-hidden="true" />
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
