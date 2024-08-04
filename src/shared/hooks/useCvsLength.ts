import { useQuery, UseQueryResult } from 'react-query';
import { getCvsLength } from '../api/cvsApi';

const fetchCvsLength = async (): Promise<number> => {
  const token = localStorage.getItem('token');
  if (!token) throw new Error('No token found');
  return getCvsLength(token);
};

export const useCvsLength = (): UseQueryResult<number, Error> => {
  return useQuery(['cvsLength'], fetchCvsLength, {
    staleTime: 1000 * 60 * 60,
  });
};
