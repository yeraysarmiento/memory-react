import {
  addSelectedAction,
  removeSelectedAction,
  setMatchedAction,
  resetBoardAction,
  loadBoardAction,
  deleteBoardAction,
  addPlayerAction,
  deletePlayersAction,
  setTurnAction,
  addPointsAction,
  resetPointsAction,
} from "./actionCreators";
import actionTypes from "./actionTypes";
import React from "react";
window.React = React;

describe("Given a addSelectedAction", () => {
  describe("When it is invoked with a cell", () => {
    test("Then it should return an object with a type addSelected and the cell", () => {
      const cell = {};
      const expectedResult = {
        type: actionTypes.addSelected,
        cell,
      };

      const result = addSelectedAction(cell);

      expect(result).toEqual(expectedResult);
    });
  });
});

describe("Given a removeSelectedAction", () => {
  describe("When it is invoked with a cell", () => {
    test("Then it should return an object with a type removeSelected and the cell", () => {
      const cell = {};
      const expectedResult = {
        type: actionTypes.removeSelected,
        cell,
      };

      const result = removeSelectedAction(cell);

      expect(result).toEqual(expectedResult);
    });
  });
});

describe("Given a setMatchedAction", () => {
  describe("When it is invoked with a cell", () => {
    test("Then it should return an object with a type setMatched and the cell", () => {
      const cell = {};
      const expectedResult = {
        type: actionTypes.setMatched,
        cell,
      };

      const result = setMatchedAction(cell);

      expect(result).toEqual(expectedResult);
    });
  });
});

describe("Given a resetBoardAction", () => {
  describe("When it is invoked with a board", () => {
    test("Then it should return an object with a type resetBoard and the board", () => {
      const board = [];
      const expectedResult = {
        type: actionTypes.resetBoard,
        board,
      };

      const result = resetBoardAction(board);

      expect(result).toEqual(expectedResult);
    });
  });
});

describe("Given a loadBoardAction", () => {
  describe("When it is invoked with a board", () => {
    test("Then it should return an object with a type loadBoard and the board", () => {
      const board = [];
      const expectedResult = {
        type: actionTypes.loadBoard,
        board,
      };

      const result = loadBoardAction(board);

      expect(result).toEqual(expectedResult);
    });
  });
});

describe("Given a deleteBoardAction", () => {
  describe("When it is invoked", () => {
    test("Then it should return an object with a type deleteBoard", () => {
      const expectedResult = {
        type: actionTypes.deleteBoard,
      };

      const result = deleteBoardAction();

      expect(result).toEqual(expectedResult);
    });
  });
});

describe("Given a addPlayerAction", () => {
  describe("When it is invoked with a player", () => {
    test("Then it should return an object with a type addPlayer and the player", () => {
      const expectedResult = {
        type: actionTypes.addPlayer,
      };

      const result = addPlayerAction();

      expect(result).toEqual(expectedResult);
    });
  });
});

describe("Given a deletePlayersAction", () => {
  describe("When it is invoked", () => {
    test("Then it should return an object with a type deletePlayer", () => {
      const expectedResult = {
        type: actionTypes.deletePlayers,
      };

      const result = deletePlayersAction();

      expect(result).toEqual(expectedResult);
    });
  });
});

describe("Given a setTurnAction", () => {
  describe("When it is invoked with a player", () => {
    test("Then it should return an object with a type setTurn and the player", () => {
      const player = {};
      const expectedResult = {
        type: actionTypes.setTurn,
        player,
      };

      const result = setTurnAction(player);

      expect(result).toEqual(expectedResult);
    });
  });
});

describe("Given a addPointsAction", () => {
  describe("When it is invoked with a player", () => {
    test("Then it should return an object with a type addPoints and the player", () => {
      const player = {};
      const expectedResult = {
        type: actionTypes.addPoints,
        player,
      };

      const result = addPointsAction(player);

      expect(result).toEqual(expectedResult);
    });
  });
});

describe("Given a resetPointsAction", () => {
  describe("When it is invoked", () => {
    test("Then it should return an object with a type resetPoints", () => {
      const expectedResult = {
        type: actionTypes.resetPoints,
      };

      const result = resetPointsAction();

      expect(result).toEqual(expectedResult);
    });
  });
});
