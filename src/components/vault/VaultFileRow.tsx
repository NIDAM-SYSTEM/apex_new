import {
  Download,
  FileText,
  BookOpen,
  ClipboardList,
  ExternalLink,
} from "lucide-react";

import type { VaultFile, VaultFileType } from "../../data/vaultData";


// ─────────────────────────────────────────────────────────────────────────────
// FILE TYPE ICON
// Keep the visual language neutral.
// Type is supporting information, not the main visual hierarchy.
// ─────────────────────────────────────────────────────────────────────────────

function FileIcon({ type }: { type: VaultFileType }) {
  const className = "h-4 w-4";
  const strokeWidth = 1.9;

  switch (type) {
    case "examen":
      return (
        <FileText
          className={`${className} text-slate-500`}
          strokeWidth={strokeWidth}
        />
      );

    case "td-tp":
      return (
        <ClipboardList
          className={`${className} text-slate-500`}
          strokeWidth={strokeWidth}
        />
      );

    case "cours":
      return (
        <BookOpen
          className={`${className} text-slate-500`}
          strokeWidth={strokeWidth}
        />
      );
  }
}


// ─────────────────────────────────────────────────────────────────────────────
// TYPE LABEL
// Small and quiet.
// ─────────────────────────────────────────────────────────────────────────────

function typeLabel(type: VaultFileType) {
  switch (type) {
    case "examen":
      return "Examen";

    case "td-tp":
      return "TD / Exercice";

    case "cours":
      return "Cours";
  }
}


// ─────────────────────────────────────────────────────────────────────────────
// FILE ROW
// ─────────────────────────────────────────────────────────────────────────────

interface VaultFileRowProps {
  file: VaultFile;
  isLast: boolean;
}

export default function VaultFileRow({
  file,
  isLast,
}: VaultFileRowProps) {
  const hasUrl =
    Boolean(file.downloadUrl) &&
    file.downloadUrl !== "#";

  return (
    <li
      className={[
        "group flex items-center gap-3 px-4 py-3.5 sm:px-5",
        "transition-colors duration-150",
        "hover:bg-slate-50/80",
        !isLast ? "border-b border-slate-100" : "",
      ].join(" ")}
    >
      {/* ────────────────────────────────────────────────────────────────
          ICON
      ──────────────────────────────────────────────────────────────── */}

      <div
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50"
        aria-hidden="true"
      >
        <FileIcon type={file.type} />
      </div>


      {/* ────────────────────────────────────────────────────────────────
          FILE INFORMATION
      ──────────────────────────────────────────────────────────────── */}

      <div className="min-w-0 flex-1">

        {/* Name + type */}
        <div className="flex min-w-0 items-center gap-2">

          <p
            className={[
              "min-w-0 truncate text-[13px] leading-snug",
              "font-semibold text-slate-800",
              "transition-colors duration-150",
              "group-hover:text-[#0f2560]",
            ].join(" ")}
            title={file.name}
          >
            {file.name}
          </p>

          <span className="hidden shrink-0 text-[9px] font-medium text-slate-400 sm:inline">
            {typeLabel(file.type)}
          </span>

          {file.isNew && (
            <span className="hidden shrink-0 rounded-full border border-amber-200 bg-amber-50 px-1.5 py-0.5 text-[9px] font-semibold text-amber-600 sm:inline">
              Nouveau
            </span>
          )}

        </div>


        {/* Secondary metadata */}
        <div className="mt-1 flex min-w-0 items-center gap-2 text-[10px] text-slate-400">

          {file.professor && (
            <>
              <span className="truncate">
                {file.professor}
              </span>

              <span
                className="shrink-0 text-slate-300"
                aria-hidden="true"
              >
                ·
              </span>
            </>
          )}

          <span className="truncate">
            {file.originalFileName}
          </span>

        </div>

      </div>


      {/* ────────────────────────────────────────────────────────────────
          SIZE
      ──────────────────────────────────────────────────────────────── */}

      <span className="hidden w-16 shrink-0 text-right text-[10px] text-slate-400 lg:block">
        {file.size}
      </span>


      {/* ────────────────────────────────────────────────────────────────
          ACTIONS
      ──────────────────────────────────────────────────────────────── */}

      <div className="flex shrink-0 items-center gap-1.5">

        {/* Preview */}
        {hasUrl && (
          <a
            href={file.downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={[
              "inline-flex h-9 items-center justify-center gap-1.5 rounded-lg",
              "border border-slate-200 bg-white px-2.5",
              "text-[11px] font-semibold text-slate-500",
              "transition-all duration-150",
              "hover:border-blue-200 hover:bg-blue-50 hover:text-[#2563eb]",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300",
            ].join(" ")}
            title="Ouvrir le document"
            aria-label={`Ouvrir ${file.name}`}
          >
            <ExternalLink
              className="h-3.5 w-3.5"
              strokeWidth={1.9}
              aria-hidden="true"
            />

            <span className="hidden md:inline">
              Ouvrir
            </span>
          </a>
        )}


        {/* Download */}
        {hasUrl ? (
          <a
            href={file.downloadUrl}
            download={file.originalFileName}
            target="_blank"
            rel="noopener noreferrer"
            className={[
              "inline-flex h-9 items-center justify-center gap-1.5 rounded-lg",
              "bg-[#0f2560] px-3",
              "text-[11px] font-semibold text-white",
              "shadow-sm",
              "transition-all duration-150",
              "hover:-translate-y-0.5 hover:bg-[#163274] hover:shadow-md",
              "active:translate-y-0",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2",
            ].join(" ")}
            aria-label={`Télécharger ${file.name}`}
          >
            <Download
              className="h-3.5 w-3.5"
              strokeWidth={2.2}
              aria-hidden="true"
            />

            <span className="hidden sm:inline">
              Télécharger
            </span>
          </a>
        ) : (
          <button
            type="button"
            disabled
            className="inline-flex h-9 items-center justify-center gap-1.5 rounded-lg bg-slate-100 px-3 text-[11px] font-semibold text-slate-400"
            aria-label={`${file.name} indisponible`}
          >
            <Download
              className="h-3.5 w-3.5"
              strokeWidth={1.9}
              aria-hidden="true"
            />

            <span className="hidden sm:inline">
              Indisponible
            </span>
          </button>
        )}

      </div>
    </li>
  );
}