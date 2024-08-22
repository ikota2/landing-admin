import { FC, ChangeEvent, ReactNode } from 'react';

interface FormFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  children?: ReactNode;
  hasSelect?: boolean;
}

const FormField: FC<FormFieldProps> = (
  { label, name, value, onChange, hasSelect }
) => {
  return (
    <div>
      <label>{label}: </label>
      {hasSelect ? (
        <select name={name} value={value} onChange={onChange}>
          <option value="remote">Удаленная</option>
          <option value="onsite">На месте</option>
        </select>
      ) : (
        <input
          type="text"
          name={name}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
};

export default FormField;
