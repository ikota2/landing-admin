import EntityList from '../../../../shared/ui/EntityList/EntityList';
import { useGetCvs } from '../../../../shared/hooks/useGetCvs';

const CvsList = () => {
  const { error, isLoading } = useGetCvs();
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <EntityList useVacanciesHook={useGetCvs} />
  );
};

export default CvsList;
