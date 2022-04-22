import { useSuperHeroData } from "../hooks/useSuperHeroData";
import { useParams } from "react-router-dom";

export const RQSuperHero = () => {
  const { heroId } = useParams();
  const { isLoading, data, isError, error } = useSuperHeroData(heroId);

  if (isError) {
    return <h2>{error}</h2>;
  }

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      {data?.data.name} - {data?.data.alterEgo}
    </div>
  );
};
