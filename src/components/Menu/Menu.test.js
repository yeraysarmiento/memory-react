import { render, screen } from "@testing-library/react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faRedo } from "@fortawesome/free-solid-svg-icons";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import React from "react";
import Menu from "./Menu";
window.React = React;

library.add(fab, faRedo);

describe("Given a Menu function", () => {
  describe("When it is called and isPlaying is true", () => {
    test("Then it should render a <ul>, a <h1> with 'memory' and two <button>", () => {
      render(<Menu onReset={() => {}} onRestart={() => {}} isPlaying />);

      const list = screen.getByRole("list", { name: "" });
      const heading = screen.getByRole("heading", { name: "memory" });
      const restartButton = screen.getByRole("button", { name: "+ New Game" });
      const resetButton = screen.getByRole("button", { name: "Restart" });

      expect(list).toBeInTheDocument();
      expect(heading).toBeInTheDocument();
      expect(restartButton).toBeInTheDocument();
      expect(resetButton).toBeInTheDocument();
    });
    test("Then <h1> should not have class modifier 'title--form'", () => {
      render(<Menu onReset={() => {}} onRestart={() => {}} isPlaying />);

      const heading = screen.getByRole("heading", { name: "memory" });

      expect(heading).not.toHaveClass("title--form");
    });
    describe("And resetButton is clicked", () => {
      test("Then it should call the onReset function", () => {
        const onReset = jest.fn();

        render(<Menu onReset={onReset} onRestart={() => {}} isPlaying />);

        const resetButton = screen.getByRole("button", { name: "Restart" });

        userEvent.click(resetButton);

        expect(onReset).toHaveBeenCalled();
      });
    });
    describe("And restartButton is clicked", () => {
      test("Then it should call the onRestart function", () => {
        const onRestart = jest.fn();

        render(<Menu onReset={() => {}} onRestart={onRestart} isPlaying />);

        const restartButton = screen.getByRole("button", {
          name: "+ New Game",
        });

        userEvent.click(restartButton);

        expect(onRestart).toHaveBeenCalled();
      });
    });
  });
  describe("When it is called and isPlaying is false", () => {
    test("Then it should render <h1> with class modifier 'title--form'", () => {
      render(
        <Menu onReset={() => {}} onRestart={() => {}} isPlaying={false} />
      );

      const heading = screen.getByRole("heading", { name: "memory" });

      expect(heading).toHaveClass("title--form");
    });
  });
});
