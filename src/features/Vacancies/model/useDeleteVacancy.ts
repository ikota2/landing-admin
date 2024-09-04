import { useMutation, useQueryClient } from 'react-query';

import { deleteOnsiteVacancy, deleteRemoteVacancy } from '../api';

export const useDeleteVacancy = (vacancyType: 'remote' | 'onsite') => {
  const queryClient = useQueryClient();
  const token = localStorage.getItem('token');

  return useMutation(
    (vacancyId: string) => {
      if (vacancyType === 'remote') {
        return deleteRemoteVacancy(vacancyId, token);
      } else {
        return deleteOnsiteVacancy(vacancyId, token);
      }
    },
    {
      onSuccess: () => {
        const queryKey = vacancyType === 'remote' ? 'remoteVacancies' : 'onsiteVacancies';
        queryClient.invalidateQueries(queryKey);
      },
      onError: (error) => {
        console.error('Ошибка при удалении вакансии:', error);
      },
    }
  );
};
