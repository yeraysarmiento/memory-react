import { render, screen } from "@testing-library/react";
import configureStore from "../../redux/store";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import Board from "./Board";
import React from "react";
import userEvent from "@testing-library/user-event";
window.React = React;

describe("Given a Board function", () => {
  const store = configureStore();

  describe("When it is called with an array of cells", () => {
    test("Then it should render a <ul> tag with as many <li> as array's length", () => {
      const boardList = [
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

      render(
        <Provider store={store}>
          <Board boardList={boardList} onPair={() => {}} />
        </Provider>
      );
      const cells = screen.getAllByRole("listitem");
      const board = screen.getByRole("list");

      expect(board).toBeInTheDocument();
      expect(cells).toHaveLength(boardList.length);
    });

    describe("When a <li> element is clicked", () => {
      test("Then the onPair function should be invoked", () => {
        const boardList = [
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
        const onPair = jest.fn();

        render(
          <Provider store={store}>
            <Board boardList={boardList} onPair={onPair} />
          </Provider>
        );

        const mockedFunction = jest.fn();
        Board.prototype.setPair = mockedFunction;
        const button = screen.getByRole("button", { name: "🦊" });
        userEvent.click(button);

        expect(onPair).toHaveBeenCalled();
      });
    });
    describe("And its length is 16", () => {
      test("Then it should render a <ul> tag with a class 'board--4x4'", () => {
        const boardList = [
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
          {
            id: 4,
            content: "🦁",
            isMatched: false,
            isHidden: true,
          },
          {
            id: 5,
            content: "🐯",
            isMatched: false,
            isHidden: true,
          },
          {
            id: 6,
            content: "🐨",
            isMatched: false,
            isHidden: true,
          },
          {
            id: 7,
            content: "🐙",
            isMatched: false,
            isHidden: true,
          },
          {
            id: 8,
            content: "🐵",
            isMatched: false,
            isHidden: true,
          },
          {
            id: 9,
            content: "🦊",
            isMatched: false,
            isHidden: true,
          },
          {
            id: 10,
            content: "🐮",
            isMatched: false,
            isHidden: true,
          },
          {
            id: 11,
            content: "🐷",
            isMatched: false,
            isHidden: true,
          },
          {
            id: 12,
            content: "🦁",
            isMatched: false,
            isHidden: true,
          },
          {
            id: 13,
            content: "🐯",
            isMatched: false,
            isHidden: true,
          },
          {
            id: 14,
            content: "🐨",
            isMatched: false,
            isHidden: true,
          },
          {
            id: 15,
            content: "🐙",
            isMatched: false,
            isHidden: true,
          },
          {
            id: 16,
            content: "🐵",
            isMatched: false,
            isHidden: true,
          },
        ];
        const onPair = jest.fn();

        render(
          <Provider store={store}>
            <Board boardList={boardList} onPair={onPair} />
          </Provider>
        );

        const list = screen.getByRole("list", "");

        expect(list).toHaveClass("board--4x4");
      });
    });
  });
});
