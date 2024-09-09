import { FC } from 'react';
import { UseQueryResult } from 'react-query';

import Dropdown from '../Dropdown/Dropdown';
import DropdownItem from '../DropdownItem/DropdownItem';
import CvDropdownItem from '../CvDropdownItem/CvDropdownItem';
import { Vacancy } from '../../types/vacanciesTypes';
import { CV } from '../../types/cvsTypes';


type VacancyOrCV = Vacancy | CV;
interface EntityListProps {
  useVacanciesHook: () => UseQueryResult<VacancyOrCV[], Error>;
}

const EntityList: FC<EntityListProps> = ({ useVacanciesHook }) => {
  const { data, error, isLoading } = useVacanciesHook();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data || data.length === 0) return <p>No items available</p>;

  const isVacancy = (item: VacancyOrCV): item is Vacancy => 'title' in item;
  const isCV = (item: VacancyOrCV): item is CV => 'position' in item;

  const vacancies = data.filter(isVacancy);
  const cvs = data.filter(isCV);

  return (
    <div className="job">
      {vacancies.length > 0 && (
        <>
          {vacancies.map(({ title, responsibilities, requirements, conditions, salary, username, id }) => (
            <Dropdown title={title} key={id} id={id}>
              <DropdownItem
                id={id}
                title={title}
                responsibilities={responsibilities}
                requirements={requirements}
                conditions={conditions}
                salary={salary}
                username={username}
              />
            </Dropdown>
          ))}
        </>
      )}
      {cvs.length > 0 && (
        <>
          {cvs.map((cv) => (
            <Dropdown title={cv.position} key={cv.id} id={cv.id}>
              <CvDropdownItem {...cv} />
            </Dropdown>
          ))}
        </>
      )}
    </div>
  );
};

export default EntityList;
