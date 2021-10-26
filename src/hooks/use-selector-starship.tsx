import { useSelector } from "react-redux";
import { StateRoot } from "../redux/reducers";

export const useSelectorStarships = () => {
  const starships = useSelector<StateRoot>((state) => state.app.starships);

  return { starships };
};
