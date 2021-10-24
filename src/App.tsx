import React from "react";
import { useDispatchLoadPeople } from "./hooks/use-dispatch-load-people";

export const App: React.FC = () => {
  /* const store = useSelector((store) => store); */

  const { dispatchLoadPeple } = useDispatchLoadPeople();

  return (
    <div>
      <button
        onClick={() => {
          dispatchLoadPeple();
        }}
      >
        Click
      </button>
    </div>
  );
};
