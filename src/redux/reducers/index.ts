import { Reducer } from "redux";
import { Person } from "../../interfaces/person";
import { Planet } from "../../interfaces/planet";

type State = {
  people: Person[];
  planets: Planet[];
};

const initialState: State = {
  people: [],
  planets: [],
};

/*  */
type Action<T extends string> = {
  type: T;
};

type ActionPayload<T extends string, P extends any> = Action<T> & {
  payload: P;
};
/*  */

export type ActionSetPeople = ActionPayload<"SET_PEOPLE", Person[]>;
export type ActionSetPlanet = ActionPayload<"SET_PLANETS", Planet[]>;

export const reducer: Reducer<State, ActionSetPeople | ActionSetPlanet> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "SET_PEOPLE": {
      return {
        ...state,
        people: action.payload,
      };
    }

    case "SET_PLANETS": {
      return {
        ...state,
        planets: action.payload,
      };
    }

    default:
      return state;
  }
};
