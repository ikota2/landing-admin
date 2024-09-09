import { useQuery, UseQueryResult } from 'react-query';
import { getCvsLength } from '../api/cvsApi';
import {Navigate} from 'react-router-dom';
import {ReactNode} from 'react';

const fetchCvsLength = async (): Promise<ReactNode | number> => {
  const token = localStorage.getItem('token');
  if (!token) {
    return <Navigate to="/login"/>;
  }
  return getCvsLength(token);
};

export const useCvsLength = (): UseQueryResult<number, Error> => {
  return useQuery(['cvsLength'], fetchCvsLength, {
    staleTime: 1000 * 60 * 60,
  });
};
