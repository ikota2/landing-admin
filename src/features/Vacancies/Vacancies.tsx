import { FC } from 'react';

import Tabs from '../../shared/ui/Tabs/ui/Tabs';
import { actionTabs } from './config/constants';



const Vacancies: FC = () => {
  return (
    <>
      <Tabs tabs={actionTabs} />
    </>
  );
};

export default Vacancies;
