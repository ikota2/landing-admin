import axios from 'axios';

import { URL } from '../../../shared/config/constants';
import { Token } from '../../../shared/types';
import { ApiResponse } from '../model/types';
import { Vacancy}  from '../../../shared/types/vacanciesTypes';

export const createOnsiteVacancy = async (vacancy: Vacancy, token: Token): Promise<ApiResponse> => {
  const { data } = await axios.post<ApiResponse>(`${URL}/create-onsite-vacancy`, vacancy, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return data;
};

export const createRemoteVacancy = async (vacancy: Vacancy, token: Token | null): Promise<ApiResponse> => {
  const { data } = await axios.post<ApiResponse>(`${URL}/create-remote-vacancy`, vacancy,  {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return data;
};

export const getOnsiteVacancies = async (token: Token): Promise<Vacancy[]> => {
  const { data } = await axios.get<Vacancy[]>(`${URL}/get-onsite-vacancies`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const getRemoteVacancies = async (token: Token): Promise<Vacancy[]> => {
  const { data } = await axios.get<Vacancy[]>(`${URL}/get-remote-vacancies`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const editOnsiteVacancy = async (id: string, vacancy: Vacancy, token: Token): Promise<ApiResponse> => {
  const { data } = await axios.post<ApiResponse>(`${URL}/edit-onsite-vacancy/${id}`, vacancy,  {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return data;
};

export const editRemoteVacancy = async (id: string, vacancy: Vacancy, token: Token): Promise<ApiResponse> => {
  const { data } = await axios.post<ApiResponse>(`${URL}/edit-remote-vacancy/${id}`, vacancy,  {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return data;
};

export const deleteOnsiteVacancy = async (id: string, token: Token): Promise<ApiResponse> => {
  const { data } = await axios.delete<ApiResponse>(`${URL}/remove-onsite-vacancy/${id}`,  {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return data;
};

export const deleteRemoteVacancy = async (id: string, token: Token): Promise<ApiResponse> => {
  const { data } = await axios.delete<ApiResponse>(`${URL}/remove-remote-vacancy/${id}`,  {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return data;
};

