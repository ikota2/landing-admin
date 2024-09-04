import { FC } from 'react';

import Tabs from '../../../../shared/ui/Tabs/ui/Tabs';
import { vacancyTypeTabs } from '../../config/constants';


const DeleteVacancy: FC = () => {
  return (
    <>
      <Tabs tabs={vacancyTypeTabs} />
    </>
  );
};

export default DeleteVacancy;
