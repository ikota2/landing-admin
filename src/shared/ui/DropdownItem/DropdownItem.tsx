import { FC } from 'react';

import { Vacancy } from '../../../features/Vacancies/model/types';
import styles from './DropdownItem.module.css';

const DropdownItem: FC<Vacancy> = (
  { responsibilities, requirements, conditions, salary, username }
) => {

  return (
    <div className={styles.dropdownItem}>
      <div className={styles.subItem}>
        <div className={styles.responsibilities}>
          <h4 className={styles.title}>Обязанности</h4>
          <ul>
            {responsibilities.map((responsibility, i) => <li key={i}>{responsibility}</li>)}
          </ul>
        </div>
        <div className={styles.requirements}>
          <h4>Требования</h4>
          <ul>
            {requirements.map((requirement, i) => <li key={i}>{requirement}</li>)}
          </ul>
        </div>
        <div className={styles.conditions}>
          <h4>Условия</h4>
          <ul>
            {conditions.map((condition, i) => <li key={i}>{condition}</li>)}
          </ul>
        </div>
      </div>
      <div className={styles.subItem}>
        <div className={styles.salary}>
          <h4>{salary}р.</h4>
        </div>
        <h4>username {username}</h4>
      </div>
    </div>
  );
            };

export default DropdownItem;
