import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};
function RQSuperHeroes() {
  const { data, isLoading, isError, error, isFetching, refetch } = useQuery(
    "super-heroes",
    fetchSuperHeroes,
    {
        // cacheTime: 5000, //it will cache the data for 5 seconds
        // staleTime: 30000, // it will keep the data cached and marked as fresh for 30 seconds, avoiding refetching
        // refetchOnMount: true, //refetch data and updates the ui on every mounting
        // refetchOnWindowFocus: true, //refetch data and updates the ui everytime the window receives the focus
        // refetchInterval: 5000, //refetch data and updates the ui every 5 seconds, only if window has focus
        // refetchIntervalInBackground: true //refetch data and updates the ui every 5 seconds even if th window loses focus
        enabled: false
    }
  );


  if (isError) {
    return <h2>{error}</h2>;
  }

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }
  return (
    <>
      <h2>RQ Super Heroes Page</h2>
      <button onClick={refetch}>Fetch Heroes</button>
      {data?.data.map((hero) => {
        return <div key={hero.name}> {hero.name} </div>;
      })}
    </>
  );
}

export default RQSuperHeroes;
