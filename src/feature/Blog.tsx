import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatchLoadPeople } from "../hooks/use-dispatch-load-people";

export const Blog: React.FC = () => {
  const { dispatchLoadPeple } = useDispatchLoadPeople();

  useEffect(() => {
    dispatchLoadPeple();
  }, [dispatchLoadPeple]);

  return (
    <>
      <div>Blog</div>

      <Link to="/">Main</Link>
    </>
  );
};
