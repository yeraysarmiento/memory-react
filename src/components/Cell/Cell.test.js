import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Cell from "./Cell";
import configureStore from "../../redux/store/index";
import React from "react";
window.React = React;

describe("Given a Cell function", () => {
  const store = configureStore();

  describe("When it is called", () => {
    test("Then it should render a <li> tag with class 'cell'", () => {
      const onClick = jest.fn();
      const cell = {
        content: "icon",
        isHidden: true,
        isMatched: false,
      };

      render(
        <Provider store={store}>
          <Cell cell={cell} actionOnClick={onClick} boardLength={16} />
        </Provider>
      );

      const button = screen.getByRole("button", { name: "icon" });

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

        render(
          <Provider store={store}>
            <Cell cell={cell} actionOnClick={onClick} boardLength={16} />
          </Provider>
        );

        const button = screen.getByRole("button", { name: "icon" });
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

        render(
          <Provider store={store}>
            <Cell cell={cell} actionOnClick={onClick} boardLength={16} />
          </Provider>
        );

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

        render(
          <Provider store={store}>
            <Cell cell={cell} actionOnClick={onClick} boardLength={16} />
          </Provider>
        );

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

          render(
            <Provider store={store}>
              <Cell cell={cell} actionOnClick={onClick} boardLength={16} />
            </Provider>
          );

          const button = screen.getByRole("button", { name: "icon" });
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

        render(
          <Provider store={store}>
            <Cell cell={cell} actionOnClick={onClick} boardLength={16} />
          </Provider>
        );

        const spanCell = screen.getByText("icon");

        expect(spanCell).not.toHaveClass("cell__icon s5x5");
      });
    });
    describe("And the boardList length is not 16", () => {
      test("Then it should render a <span> tag with a class 'cell__icon s5x5'", () => {
        const onClick = jest.fn();
        const cell = {
          content: "icon",
          isHidden: false,
          isMatched: false,
        };

        render(
          <Provider store={store}>
            <Cell cell={cell} actionOnClick={onClick} boardLength={25} />
          </Provider>
        );

        const spanCell = screen.getByText("icon");

        expect(spanCell).toHaveClass("cell__icon s5x5");
      });
    });
  });
});
