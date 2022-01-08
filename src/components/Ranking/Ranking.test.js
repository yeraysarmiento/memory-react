import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import React from "react";
import Ranking from "./Ranking";
import { Provider } from "react-redux";
import configureStore from "../../redux/store";
window.React = React;

describe("Given a Ranking function", () => {
  const store = configureStore();

  describe("When it is called with a list of more than 1 player", () => {
    test("Then it should render an <article> with class 'ranking' and two <button>", () => {
      const players = [
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

      render(
        <Provider store={store}>
          <Ranking players={players} onReset={() => {}} onRestart={() => {}} />
        </Provider>
      );

      const form = screen.getByRole("article", { name: "" });
      const resetButton = screen.getByRole("button", { name: "Restart" });
      const restartButton = screen.getByRole("button", { name: "New Game" });

      expect(form).toBeInTheDocument();
      expect(resetButton).toBeInTheDocument();
      expect(restartButton).toBeInTheDocument();
      expect(form).toHaveClass("ranking");
    });
    test("Then it should render an <li> for each player", () => {
      const players = [
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

      render(
        <Provider store={store}>
          <Ranking players={players} onReset={() => {}} onRestart={() => {}} />
        </Provider>
      );

      const playersTags = screen.getAllByRole("listitem");

      expect(playersTags).toHaveLength(players.length);
    });
  });
  describe("When it is called with a list of 1 player", () => {
    test("Then it should render a <h3> with 'Congratulations!'", () => {
      const player = [
        {
          name: "Player 1",
          points: 0,
          isPlaying: true,
        },
      ];

      render(
        <Provider store={store}>
          <Ranking players={player} onReset={() => {}} onRestart={() => {}} />
        </Provider>
      );

      const heading = screen.getByRole("heading", { name: "Congratulations!" });

      expect(heading).toBeInTheDocument();
    });
  });
});
