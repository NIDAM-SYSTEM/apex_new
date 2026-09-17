import { useMemo, useState } from "react";
import {
  Search,
  BookOpen,
  Check,
  ChevronDown,
  Layers3,
} from "lucide-react";

import { branches } from "../../data/mockData";
import type { Branch, Semester, Module } from "../../types";

interface VaultSidebarProps {
  selectedBranch: string;
  selectedSemester: string;
  selectedModule: string;
  onSelectBranch: (id: string) => void;
  onSelectSemester: (id: string) => void;
  onSelectModule: (id: string) => void;
}

export default function VaultSidebar({
  selectedBranch,
  selectedSemester,
  selectedModule,
  onSelectBranch,
  onSelectSemester,
  onSelectModule,
}: VaultSidebarProps) {
  const [moduleSearch, setModuleSearch] = useState("");

  // Only branches that are actually usable in the Vault.
  const availableBranches = branches.filter(
    (branch: Branch) =>
      branch.id === "maths" || branch.status === "available"
  );

  const activeBranch = branches.find(
    (branch: Branch) => branch.id === selectedBranch
  );

  const activeSemester = activeBranch?.semesters.find(
    (semester: Semester) => semester.id === selectedSemester
  );

  const filteredModules = useMemo(() => {
    const modules = activeSemester?.modules ?? [];
    const query = moduleSearch.trim().toLowerCase();

    if (!query) return modules;

    return modules.filter((module: Module) =>
      module.label.toLowerCase().includes(query)
    );
  }, [activeSemester, moduleSearch]);

  const handleBranchChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    onSelectBranch(event.target.value);
    setModuleSearch("");
  };

  const handleSemesterChange = (semesterId: string) => {
    onSelectSemester(semesterId);
    setModuleSearch("");
  };

  return (
    <aside
      className="w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm lg:sticky lg:top-24"
      aria-label="Navigation du Vault"
    >
      {/* ─────────────────────────────────────────────────────────────
          HEADER
      ───────────────────────────────────────────────────────────── */}

      <div className="border-b border-slate-100 px-4 py-4">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50">
            <Layers3
              className="h-4 w-4 text-[#2563eb]"
              strokeWidth={2}
            />
          </div>

          <div className="min-w-0">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
              Navigation
            </p>

            <h2 className="truncate text-sm font-bold text-slate-900">
              Vault Académique
            </h2>
          </div>
        </div>
      </div>

      <div className="p-4">

        {/* ───────────────────────────────────────────────────────────
            FILIÈRE
        ─────────────────────────────────────────────────────────── */}

        <div>
          <label
            htmlFor="vault-branch"
            className="mb-2 block text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400"
          >
            Filière
          </label>

          <div className="relative">
            <select
              id="vault-branch"
              value={selectedBranch}
              onChange={handleBranchChange}
              className="h-10 w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-3 pr-9 text-xs font-semibold text-slate-800 outline-none transition-all focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-50"
            >
              {availableBranches.map((branch: Branch) => (
                <option key={branch.id} value={branch.id}>
                  {branch.label}
                </option>
              ))}
            </select>

            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          </div>
        </div>

        {/* ───────────────────────────────────────────────────────────
            SEMESTRES
        ─────────────────────────────────────────────────────────── */}

        <div className="mt-6">
          <div className="mb-2 flex items-center justify-between">
            <label className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
              Semestre
            </label>

            <span className="text-[9px] text-slate-400">
              {activeBranch?.semesters.length ?? 0} disponibles
            </span>
          </div>

          <div className="grid grid-cols-3 gap-1.5">
            {(activeBranch?.semesters ?? []).map(
              (semester: Semester, index: number) => {
                const isActive = selectedSemester === semester.id;
                const label = `S${String(index + 1).padStart(2, "0")}`;

                return (
                  <button
                    key={semester.id}
                    type="button"
                    onClick={() => handleSemesterChange(semester.id)}
                    className={[
                      "relative flex h-9 items-center justify-center rounded-lg border text-[11px] font-semibold transition-all",
                      "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300",
                      isActive
                        ? "border-[#2563eb] bg-[#2563eb] text-white shadow-sm"
                        : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50",
                    ].join(" ")}
                    aria-pressed={isActive}
                  >
                    {label}

                    {isActive && (
                      <Check
                        className="absolute right-1 top-1 h-2.5 w-2.5"
                        strokeWidth={3}
                      />
                    )}
                  </button>
                );
              }
            )}
          </div>
        </div>

        {/* ───────────────────────────────────────────────────────────
            SUBJECT SEARCH
        ─────────────────────────────────────────────────────────── */}

        <div className="mt-6">
          <label
            htmlFor="vault-module-search"
            className="mb-2 block text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400"
          >
            Matière
          </label>

          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />

            <input
              id="vault-module-search"
              type="search"
              value={moduleSearch}
              onChange={(event) => setModuleSearch(event.target.value)}
              placeholder="Rechercher une matière..."
              className="h-10 w-full rounded-xl border border-slate-200 bg-slate-50 pl-9 pr-3 text-xs text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-50"
            />
          </div>
        </div>

        {/* ───────────────────────────────────────────────────────────
            SUBJECT LIST
        ─────────────────────────────────────────────────────────── */}

        <div className="mt-4">

          <div className="mb-2 flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
              Matières
            </span>

            <span className="text-[9px] text-slate-400">
              {filteredModules.length}
            </span>
          </div>

          {filteredModules.length > 0 ? (
            <div
              className="max-h-[360px] space-y-1 overflow-y-auto pr-1"
              role="listbox"
              aria-label={`Matières de ${activeSemester?.label ?? ""}`}
            >
              {filteredModules.map((module: Module) => {
                const isSelected = selectedModule === module.id;

                return (
                  <button
                    key={module.id}
                    type="button"
                    onClick={() => onSelectModule(module.id)}
                    role="option"
                    aria-selected={isSelected}
                    className={[
                      "group flex w-full items-center gap-2.5 rounded-xl border px-3 py-2.5 text-left transition-all",
                      "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300",
                      isSelected
                        ? "border-blue-100 bg-blue-50 text-[#0f2560]"
                        : "border-transparent bg-white text-slate-600 hover:border-slate-200 hover:bg-slate-50",
                    ].join(" ")}
                  >
                    {/* Same icon treatment for EVERY subject */}
                    <span
                      className={[
                        "flex h-7 w-7 shrink-0 items-center justify-center rounded-lg",
                        isSelected
                          ? "bg-white text-[#2563eb]"
                          : "bg-slate-100 text-slate-400 group-hover:text-slate-500",
                      ].join(" ")}
                    >
                      <BookOpen
                        className="h-3.5 w-3.5"
                        strokeWidth={1.9}
                      />
                    </span>

                    {/* Subject name */}
                    <span
                      className={[
                        "min-w-0 flex-1 truncate text-xs",
                        isSelected ? "font-bold" : "font-medium",
                      ].join(" ")}
                    >
                      {module.label}
                    </span>

                    {/* Selection indicator */}
                    {isSelected && (
                      <span className="shrink-0 rounded-full bg-[#2563eb] px-1.5 py-0.5 text-[8px] font-bold text-white">
                        Actif
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50 px-4 py-7 text-center">
              <Search className="mx-auto h-4 w-4 text-slate-300" />

              <p className="mt-2 text-[11px] font-semibold text-slate-600">
                Aucune matière trouvée
              </p>

              <button
                type="button"
                onClick={() => setModuleSearch("")}
                className="mt-1 text-[10px] font-semibold text-[#2563eb] hover:underline"
              >
                Effacer la recherche
              </button>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}