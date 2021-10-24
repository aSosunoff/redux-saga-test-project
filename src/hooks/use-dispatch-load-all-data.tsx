import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Action, Dispatch } from "redux";

export const type = "LOAD_ALL_DATA";

export type dispatchType = typeof type;

export const useDispatchLoadAllData = () => {
  const dispatch = useDispatch<Dispatch<Action<dispatchType>>>();

  const dispatchLoadAllData = useCallback(() => {
    dispatch({ type });
  }, [dispatch]);

  return { dispatchLoadAllData };
};
