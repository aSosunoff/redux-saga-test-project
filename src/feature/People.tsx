import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatchLoadPeople } from "../hooks/use-dispatch-load-people";
import { useSelectorPeople } from "../hooks/use-selector-people";

export const People: React.FC = () => {
  const { dispatchLoadPeple } = useDispatchLoadPeople();

  useEffect(() => {
    dispatchLoadPeple();
  }, [dispatchLoadPeple]);

  const { people } = useSelectorPeople();

  useEffect(() => {
    console.log(people);
  }, [people]);

  return (
    <>
      <div>People</div>

      <button
        onClick={() => {
          dispatchLoadPeple();
        }}
      >
        Load People
      </button>

      <div>
        <Link to="/">Main</Link>
      </div>
    </>
  );
};
