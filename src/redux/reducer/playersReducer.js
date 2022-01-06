import actionTypes from "../actions/actionTypes";

const playersReducer = (players = [], action = {}) => {
  let playersList;

  switch (action.type) {
    case actionTypes.addPlayer:
      playersList = [...players, action.player];
      break;
    case actionTypes.setTurn:
      playersList = [
        ...players.map((player) =>
          action.player.name === player.name
            ? { ...player, isPlaying: true }
            : { ...player, isPlaying: false }
        ),
      ];
      break;
    case actionTypes.deletePlayers:
      playersList = [];
      break;
    case actionTypes.addPoints:
      playersList = [
        ...players.map((player) =>
          action.player.name === player.name
            ? { ...player, points: player.points + 2 }
            : player
        ),
      ];
      break;
    case actionTypes.resetPoints:
      playersList = [...players.map((player) => ({ ...player, points: 0 }))];
      break;

    default:
      playersList = players;
  }

  return playersList;
};

export default playersReducer;
