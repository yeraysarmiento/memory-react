import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import GamePage from "./GamePage";
import { iconsList } from "../../assets/boardThemes";
import playersList from "../../assets/playersList";
import React from "react";
import "@testing-library/jest-dom";
import { combineReducers, createStore } from "redux";
window.React = React;

describe("Given a GamePage function", () => {
  jest.useFakeTimers();

  describe("When it is called with the store", () => {
    test("Then it should render a <ul> and as many <button> as cells in boardList", () => {
      const store = createStore(
        combineReducers({
          selectedCells: () => [iconsList[0]],
          boardList: () => iconsList,
          players: () => playersList,
        })
      );

      render(
        <Provider store={store}>
          <GamePage />
        </Provider>
      );

      const list = screen.getByRole("list");
      const buttons = screen.getAllByRole("button");

      expect(buttons).toHaveLength(36);
      expect(list).toBeInTheDocument();
    });
  });
});
