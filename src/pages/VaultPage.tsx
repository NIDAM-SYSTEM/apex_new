import { useState } from 'react';
import { ChevronRight, Upload, FileX } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import VaultSidebar from '../components/vault/VaultSidebar';
import VaultFileRow from '../components/vault/VaultFileRow';
import { branches } from '../data/mockData';
import {
  getVaultFiles,
  getModuleFileCount,
  getModuleProfessor,
} from '../data/vaultData';
import type { VaultFileType } from '../data/vaultData';
import type { Branch, Semester, Module } from '../types';

// ─── Tab config ───────────────────────────────────────────────────────────────
const TABS: { id: VaultFileType | 'all'; label: string }[] = [
  { id: 'all',    label: 'Tous les fichiers' },
  { id: 'cours',  label: 'Cours'             },
  { id: 'td-tp',  label: 'TDs & TPs'         },
  { id: 'examen', label: 'Anciens Examens'   },
];

// ─── Breadcrumb ───────────────────────────────────────────────────────────────
function Breadcrumb({
  branchLabel,
  semesterLabel,
  moduleLabel,
}: {
  branchLabel: string;
  semesterLabel: string;
  moduleLabel: string;
}) {
  const parts = ['Vault', branchLabel, semesterLabel, moduleLabel].filter(Boolean);
  return (
    <nav aria-label="Fil d'Ariane" className="flex items-center gap-1.5 flex-wrap">
      {parts.map((part, i) => (
        <span key={part} className="flex items-center gap-1.5">
          {i > 0 && (
            <ChevronRight className="w-3.5 h-3.5 text-slate-300 flex-shrink-0" strokeWidth={2} aria-hidden="true" />
          )}
          <span
            className={`font-body text-[12px] ${
              i === parts.length - 1
                ? 'font-semibold text-apex-dark'
                : 'text-slate-400 hover:text-slate-600 cursor-pointer'
            }`}
          >
            {part}
          </span>
        </span>
      ))}
    </nav>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────
export default function VaultPage() {
  // Default: Mathématiques / S3 / Analyse 3
  const [selectedBranch,   setSelectedBranch]   = useState('maths');
  const [selectedSemester, setSelectedSemester] = useState('s3');
  const [selectedModule,   setSelectedModule]   = useState('analysis3');
  const [activeTab,        setActiveTab]        = useState<VaultFileType | 'all'>('all');

  // Derive labels from IDs
  const branchData   = branches.find((b: Branch) => b.id === selectedBranch);
  const semesterData = branchData?.semesters.find((s: Semester) => s.id === selectedSemester);
  const moduleData   = semesterData?.modules.find((m: Module) => m.id === selectedModule);

  const branchLabel   = branchData?.label   ?? '';
  const semesterLabel = semesterData?.label ?? '';
  const moduleLabel   = moduleData?.label   ?? '';

  // File data
  const allFiles     = getVaultFiles(selectedModule);
  const filteredFiles = activeTab === 'all'
    ? allFiles
    : getVaultFiles(selectedModule, activeTab);

  const totalCount   = getModuleFileCount(selectedModule);
  const professor    = getModuleProfessor(selectedModule);

  // When sidebar navigates — cascade resets
  const handleSelectBranch = (id: string) => {
    setSelectedBranch(id);
    const branch    = branches.find((b: Branch) => b.id === id);
    const firstSem  = branch?.semesters[0];
    const firstMod  = firstSem?.modules[0];
    setSelectedSemester(firstSem?.id ?? '');
    setSelectedModule(firstMod?.id ?? '');
    setActiveTab('all');
  };

  const handleSelectSemester = (id: string) => {
    setSelectedSemester(id);
    const branch   = branches.find((b: Branch) => b.id === selectedBranch);
    const sem      = branch?.semesters.find((s: Semester) => s.id === id);
    const firstMod = sem?.modules[0];
    setSelectedModule(firstMod?.id ?? '');
    setActiveTab('all');
  };

  const handleSelectModule = (id: string) => {
    setSelectedModule(id);
    setActiveTab('all');
  };

  // Tab counts
  const tabCounts: Record<string, number> = {
    all:    allFiles.length,
    cours:  allFiles.filter(f => f.type === 'cours').length,
    'td-tp': allFiles.filter(f => f.type === 'td-tp').length,
    examen: allFiles.filter(f => f.type === 'examen').length,
  };

  return (
    <>
      <Header activePage="vault" />

      <main className="min-h-screen bg-slate-50" id="main-content">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">

            {/* ── SIDEBAR ─────────────────────────────────────────── */}
            <VaultSidebar
              selectedBranch={selectedBranch}
              selectedSemester={selectedSemester}
              selectedModule={selectedModule}
              onSelectBranch={handleSelectBranch}
              onSelectSemester={handleSelectSemester}
              onSelectModule={handleSelectModule}
            />

            {/* ── MAIN CONTENT ────────────────────────────────────── */}
            <div className="md:col-span-3 flex flex-col gap-5">

              {/* Breadcrumb */}
              <Breadcrumb
                branchLabel={branchLabel}
                semesterLabel={semesterLabel}
                moduleLabel={moduleLabel}
              />

              {/* Module header card */}
              <div className="bg-white border border-slate-200 rounded-xl shadow-sm px-6 py-5">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div>
                    <h1 className="font-heading font-bold text-apex-dark text-2xl sm:text-3xl leading-tight mb-1.5">
                      {moduleLabel || 'Sélectionnez un module'}
                    </h1>
                    {moduleLabel && (
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="inline-flex items-center gap-1 font-body text-[12px] text-slate-500 bg-slate-50 border border-slate-100 px-2.5 py-1 rounded-full">
                          {professor}
                        </span>
                        <span className="inline-flex items-center gap-1 font-body text-[12px] text-apex-blue bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full font-medium">
                          {totalCount} fichier{totalCount !== 1 ? 's' : ''} disponibles
                        </span>
                        <span className="inline-flex items-center gap-1 font-body text-[12px] text-slate-500 bg-slate-50 border border-slate-100 px-2.5 py-1 rounded-full">
                          {branchLabel} · {semesterLabel}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* ── Tab system ──────────────────────────────────── */}
                {moduleLabel && (
                  <div
                    className="flex items-center gap-0 mt-5 border-b border-slate-100 -mx-6 px-6 overflow-x-auto"
                    role="tablist"
                    aria-label="Filtrer les fichiers par type"
                  >
                    {TABS.map((tab) => {
                      const count = tabCounts[tab.id] ?? 0;
                      const isActive = activeTab === tab.id;
                      return (
                        <button
                          key={tab.id}
                          type="button"
                          role="tab"
                          aria-selected={isActive}
                          aria-controls="file-panel"
                          onClick={() => setActiveTab(tab.id as VaultFileType | 'all')}
                          className={`relative flex items-center gap-1.5 font-body text-[13px] font-medium px-4 py-3 whitespace-nowrap transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-apex-blue ${
                            isActive
                              ? 'text-apex-blue border-b-2 border-apex-blue -mb-px'
                              : 'text-slate-500 hover:text-slate-700 border-b-2 border-transparent'
                          }`}
                        >
                          {tab.label}
                          {count > 0 && (
                            <span
                              className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${
                                isActive
                                  ? 'bg-apex-blue text-white'
                                  : 'bg-slate-100 text-slate-500'
                              }`}
                            >
                              {count}
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* ── File list card ─────────────────────────────────── */}
              {moduleLabel ? (
                <div
                  id="file-panel"
                  role="tabpanel"
                  aria-label={`Fichiers — ${TABS.find(t => t.id === activeTab)?.label}`}
                  className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden"
                >
                  {filteredFiles.length > 0 ? (
                    <>
                      {/* Column header */}
                      <div className="flex items-center gap-4 px-5 py-2.5 bg-slate-50 border-b border-slate-100">
                        <div className="w-9 flex-shrink-0" aria-hidden="true" />
                        <span className="flex-1 font-body text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                          Nom du fichier
                        </span>
                        <span className="hidden sm:block font-body text-[11px] font-semibold uppercase tracking-wider text-slate-400 w-14 text-right">
                          Taille
                        </span>
                        <div className="w-28 flex-shrink-0" aria-hidden="true" />
                      </div>

                      {/* File rows */}
                      <ul aria-label="Liste des fichiers">
                        {filteredFiles.map((file, i) => (
                          <VaultFileRow
                            key={file.id}
                            file={file}
                            isLast={i === filteredFiles.length - 1}
                          />
                        ))}
                      </ul>

                      {/* Upload CTA row */}
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 px-5 py-4 bg-amber-50 border-t border-amber-100">
                        <div className="flex items-start gap-3">
                          <Upload className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" strokeWidth={2} aria-hidden="true" />
                          <div>
                            <p className="font-body text-[13px] font-semibold text-amber-800">
                              Vous avez un ancien examen pour ce module ?
                            </p>
                            <p className="font-body text-[12px] text-amber-700 mt-0.5">
                              Aidez vos camarades en partageant vos ressources.
                            </p>
                          </div>
                        </div>
                        <button
                          type="button"
                          className="flex-shrink-0 inline-flex items-center gap-1.5 border border-amber-400 text-amber-700 bg-white font-body font-semibold text-[12px] px-4 py-2 rounded-lg hover:bg-amber-50 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-amber-400"
                        >
                          <Upload className="w-3.5 h-3.5" strokeWidth={2} aria-hidden="true" />
                          Partager un fichier
                        </button>
                      </div>
                    </>
                  ) : (
                    /* Empty state */
                    <div className="flex flex-col items-center justify-center py-16 text-center px-6">
                      <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center mb-4">
                        <FileX className="w-6 h-6 text-slate-300" strokeWidth={2} aria-hidden="true" />
                      </div>
                      <p className="font-heading font-semibold text-apex-dark text-[15px] mb-1">
                        Aucun fichier dans cette catégorie
                      </p>
                      <p className="font-body text-slate-400 text-sm mb-6">
                        Soyez le premier à partager une ressource pour ce module.
                      </p>
                      <button
                        type="button"
                        className="inline-flex items-center gap-2 border border-apex-blue text-apex-blue font-body font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-blue-50 transition-colors"
                      >
                        <Upload className="w-4 h-4" strokeWidth={2} />
                        Partager un fichier
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                /* No module selected state */
                <div className="bg-white border border-slate-200 rounded-xl shadow-sm flex flex-col items-center justify-center py-20 text-center px-6">
                  <div className="w-12 h-12 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <ChevronRight className="w-6 h-6 text-apex-blue" strokeWidth={2} />
                  </div>
                  <p className="font-heading font-semibold text-apex-dark text-[15px] mb-1">
                    Sélectionnez un module
                  </p>
                  <p className="font-body text-slate-400 text-sm">
                    Choisissez une filière, un semestre et un module dans le panneau de gauche.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
