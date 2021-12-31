import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addPlayerAction,
  addPointsAction,
  resetPointsAction,
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
