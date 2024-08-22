import { ChangeEvent, FC, useCallback, useMemo, useState } from 'react';

import { FormData } from '../../model/types';
import { useFormStore } from '../../model/stores/useFormStore';

interface ListProps {
  title: string;
  name: keyof FormData;
}

const CreateList: FC<ListProps> = ({ title, name }) => {
  const [inputValue, setInputValue] = useState('');
  const { formData, setFormData } = useFormStore();

  const trimmedInputValue = inputValue.trim();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = useCallback(() => {
    if (trimmedInputValue) {
      const newTodos = [...(formData[name] as string[]), trimmedInputValue];
      setFormData(name, newTodos);
      setInputValue('');
    }
  }, [trimmedInputValue, formData, name, setFormData]);

  const isDisabled = useMemo(() => {
    return (
      !trimmedInputValue ||
      trimmedInputValue.length < 3 ||
      !/^[а-яА-Я\s]+$/.test(trimmedInputValue) ||
      /^\d/.test(trimmedInputValue)
    );
  }, [trimmedInputValue]);

  return (
    <div>
      <h3>{title}</h3>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button
        onClick={handleAddTodo}
        disabled={isDisabled}
      >
        Добавить
      </button>
      <ul>
        {(formData[name] as string[]).map((todo: string, index: number) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default CreateList;
