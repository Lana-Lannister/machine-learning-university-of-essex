export type WeekStatus = "not-started" | "in-progress" | "complete";

export type ArtifactType =
  | "notebook"
  | "dataset"
  | "pdf"
  | "report"
  | "repo"
  | "other";

export interface WeekLink {
  label: string;
  href: string;
  type: ArtifactType;
}

export interface WeekImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface WeekFrontmatter {
  week: number;
  title: string;
  status: WeekStatus;
  summary: string;
  topics: string[];
  links: WeekLink[];
  images?: WeekImage[];
  assessmentCount?: number;
}

export interface Week {
  frontmatter: WeekFrontmatter;
  slug: string;
  content: string;
}
