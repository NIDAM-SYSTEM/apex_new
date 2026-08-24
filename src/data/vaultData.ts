// ─── Vault File ───────────────────────────────────────────────────────────────
export type VaultFileType = 'cours' | 'td-tp' | 'examen';

export interface VaultFile {
  id: string;
  name: string;
  moduleId: string;
  branchId: string;
  semesterId: string;
  type: VaultFileType;
  date: string;        // ISO
  size: string;        // e.g. "2.4 MB"
  professor?: string;
  isNew?: boolean;
  downloadUrl: string;
}

// ─── Realistic Vault Files ────────────────────────────────────────────────────
export const vaultFiles: VaultFile[] = [

  // ── Analyse 3 (maths / s3 / analysis3) ─────────────────────────────────────
  { id: 'v01', name: 'Cours — Suites de Fonctions',            moduleId: 'analysis3', branchId: 'maths', semesterId: 's3', type: 'cours',   date: '2024-02-10', size: '3.4 MB', professor: 'Prof. Hassan',  downloadUrl: '#' },
  { id: 'v02', name: 'Cours — Séries de Fonctions',            moduleId: 'analysis3', branchId: 'maths', semesterId: 's3', type: 'cours',   date: '2024-02-24', size: '2.8 MB', professor: 'Prof. Hassan',  downloadUrl: '#' },
  { id: 'v03', name: 'Cours — Intégrale de Lebesgue',          moduleId: 'analysis3', branchId: 'maths', semesterId: 's3', type: 'cours',   date: '2024-03-15', size: '4.1 MB', professor: 'Prof. Hassan',  downloadUrl: '#' },
  { id: 'v04', name: 'TD 01 — Convergence de Suites',          moduleId: 'analysis3', branchId: 'maths', semesterId: 's3', type: 'td-tp',  date: '2024-02-12', size: '0.8 MB', professor: 'Prof. Hassan',  downloadUrl: '#' },
  { id: 'v05', name: 'TD 02 — Convergence Uniforme',           moduleId: 'analysis3', branchId: 'maths', semesterId: 's3', type: 'td-tp',  date: '2024-02-26', size: '1.1 MB', professor: 'Prof. Hassan',  downloadUrl: '#' },
  { id: 'v06', name: 'TD 03 — Séries Entières',                moduleId: 'analysis3', branchId: 'maths', semesterId: 's3', type: 'td-tp',  date: '2024-03-11', size: '0.9 MB', professor: 'Prof. Hassan',  downloadUrl: '#' },
  { id: 'v07', name: 'TD 04 — Séries de Fourier',              moduleId: 'analysis3', branchId: 'maths', semesterId: 's3', type: 'td-tp',  date: '2024-03-25', size: '1.2 MB', professor: 'Prof. Hassan',  downloadUrl: '#', isNew: true },
  { id: 'v08', name: 'TP 01 — Exercices Intégration',          moduleId: 'analysis3', branchId: 'maths', semesterId: 's3', type: 'td-tp',  date: '2024-04-08', size: '0.7 MB', professor: 'Prof. Hassan',  downloadUrl: '#' },
  { id: 'v09', name: 'Examen Final — Juin 2024',               moduleId: 'analysis3', branchId: 'maths', semesterId: 's3', type: 'examen', date: '2024-06-15', size: '1.5 MB', professor: 'Prof. Hassan',  downloadUrl: '#', isNew: true },
  { id: 'v10', name: 'Examen Final — Juin 2023',               moduleId: 'analysis3', branchId: 'maths', semesterId: 's3', type: 'examen', date: '2023-06-20', size: '1.3 MB', professor: 'Prof. Hassan',  downloadUrl: '#' },
  { id: 'v11', name: 'Examen de Rattrapage 2023',              moduleId: 'analysis3', branchId: 'maths', semesterId: 's3', type: 'examen', date: '2023-09-05', size: '1.1 MB', professor: 'Prof. Hassan',  downloadUrl: '#' },
  { id: 'v12', name: 'Contrôle Continu 1 — 2024',             moduleId: 'analysis3', branchId: 'maths', semesterId: 's3', type: 'examen', date: '2024-04-02', size: '0.6 MB', professor: 'Prof. Hassan',  downloadUrl: '#' },

  // ── Topologie (maths / s3 / topology) ──────────────────────────────────────
  { id: 'v13', name: 'Cours — Espaces Métriques',              moduleId: 'topology',  branchId: 'maths', semesterId: 's3', type: 'cours',   date: '2024-02-05', size: '3.7 MB', professor: 'Prof. Layla',   downloadUrl: '#' },
  { id: 'v14', name: 'TD 01 — Ouverts et Fermés',              moduleId: 'topology',  branchId: 'maths', semesterId: 's3', type: 'td-tp',  date: '2024-02-19', size: '1.0 MB', professor: 'Prof. Layla',   downloadUrl: '#' },
  { id: 'v15', name: 'Examen Final — 2024',                    moduleId: 'topology',  branchId: 'maths', semesterId: 's3', type: 'examen', date: '2024-06-18', size: '1.2 MB', professor: 'Prof. Layla',   downloadUrl: '#' },

  // ── Algèbre 2 (maths / s2 / algebra2) ──────────────────────────────────────
  { id: 'v16', name: 'Cours — Espaces Vectoriels',             moduleId: 'algebra2',  branchId: 'maths', semesterId: 's2', type: 'cours',   date: '2024-01-15', size: '3.1 MB', professor: 'Prof. Amina',   downloadUrl: '#' },
  { id: 'v17', name: 'Cours — Applications Linéaires',         moduleId: 'algebra2',  branchId: 'maths', semesterId: 's2', type: 'cours',   date: '2024-01-29', size: '2.6 MB', professor: 'Prof. Amina',   downloadUrl: '#' },
  { id: 'v18', name: 'TD 01 — Espaces Vectoriels',             moduleId: 'algebra2',  branchId: 'maths', semesterId: 's2', type: 'td-tp',  date: '2024-01-20', size: '0.9 MB', professor: 'Prof. Amina',   downloadUrl: '#' },
  { id: 'v19', name: 'TD 02 — Matrices et Déterminants',       moduleId: 'algebra2',  branchId: 'maths', semesterId: 's2', type: 'td-tp',  date: '2024-02-05', size: '1.0 MB', professor: 'Prof. Amina',   downloadUrl: '#' },
  { id: 'v20', name: 'Examen Final — 2024',                    moduleId: 'algebra2',  branchId: 'maths', semesterId: 's2', type: 'examen', date: '2024-06-10', size: '1.2 MB', professor: 'Prof. Amina',   downloadUrl: '#' },

  // ── Statistiques (maths / s2 / stats) ──────────────────────────────────────
  { id: 'v21', name: 'Cours — Variables Aléatoires',           moduleId: 'stats',     branchId: 'maths', semesterId: 's2', type: 'cours',   date: '2024-01-10', size: '2.9 MB', professor: 'Prof. Youssef', downloadUrl: '#' },
  { id: 'v22', name: 'Cours — Loi des Grands Nombres',         moduleId: 'stats',     branchId: 'maths', semesterId: 's2', type: 'cours',   date: '2024-01-22', size: '2.2 MB', professor: 'Prof. Youssef', downloadUrl: '#' },
  { id: 'v23', name: 'TD 01 — Lois de Probabilité',            moduleId: 'stats',     branchId: 'maths', semesterId: 's2', type: 'td-tp',  date: '2024-01-15', size: '1.0 MB', professor: 'Prof. Youssef', downloadUrl: '#' },
  { id: 'v24', name: 'Examen Final — Juin 2024',               moduleId: 'stats',     branchId: 'maths', semesterId: 's2', type: 'examen', date: '2024-06-20', size: '1.4 MB', professor: 'Prof. Youssef', downloadUrl: '#', isNew: true },

  // ── Anatomie (sport / s1 / anatomy) ────────────────────────────────────────
  { id: 'v25', name: 'Cours — Système Musculaire',             moduleId: 'anatomy',   branchId: 'sport', semesterId: 's1', type: 'cours',   date: '2024-01-08', size: '5.2 MB', professor: 'Prof. Fatima',  downloadUrl: '#' },
  { id: 'v26', name: 'Cours — Système Osseux',                 moduleId: 'anatomy',   branchId: 'sport', semesterId: 's1', type: 'cours',   date: '2024-01-22', size: '4.8 MB', professor: 'Prof. Fatima',  downloadUrl: '#' },
  { id: 'v27', name: 'TD 01 — Muscles du Membre Supérieur',    moduleId: 'anatomy',   branchId: 'sport', semesterId: 's1', type: 'td-tp',  date: '2024-01-15', size: '1.8 MB', professor: 'Prof. Fatima',  downloadUrl: '#' },
  { id: 'v28', name: 'Examen Final — 2024',                    moduleId: 'anatomy',   branchId: 'sport', semesterId: 's1', type: 'examen', date: '2024-06-12', size: '2.1 MB', professor: 'Prof. Fatima',  downloadUrl: '#' },

  // ── Électromagnétisme (physics / s2 / electromagnetism) ────────────────────
  { id: 'v29', name: 'Cours — Équations de Maxwell',           moduleId: 'electromagnetism', branchId: 'physics', semesterId: 's2', type: 'cours',   date: '2024-01-20', size: '4.3 MB', professor: 'Prof. Rachid', downloadUrl: '#' },
  { id: 'v30', name: 'TD 01 — Champ Électrique',               moduleId: 'electromagnetism', branchId: 'physics', semesterId: 's2', type: 'td-tp',  date: '2024-02-02', size: '1.3 MB', professor: 'Prof. Rachid', downloadUrl: '#' },
  { id: 'v31', name: 'Examen Final — 2024',                    moduleId: 'electromagnetism', branchId: 'physics', semesterId: 's2', type: 'examen', date: '2024-06-14', size: '1.6 MB', professor: 'Prof. Rachid', downloadUrl: '#' },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────
export function getVaultFiles(
  moduleId: string,
  type?: VaultFileType,
): VaultFile[] {
  return vaultFiles.filter(
    (f) => f.moduleId === moduleId && (type ? f.type === type : true),
  );
}

export function getModuleFileCount(moduleId: string): number {
  return vaultFiles.filter((f) => f.moduleId === moduleId).length;
}

export function getModuleProfessor(moduleId: string): string {
  return vaultFiles.find((f) => f.moduleId === moduleId)?.professor ?? '—';
}
