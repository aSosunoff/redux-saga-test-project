import { Reducer } from "redux";
import { Person } from "../../interfaces/person";
import { Planet } from "../../interfaces/planet";
import { ActionPayload } from "./helpers";

export type ActionSetPeople = ActionPayload<"SET_PEOPLE", Person[]>;
export type ActionSetPlanet = ActionPayload<"SET_PLANETS", Planet[]>;

type State = {
  people: Person[];
  planets: Planet[];
};

const initialState: State = {
  people: [],
  planets: [],
};

export const appReducer: Reducer<State, ActionSetPeople | ActionSetPlanet> = (
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
