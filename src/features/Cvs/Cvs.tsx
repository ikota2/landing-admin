import { FC } from 'react';
import Tabs from '../../shared/ui/Tabs/ui/Tabs';
import CvsLength from './ui/CvsLength/CvsLength';
import CvsList from './ui/CvsList/CvsList';

const cvsTabs = [{name: 'Входящие', content: <CvsLength />}, {name: 'Удалить', content: <CvsList />}];

const Cvs: FC = () => {
  return <Tabs tabs={cvsTabs} defaultActiveTab="Входящие" />
};

export default Cvs;
