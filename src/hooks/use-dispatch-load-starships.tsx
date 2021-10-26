import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Action, Dispatch } from "redux";

export const type = "LOAD_STARSHIPS";

export type dispatchType = typeof type;

export const useDispatchLoadStarships = () => {
  const dispatch = useDispatch<Dispatch<Action<dispatchType>>>();

  const dispatchLoadStarships = useCallback(() => {
    dispatch({ type });
  }, [dispatch]);

  return { dispatchLoadStarships };
};
