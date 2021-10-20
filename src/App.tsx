import React from "react";
import { useSelector } from "react-redux";

export const App: React.FC = () => {
  const store = useSelector((store) => store);

  console.log(store);

  return <>1</>;
};
