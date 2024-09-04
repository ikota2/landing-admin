export interface Vacancy {
  id: string;
  username: string;
  responsibilities: string[];
  requirements: string[];
  conditions: string[];
  salary: string | null;
  title: string;
}

export type VacancyType = 'remote' | 'onsite';
