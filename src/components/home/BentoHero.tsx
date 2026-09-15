import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  FileText,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

const branches = [
  "Mathématiques",
  "Physique",
  "SVT",
  "Sport",
  "Histoire",
  "Arabe",
];

const stats = [
  {
    value: "1.2K+",
    label: "Ressources",
    icon: FileText,
  },
  {
    value: "24",
    label: "Événements",
    icon: CalendarDays,
  },
  {
    value: "500+",
    label: "Étudiants",
    icon: Users,
  },
];

export default function StudentHero() {
  return (
    <section
      className="relative overflow-hidden bg-slate-50 pt-8 pb-10 sm:pt-12 sm:pb-14"
      aria-labelledby="student-hero-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* HERO */}
        <div className="relative overflow-hidden rounded-[2rem] bg-[#0f2560]">

          {/* Background grid */}
          <div
            className="absolute inset-0 opacity-[0.045]"
            aria-hidden="true"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
              backgroundSize: "36px 36px",
            }}
          />

          {/* Large ambient glow */}
          <div
            className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full opacity-20"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(circle, #60a5fa 0%, rgba(96,165,250,0) 70%)",
            }}
          />

          <div
            className="pointer-events-none absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full opacity-10"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(circle, #38bdf8 0%, rgba(56,189,248,0) 70%)",
            }}
          />

          {/* Main content */}
          <div className="relative grid min-h-[620px] grid-cols-1 lg:grid-cols-[1.08fr_0.92fr]">

            {/* LEFT */}
            <div className="flex flex-col justify-center px-6 py-12 sm:px-10 sm:py-16 lg:px-14 lg:py-16">

              {/* Eyebrow */}
              <div className="mb-6 flex items-center gap-2">
                <span className="flex h-7 items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-blue-200 backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                  Student Club
                </span>

                <span className="hidden text-xs text-blue-300 sm:block">
                  ENS · Communauté étudiante
                </span>
              </div>

              {/* Heading */}
              <h1
                id="student-hero-heading"
                className="max-w-2xl font-heading text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl"
              >
                Apprendre.
                <br />

                <span className="text-blue-300">
                  Partager.
                </span>{" "}
                Construire.
              </h1>

              {/* Description */}
              <p className="mt-6 max-w-xl text-sm leading-7 text-blue-100/80 sm:text-base">
                Cours, examens, TD, événements et informations utiles —
                tout ce dont tu as besoin pour avancer dans ta vie
                universitaire, au même endroit.
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/vault"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#0f2560] transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-50"
                >
                  Explorer les ressources

                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    strokeWidth={2.5}
                  />
                </Link>

                <Link
                  to="/club"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/10"
                >
                  Découvrir le club
                </Link>
              </div>

              {/* Stats */}
              <div className="mt-10 grid max-w-xl grid-cols-3 border-t border-white/10 pt-6">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;

                  return (
                    <div
                      key={stat.label}
                      className={`pr-4 ${
                        index !== stats.length - 1
                          ? "border-r border-white/10"
                          : ""
                      } ${index > 0 ? "pl-4" : ""}`}
                    >
                      <div className="mb-1 flex items-center gap-2">
                        <Icon
                          className="h-3.5 w-3.5 text-blue-300"
                          strokeWidth={2}
                        />

                        <span className="text-lg font-bold text-white">
                          {stat.value}
                        </span>
                      </div>

                      <p className="text-[11px] text-blue-200/70">
                        {stat.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* RIGHT — Visual ecosystem */}
            <div className="relative min-h-[420px] overflow-hidden lg:min-h-0">

              {/* Main visual panel */}
              <div className="absolute inset-x-6 top-10 bottom-10 rounded-[1.75rem] border border-white/10 bg-white/[0.055] backdrop-blur-sm lg:left-8 lg:right-10">

                {/* Panel header */}
                <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-300">
                      Student Hub
                    </p>

                    <p className="mt-1 text-sm font-medium text-white">
                      Ton espace étudiant
                    </p>
                  </div>

                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
                    <Sparkles
                      className="h-4 w-4 text-blue-300"
                      strokeWidth={2}
                    />
                  </div>
                </div>

                {/* Main resource area */}
                <div className="relative flex h-[calc(100%-73px)] items-center justify-center px-6">

                  {/* Decorative circles */}
                  <div className="absolute h-64 w-64 rounded-full border border-white/5" />
                  <div className="absolute h-48 w-48 rounded-full border border-white/5" />
                  <div className="absolute h-32 w-32 rounded-full border border-white/5" />

                  {/* Main card */}
                  <div className="relative z-10 w-full max-w-[300px] rounded-2xl border border-white/10 bg-white p-5 shadow-2xl shadow-black/20">

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
                          <BookOpen
                            className="h-5 w-5 text-[#0f2560]"
                            strokeWidth={2}
                          />
                        </div>

                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                            Ressource
                          </p>

                          <p className="text-sm font-bold text-slate-900">
                            Analyse 3
                          </p>
                        </div>
                      </div>

                      <span className="rounded-full bg-amber-50 px-2 py-1 text-[9px] font-semibold text-amber-600">
                        Nouveau
                      </span>
                    </div>

                    <div className="mt-5 rounded-xl bg-slate-50 p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs font-semibold text-slate-900">
                            Examen Final 2024
                          </p>

                          <p className="mt-1 text-[10px] text-slate-400">
                            Mathématiques · S3
                          </p>
                        </div>

                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0f2560]">
                          <FileText
                            className="h-3.5 w-3.5 text-white"
                            strokeWidth={2}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-[10px] text-slate-400">
                        Ajouté récemment
                      </span>

                      <span className="flex items-center gap-1 text-[10px] font-semibold text-[#0f2560]">
                        Ouvrir
                        <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  </div>

                  {/* Floating card — Event */}
                  <div className="absolute left-0 top-8 hidden w-[155px] rounded-xl border border-white/10 bg-[#162f70] p-3 shadow-xl shadow-black/10 sm:block">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
                        <CalendarDays
                          className="h-4 w-4 text-blue-200"
                          strokeWidth={2}
                        />
                      </div>

                      <div>
                        <p className="text-[9px] text-blue-300">
                          PROCHAIN
                        </p>

                        <p className="text-[11px] font-semibold text-white">
                          Club Event
                        </p>
                      </div>
                    </div>

                    <div className="mt-3 rounded-lg bg-white/5 px-2.5 py-2">
                      <p className="text-[10px] font-medium text-blue-100">
                        Workshop · 18 Sept.
                      </p>
                    </div>
                  </div>

                  {/* Floating card — Community */}
                  <div className="absolute bottom-8 right-0 hidden w-[155px] rounded-xl border border-white/10 bg-[#162f70] p-3 shadow-xl shadow-black/10 sm:block">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
                        <Users
                          className="h-4 w-4 text-blue-200"
                          strokeWidth={2}
                        />
                      </div>

                      <div>
                        <p className="text-[9px] text-blue-300">
                          COMMUNAUTÉ
                        </p>

                        <p className="text-[11px] font-semibold text-white">
                          500+ étudiants
                        </p>
                      </div>
                    </div>

                    <div className="mt-3 flex items-center gap-1.5 text-[10px] text-blue-100/70">
                      <Zap className="h-3 w-3 text-blue-300" />
                      Active aujourd'hui
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Branches */}
          <div className="relative border-t border-white/10 bg-black/[0.06] px-6 py-4 sm:px-10">
            <div className="flex flex-wrap items-center gap-2">
              <span className="mr-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-blue-300">
                Filières
              </span>

              {branches.map((branch) => (
                <span
                  key={branch}
                  className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[10px] font-medium text-blue-100 transition-colors hover:bg-white/10"
                >
                  {branch}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}