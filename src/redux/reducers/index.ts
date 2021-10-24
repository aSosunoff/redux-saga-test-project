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

export type ActionSetPeople = {
  type: "SET_PEOPLE";
  payload: Person[];
};

export type ActionSetPlanet = {
  type: "SET_PLANETS";
  payload: Planet[];
};

type Action =
  | ActionSetPeople
  | ActionSetPlanet
  | {
      type: Pick<any, ActionSetPeople["type"] | ActionSetPlanet["type"]>;
    };

export const reducer: Reducer<State, Action> = (
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
