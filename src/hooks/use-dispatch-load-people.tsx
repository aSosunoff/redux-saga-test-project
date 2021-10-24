import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Action, Dispatch } from "redux";

export type dispatchType = "LOAD_PEOPLE";

export const type: dispatchType = "LOAD_PEOPLE";

export const useDispatchLoadPeople = () => {
  const dispatch = useDispatch<Dispatch<Action<dispatchType>>>();

  const dispatchLoadPeple = useCallback(() => {
    dispatch({ type });
  }, [dispatch]);

  return { dispatchLoadPeple };
};
