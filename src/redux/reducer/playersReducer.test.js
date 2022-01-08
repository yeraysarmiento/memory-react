import actionTypes from "../actions/actionTypes";
import playersReducer from "./playersReducer";

describe("Given a playersReducer reducer", () => {
  const initialList = [
    {
      name: "Player 1",
      points: 2,
      isPlaying: true,
    },
    {
      name: "Player 2",
      points: 2,
      isPlaying: false,
    },
  ];
  describe("When it receives a list of players and an addPlayer action with a player", () => {
    test("Then it should return a list of players with the new player on it", () => {
      const player = {
        name: "Player 1",
        points: 0,
        isPlaying: true,
      };
      const action = {
        type: actionTypes.addPlayer,
        player,
      };

      const playersList = playersReducer(initialList, action);

      expect(playersList).toContainEqual(player);
    });
  });
  describe("When it receives a list of players and a setTurn action with a player", () => {
    test("Then it should return a list of players with the sent player isPlaying property set to true", () => {
      const player = {
        name: "Player 2",
        points: 0,
        isPlaying: false,
      };
      const action = {
        type: actionTypes.setTurn,
        player,
      };

      const playersList = playersReducer(initialList, action);

      expect(playersList[1]).toHaveProperty("isPlaying", true);
      expect(playersList[0]).toHaveProperty("isPlaying", false);
    });
  });
  describe("When it receives a list of players and a deletePlayers action", () => {
    test("Then it should return an empty list of players", () => {
      const action = {
        type: actionTypes.deletePlayers,
      };

      const playersList = playersReducer(initialList, action);

      expect(playersList).toEqual([]);
    });
  });
  describe("When it receives a list of players and a addPoints action with a Player", () => {
    test("Then it should return the list of players with the sent Player points property plus 2", () => {
      const player = {
        name: "Player 1",
        points: 0,
        isPlaying: true,
      };

      const action = {
        type: actionTypes.addPoints,
        player,
      };

      const playersList = playersReducer(initialList, action);

      expect(playersList[0]).toHaveProperty("points", 4);
    });
  });
  describe("When it receives a list of players and a resetPoints action", () => {
    test("Then it should return the list of players with all points set to 0", () => {
      const action = {
        type: actionTypes.resetPoints,
      };

      const playersList = playersReducer(initialList, action);

      expect(playersList[0]).toHaveProperty("points", 0);
      expect(playersList[1]).toHaveProperty("points", 0);
    });
  });
  describe("When it receives a list of players and a non valid action", () => {
    test("Then it should return the same list of players received", () => {
      const action = {
        type: "whatever wrong action",
      };

      const playersList = playersReducer(initialList, action);

      expect(playersList).toEqual(initialList);
    });
  });
});
