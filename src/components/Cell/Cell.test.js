import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Cell from "./Cell";
import React from "react";
window.React = React;

describe("Given a Cell function", () => {
  describe("When it is called", () => {
    test("Then it should render a <li> tag with class 'cell'", () => {
      const onClick = jest.fn();
      const cell = {
        content: "icon",
        isHidden: true,
        isMatched: false,
      };

      render(<Cell cell={cell} actionOnClick={onClick} boardLength={16} />);

      const button = screen.getByRole("button");

      expect(button).toBeInTheDocument();
    });

    describe("When isHidden is true it is clicked", () => {
      test("Then it should call the actionOnClick function", () => {
        const onClick = jest.fn();
        const cell = {
          content: "icon",
          isHidden: true,
          isMatched: false,
        };

        render(<Cell cell={cell} actionOnClick={onClick} boardLength={16} />);

        const button = screen.getByRole("button");
        userEvent.click(button);

        expect(onClick).toHaveBeenCalled();
      });
    });

    describe("When the cell property isHidden is false", () => {
      test("Then it should render a <li> with a class cell--showing", () => {
        const onClick = jest.fn();
        const cell = {
          content: "icon",
          isHidden: false,
          isMatched: false,
        };

        render(<Cell cell={cell} actionOnClick={onClick} boardLength={16} />);

        const cellTag = screen.getByRole("listitem");

        expect(cellTag).toHaveClass("cell--showing");
      });
    });

    describe("When the cell property isHidden is false and isMatched is true", () => {
      test("Then it should render a <li> with a class cell--matched", () => {
        const onClick = jest.fn();
        const cell = {
          content: "icon",
          isHidden: false,
          isMatched: true,
        };

        render(<Cell cell={cell} actionOnClick={onClick} boardLength={16} />);

        const cellTag = screen.getByRole("listitem");

        expect(cellTag).toHaveClass("cell--matched");
      });

      describe("When isHidden is false and it is clicked", () => {
        test("Then it should call the actionOnClick function", () => {
          const onClick = jest.fn();
          const cell = {
            content: "icon",
            isHidden: false,
            isMatched: true,
          };

          render(<Cell cell={cell} actionOnClick={onClick} boardLength={16} />);

          const button = screen.getByRole("button");
          userEvent.click(button);

          expect(onClick).toHaveBeenCalled();
        });
      });
    });
    describe("And the cellStyle length is 16", () => {
      test("Then it should render a <span> tag with a class 'cell__icon'", () => {
        const onClick = jest.fn();
        const cell = {
          content: "icon",
          isHidden: false,
          isMatched: false,
        };

        render(<Cell cell={cell} actionOnClick={onClick} boardLength={16} />);

        const spanCell = screen.getByText("icon");

        expect(spanCell).not.toHaveClass("cell__front s6x6");
      });
    });
    describe("And the boardList length is not 16", () => {
      test("Then it should render a <span> tag with a class 'cell__icon s6x6'", () => {
        const onClick = jest.fn();
        const cell = {
          content: "icon",
          isHidden: false,
          isMatched: false,
        };

        render(<Cell cell={cell} actionOnClick={onClick} boardLength={25} />);

        const spanCell = screen.getByText("icon");

        expect(spanCell).toHaveClass("cell__front s6x6");
      });
    });
  });
});
