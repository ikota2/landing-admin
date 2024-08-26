import { FC, ReactNode, useEffect, useState } from 'react';

import { useDeleteRemote } from '../../../features/Vacancies/model/useDeleteRemote';
import styles from './Dropdown.module.css';

interface DropdownProps {
  title: string;
  children: ReactNode;
  id: string;
}

const Dropdown: FC<DropdownProps> = ({ title, children, id  }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const deleteRemoteMutation = useDeleteRemote();
  const handleDelete = (id: string) => {
    deleteRemoteMutation.mutate(id, {
      onSuccess: () => {
        setIsDeleting(true);
      }
    });
  }

  useEffect(() => {
    if (isDeleting) {
      const timer = setTimeout(() => {
        deleteRemoteMutation.reset();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isDeleting, deleteRemoteMutation]);

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
