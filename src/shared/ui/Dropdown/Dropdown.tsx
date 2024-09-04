import { FC, ReactNode, useEffect, useState } from 'react';

import { useVacancyStore } from '../../hooks/useVacancyStore';
import { useDeleteVacancy } from '../../../features/Vacancies/model/useDeleteVacancy';
import styles from './Dropdown.module.css';


interface DropdownProps {
  title: string;
  children: ReactNode;
  id: string;
}

const Dropdown: FC<DropdownProps> = ({ title, children, id  }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const vacancyType = useVacancyStore((state) => state.vacancyType);
  const deleteRemoteMutation = useDeleteVacancy(vacancyType);

  const handleDelete = (id: string) => {
    deleteRemoteMutation.mutate(
      id, {
        onSuccess: () => setIsDeleting(true)
      }
    )
  }

  useEffect(() => {
    if (isDeleting) {
      const timer = setTimeout(() => deleteRemoteMutation.reset(), 1000);
      return () => clearTimeout(timer);
    }
  }, [isDeleting, deleteRemoteMutation])

  return (
    <div className={`${styles.dropdown} ${isDeleting ? styles.deleting : ''}`}>
      <div className={styles.header}>
        <div className={styles.title} onClick={() => setIsOpen(!isOpen)}>
          <span>{title}</span>
        </div>
        <div className={styles.remover}>
          <button
            onClick={()=> handleDelete(id)}
            disabled={deleteRemoteMutation.isLoading}
          >удалить</button>
        </div>
      </div>
      {isOpen && (
        <div className={styles.content}>
          {children}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
