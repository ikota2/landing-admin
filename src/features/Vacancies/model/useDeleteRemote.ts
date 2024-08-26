import { useMutation, useQueryClient } from 'react-query';

import { deleteRemoteVacancy } from '../api';

export const useDeleteRemote = () => {
  const queryClient = useQueryClient();
  const token = localStorage.getItem('token');

  return useMutation(
    (vacancyId: string) => deleteRemoteVacancy(vacancyId, token),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('remoteVacancies');
      },
      onError: (error) => {
        console.error('Ошибка при удалении вакансии:', error);
      },
    }
  );
};
