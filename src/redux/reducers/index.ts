import { Reducer } from "redux";
import { PersonType } from "../sagas";

type State = {
  people: PersonType[];
};

const initialState: State = {
  people: [],
};

export type ActionSetPeople = {
  type: "SET_PEOPLE";
  payload: PersonType[];
};

type Action =
  | ActionSetPeople
  | {
      type: Pick<any, ActionSetPeople["type"]>;
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

    default:
      return state;
  }
};
