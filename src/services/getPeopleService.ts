import { Person } from "../redux/sagas/people/interfaces";

export const getPeopleService = async () => {
  const request = await fetch("https://swapi.dev/api/people/");

  const data = await request.json();

  const { results } = data as {
    results: Person[];
  };

  return results;
};
