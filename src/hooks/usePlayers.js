import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addPlayerAction,
  addPointsAction,
  resetPointsAction,
  setTurnAction,
} from "../redux/actions/actionCreators";
import playersList from "../assets/playersList";

const usePlayers = () => {
  const players = useSelector((store) => store.players);
  const dispatch = useDispatch();

  const addPlayer = (nrPlayers) => {
    if (nrPlayers === 1) {
      dispatch(addPlayerAction(playersList[0]));
    } else {
      dispatch(addPlayerAction(playersList[0]));
      dispatch(addPlayerAction(playersList[1]));
    }
  };

  const setTurn = (player) => {
    dispatch(setTurnAction(player));
  };

  const addPoints = useCallback(
    (player) => dispatch(addPointsAction(player)),
    [dispatch]
  );

  const resetPoints = () => {
    dispatch(resetPointsAction());
  };

  return {
    players,
    addPlayer,
    setTurn,
    addPoints,
    resetPoints,
  };
};

export default usePlayers;
