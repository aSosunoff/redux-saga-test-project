import { useSelector } from "react-redux";
import { StateRoot } from "../redux/reducers";

export const useSelectorPeople = () => {
  const people = useSelector<StateRoot>((state) => state.app.people);

  return { people };
};
