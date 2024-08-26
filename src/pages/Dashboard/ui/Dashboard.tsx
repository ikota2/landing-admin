import { FC } from 'react';

import Tabs from '../../../shared/ui/Tabs/ui/Tabs';
import {tabs} from '../model/constants';


const Dashboard: FC = () => {

  return (
    <>
      <h1>Dashboard</h1>
      <Tabs
        tabs={tabs}
        defaultActiveTab="Vacancies"
      />
    </>
  );
};

export default Dashboard;
