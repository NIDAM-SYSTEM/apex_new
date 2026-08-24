import type { Resource, ClubEvent, Guide, Branch } from './types';

// ─── Academic Branches ────────────────────────────────────────────────────────
export const branches: Branch[] = [
  {
    id: 'maths',
    label: 'Mathématiques',
    semesters: [
      {
        id: 's1', label: 'S1',
        modules: [
          { id: 'analysis1', label: 'Analyse 1' },
          { id: 'algebra1', label: 'Algèbre 1' },
          { id: 'logic', label: 'Logique' },
        ],
      },
      {
        id: 's2', label: 'S2',
        modules: [
          { id: 'analysis2', label: 'Analyse 2' },
          { id: 'algebra2', label: 'Algèbre 2' },
          { id: 'stats', label: 'Statistiques' },
        ],
      },
      {
        id: 's3', label: 'S3',
        modules: [
          { id: 'analysis3', label: 'Analyse 3' },
          { id: 'topology', label: 'Topologie' },
          { id: 'calculus', label: 'Calcul Différentiel' },
        ],
      },
      {
        id: 's4', label: 'S4',
        modules: [
          { id: 'complex-analysis', label: 'Analyse Complexe' },
          { id: 'probability', label: 'Probabilités' },
          { id: 'num-methods', label: 'Méthodes Numériques' },
        ],
      },
    ],
  },
  {
    id: 'physics',
    label: 'Physique',
    semesters: [
      {
        id: 's1', label: 'S1',
        modules: [
          { id: 'mechanics', label: 'Mécanique Classique' },
          { id: 'thermodynamics', label: 'Thermodynamique' },
        ],
      },
      {
        id: 's2', label: 'S2',
        modules: [
          { id: 'electromagnetism', label: 'Électromagnétisme' },
          { id: 'waves', label: 'Ondes' },
        ],
      },
      {
        id: 's3', label: 'S3',
        modules: [
          { id: 'quantum', label: 'Mécanique Quantique' },
          { id: 'optics', label: 'Optique' },
        ],
      },
    ],
  },
  {
    id: 'sport',
    label: 'Sport',
    semesters: [
      {
        id: 's1', label: 'S1',
        modules: [
          { id: 'anatomy', label: 'Anatomie' },
          { id: 'physiology', label: 'Physiologie' },
        ],
      },
      {
        id: 's2', label: 'S2',
        modules: [
          { id: 'sport-psychology', label: 'Psychologie du Sport' },
          { id: 'training-methods', label: 'Méthodes d\'Entraînement' },
        ],
      },
    ],
  },
  {
    id: 'history',
    label: 'Histoire',
    semesters: [
      {
        id: 's1', label: 'S1',
        modules: [
          { id: 'ancient-history', label: 'Histoire Ancienne' },
          { id: 'medieval-history', label: 'Histoire Médiévale' },
        ],
      },
      {
        id: 's2', label: 'S2',
        modules: [
          { id: 'modern-history', label: 'Histoire Moderne' },
          { id: 'contemporary-history', label: 'Histoire Contemporaine' },
        ],
      },
    ],
  },
  {
    id: 'geography',
    label: 'Géographie',
    semesters: [
      {
        id: 's1', label: 'S1',
        modules: [
          { id: 'physical-geo', label: 'Géographie Physique' },
          { id: 'human-geo', label: 'Géographie Humaine' },
        ],
      },
      {
        id: 's2', label: 'S2',
        modules: [
          { id: 'regional-geo', label: 'Géographie Régionale' },
          { id: 'cartography', label: 'Cartographie' },
        ],
      },
    ],
  },
  {
    id: 'arabic',
    label: 'Langue Arabe',
    semesters: [
      {
        id: 's1', label: 'S1',
        modules: [
          { id: 'arabic-literature', label: 'Littérature Arabe' },
          { id: 'arabic-linguistics', label: 'Linguistique Arabe' },
        ],
      },
      {
        id: 's2', label: 'S2',
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
