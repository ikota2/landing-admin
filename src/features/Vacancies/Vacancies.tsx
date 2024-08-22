import { FC } from 'react';

import Tabs from '../../shared/ui/Tabs/ui/Tabs';
import { tabs } from './config/constants';



const Vacancies: FC = () => {
  return (
    <>
      <Tabs tabs={tabs} />
    </>
  );
};

export default Vacancies;
