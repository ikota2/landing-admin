import { useMutation } from 'react-query';

import { useFormStore } from './stores/useFormStore';
import { createOnsiteVacancy, createRemoteVacancy } from '../api';

export const useVacancySubmit = () => {
  const { formData, setFormData } = useFormStore();

  const mutation = useMutation(
    async () => {
      const token = localStorage.getItem('token');
      if (formData.type === 'onsite') {
        return await createOnsiteVacancy(formData, token);
      } else {
        return await createRemoteVacancy(formData, token);
      }
    },
    {
      onSuccess: () => {
        const fieldsToReset = [
          'title', 'salary', 'username', 'type', 'responsibilities', 'requirements', 'conditions'
        ] as const;

        fieldsToReset.forEach((field) => {
          if (field === 'type') {
            setFormData(field, 'remote');
          } else if (Array.isArray(formData[field])) {
            setFormData(field, []);
          } else {
            setFormData(field, '');
          }
        });
        console.log('Вакансия успешно создана');
      },
      onError: (error) => {
        console.error('Ошибка при создании вакансии:', error);
      },
    }
  );
  return mutation;
};
