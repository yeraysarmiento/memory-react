import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "../../redux/store/index";
import Player from "./Player";
import "@testing-library/jest-dom";
import React from "react";
window.React = React;

describe("Given a Player function", () => {
  const store = configureStore();

  describe("When it is called with a player object", () => {
    test("Then it should render a <article> tag with class 'player'", () => {
      const player = {
        name: "Player 1",
        points: 0,
        isPlaying: true,
      };

      render(
        <Provider store={store}>
          <Player player={player} />
        </Provider>
      );

      const playerTag = screen.getByRole("article", { name: "" });

      expect(playerTag).toBeInTheDocument();
    });
    test("Then it should render two <p> tags with the player name and points", () => {
      const player = {
        name: "Player 1",
        points: 0,
        isPlaying: true,
      };

      render(
        <Provider store={store}>
          <Player player={player} />
        </Provider>
      );

      const playerName = screen.getByText("Player 1");
      const playerPoints = screen.getByText("0");

      expect(playerName).toBeInTheDocument();
      expect(playerPoints).toBeInTheDocument();
    });
    describe("And the player isPlaying is set true", () => {
      test("Then it should render a <article> tag with class 'player--playing'", () => {
        const player = {
          name: "Player 1",
          points: 0,
          isPlaying: true,
        };

        render(
          <Provider store={store}>
            <Player player={player} />
          </Provider>
        );

        const playerTag = screen.getByRole("article", { name: "" });

        expect(playerTag).toHaveClass("player--playing");
      });
    });
    describe("And the player isPlaying is set false", () => {
      test("Then it should render a <article> tag without class 'player--playing'", () => {
        const player = {
          name: "Player 1",
          points: 0,
          isPlaying: false,
        };

        render(
          <Provider store={store}>
            <Player player={player} />
          </Provider>
        );

        const playerTag = screen.getByRole("article", { name: "" });

        expect(playerTag).not.toHaveClass("player--playing");
      });
    });
  });
});
