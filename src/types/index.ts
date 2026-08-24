// ─── Resource ────────────────────────────────────────────────────────────────
export type ResourceType = 'past-exam' | 'course-notes' | 'td' | 'tp' | 'other';

export interface Resource {
  id: string;
  title: string;
  module: string;
  branch: string;
  semester: string;
  type: ResourceType;
  date: string;           // ISO date string e.g. "2024-06-15"
  downloadUrl: string;
  isNew?: boolean;
  downloadCount?: number;
}

// ─── Event ───────────────────────────────────────────────────────────────────
export interface ClubEvent {
  id: string;
  title: string;
  date: string;           // ISO date string
  description: string;
  location: string;
}

// ─── Help Guide ──────────────────────────────────────────────────────────────
export type GuideCategory =
  | 'administration'
  | 'grades-exams'
  | 'campus-life'
  | 'freshman'
  | 'documents'
  | 'university-rules';

export interface Guide {
  id: string;
  title: string;
  category: GuideCategory;
  description: string;
  slug: string;
  icon: string;           // Lucide icon name
}

// ─── Academic Filter ─────────────────────────────────────────────────────────
export interface Branch {
  id: string;
  label: string;
  semesters: Semester[];
}

export interface Semester {
  id: string;
  label: string;
  modules: Module[];
}

export interface Module {
  id: string;
  label: string;
}

export interface AcademicFilter {
  branch: string;
  semester: string;
  module: string;
}
