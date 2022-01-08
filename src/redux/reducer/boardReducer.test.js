import actionTypes from "../actions/actionTypes";
import boardReducer from "./boardReducer";

describe("Given a boardReducer reducer", () => {
  const list = [
    {
      id: 1,
      content: "🦊",
      isMatched: false,
      isHidden: true,
    },
    {
      id: 2,
      content: "🐮",
      isMatched: false,
      isHidden: false,
    },
    {
      id: 3,
      content: "🐷",
      isMatched: true,
      isHidden: true,
    },
  ];
  describe("When it receives a list of cells and a setMatched action with a cell", () => {
    test("Then it should return the list of cells with the sent cell's property isMatched set true", () => {
      const cell = list[0];
      const action = {
        type: actionTypes.setMatched,
        cell,
      };

      const cellsList = boardReducer(list, action);

      expect(cellsList[0]).toHaveProperty("isMatched", true);
    });
  });
  describe("When it receives a list of cells and a loadBoard action with a board", () => {
    test("Then it should return the list of cells equal to the board", () => {
      const board = [];
      const action = {
        type: actionTypes.loadBoard,
        board,
      };

      const cellsList = boardReducer(list, action);

      expect(cellsList).toEqual(board);
    });
  });
  describe("When it receives a list of cells and a resetBoard action with a board", () => {
    test("Then it should return a list of cells equal to the board with all isHidden:true and isMatched: false", () => {
      const board = [
        {
          id: 1,
          content: "🦊",
          isMatched: true,
          isHidden: false,
        },
        {
          id: 2,
          content: "🐮",
          isMatched: true,
          isHidden: true,
        },
        {
          id: 3,
          content: "🐷",
          isMatched: true,
          isHidden: false,
        },
      ];

      const expectedBoard = [
        {
          id: 1,
          content: "🦊",
          isMatched: false,
          isHidden: true,
        },
        {
          id: 2,
          content: "🐮",
          isMatched: false,
          isHidden: true,
        },
        {
          id: 3,
          content: "🐷",
          isMatched: false,
          isHidden: true,
        },
      ];

      const action = {
        type: actionTypes.resetBoard,
        board,
      };

      const cellsList = boardReducer(list, action);

      expect(cellsList).toContainEqual(expectedBoard[0]);
      expect(cellsList).toContainEqual(expectedBoard[1]);
      expect(cellsList).toContainEqual(expectedBoard[2]);
    });
  });
  describe("When it receives a list of cells and a deleteBoard action", () => {
    test("Then it should return an empty cellsList", () => {
      const action = {
        type: actionTypes.deleteBoard,
      };

      const cellsList = boardReducer(list, action);

      expect(cellsList).toEqual([]);
    });
  });
  describe("When it receives a list of cells and a non valid action", () => {
    test("Then it should return the same list of cells", () => {
      const action = {
        type: "whatever non valid action",
      };

      const cellsList = boardReducer(list, action);

      expect(cellsList).toEqual(list);
    });
  });
});
