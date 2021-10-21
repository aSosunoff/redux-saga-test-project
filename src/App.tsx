import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Action, Dispatch } from "redux";

export type dispatchType = "LOAD_PEOPLE";

const useDispatchClick = () => {
  const dispatch = useDispatch<Dispatch<Action<dispatchType>>>();

  const dispatchClick = useCallback(() => {
    dispatch({ type: "LOAD_PEOPLE" });
  }, [dispatch]);

  return { dispatchClick };
};

export const App: React.FC = () => {
  const store = useSelector((store) => store);

  const { dispatchClick } = useDispatchClick();

  console.log(store);

  return (
    <div>
      <button
        onClick={() => {
          dispatchClick();
        }}
      >
        Click
      </button>
    </div>
  );
};
