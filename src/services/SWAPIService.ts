import { Person } from "../interfaces/person";
import { Planet } from "../interfaces/planet";

const getData = async <Result>(type: string) => {
  const request = await fetch(`https://swapi.dev/api/${type}/`);

  const data = await request.json();

  return data as Result;
};

export class SWAPIService {
  static getPersons = async () => {
    const { results } = await getData<{
      results: Person[];
    }>("people");

    return results;
  };

  static getPlanets = async () => {
    const { results } = await getData<{
      results: Planet[];
    }>("planets");

    return results;
  };
}
