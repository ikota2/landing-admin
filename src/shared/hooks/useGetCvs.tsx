import {ReactNode} from 'react';
import {Navigate} from 'react-router-dom';
import {useQuery, UseQueryResult} from 'react-query';

import {getCvs} from '../api/cvsApi';
import {CV} from '../types/cvsTypes';


const fetchCvs = async (): Promise<ReactNode | CV[]> => {
  const token = localStorage.getItem('token');
  if (!token) {
    return <Navigate to="/login"/>;
  }
  return getCvs(token);
};

export const useGetCvs = (): UseQueryResult<CV[], Error> => {
  return useQuery(['cvsList'], fetchCvs, {
    staleTime: 1000 * 60 * 60
  })
}
