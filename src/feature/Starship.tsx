import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatchLoadStarships } from "../hooks/use-dispatch-load-starships";
import { useSelectorStarships } from "../hooks/use-selector-starship";

export const Starship: React.FC = () => {
  const { dispatchLoadStarships } = useDispatchLoadStarships();

  const { starships } = useSelectorStarships();

  useEffect(() => {
    console.log(starships);
  }, [starships]);

  return (
    <>
      <div>Starship</div>

      <div>
        <button onClick={dispatchLoadStarships}>Reload Starships</button>
      </div>

      <div>
        <Link to="/">Main</Link>
      </div>
    </>
  );
};
