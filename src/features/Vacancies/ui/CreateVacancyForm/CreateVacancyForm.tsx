import { FC, FormEvent, ChangeEvent, useCallback } from 'react';
import { AxiosError } from 'axios';

import CreateList from '../CreateList/CreateList';
import FormField from '../FormField/FormField';
import Notification from '../../../../shared/ui/Notification/Notification';
import { useNotificationStore } from '../../../../shared/hooks/useNotificationStore';
import { useVacancySubmit } from '../../model/useVacancySubmit';
import { useFormStore } from '../../model/stores/useFormStore';
import { IFormField, IList } from '../../model/types';
import { FORM_FIELDS, LISTS } from '../../config/constants';

const CreateVacancyForm: FC = () => {
  const { formData, setFormData, resetFormData } = useFormStore();
  const mutation = useVacancySubmit();
  const { showNotification } = useNotificationStore();


  const handleSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();

    mutation.mutate(undefined, {
      onSuccess: () => {
        showNotification('Вакансия успешно создана!', 'success');
        resetFormData();
      },
      onError: (error) => {
        showNotification(
          `Ошибка при отправке: ${(error as AxiosError)?.message || 'Неизвестная ошибка'}`,
          'error'
        );
      },
    });
  }, [mutation, resetFormData, showNotification]);

  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(name as keyof typeof formData, value);
  }, [setFormData]);


  return (
    <div>
      <form onSubmit={handleSubmit}>
        {FORM_FIELDS.map((field: IFormField) => (
          <FormField
            key={field.name}
            label={field.label}
            name={field.name}
            value={formData[field.name as keyof typeof formData] as string}
            onChange={handleInputChange}
            hasSelect={field.hasSelect}
          />
        ))}
        {LISTS.map((field: IList) => (
          <CreateList
            key={field.name}
            title={field.title}
            name={field.name}
          />
        ))}
        <button type="submit" disabled={mutation.isLoading}>
          {mutation.isLoading ? 'Отправка...' : 'Отправить'}
        </button>
      </form>
      <Notification />
    </div>
  );
};

export default CreateVacancyForm;
