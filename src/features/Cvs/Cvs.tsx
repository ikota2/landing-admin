import { FC } from 'react';
import { useCvsLength } from '../../shared/hooks/useCvsLength';

const Cvs: FC = () => {
  const { data: length, error, isLoading } = useCvsLength();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Hello cvs</h2>
      <p>Total received cvs: {length}</p>
    </div>
  );
};

export default Cvs;
