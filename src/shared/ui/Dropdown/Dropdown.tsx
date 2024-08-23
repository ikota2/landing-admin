import  {FC, ReactNode, useState } from 'react';

import styles from './Dropdown.module.css';

interface DropdownProps {
  title: string;
  children: ReactNode;
}

const Dropdown: FC<DropdownProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.dropdown}>
      <div className={styles.dropdownTitle} onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
        <span className={`${styles.arrow} ${isOpen ? styles.rotate : ''}`}>
          ▼
        </span>
      </div>
      {isOpen && (
        <div className={styles.dropdownContent}>
          {children}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
