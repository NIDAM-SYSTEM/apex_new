import type { Resource, ClubEvent, Guide, Branch } from '../types';

// ─── Academic Branches ────────────────────────────────────────────────────────
export const branches: Branch[] = [
  {
    id: 'maths',
    label: 'Mathématiques',
    status: 'available',
    semesters: [
      {
        id: 's1',
        label: 'Semestre 01',
        modules: [
          { id: 's1-algebre1', label: 'Algèbre 1' },
          { id: 's1-algebre2', label: 'Algèbre 2' },
          { id: 's1-analyse1', label: 'Analyse 1' },
          { id: 's1-info1', label: 'Informatique 1 (Python)' },
          { id: 's1-statistiques', label: 'Statistiques & Probabilités' },
          { id: 's1-thermo', label: 'Thermodynamique' },
        ],
      },
      {
        id: 's2',
        label: 'Semestre 02',
        modules: [
          { id: 's2-algebre3', label: 'Algèbre 3' },
          { id: 's2-analyse2', label: 'Analyse 2' },
          { id: 's2-analyse3', label: 'Analyse 3' },
          { id: 's2-electro', label: 'Électromagnétisme' },
          { id: 's2-info2', label: 'Informatique 2 (Algorithmique)' },
          { id: 's2-optique', label: 'Optique' },
        ],
      },
      {
        id: 's3',
        label: 'Semestre 03',
        modules: [
          { id: 's3-algebre4', label: 'Algèbre 4' },
          { id: 's3-analyse4', label: 'Analyse 4' },
          { id: 's3-analyse5', label: 'Analyse 5' },
          { id: 's3-info3', label: 'Informatique 3' },
          { id: 's3-mecanique', label: 'Mécanique' },
          { id: 's3-sc', label: 'Systèmes & Circuits' },
        ],
      },
      {
        id: 's4',
        label: 'Semestre 04',
        modules: [
          { id: 's4-algebre5', label: 'Algèbre 5' },
          { id: 's4-analyse6', label: 'Analyse 6' },
          { id: 's4-dida', label: 'Didactique des Mathématiques' },
          { id: 's4-info4', label: 'Informatique 4 (Bases de Données)' },
          { id: 's4-numerique', label: 'Analyse Numérique' },
          { id: 's4-proba', label: 'Probabilités' },
        ],
      },
      {
        id: 's5',
        label: 'Semestre 05',
        modules: [
          { id: 's5-algebrique', label: 'Structures Algébriques' },
          { id: 's5-didactique', label: 'Didactique Spécialisée' },
          { id: 's5-diontologie', label: 'Déontologie & Éthique' },
          { id: 's5-mesure', label: 'Mesure & Intégration' },
          { id: 's5-topologie', label: 'Topologie Générale' },
        ],
      },
      {
        id: 's6',
        label: 'Semestre 06',
        modules: [
          { id: 's6-complexe', label: 'Analyse Complexe' },
          { id: 's6-diff', label: 'Calcul Différentiel & EDO' },
          { id: 's6-epi', label: 'Épistémologie & Histoire des Maths' },
          { id: 's6-geo', label: 'Géométrie Différentielle' },
          { id: 's6-methodes', label: 'Méthodes de Recherche' },
        ],
      },
    ],
  },
  {
    id: 'physics',
    label: 'Physique-Chimie',
    status: 'coming-soon',
    semesters: [
      {
        id: 's1', label: 'Semestre 01',
        modules: [
          { id: 'mechanics', label: 'Mécanique Classique' },
          { id: 'thermodynamics', label: 'Thermodynamique' },
        ],
      },
      {
        id: 's2', label: 'Semestre 02',
        modules: [
          { id: 'electromagnetism', label: 'Électromagnétisme' },
          { id: 'waves', label: 'Ondes' },
        ],
      },
      {
        id: 's3', label: 'Semestre 03',
        modules: [
          { id: 'quantum', label: 'Mécanique Quantique' },
          { id: 'optics', label: 'Optique' },
        ],
      },
    ],
  },
  {
    id: 'info',
    label: 'Informatique',
    status: 'coming-soon',
    semesters: [
      {
        id: 's1', label: 'Semestre 01',
        modules: [
          { id: 'algo-base', label: 'Algorithmique de Base' },
          { id: 'web-dev', label: 'Développement Web' },
        ],
      },
    ],
  },
  {
    id: 'svt',
    label: 'Sciences de la Vie & Terre',
    status: 'coming-soon',
    semesters: [
      {
        id: 's1', label: 'Semestre 01',
        modules: [
          { id: 'biologie-cell', label: 'Biologie Cellulaire' },
          { id: 'geologie', label: 'Géologie Générale' },
        ],
      },
    ],
  },
  {
    id: 'sport',
    label: 'Sport',
    status: 'coming-soon',
    semesters: [
      {
        id: 's1', label: 'Semestre 01',
        modules: [
          { id: 'anatomy', label: 'Anatomie' },
          { id: 'physiology', label: 'Physiologie' },
        ],
      },
      {
        id: 's2', label: 'Semestre 02',
        modules: [
          { id: 'sport-psychology', label: 'Psychologie du Sport' },
          { id: 'training-methods', label: 'Méthodes d\'Entraînement' },
        ],
      },
    ],
  },
  {
    id: 'arabic',
    label: 'Langue Arabe',
    status: 'coming-soon',
    semesters: [
      {
        id: 's1', label: 'Semestre 01',
        modules: [
          { id: 'arabic-literature', label: 'Littérature Arabe' },
          { id: 'arabic-linguistics', label: 'Linguistique Arabe' },
        ],
      },
      {
        id: 's2', label: 'Semestre 02',
        modules: [
          { id: 'arabic-rhetoric', label: 'Rhétorique Arabe' },
          { id: 'arabic-grammar', label: 'Grammaire Avancée' },
        ],
      },
    ],
  },
];

// ─── Popular Resources ────────────────────────────────────────────────────────
export const popularResources: Resource[] = [
  {
    id: 'r1',
    title: 'Examen Final 2024',
    module: 'Analyse 3',
    branch: 'Mathématiques',
    semester: 'S3',
    type: 'past-exam',
    date: '2024-06-15',
    downloadUrl: '#',
    isNew: true,
    downloadCount: 312,
  },
  {
    id: 'r2',
    title: 'TD 04 — Séries Entières',
    module: 'Analyse 3',
    branch: 'Mathématiques',
    semester: 'S3',
    type: 'td',
    date: '2024-05-20',
    downloadUrl: '#',
    downloadCount: 187,
  },
  {
    id: 'r3',
    title: 'Cours Complet — Espaces Vectoriels',
    module: 'Algèbre 2',
    branch: 'Mathématiques',
    semester: 'S2',
    type: 'course-notes',
    date: '2024-04-10',
    downloadUrl: '#',
    downloadCount: 254,
  },
  {
    id: 'r4',
    title: 'Examen Final 2024',
    module: 'Statistiques',
    branch: 'Mathématiques',
    semester: 'S2',
    type: 'past-exam',
    date: '2024-06-20',
    downloadUrl: '#',
    isNew: true,
    downloadCount: 143,
  },
  {
    id: 'r5',
    title: 'Anatomie — Chapitre 1',
    module: 'Anatomie',
    branch: 'Sport',
    semester: 'S1',
    type: 'course-notes',
    date: '2024-03-08',
    downloadUrl: '#',
    downloadCount: 98,
  },
  {
    id: 'r6',
    title: 'TD 03 — Calcul Intégral',
    module: 'Calcul Différentiel',
    branch: 'Mathématiques',
    semester: 'S3',
    type: 'td',
    date: '2024-05-01',
    downloadUrl: '#',
    downloadCount: 211,
  },
];

// ─── Help Guides ──────────────────────────────────────────────────────────────
export const helpGuides: Guide[] = [
  {
    id: 'g1',
    title: 'Corriger une note d\'examen',
    category: 'grades-exams',
    description: 'Que faire si votre note est incorrecte ? Suivez ces 3 étapes simples.',
    slug: 'corriger-note-examen',
    icon: 'ClipboardEdit',
  },
  {
    id: 'g2',
    title: 'Trouver le bon bureau',
    category: 'administration',
    description: 'Localisez le bureau administratif qui gère votre problème.',
    slug: 'trouver-bureau',
    icon: 'MapPin',
  },
  {
    id: 'g3',
    title: 'Règles et procédures d\'examen',
    category: 'grades-exams',
    description: 'Tout ce que vous devez savoir avant, pendant et après l\'examen.',
    slug: 'regles-examens',
    icon: 'BookOpen',
  },
  {
    id: 'g4',
    title: 'Guide des nouveaux étudiants',
    category: 'freshman',
    description: 'Informations essentielles pour bien commencer à l\'ENS Tétouan.',
    slug: 'guide-nouveaux-etudiants',
    icon: 'GraduationCap',
  },
];

// ─── Club Events ──────────────────────────────────────────────────────────────
export const clubEvents: ClubEvent[] = [
  {
    id: 'e1',
    title: 'Atelier de Révision',
    date: '2024-09-12',
    description: 'Session de révision collective pour les examens de S1.',
    location: 'Salle B-204, ENS Tétouan',
  },
  {
    id: 'e2',
    title: 'Réunion Étudiante',
    date: '2024-09-18',
    description: 'Rencontrez les membres du club et découvrez nos projets.',
    location: 'Hall Principal, ENS Tétouan',
  },
  {
    id: 'e3',
    title: 'Activité Solidaire',
    date: '2024-09-24',
    description: 'Initiative solidaire organisée par APEX pour les étudiants.',
    location: 'Campus ENS Tétouan',
  },
];
