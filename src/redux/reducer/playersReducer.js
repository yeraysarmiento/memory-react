import actionTypes from "../actions/actionTypes";

const playersList = [
  {
    name: "Player 1",
    points: 0,
    isPlaying: true,
  },
  {
    name: "Player 2",
    points: 0,
    isPlaying: false,
  },
];

const playersReducer = (players = playersList, action = {}) => {
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
            : player
        ),
      ];
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

    default:
      playersList = players;
  }

  return playersList;
};

export default playersReducer;
