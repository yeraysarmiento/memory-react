import actionTypes from "../actions/actionTypes";
import selectedReducer from "./selectedReducer";

describe("Given a selectedReducer reducer", () => {
  describe("When it receives a list and an addSelectedAction with a cell", () => {
    test("Then it should return a list with that cell with property isHidden set false", () => {
      const list = [];
      const cell = {
        id: 1,
        content: "🦊",
        isMatched: false,
        isHidden: true,
      };
      const expectedCell = {
        id: 1,
        content: "🦊",
        isMatched: false,
        isHidden: false,
      };

      const action = {
        type: actionTypes.addSelected,
        cell,
      };

      const selectedCells = selectedReducer(list, action);

      expect(selectedCells).toContainEqual(expectedCell);
    });
  });
  describe("When it receives a list and an removeSelected action with a cell", () => {
    test("Then it should return a list without that cell in it", () => {
      const list = [
        {
          id: 1,
          content: "🦊",
          isMatched: false,
          isHidden: true,
        },
      ];
      const cell = {
        id: 1,
        content: "🦊",
        isMatched: false,
        isHidden: true,
      };

      const action = {
        type: actionTypes.removeSelected,
        cell,
      };

      const selectedCells = selectedReducer(list, action);

      expect(selectedCells).not.toContainEqual(cell);
    });
  });
  describe("When it receives a list and a non valid action", () => {
    test("Then it should return the same list received", () => {
      const list = [];

      const action = {
        type: "whatever wrong action",
      };

      const selectedCells = selectedReducer(list, action);

      expect(selectedCells).toEqual(list);
    });
  });
});
