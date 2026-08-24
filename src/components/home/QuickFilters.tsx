import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { branches } from '../../data/mockData';
import type { AcademicFilter, Semester, Module } from '../../types';

interface QuickFiltersProps {
  onFilter?: (filter: AcademicFilter) => void;
}

export default function QuickFilters({ onFilter }: QuickFiltersProps) {
  const [filter, setFilter] = useState<AcademicFilter>({
    branch: '',
    semester: '',
    module: '',
  });

  // Cascade: reset child filters when parent changes
  const handleBranchChange = (value: string) => {
    setFilter({ branch: value, semester: '', module: '' });
  };

  const handleSemesterChange = (value: string) => {
    setFilter((prev) => ({ ...prev, semester: value, module: '' }));
  };

  const handleModuleChange = (value: string) => {
    setFilter((prev) => ({ ...prev, module: value }));
  };

  useEffect(() => {
    if (filter.branch || filter.semester || filter.module) {
      onFilter?.(filter);
    }
  }, [filter, onFilter]);

  const selectedBranch = branches.find((b) => b.id === filter.branch);
  const semesters: Semester[] = selectedBranch?.semesters ?? [];
  const selectedSemester = semesters.find((s) => s.id === filter.semester);
  const modules: Module[] = selectedSemester?.modules ?? [];

  return (
    <div
      className="flex flex-col sm:flex-row gap-3"
      role="group"
      aria-label="Filtres académiques rapides"
    >

      {/* Branch */}
      <div className="relative flex-1">
        <label htmlFor="filter-branch" className="sr-only">
          Filière
        </label>
        <div className="relative">
          <select
            id="filter-branch"
            value={filter.branch}
            onChange={(e) => handleBranchChange(e.target.value)}
            className="w-full appearance-none bg-apex-surface border border-apex-border rounded-btn
                       font-body text-sm text-apex-dark h-10 pl-3 pr-8
                       focus:outline-none focus:ring-2 focus:ring-apex-blue focus:border-apex-blue
                       transition-colors duration-150
                       disabled:opacity-50 cursor-pointer"
          >
            <option value="" disabled>Filière</option>
            {branches.map((b) => (
              <option key={b.id} value={b.id}>{b.label}</option>
            ))}
          </select>
          <ChevronDown
            className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-apex-gray pointer-events-none"
            strokeWidth={2}
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Semester */}
      <div className="relative flex-1">
        <label htmlFor="filter-semester" className="sr-only">
          Semestre
        </label>
        <div className="relative">
          <select
            id="filter-semester"
            value={filter.semester}
            onChange={(e) => handleSemesterChange(e.target.value)}
            disabled={!filter.branch}
            className="w-full appearance-none bg-apex-surface border border-apex-border rounded-btn
                       font-body text-sm text-apex-dark h-10 pl-3 pr-8
                       focus:outline-none focus:ring-2 focus:ring-apex-blue focus:border-apex-blue
                       transition-colors duration-150
                       disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            <option value="" disabled>Semestre</option>
            {semesters.map((s) => (
              <option key={s.id} value={s.id}>{s.label}</option>
            ))}
          </select>
          <ChevronDown
            className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-apex-gray pointer-events-none"
            strokeWidth={2}
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Module */}
      <div className="relative flex-1">
        <label htmlFor="filter-module" className="sr-only">
          Module
        </label>
        <div className="relative">
          <select
            id="filter-module"
            value={filter.module}
            onChange={(e) => handleModuleChange(e.target.value)}
            disabled={!filter.semester}
            className="w-full appearance-none bg-apex-surface border border-apex-border rounded-btn
                       font-body text-sm text-apex-dark h-10 pl-3 pr-8
                       focus:outline-none focus:ring-2 focus:ring-apex-blue focus:border-apex-blue
                       transition-colors duration-150
                       disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            <option value="" disabled>Module</option>
            {modules.map((m) => (
              <option key={m.id} value={m.id}>{m.label}</option>
            ))}
          </select>
          <ChevronDown
            className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-apex-gray pointer-events-none"
            strokeWidth={2}
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Go button — only active when module is selected */}
      <button
        type="button"
        disabled={!filter.branch}
        onClick={() => onFilter?.(filter)}
        className="btn-primary disabled:opacity-40 disabled:cursor-not-allowed flex-shrink-0"
        aria-label="Accéder aux ressources filtrées"
      >
        Accéder
      </button>
    </div>
  );
}
