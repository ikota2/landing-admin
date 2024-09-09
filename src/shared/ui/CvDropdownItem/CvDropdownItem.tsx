import { FC } from 'react';
import { CV } from '../../types/cvsTypes';

const CvDropdownItem: FC<CV> = ({id, name, email, telegram, experience, position }) => {
  return (
    <div key={id}>
      <p>{name}</p>
      <p>{email}</p>
      <p>{telegram}</p>
      <p>{experience}</p>
      <p>{position}</p>
    </div>
  );
};

export default CvDropdownItem;
