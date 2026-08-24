import { ChevronRight, FolderOpen, BookOpen } from 'lucide-react';
import { branches } from '../../data/mockData';
import { getModuleFileCount } from '../../data/vaultData';
import type { Branch, Semester, Module } from '../../types';

interface VaultSidebarProps {
  selectedBranch:   string;
  selectedSemester: string;
  selectedModule:   string;
  onSelectBranch:   (id: string) => void;
  onSelectSemester: (id: string) => void;
  onSelectModule:   (id: string) => void;
}

export default function VaultSidebar({
  selectedBranch,
  selectedSemester,
  selectedModule,
  onSelectBranch,
  onSelectSemester,
  onSelectModule,
}: VaultSidebarProps) {

  return (
    <aside
      className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden self-start"
      aria-label="Navigation des filières"
    >
      {/* Header */}
      <div className="px-4 py-3 border-b border-slate-100">
        <p className="font-body text-[10px] font-semibold uppercase tracking-widest text-slate-400">
          Filtres rapides
        </p>
      </div>

      {/* Branch list */}
      <nav>
        <ul role="tree" aria-label="Filières">
          {branches.map((branch: Branch) => {
            const isBranchActive = selectedBranch === branch.id;

            return (
              <li key={branch.id} role="treeitem" aria-expanded={isBranchActive}>

                {/* Branch row */}
                <button
                  type="button"
                  onClick={() => onSelectBranch(branch.id)}
                  className={`w-full flex items-center justify-between gap-2 px-4 py-2.5 text-left transition-colors duration-150 group
                    ${isBranchActive
                      ? 'bg-blue-50 border-l-2 border-apex-blue text-blue-900'
                      : 'border-l-2 border-transparent text-slate-600 hover:bg-slate-50 hover:text-slate-800'
                    }`}
                  aria-current={isBranchActive ? 'true' : undefined}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <FolderOpen
                      className={`w-4 h-4 flex-shrink-0 ${isBranchActive ? 'text-apex-blue' : 'text-slate-400 group-hover:text-slate-500'}`}
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                    <span className={`font-body text-[13px] truncate ${isBranchActive ? 'font-semibold' : 'font-medium'}`}>
                      {branch.label}
                    </span>
                  </div>
                  <ChevronRight
                    className={`w-3.5 h-3.5 flex-shrink-0 transition-transform duration-150 ${
                      isBranchActive ? 'rotate-90 text-apex-blue' : 'text-slate-300'
                    }`}
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </button>

                {/* Semester sub-list (only when branch active) */}
                {isBranchActive && (
                  <ul
                    className="bg-slate-50/60 border-l-2 border-apex-blue ml-0"
                    role="group"
                    aria-label={`Semestres de ${branch.label}`}
                  >
                    {branch.semesters.map((sem: Semester) => {
                      const isSemActive = selectedSemester === sem.id;

                      return (
                        <li key={sem.id}>

                          {/* Semester row */}
                          <button
                            type="button"
                            onClick={() => onSelectSemester(sem.id)}
                            className={`w-full flex items-center justify-between gap-2 pl-8 pr-4 py-2 text-left transition-colors duration-150 group
                              ${isSemActive
                                ? 'bg-blue-50 text-blue-900'
                                : 'text-slate-500 hover:bg-slate-100 hover:text-slate-700'
                              }`}
                          >
                            <span className={`font-body text-[12px] ${isSemActive ? 'font-semibold' : 'font-medium'}`}>
                              {sem.label}
                            </span>
                            <ChevronRight
                              className={`w-3 h-3 flex-shrink-0 transition-transform duration-150 ${
                                isSemActive ? 'rotate-90 text-apex-blue' : 'text-slate-300'
                              }`}
                              strokeWidth={2}
                              aria-hidden="true"
                            />
                          </button>

                          {/* Module sub-list (only when semester active) */}
                          {isSemActive && (
                            <ul
                              className="bg-white"
                              role="group"
                              aria-label={`Modules de ${sem.label}`}
                            >
                              {sem.modules.map((mod: Module) => {
                                const isModActive = selectedModule === mod.id;
                                const count = getModuleFileCount(mod.id);

                                return (
                                  <li key={mod.id}>
                                    <button
                                      type="button"
                                      onClick={() => onSelectModule(mod.id)}
                                      className={`w-full flex items-center justify-between gap-2 pl-12 pr-4 py-2 text-left transition-colors duration-150 group
                                        ${isModActive
                                          ? 'bg-apex-blue/5 text-apex-blue'
                                          : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700'
                                        }`}
                                      aria-current={isModActive ? 'page' : undefined}
                                    >
                                      <div className="flex items-center gap-2 min-w-0">
                                        <BookOpen
                                          className={`w-3.5 h-3.5 flex-shrink-0 ${isModActive ? 'text-apex-blue' : 'text-slate-300'}`}
                                          strokeWidth={2}
                                          aria-hidden="true"
                                        />
                                        <span className={`font-body text-[12px] truncate ${isModActive ? 'font-semibold' : 'font-medium'}`}>
                                          {mod.label}
                                        </span>
                                      </div>
                                      {count > 0 && (
                                        <span className={`font-body text-[10px] font-medium px-1.5 py-0.5 rounded-full flex-shrink-0 ${
                                          isModActive
                                            ? 'bg-apex-blue text-white'
                                            : 'bg-slate-100 text-slate-400'
                                        }`}>
                                          {count}
                                        </span>
                                      )}
                                    </button>
                                  </li>
                                );
                              })}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
