import { Reducer } from "redux";

import { Person } from "../../interfaces/person";
import { Planet } from "../../interfaces/planet";
import { Starship } from "../../interfaces/starship";
import { CreateReducer, CreateAction, Handler } from "./helpers";

type ActionApp = {
  SET_PEOPLE: { payload: Person[] };
  SET_PLANETS: { payload: Planet[] };
  SET_STARSHIP: { payload: Starship[] };
};

export type ActionSetPeople = CreateAction<ActionApp, "SET_PEOPLE">;
export type ActionSetPlanet = CreateAction<ActionApp, "SET_PLANETS">;
export type ActionSetStarship = CreateAction<ActionApp, "SET_STARSHIP">;

type State = {
  people: Person[];
  planets: Planet[];
  starships: Starship[];
};

const initialState: State = {
  people: [],
  planets: [],
  starships: [],
};

const handlers: Handler<State, ActionApp> = {
  SET_PEOPLE: (state, action) => ({ ...state, people: action.payload }),
  SET_PLANETS: (state, action) => ({
    ...state,
    planets: action.payload,
  }),
  SET_STARSHIP: (state, action) => ({
    ...state,
    starships: action.payload,
  }),
  DEFAULT: (state) => state,
};

export const appReducer: Reducer<
  State,
  ActionSetPeople | ActionSetPlanet | ActionSetStarship
> = (state = initialState, action) => CreateReducer(handlers, state, action);
