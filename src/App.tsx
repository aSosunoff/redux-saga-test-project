import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatchLoadAllData } from "./hooks/use-dispatch-load-all-data";
import { useDispatchLoadPeople } from "./hooks/use-dispatch-load-people";
import { useDispatchLoadPlanets } from "./hooks/use-dispatch-load-planets";

export const App: React.FC = () => {
  const store = useSelector((store) => store);

  useEffect(() => {
    console.log(store);
  }, [store]);

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

      <Link to="/Blog">Blog</Link>
    </>
  );
};
