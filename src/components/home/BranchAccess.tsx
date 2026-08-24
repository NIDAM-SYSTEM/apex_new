import { branches } from '../../data/mockData';

export default function BranchAccess() {
  return (
    <section
      className="bg-white border-b border-slate-100"
      aria-label="Accès direct par filière"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide">
          {/* Label */}
          <span className="font-body text-[12px] font-semibold text-slate-400 whitespace-nowrap flex-shrink-0">
            Accès direct :
          </span>

          {/* Branch tags */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {branches.map((b) => (
              <a
                key={b.id}
                href="#vault"
                className="whitespace-nowrap font-body text-[12px] font-medium text-slate-600
                           px-3 py-1.5 bg-white border border-slate-200 rounded-full
                           hover:text-apex-blue hover:border-apex-blue hover:bg-blue-50
                           transition-all duration-150
                           focus:outline-none focus-visible:ring-2 focus-visible:ring-apex-blue"
                aria-label={`Accéder aux ressources de ${b.label}`}
              >
                {b.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
