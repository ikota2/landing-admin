import { useQuery, UseQueryResult } from 'react-query';

import { getRemoteVacancies } from '../api';
import { Vacancy } from '../../../shared/types/vacanciesTypes';

const fetchRemoteVacancies = (): Promise<Vacancy[]> => {
  const token = localStorage.getItem('token');
  return getRemoteVacancies(token);
}

export const useGetRemoteVacancies = (): UseQueryResult<Vacancy[], Error> => {
  return useQuery(['remoteVacancies'], fetchRemoteVacancies, {
    staleTime: 1000 * 60 * 60
  })
}
