import React from "react";
import { useDispatchLoadAllData } from "./hooks/use-dispatch-load-all-data";
import { useDispatchLoadPeople } from "./hooks/use-dispatch-load-people";
import { useDispatchLoadPlanets } from "./hooks/use-dispatch-load-planets";

export const App: React.FC = () => {
  /* const store = useSelector((store) => store); */

  const { dispatchLoadPeple } = useDispatchLoadPeople();

  const { dispatchLoadPlanets } = useDispatchLoadPlanets();

  const { dispatchLoadAllData } = useDispatchLoadAllData();

  return (
    <div>
      <button
        onClick={() => {
          dispatchLoadPeple();
        }}
      >
        Load People
      </button>

      <button
        onClick={() => {
          dispatchLoadPlanets();
        }}
      >
        Load Planets
      </button>

      <button
        onClick={() => {
          dispatchLoadAllData();
        }}
      >
        Load All Planets
      </button>
    </div>
  );
};
