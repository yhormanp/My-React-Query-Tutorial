import { useQuery, useMutation } from "react-query";
import axios from "axios";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};
const addSuperHero = (hero) => {
  return axios.post("http://localhost:4000/superheroes", hero);
};

export const useSuperHeroesData = (onSuccess, onError) => {
  return useQuery("super-heroes", fetchSuperHeroes, {
    // cacheTime: 5000, //it will cache the data for 5 seconds
    // staleTime: 30000, // it will keep the data cached and marked as fresh for 30 seconds, avoiding refetching
    // refetchOnMount: true, //refetch data and updates the ui on every mounting
    // refetchOnWindowFocus: true, //refetch data and updates the ui everytime the window receives the focus
    //   refetchInterval: 3000, //refetch data and updates the ui every 5 seconds, only if window has focus
    // refetchIntervalInBackground: true //refetch data and updates the ui every 5 seconds even if th window loses focus
    //   enabled: false, //fetch the data but it just cache it, not passed to data
    onSuccess: onSuccess, //method that will be executed after a succesfull fetching
    onError: onError, //method that will be executed after an error on fetching
    // select: (data) => {
    //   const superHeroesNames = data.data.map((hero) => hero.name);
    //   return superHeroesNames;
    // },
  });
};

export const useAddSuperHeroData = () => {
  return useMutation(addSuperHero);
};
