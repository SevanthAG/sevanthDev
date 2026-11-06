export type LinkItem = {
  label: string;
  href: string;
  icon?: string;
};

export type Skill = {
  name: string;
  /** Brand hex color. Falls back to a tonal cycle when omitted. */
  color?: string;
  /** Keeps the chip vivid instead of the dimmed default. */
  light?: boolean;
};

export type NowSpan = {
  text: string;
  href?: string;
  hl?: boolean;
};

export type NowItem = {
  spans: NowSpan[];
};

export type Role = {
  org: string;
  role: string;
  type: string;
  period: string;
  href?: string;
  summary: string;
  tech: string[];
};

export type Project = {
  title: string;
  stack: string;
  description: string;
  live: string | null;
  repo: string | null;
  status?: string;
};

export type Education = {
  institution: string;
  degree: string;
  year: string;
  score: string;
};

export type StackGroup = {
  title: string;
  items: string[];
};

export type Credential = {
  title: string;
  issuer: string;
  date: string;
  href?: string;
};

export type Point = {
  title: string;
  meta: string;
  description: string;
};

export type Profile = {
  name: string;
  handle: string;
  role: string;
  lede: string;
  /** true = "open to work" in green. false = struck through in orange. */
  status: boolean;
  email: string;
  resume: string;
  about: string;
  facts: { key: string; value: string }[];
  socials: LinkItem[];
  now: NowItem[];
  skills: Skill[];
  work: Role[];
  projects: Project[];
  education: Education[];
  stack: StackGroup[];
  credentials: Credential[];
  leadership: Point[];
  achievements: Point[];
};
