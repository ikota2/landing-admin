import {Tab} from '../../../shared/ui/Tabs/model/types';
import Cvs from '../../../features/Cvs/Cvs';
import Vacancies from '../../../features/Vacancies/Vacancies';

export const tabs: Tab[] = [
  { name: 'Vacancies', content: <Vacancies /> },
  { name: 'CVs', content: <Cvs /> },
];
