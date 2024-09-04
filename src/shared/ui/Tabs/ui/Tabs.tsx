import { FC, useEffect, useState } from 'react';

import { TabsProps } from '../model/types';
import { useVacancyStore } from '../../../hooks/useVacancyStore';
import styles from './Tabs.module.css';


const Tabs: FC<TabsProps> = ({ tabs, defaultActiveTab }) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab || tabs[0].name);
  const setVacancyType = useVacancyStore((state) => state.setVacancyType);

  useEffect(() => {
    if (activeTab === 'Удаленка') setVacancyType('remote');
    else if (activeTab === 'На месте') setVacancyType('onsite');
  }, [activeTab, setVacancyType]);

  return (
    <div className={styles.container}>
      <div className={styles.name}>
        {tabs.map((tab, ) => (
          <button
            key={tab.name}
            className={tab.name === activeTab ? styles.activeTab : styles.tab}
            onClick={() => setActiveTab(tab.name)}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className={styles.content}>
        {tabs.find((tab) => tab.name === activeTab)?.content}
      </div>
    </div>
  );
};

export default Tabs;
