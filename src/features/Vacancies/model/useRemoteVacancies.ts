import { useQuery, UseQueryResult } from 'react-query';

import { Vacancy } from './types';
import { getRemoteVacancies } from '../api';


const fetchRemoteVacancies = (): Promise<Vacancy[]> => {
  const token = localStorage.getItem('token');
  return getRemoteVacancies(token);
}

export const useRemoteVacancies = (): UseQueryResult<Vacancy[], Error> => {
  return useQuery(['remoteVacancies'], fetchRemoteVacancies, {
    staleTime: 1000 * 60 * 60
  })
}
