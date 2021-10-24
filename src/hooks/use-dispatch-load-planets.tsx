import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Action, Dispatch } from "redux";

export const type = "LOAD_PLANETS";

export type dispatchType = typeof type;

export const useDispatchLoadPlanets = () => {
  const dispatch = useDispatch<Dispatch<Action<dispatchType>>>();

  const dispatchLoadPlanets = useCallback(() => {
    dispatch({ type });
  }, [dispatch]);

  return { dispatchLoadPlanets };
};
