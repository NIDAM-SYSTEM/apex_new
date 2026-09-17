import { useMemo, useState } from "react";
import {
  Search,
  Upload,
  Sparkles,
  BookOpen,
  FileText,
  SlidersHorizontal,
  ChevronRight,
  Layers,
  Clock3,
  Users,
} from "lucide-react";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import VaultSidebar from "../components/vault/VaultSidebar";
import VaultFileRow from "../components/vault/VaultFileRow";
import VaultExamSpace from "../components/vault/VaultExamSpace";
import VaultUploadModal from "../components/vault/VaultUploadModal";

import { branches } from "../data/mockData";

import {
  getVaultFiles,
  getModuleFileCount,
  getModuleProfessor,
} from "../data/vaultData";

import type { VaultFileType } from "../data/vaultData";
import type { Branch, Semester, Module } from "../types";


// ─────────────────────────────────────────────────────────────────────────────
// TAB CONFIG
// ─────────────────────────────────────────────────────────────────────────────

const TABS: {
  id: VaultFileType | "all";
  label: string;
  shortLabel?: string;
  badge?: string;
}[] = [
  {
    id: "all",
    label: "Tous",
    shortLabel: "Tous",
  },
  {
    id: "cours",
    label: "Cours & Polycopiés",
    shortLabel: "Cours",
  },
  {
    id: "td-tp",
    label: "TDs & Exercices",
    shortLabel: "TD / Exercices",
  },
  {
    id: "examen",
    label: "Anciens Examens",
    shortLabel: "Examens",
    badge: "Espace dédié",
  },
];


// ─────────────────────────────────────────────────────────────────────────────
// BREADCRUMB
// ─────────────────────────────────────────────────────────────────────────────

function Breadcrumb({
  branchLabel,
  semesterLabel,
  moduleLabel,
}: {
  branchLabel: string;
  semesterLabel: string;
  moduleLabel: string;
}) {
  const parts = [
    "Vault",
    branchLabel,
    semesterLabel,
    moduleLabel,
  ].filter(Boolean);

  return (
    <nav
      aria-label="Fil d'Ariane"
      className="flex items-center gap-1.5 overflow-hidden"
    >
      {parts.map((part, index) => (
        <span
          key={`${part}-${index}`}
          className="flex min-w-0 items-center gap-1.5"
        >
          {index > 0 && (
            <ChevronRight
              className="h-3 w-3 shrink-0 text-slate-300"
              strokeWidth={2}
            />
          )}

          <span
            className={[
              "truncate text-[11px] font-body",
              index === parts.length - 1
                ? "font-semibold text-slate-700"
                : "text-slate-400",
            ].join(" ")}
          >
            {part}
          </span>
        </span>
      ))}
    </nav>
  );
}


// ─────────────────────────────────────────────────────────────────────────────
// MAIN PAGE
// ─────────────────────────────────────────────────────────────────────────────

export default function VaultPage() {
  // Navigation state
  const [selectedBranch, setSelectedBranch] = useState("maths");
  const [selectedSemester, setSelectedSemester] = useState("s1");
  const [selectedModule, setSelectedModule] = useState("s1-analyse1");

  // Resource state
  const [activeTab, setActiveTab] =
    useState<VaultFileType | "all">("all");

  const [searchQuery, setSearchQuery] = useState("");

  // Modal state
  const [isUploadOpen, setIsUploadOpen] = useState(false);


  // ───────────────────────────────────────────────────────────────────────────
  // DERIVED NAVIGATION DATA
  // ───────────────────────────────────────────────────────────────────────────

  const branchData = branches.find(
    (branch: Branch) => branch.id === selectedBranch
  );

  const semesterData = branchData?.semesters.find(
    (semester: Semester) => semester.id === selectedSemester
  );

  const moduleData = semesterData?.modules.find(
    (module: Module) => module.id === selectedModule
  );

  const branchLabel = branchData?.label ?? "";
  const semesterLabel = semesterData?.label ?? "";
  const moduleLabel = moduleData?.label ?? "";


  // ───────────────────────────────────────────────────────────────────────────
  // FILE DATA
  // ───────────────────────────────────────────────────────────────────────────

  const allFiles = getVaultFiles(selectedModule);

  const totalCount = getModuleFileCount(selectedModule);

  const professor = getModuleProfessor(selectedModule);


  // ───────────────────────────────────────────────────────────────────────────
  // SEARCH + FILTER
  // ───────────────────────────────────────────────────────────────────────────

  const filteredFiles = useMemo(() => {
    const typeFiltered =
      activeTab === "all"
        ? allFiles
        : getVaultFiles(selectedModule, activeTab);

    const normalizedQuery = searchQuery.trim().toLowerCase();

    if (!normalizedQuery) {
      return typeFiltered;
    }

    return typeFiltered.filter((file) => {
      // We intentionally read string values generically so the page
      // does not depend on a specific VaultFile interface shape.
      const values = Object.values(
        file as unknown as Record<string, unknown>
      );

      const searchableText = values
        .filter((value) => typeof value === "string")
        .join(" ")
        .toLowerCase();

      return searchableText.includes(normalizedQuery);
    });
  }, [activeTab, allFiles, searchQuery, selectedModule]);


  // ───────────────────────────────────────────────────────────────────────────
  // TAB COUNTS
  // ───────────────────────────────────────────────────────────────────────────

  const tabCounts: Record<string, number> = {
    all: allFiles.length,
    cours: allFiles.filter((file) => file.type === "cours").length,
    "td-tp": allFiles.filter((file) => file.type === "td-tp").length,
    examen: 0,
  };


  // ───────────────────────────────────────────────────────────────────────────
  // NAVIGATION HANDLERS
  // ───────────────────────────────────────────────────────────────────────────

  const handleSelectBranch = (id: string) => {
    setSelectedBranch(id);

    const branch = branches.find(
      (item: Branch) => item.id === id
    );

    const firstSemester = branch?.semesters[0];
    const firstModule = firstSemester?.modules[0];

    setSelectedSemester(firstSemester?.id ?? "");
    setSelectedModule(firstModule?.id ?? "");
    setActiveTab("all");
    setSearchQuery("");
  };


  const handleSelectSemester = (id: string) => {
    setSelectedSemester(id);

    const branch = branches.find(
      (item: Branch) => item.id === selectedBranch
    );

    const semester = branch?.semesters.find(
      (item: Semester) => item.id === id
    );

    const firstModule = semester?.modules[0];

    setSelectedModule(firstModule?.id ?? "");
    setActiveTab("all");
    setSearchQuery("");
  };


  const handleSelectModule = (id: string) => {
    setSelectedModule(id);
    setActiveTab("all");
    setSearchQuery("");
  };


  // ───────────────────────────────────────────────────────────────────────────
  // RENDER
  // ───────────────────────────────────────────────────────────────────────────

  return (
    <>
      <Header activePage="vault" />

      <main
        id="main-content"
        className="min-h-screen bg-[#f7f8fa]"
      >
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">

          {/* ────────────────────────────────────────────────────────────────
              PAGE CONTEXT
          ──────────────────────────────────────────────────────────────── */}

          <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

            <Breadcrumb
              branchLabel={branchLabel}
              semesterLabel={semesterLabel}
              moduleLabel={moduleLabel}
            />

            <div className="flex items-center gap-2 text-[11px] text-slate-400">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400" />
              Vault actif
            </div>
          </div>


          {/* ────────────────────────────────────────────────────────────────
              MAIN WORKSPACE
          ──────────────────────────────────────────────────────────────── */}

          <div className="grid grid-cols-1 items-start gap-5 lg:grid-cols-[230px_minmax(0,1fr)]">

            {/* ==============================================================
                SIDEBAR
            ============================================================== */}

            <div className="lg:sticky lg:top-24">
              <VaultSidebar
                selectedBranch={selectedBranch}
                selectedSemester={selectedSemester}
                selectedModule={selectedModule}
                onSelectBranch={handleSelectBranch}
                onSelectSemester={handleSelectSemester}
                onSelectModule={handleSelectModule}
              />
            </div>


            {/* ==============================================================
                MAIN CONTENT
            ============================================================== */}

            <div className="min-w-0">

              {/* ──────────────────────────────────────────────────────────
                  MODULE CONTEXT
              ────────────────────────────────────────────────────────── */}

              <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

                <div className="px-5 py-5 sm:px-6 sm:py-6">

                  <div className="flex flex-col gap-5">

                    {/* Header */}
                    <div className="flex flex-col gap-5 xl:flex-row xl:items-start xl:justify-between">

                      <div className="min-w-0">

                        <div className="mb-3 flex flex-wrap items-center gap-2">

                          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#2563eb]">
                            <BookOpen
                              className="h-3 w-3"
                              strokeWidth={2}
                            />
                            Module
                          </span>

                          <span className="text-[11px] text-slate-400">
                            {branchLabel} · {semesterLabel}
                          </span>

                        </div>

                        <h1 className="font-heading text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:text-3xl">
                          {moduleLabel || "Sélectionnez un module"}
                        </h1>

                        {moduleLabel && (
                          <div className="mt-3 flex flex-wrap items-center gap-2">

                            <span className="inline-flex items-center gap-1.5 rounded-lg border border-slate-100 bg-slate-50 px-2.5 py-1.5 text-[11px] text-slate-500">
                              Enseignant:
                              <strong className="font-semibold text-slate-700">
                                {professor}
                              </strong>
                            </span>

                            <span className="inline-flex items-center gap-1.5 rounded-lg border border-blue-100 bg-blue-50 px-2.5 py-1.5 text-[11px] font-semibold text-[#2563eb]">
                              <FileText className="h-3 w-3" />
                              {totalCount} ressource
                              {totalCount > 1 ? "s" : ""}
                            </span>

                          </div>
                        )}

                      </div>


                      {/* Contribution action */}
                      <button
                        type="button"
                        onClick={() => setIsUploadOpen(true)}
                        className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-semibold text-slate-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 hover:text-[#2563eb]"
                      >
                        <Upload className="h-3.5 w-3.5" />
                        Contribuer
                      </button>

                    </div>


                    {/* Search */}
                    {moduleLabel && (
                      <div className="flex flex-col gap-3 sm:flex-row">

                        <div className="relative min-w-0 flex-1">

                          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                          <input
                            type="search"
                            value={searchQuery}
                            onChange={(event) =>
                              setSearchQuery(event.target.value)
                            }
                            placeholder="Rechercher un cours, un TD, un document..."
                            className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-50"
                            aria-label="Rechercher une ressource"
                          />

                        </div>

                        <button
                          type="button"
                          className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-xs font-semibold text-slate-600 transition-colors hover:bg-slate-50"
                        >
                          <SlidersHorizontal className="h-3.5 w-3.5" />
                          Filtres
                        </button>

                      </div>
                    )}

                  </div>

                </div>


                {/* ────────────────────────────────────────────────────────
                    RESOURCE TABS
                ──────────────────────────────────────────────────────── */}

                {moduleLabel && (
                  <div className="overflow-x-auto border-t border-slate-100">
                    <div
                      className="flex min-w-max items-center px-5 sm:px-6"
                      role="tablist"
                      aria-label="Filtrer les ressources"
                    >

                      {TABS.map((tab) => {
                        const isActive = activeTab === tab.id;
                        const count = tabCounts[tab.id] ?? 0;

                        return (
                          <button
                            key={tab.id}
                            type="button"
                            role="tab"
                            aria-selected={isActive}
                            onClick={() => {
                              setActiveTab(
                                tab.id as VaultFileType | "all"
                              );
                              setSearchQuery("");
                            }}
                            className={[
                              "relative flex items-center gap-2 border-b-2 px-4 py-3.5 text-xs font-medium transition-colors",
                              "focus:outline-none",
                              isActive
                                ? "border-[#2563eb] font-semibold text-[#2563eb]"
                                : "border-transparent text-slate-500 hover:text-slate-800",
                            ].join(" ")}
                          >

                            <span className="hidden sm:inline">
                              {tab.label}
                            </span>

                            <span className="sm:hidden">
                              {tab.shortLabel}
                            </span>

                            {tab.id === "examen" ? (
                              <span className="rounded-full border border-amber-200 bg-amber-50 px-2 py-0.5 text-[9px] font-semibold text-amber-700">
                                {tab.badge}
                              </span>
                            ) : (
                              <span
                                className={[
                                  "rounded-full px-1.5 py-0.5 text-[9px] font-semibold",
                                  isActive
                                    ? "bg-[#2563eb] text-white"
                                    : "bg-slate-100 text-slate-500",
                                ].join(" ")}
                              >
                                {count}
                              </span>
                            )}

                          </button>
                        );
                      })}

                    </div>
                  </div>
                )}

              </section>


              {/* ──────────────────────────────────────────────────────────
                  CONTENT AREA
              ────────────────────────────────────────────────────────── */}

              <div className="mt-5">

                {activeTab === "examen" ? (

                  <VaultExamSpace
                    moduleLabel={moduleLabel}
                    semesterLabel={semesterLabel}
                    branchLabel={branchLabel}
                    onOpenContributeModal={() =>
                      setIsUploadOpen(true)
                    }
                    onViewFiles={() => {
                      setActiveTab("all");
                      setSearchQuery("");
                    }}
                  />

                ) : moduleLabel ? (

                  <section
                    id="file-panel"
                    role="tabpanel"
                    className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                  >

                    {/* Resource list header */}
                    <div className="flex flex-col gap-3 border-b border-slate-100 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">

                      <div>
                        <div className="flex items-center gap-2">

                          <h2 className="font-heading text-sm font-bold text-slate-900">
                            Ressources
                          </h2>

                          <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[9px] font-semibold text-slate-500">
                            {filteredFiles.length}
                          </span>

                        </div>

                        <p className="mt-0.5 text-[11px] text-slate-400">
                          {searchQuery
                            ? `Résultats pour « ${searchQuery} »`
                            : "Documents disponibles pour ce module"}
                        </p>
                      </div>


                      <div className="flex items-center gap-2 text-[10px] text-slate-400">

                        <span className="flex items-center gap-1.5">
                          <Clock3 className="h-3.5 w-3.5" />
                          Mis à jour régulièrement
                        </span>

                      </div>

                    </div>


                    {/* Files */}
                    {filteredFiles.length > 0 ? (
                      <>

                        {/* Desktop column header */}
                        <div className="hidden border-b border-slate-100 bg-slate-50 px-5 py-3 sm:flex sm:items-center sm:gap-4">

                          <div className="w-9 shrink-0" />

                          <span className="min-w-0 flex-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                            Ressource
                          </span>

                          <span className="w-20 text-right text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                            Taille
                          </span>

                          <span className="w-32 text-right text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                            Action
                          </span>

                        </div>


                        <ul aria-label="Liste des fichiers">
                          {filteredFiles.map((file, index) => (
                            <VaultFileRow
                              key={file.id}
                              file={file}
                              isLast={
                                index === filteredFiles.length - 1
                              }
                            />
                          ))}
                        </ul>


                        {/* Bottom utility strip */}
                        <div className="flex flex-col gap-3 border-t border-slate-100 bg-slate-50/60 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">

                          <div className="flex items-center gap-2">

                            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50">
                              <Sparkles
                                className="h-3.5 w-3.5 text-[#2563eb]"
                                strokeWidth={2}
                              />
                            </div>

                            <div>
                              <p className="text-[11px] font-semibold text-slate-800">
                                Tu as une ressource utile ?
                              </p>

                              <p className="text-[10px] text-slate-400">
                                Aide les autres étudiants à enrichir le Vault.
                              </p>
                            </div>

                          </div>


                          <button
                            type="button"
                            onClick={() => setIsUploadOpen(true)}
                            className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-blue-200 bg-white px-3.5 py-2 text-[11px] font-semibold text-[#2563eb] transition-colors hover:bg-blue-50"
                          >
                            <Upload className="h-3.5 w-3.5" />
                            Partager un document
                          </button>

                        </div>

                      </>

                    ) : (

                      /* Empty state */
                      <div className="flex flex-col items-center justify-center px-6 py-20 text-center">

                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-100 bg-slate-50">
                          <FileText className="h-5 w-5 text-slate-300" />
                        </div>

                        <h3 className="font-heading text-sm font-semibold text-slate-800">
                          Aucun document trouvé
                        </h3>

                        <p className="mt-1 max-w-sm text-xs leading-5 text-slate-400">
                          {searchQuery
                            ? "Essaie une autre recherche ou change de catégorie."
                            : "Cette catégorie ne contient pas encore de ressources."}
                        </p>

                        {searchQuery ? (
                          <button
                            type="button"
                            onClick={() => setSearchQuery("")}
                            className="mt-5 text-xs font-semibold text-[#2563eb] hover:underline"
                          >
                            Réinitialiser la recherche
                          </button>
                        ) : (
                          <button
                            type="button"
                            onClick={() => setIsUploadOpen(true)}
                            className="mt-5 inline-flex items-center gap-2 rounded-xl border border-[#2563eb] px-4 py-2.5 text-xs font-semibold text-[#2563eb] transition-colors hover:bg-blue-50"
                          >
                            <Upload className="h-3.5 w-3.5" />
                            Partager un document
                          </button>
                        )}

                      </div>
                    )}

                  </section>

                ) : (

                  /* No module selected */
                  <section className="rounded-2xl border border-slate-200 bg-white px-6 py-20 text-center shadow-sm">

                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50">
                      <Layers className="h-5 w-5 text-[#2563eb]" />
                    </div>

                    <h2 className="font-heading text-sm font-semibold text-slate-800">
                      Sélectionnez un module
                    </h2>

                    <p className="mx-auto mt-1 max-w-sm text-xs leading-5 text-slate-400">
                      Choisissez une filière, un semestre et un module
                      dans le panneau de navigation.
                    </p>

                  </section>

                )}

              </div>


              {/* ──────────────────────────────────────────────────────────
                  SMALL SYSTEM FOOTNOTE
              ────────────────────────────────────────────────────────── */}

              <div className="mt-4 flex flex-col gap-2 px-1 text-[10px] text-slate-400 sm:flex-row sm:items-center sm:justify-between">

                <div className="flex items-center gap-2">
                  <Users className="h-3 w-3" />
                  Ressources partagées par la communauté étudiante
                </div>

                <span>
                  APEX · Vault Académique
                </span>

              </div>

            </div>
          </div>
        </div>
      </main>


      {/* ─────────────────────────────────────────────────────────────────────
          UPLOAD MODAL
      ───────────────────────────────────────────────────────────────────── */}

      <VaultUploadModal
        isOpen={isUploadOpen}
        onClose={() => setIsUploadOpen(false)}
        defaultModule={moduleLabel}
      />

      <Footer />
    </>
  );
}