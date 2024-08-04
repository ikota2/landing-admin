import { FC, ReactNode, useState } from 'react';
import styles from './Tabs.module.css';

interface TabsProps {
  tabs: { name: string; content: ReactNode }[];
  defaultActiveTab?: string;
}

const Tabs: FC<TabsProps> = ({ tabs, defaultActiveTab }) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab || tabs[0].name);

  return (
    <div className={styles.container}>
      <div className={styles.name}>
        {tabs.map((tab) => (
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
