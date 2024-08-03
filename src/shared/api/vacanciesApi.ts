import axios from 'axios';
import { ApiResponse, Vacancy } from '../types/vacanciesTypes';
import { URL } from '../constants';

export const getOnsiteVacancies = async (token: string): Promise<Vacancy[]> => {
  const { data } = await axios.get<Vacancy[]>(`${URL}/get-onsite-vacancies`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const getRemoteVacancies = async (token: string): Promise<Vacancy[]> => {
  const { data } = await axios.get<Vacancy[]>(`${URL}/get-remote-vacancies`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const createOnsiteVacancy = async (vacancy: Vacancy, token: string): Promise<ApiResponse> => {
  const { data } = await axios.post<ApiResponse>(`${URL}/create-onsite-vacancy`, vacancy, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return data;
};

export const createRemoteVacancy = async (vacancy: Vacancy, token: string): Promise<ApiResponse> => {
  const { data } = await axios.post<ApiResponse>(`${URL}/create-remote-vacancy`, vacancy,  {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return data;
};

export const editOnsiteVacancy = async (id: string, vacancy: Vacancy, token: string): Promise<ApiResponse> => {
  const { data } = await axios.post<ApiResponse>(`${URL}/edit-onsite-vacancy/${id}`, vacancy,  {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return data;
};

export const editRemoteVacancy = async (id: string, vacancy: Vacancy, token: string): Promise<ApiResponse> => {
  const { data } = await axios.post<ApiResponse>(`${URL}/edit-remote-vacancy/${id}`, vacancy,  {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return data;
};

export const deleteOnsiteVacancy = async (id: string, token: string): Promise<ApiResponse> => {
  const { data } = await axios.delete<ApiResponse>(`${URL}/remove-onsite-vacancy/${id}`,  {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return data;
};

export const deleteRemoteVacancy = async (id: string, token: string): Promise<ApiResponse> => {
  const { data } = await axios.delete<ApiResponse>(`${URL}/remove-remote-vacancy/${id}`,  {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return data;
};
