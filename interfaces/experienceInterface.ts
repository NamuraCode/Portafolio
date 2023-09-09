export interface ExperienceJob {
  type: string;
  job: string[];
  company: string;
  description: string[];
  date: string[];
}

export interface ExperienceState {
  nameExperience: string;
  job: ExperienceJob[];
  toggleLanguage: number;
  experience: string[];
}

export interface ExpListProps {
  experiences: ExperienceJob[];
  indexLanguage: number;
}