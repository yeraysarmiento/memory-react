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
          <Cell cell={cell} actionOnClick={onClick} />
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
            <Cell cell={cell} actionOnClick={onClick} />
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
            <Cell cell={cell} actionOnClick={onClick} />
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
            <Cell cell={cell} actionOnClick={onClick} />
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
              <Cell cell={cell} actionOnClick={onClick} />
            </Provider>
          );

          const button = screen.getByRole("button", { name: "icon" });
          userEvent.click(button);

          expect(onClick).toHaveBeenCalled();
        });
      });
    });
  });
});
