import { FC } from 'react';
import Tabs from '../../shared/ui/Tabs/Tabs';
import Vacancies from '../../features/Vacancies/Vacancies';
import Cvs from '../../features/Cvs/Cvs';

const Dashboard: FC = () => {

  return (
    <div>
      <h1>Dashboard</h1>
      <Tabs
        tabs={[
          { name: 'Vacancies', content: <Vacancies /> },
          { name: 'CVs', content: <Cvs /> },
        ]}
        defaultActiveTab="Vacancies"
      />
    </div>
  );
};

export default Dashboard;
