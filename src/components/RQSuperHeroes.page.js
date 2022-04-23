import { useState } from "react";
import { Link } from "react-router-dom";
import { useSuperHeroesData, useAddSuperHeroData  } from "../hooks/useSuperheroesData";

// const fetchSuperHeroes = () => {
//   return axios.get("http://localhost:4000/superheroes");
// };
function RQSuperHeroes() {
  const [name, setName] = useState("");
  const [alterEgo, setAlterEgo] = useState("");
  const onSuccess = (data) => {
    console.log("Perform side effect after data fetching");
  };

  const onError = (error) => {
    console.log("Perform side effect after encountering error", error);
  };

  const { data, isLoading, isError, error, isFetching, refetch } =
    useSuperHeroesData(onSuccess, onError);

    const  { mutate: addHero } =useAddSuperHeroData()
  //   useQuery(
  //     "super-heroes",
  //     fetchSuperHeroes,
  //     {
  //       // cacheTime: 5000, //it will cache the data for 5 seconds
  //       // staleTime: 30000, // it will keep the data cached and marked as fresh for 30 seconds, avoiding refetching
  //       // refetchOnMount: true, //refetch data and updates the ui on every mounting
  //       // refetchOnWindowFocus: true, //refetch data and updates the ui everytime the window receives the focus
  //       //   refetchInterval: 3000, //refetch data and updates the ui every 5 seconds, only if window has focus
  //       // refetchIntervalInBackground: true //refetch data and updates the ui every 5 seconds even if th window loses focus
  //       //   enabled: false, //fetch the data but it just cache it, not passed to data
  //       //   onSuccess: onSuccess, //method that will be executed after a succesfull fetching
  //       //   onError: onError,  //method that will be executed after an error on fetching
  //       select: (data) => {
  //           const superHeroesNames = data.data.map((hero) => hero.name);
  //           return superHeroesNames;

  //       }
  //     }
  //   );

  const handleAddheroClick = () => {
    console.log({ name, alterEgo });
    const hero = { name, alterEgo}
    addHero(hero);
  };

  if (isError) {
    return <h2>{error}</h2>;
  }

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }
  return (
    <>
      <h2>RQ Super Heroes Page</h2>

      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={alterEgo}
          onChange={(e) => setAlterEgo(e.target.value)}
        />
        <button onClick={handleAddheroClick}>Add hero</button>
      </div>

      <button onClick={refetch}>Fetch Heroes</button>
      {data?.data.map((hero) => {
        return (
          <div key={hero.name}>
            <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>{" "}
          </div>
        );
      })}
      {/* {
          data?.map((heroname) => {
              return <div key={heroname}>{heroname}</div>
          })
      } */}
    </>
  );
}

export default RQSuperHeroes;
