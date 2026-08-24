import { Download, FileText, BookOpen, ClipboardList } from 'lucide-react';
import type { VaultFile, VaultFileType } from '../../data/vaultData';

// ─── Icon by type ─────────────────────────────────────────────────────────────
function FileIcon({ type }: { type: VaultFileType }) {
  const cls = 'w-4 h-4';
  const sw = 2;
  switch (type) {
    case 'examen':  return <FileText      className={`${cls} text-red-400`}    strokeWidth={sw} />;
    case 'td-tp':   return <ClipboardList className={`${cls} text-blue-400`}   strokeWidth={sw} />;
    case 'cours':   return <BookOpen      className={`${cls} text-green-500`}  strokeWidth={sw} />;
  }
}

function iconBg(type: VaultFileType): string {
  switch (type) {
    case 'examen': return 'bg-red-50 border-red-100';
    case 'td-tp':  return 'bg-blue-50 border-blue-100';
    case 'cours':  return 'bg-green-50 border-green-100';
  }
}

function fmt(iso: string): string {
  return new Date(iso).toLocaleDateString('fr-MA', {
    day: 'numeric', month: 'short', year: 'numeric',
  });
}

// ─── Single file row ──────────────────────────────────────────────────────────
interface VaultFileRowProps {
  file: VaultFile;
  isLast: boolean;
}

export default function VaultFileRow({ file, isLast }: VaultFileRowProps) {
  return (
    <li
      className={`group flex items-center gap-4 px-5 py-3.5 hover:bg-slate-50 transition-colors duration-150 ${
        !isLast ? 'border-b border-slate-100' : ''
      }`}
    >
      {/* File type icon */}
      <div
        className={`w-9 h-9 rounded-lg border flex items-center justify-center flex-shrink-0 ${iconBg(file.type)}`}
        aria-hidden="true"
      >
        <FileIcon type={file.type} />
      </div>

      {/* File info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <p className="font-body font-semibold text-apex-dark text-[13px] leading-snug group-hover:text-apex-blue transition-colors duration-150 truncate">
            {file.name}
          </p>
          {file.isNew && (
            <span className="text-[10px] font-body font-semibold bg-amber-50 text-amber-600 border border-amber-200 px-1.5 py-0.5 rounded-full flex-shrink-0">
              Nouveau
            </span>
          )}
        </div>
        <p className="font-body text-[11px] text-slate-400 mt-0.5">
          {fmt(file.date)}{file.professor ? ` · ${file.professor}` : ''}
        </p>
      </div>

      {/* File size */}
      <span className="hidden sm:block font-body text-[12px] text-slate-400 flex-shrink-0 w-14 text-right">
        {file.size}
      </span>

      {/* Download button */}
      <button
        type="button"
        onClick={() => console.log('download', file.id)}
        className="flex-shrink-0 inline-flex items-center gap-1.5 bg-apex-blue text-white font-body font-medium
                   text-[12px] px-3.5 py-1.5 rounded-lg hover:bg-[#1d4ed8] active:scale-[0.97]
                   transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-apex-blue focus:ring-offset-1"
        aria-label={`Télécharger ${file.name}`}
      >
        <Download className="w-3.5 h-3.5" strokeWidth={2.5} aria-hidden="true" />
        <span className="hidden sm:inline">Télécharger</span>
      </button>
    </li>
  );
}
