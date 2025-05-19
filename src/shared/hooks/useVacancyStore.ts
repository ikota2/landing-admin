import { create } from 'zustand';
import { VacancyType } from '../types/vacanciesTypes';

interface VacancyStore {
  vacancyType: VacancyType;
  setVacancyType: (type: VacancyType) => void;
}

export const useVacancyStore = create<VacancyStore>((set) => ({
  vacancyType: 'remote',
  setVacancyType: (type) => set({ vacancyType: type })
}))
