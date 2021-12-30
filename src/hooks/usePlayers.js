import { useDispatch, useSelector } from "react-redux";
import {
  addPlayerAction,
  addPointsAction,
  setTurnAction,
} from "../redux/actions/actionCreators";

const usePlayers = () => {
  const players = useSelector((store) => store.players);
  const dispatch = useDispatch();

  const addPlayer = (player) => {
    dispatch(addPlayerAction(player));
  };

  const setTurn = (player) => {
    dispatch(setTurnAction(player));
  };

  const addPoints = (player) => {
    dispatch(addPointsAction(player));
  };

  return {
    players,
    addPlayer,
    setTurn,
    addPoints,
  };
};

export default usePlayers;
