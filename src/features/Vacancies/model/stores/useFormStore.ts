import { create } from 'zustand';

import { createUUID } from '../../../../shared/lib';


interface FormData {
  title: string;
  responsibilities: string[];
  requirements: string[];
  conditions: string[];
  salary: string;
  username: string;
  type: 'remote' | 'onsite';
  id: string;
}

interface FormState {
  formData: FormData;
  setFormData: <K extends keyof FormData>(key: K, value: FormData[K]) => void;
  resetFormData: () => void;
}

export const useFormStore = create<FormState>((set) => ({
  formData: {
    title: '',
    responsibilities: [],
    requirements: [],
    conditions: [],
    salary: '',
    username: '',
    type: 'remote',
    id: '',
  },
  setFormData: (key, value) =>
    set((state) => ({
      formData: {
        ...state.formData,
        id: createUUID(),
        [key]: value,
      },
    })),
  resetFormData: () =>
    set({
      formData: {
        title: '',
        responsibilities: [],
        requirements: [],
        conditions: [],
        salary: '',
        username: '',
        type: 'remote',
        id: '',
      },
    }),
}));
