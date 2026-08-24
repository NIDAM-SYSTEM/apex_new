import { Clock, MapPin, Users, ChevronRight, CalendarDays, Image, ArrowRight } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

// ─── Data ────────────────────────────────────────────────────────────────────

const upcomingEvents = [
  {
    id: 'ue1',
    day: '22',
    month: 'SEPT',
    title: 'Atelier de Méthodologie : Valider son S3',
    location: 'Amphi 4',
    audience: 'Ouvert à tous',
    tag: 'Méthodologie',
    tagColor: 'bg-blue-50 text-apex-blue border-blue-100',
    spots: 'Inscriptions ouvertes',
  },
  {
    id: 'ue2',
    day: '28',
    month: 'SEPT',
    title: 'Workshop LaTeX & Rédaction Scientifique',
    location: 'Salle Informatique 2',
    audience: 'Niveau débutant accepté',
    tag: 'Tech & Code',
    tagColor: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    spots: 'Inscriptions ouvertes',
  },
  {
    id: 'ue3',
    day: '5',
    month: 'OCT',
    title: 'Table ronde : Orientation après la Licence',
    location: 'Amphithéâtre Central',
    audience: 'Toutes filières',
    tag: 'Campus',
    tagColor: 'bg-amber-50 text-amber-700 border-amber-100',
    spots: 'Dernières places',
    urgent: true,
  },
  {
    id: 'ue4',
    day: '10',
    month: 'OCT',
    title: 'Séance de révision collective — Analyse 3',
    location: 'Bibliothèque ENS',
    audience: 'Mathématiques · S3',
    tag: 'Académique',
    tagColor: 'bg-violet-50 text-violet-700 border-violet-100',
    spots: 'Inscriptions ouvertes',
  },
];

const pastEvents = [
  {
    id: 'pe1',
    title: 'Journée d\'Intégration 2025',
    date: '15 Septembre 2025',
    category: 'Campus',
    attendees: '120 participants',
  },
  {
    id: 'pe2',
    title: 'Hackathon ENS Tétouan 2024',
    date: '3 – 4 Décembre 2024',
    category: 'Tech & Code',
    attendees: '48 participants',
  },
  {
    id: 'pe3',
    title: 'Tournoi d\'Échecs S1 — 2025',
    date: '20 Février 2025',
    category: 'Loisir',
    attendees: '32 participants',
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function EventsPage() {
  return (
    <>
      <Header activePage="events" />

      <main className="bg-slate-50 min-h-screen" id="main-content">

        {/* ══════════════════════════════════════════════════════════════
            SECTION 1 — Hero (deep blue, generous bottom padding for overlap)
        ══════════════════════════════════════════════════════════════ */}
        <section
          className="bg-[#0f2560] pt-16 pb-32 px-4 sm:px-6 text-center"
          aria-labelledby="events-hero-heading"
        >
          {/* Label */}
          <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/30 text-amber-300 font-body text-[11px] font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            <CalendarDays className="w-3.5 h-3.5" strokeWidth={2} aria-hidden="true" />
            Agenda 2026
          </div>

          {/* Heading */}
          <h1
            id="events-hero-heading"
            className="font-heading font-bold text-white text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05] mb-4"
          >
            Agenda APEX.
          </h1>

          {/* Subtext */}
          <p className="font-body text-blue-200 text-[15px] leading-relaxed max-w-xl mx-auto">
            Rejoignez nos ateliers, compétitions et rencontres à l'ENS Tétouan.
            Des événements conçus pour booster votre parcours académique.
          </p>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            SECTION 2 — Featured Event Ticket (overlaps hero with -mt-20)
        ══════════════════════════════════════════════════════════════ */}
        <section
          className="relative z-10 -mt-20 px-4 sm:px-6"
          aria-labelledby="featured-event-heading"
        >
          <div className="max-w-5xl mx-auto">
            <article className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden flex flex-col md:flex-row">

              {/* ── Left: Visual date block ───────────────────────── */}
              <div
                className="md:w-1/3 bg-gradient-to-br from-amber-400 via-amber-500 to-orange-500 flex flex-col items-center justify-center py-12 md:py-0 px-8 relative overflow-hidden"
                aria-label="Date de l'événement : 15 octobre"
              >
                {/* Subtle dot pattern */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)', backgroundSize: '20px 20px' }}
                  aria-hidden="true"
                />
                <div className="relative text-center">
                  <p className="font-heading font-bold text-white text-7xl sm:text-8xl leading-none tracking-tighter">
                    15
                  </p>
                  <p className="font-body font-bold text-white/80 text-lg tracking-[0.3em] uppercase mt-1">
                    Octobre
                  </p>
                  <div className="mt-4 w-12 h-0.5 bg-white/40 mx-auto" />
                  <p className="font-body text-[12px] text-white/70 mt-4 font-medium">
                    14h00 – 18h00
                  </p>
                </div>
              </div>

              {/* ── Right: Event details ──────────────────────────── */}
              <div className="flex-1 p-8 md:p-10 flex flex-col justify-between">
                <div>
                  {/* Badge */}
                  <div className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200 text-amber-700 font-body text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                    Prochain Événement
                  </div>

                  {/* Title */}
                  <h2
                    id="featured-event-heading"
                    className="font-heading font-bold text-apex-dark text-2xl sm:text-3xl leading-tight mb-5"
                  >
                    Tournoi d'Échecs Universitaire & Code Session
                  </h2>

                  {/* Logistics */}
                  <div className="flex flex-col sm:flex-row gap-4 mb-6">
                    <div className="flex items-center gap-2 text-slate-500">
                      <div className="w-8 h-8 bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="w-4 h-4 text-apex-blue" strokeWidth={2} aria-hidden="true" />
                      </div>
                      <span className="font-body text-[13px] font-medium">14h00 – 18h00</span>
                    </div>
                    <div className="hidden sm:block w-px bg-slate-100" />
                    <div className="flex items-center gap-2 text-slate-500">
                      <div className="w-8 h-8 bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-4 h-4 text-apex-blue" strokeWidth={2} aria-hidden="true" />
                      </div>
                      <span className="font-body text-[13px] font-medium">Hall Principal, Bâtiment B</span>
                    </div>
                    <div className="hidden sm:block w-px bg-slate-100" />
                    <div className="flex items-center gap-2 text-slate-500">
                      <div className="w-8 h-8 bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Users className="w-4 h-4 text-apex-blue" strokeWidth={2} aria-hidden="true" />
                      </div>
                      <span className="font-body text-[13px] font-medium">Toutes filières</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="font-body text-[14px] text-slate-500 leading-relaxed max-w-lg">
                    Une après-midi intense combinant une compétition d'échecs universitaire et une session de code ouverte.
                    Prizes à gagner. Tous niveaux bienvenus.
                  </p>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-8 pt-7 border-t border-slate-100">
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 bg-apex-blue text-white font-body font-bold text-[14px] px-7 py-3.5 rounded-xl hover:bg-[#1d4ed8] active:scale-[0.98] transition-all duration-150 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-apex-blue focus:ring-offset-2"
                    aria-label="S'inscrire à l'événement — places limitées"
                  >
                    S'inscrire — Places Limitées
                    <ArrowRight className="w-4 h-4" strokeWidth={2.5} aria-hidden="true" />
                  </button>
                  <p className="font-body text-[12px] text-slate-400">
                    Inscription gratuite · Confirmée par email
                  </p>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            SECTION 3 — Upcoming Events (horizontal list)
        ══════════════════════════════════════════════════════════════ */}
        <section className="mt-14 px-4 sm:px-6 pb-4" aria-labelledby="upcoming-heading">
          <div className="max-w-5xl mx-auto">

            {/* Header */}
            <div className="flex items-end justify-between mb-5">
              <div>
                <p className="text-[11px] font-body font-semibold uppercase tracking-widest text-apex-blue mb-1">
                  Agenda
                </p>
                <h2
                  id="upcoming-heading"
                  className="font-heading font-bold text-apex-dark text-xl"
                >
                  À venir ce mois-ci
                </h2>
              </div>
              <a href="#" className="hidden sm:inline-flex items-center gap-1 font-body text-sm font-medium text-apex-blue hover:underline">
                Voir tout <ChevronRight className="w-3.5 h-3.5" strokeWidth={2} />
              </a>
            </div>

            {/* Event list */}
            <div
              className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm"
              role="list"
              aria-label="Événements à venir"
            >
              {upcomingEvents.map((ev, i) => (
                <div
                  key={ev.id}
                  role="listitem"
                  className={`group flex items-center gap-5 px-6 py-5 hover:bg-slate-50 transition-colors duration-150 ${
                    i < upcomingEvents.length - 1 ? 'border-b border-slate-100' : ''
                  }`}
                >
                  {/* Date block */}
                  <div
                    className="w-16 flex-shrink-0 text-center bg-slate-50 border border-slate-100 rounded-xl py-2.5 px-1"
                    aria-label={`${ev.day} ${ev.month}`}
                  >
                    <p className="font-heading font-bold text-apex-dark text-[22px] leading-none">
                      {ev.day}
                    </p>
                    <p className="font-body text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">
                      {ev.month}
                    </p>
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h3 className="font-body font-bold text-apex-dark text-[14px] group-hover:text-apex-blue transition-colors duration-150 leading-snug">
                        {ev.title}
                      </h3>
                      {ev.urgent && (
                        <span className="font-body text-[10px] font-bold bg-red-50 text-red-600 border border-red-100 px-2 py-0.5 rounded-full flex-shrink-0">
                          Dernières places
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-3 mt-1">
                      <span className="flex items-center gap-1 font-body text-[12px] text-slate-400">
                        <MapPin className="w-3 h-3" strokeWidth={2} aria-hidden="true" />
                        {ev.location}
                      </span>
                      <span className="text-slate-200 text-xs" aria-hidden="true">·</span>
                      <span className="flex items-center gap-1 font-body text-[12px] text-slate-400">
                        <Users className="w-3 h-3" strokeWidth={2} aria-hidden="true" />
                        {ev.audience}
                      </span>
                      <span className={`font-body text-[10px] font-semibold px-2 py-0.5 rounded-full border ${ev.tagColor}`}>
                        {ev.tag}
                      </span>
                    </div>
                  </div>

                  {/* CTA */}
                  <button
                    type="button"
                    className="hidden sm:inline-flex items-center gap-1.5 font-body font-semibold text-[12px] text-apex-blue border border-apex-blue/30 bg-white px-4 py-2 rounded-lg hover:bg-blue-50 hover:border-apex-blue transition-colors duration-150 flex-shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-apex-blue"
                    aria-label={`Voir les détails pour ${ev.title}`}
                  >
                    Voir les détails
                    <ChevronRight className="w-3.5 h-3.5" strokeWidth={2} aria-hidden="true" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            SECTION 4 — Past Events Archive
        ══════════════════════════════════════════════════════════════ */}
        <section
          className="bg-slate-100 border-t border-slate-200 py-16 mt-12 px-4 sm:px-6"
          aria-labelledby="past-heading"
        >
          <div className="max-w-5xl mx-auto">

            {/* Header */}
            <div className="mb-8">
              <p className="text-[11px] font-body font-semibold uppercase tracking-widest text-slate-400 mb-1">
                Archive
              </p>
              <h2
                id="past-heading"
                className="font-heading font-bold text-slate-600 text-xl"
              >
                Événements Passés
              </h2>
            </div>

            {/* Grid */}
            <div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5"
              role="list"
              aria-label="Archives des événements passés"
            >
              {pastEvents.map((ev) => (
                <article
                  key={ev.id}
                  role="listitem"
                  className="bg-white/60 border border-slate-200 rounded-xl p-5 hover:bg-white transition-colors duration-200"
                >
                  {/* Muted image placeholder */}
                  <div className="h-24 bg-slate-100 border border-slate-200 rounded-lg flex items-center justify-center mb-4">
                    <Image className="w-6 h-6 text-slate-300" strokeWidth={1.5} aria-hidden="true" />
                  </div>

                  {/* Tag */}
                  <p className="font-body text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1.5">
                    {ev.category}
                  </p>

                  {/* Title */}
                  <h3 className="font-heading font-bold text-slate-600 text-[14px] leading-snug mb-1">
                    {ev.title}
                  </h3>

                  {/* Meta */}
                  <p className="font-body text-[12px] text-slate-400 mb-3">
                    {ev.date} · {ev.attendees}
                  </p>

                  {/* Link */}
                  <a
                    href="#"
                    className="inline-flex items-center gap-1 font-body text-[12px] font-medium text-slate-500 hover:text-apex-blue transition-colors duration-150 focus:outline-none focus-visible:underline"
                    aria-label={`Voir les photos de ${ev.title}`}
                  >
                    Voir les photos
                    <ArrowRight className="w-3 h-3" strokeWidth={2} aria-hidden="true" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
