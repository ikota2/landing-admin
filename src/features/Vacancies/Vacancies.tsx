import { FC } from 'react';
import Tabs from '../../shared/ui/Tabs/Tabs';
import Remote from './Remote/Remote';
import Onsite from './Onsite/Onsite';

const Vacancies: FC = () => {
  return (
    <>
      <h3>Hello Vacancies</h3>
      <Tabs tabs={[
          { name: 'Remotes', content: <Remote /> },
          { name: 'On sites', content: <Onsite /> },
        ]}
      />
    </>
  );
};

export default Vacancies;
