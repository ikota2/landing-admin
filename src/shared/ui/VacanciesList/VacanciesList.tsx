import { FC } from 'react';
import { UseQueryResult } from 'react-query';

import Dropdown from '../Dropdown/Dropdown';
import DropdownItem from '../DropdownItem/DropdownItem';
import { Vacancy } from '../../types/vacanciesTypes';

interface VacanciesListProps {
  useVacanciesHook: () => UseQueryResult<Vacancy[], Error>;
}

const VacanciesList: FC<VacanciesListProps> = ({ useVacanciesHook }) => {
  const { data: vacancies, error, isLoading } = useVacanciesHook();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  if (vacancies && vacancies.length > 0) {
    return (
      <div className="job">
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
      </div>
    );
  }

  return <p>No vacancies available</p>;
};

export default VacanciesList;
