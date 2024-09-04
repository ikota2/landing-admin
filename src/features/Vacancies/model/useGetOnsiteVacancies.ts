import { useQuery, UseQueryResult } from 'react-query';

import { getOnsiteVacancies } from '../api';
import { Vacancy } from '../../../shared/types/vacanciesTypes';

const fetchOnsiteVacancies = (): Promise<Vacancy[]> => {
  const token = localStorage.getItem('token');
  return getOnsiteVacancies(token);
}

export const useGetOnsiteVacancies = (): UseQueryResult<Vacancy[], Error> => {
  return useQuery(['onsiteVacancies'], fetchOnsiteVacancies, {
    staleTime: 1000 * 60 * 60
  })
}
