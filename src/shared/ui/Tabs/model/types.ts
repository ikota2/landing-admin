import {ReactNode} from 'react';

export type Tab = { name: string; content: ReactNode };

export interface TabsProps {
  tabs: Tab[];
  defaultActiveTab?: string;
}
