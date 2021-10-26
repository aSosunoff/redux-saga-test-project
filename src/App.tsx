import React from "react";
import { Link } from "react-router-dom";
import { useDispatchLoadAllData } from "./hooks/use-dispatch-load-all-data";
import { useDispatchLoadPeople } from "./hooks/use-dispatch-load-people";
import { useDispatchLoadPlanets } from "./hooks/use-dispatch-load-planets";

export const App: React.FC = () => {
  const { dispatchLoadPeple } = useDispatchLoadPeople();

  const { dispatchLoadPlanets } = useDispatchLoadPlanets();

  const { dispatchLoadAllData } = useDispatchLoadAllData();

  return (
    <>
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

      <div>
        <Link to="/starships">Starships</Link>
      </div>
      <div>
        <Link to="/people">People</Link>
      </div>
    </>
  );
};
