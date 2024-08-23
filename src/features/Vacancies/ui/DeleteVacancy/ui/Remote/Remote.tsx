import { FC } from 'react';

import { useRemoteVacancies } from '../../../../model/useRemoteVacancies';
import Dropdown from '../../../../../../shared/ui/Dropdown/Dropdown';
import DropdownItem from '../../../../../../shared/ui/DropdownItem/DropdownItem';

const Remote: FC = () => {
  const { data: remoteVacancies, error, isLoading } = useRemoteVacancies();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  if (remoteVacancies && remoteVacancies.length > 0)
  return (
    <div className="job">
      {remoteVacancies.map(( { title, responsibilities, requirements, conditions, salary, username } ) => {
        return (
          <Dropdown title={title}>
            <DropdownItem
              title={title}
              responsibilities={responsibilities}
              requirements={requirements}
              conditions={conditions}
              salary={salary}
              username={username}
            />
          </Dropdown>
        )
      })}
    </div>
  );
};

export default Remote;
