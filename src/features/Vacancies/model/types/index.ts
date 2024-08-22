
export interface IFormField {
  label: string;
  name: string;
  hasSelect?: boolean;
}

export interface IList {
  title: string;
  name: keyof FormData;
}


export interface Vacancy {
  id: string;
  username: string;
  responsibilities: string[];
  requirements: string[];
  conditions: string[];
  salary: string | null;
  title: string;
}

export interface ApiResponse {
  status: number;
  message: string;
}

export interface FormData {
  title: string;
  responsibilities: string[];
  requirements: string[];
  conditions: string[];
  salary: string;
  username: string;
  type: string;
}
