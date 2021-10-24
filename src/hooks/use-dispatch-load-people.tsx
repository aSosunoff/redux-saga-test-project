import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Action, Dispatch } from "redux";

export const type = "LOAD_PEOPLE";

export type dispatchType = typeof type;

export const useDispatchLoadPeople = () => {
  const dispatch = useDispatch<Dispatch<Action<dispatchType>>>();

  const dispatchLoadPeple = useCallback(() => {
    dispatch({ type });
  }, [dispatch]);

  return { dispatchLoadPeple };
};
