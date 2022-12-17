import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import FormPage from "./FormPage";
import configureStore from "../../redux/store/index";
import { Provider } from "react-redux";
import userEvent from "@testing-library/user-event";
window.React = React;

describe("Given a FormPage function", () => {
  const store = configureStore();

  describe("When it is called", () => {
    test("Then it should render 6 <input> tag and a <button>", () => {
      render(
        <Provider store={store}>
          <FormPage />
        </Provider>
      );

      const inputIcons = screen.getByRole("radio", { name: "Icons" });
      const inputNumbers = screen.getByRole("radio", { name: "Numbers" });
      const input1Player = screen.getByRole("radio", { name: "1 Player" });
      const input2Players = screen.getByRole("radio", {
        name: "2 Players",
      });
      const input4x4 = screen.getByRole("radio", { name: "4x4" });
      const input6x6 = screen.getByRole("radio", { name: "6x6" });

      const button = screen.getByRole("button", { name: "Start Game" });

      expect(inputIcons).toBeInTheDocument();
      expect(inputNumbers).toBeInTheDocument();
      expect(input1Player).toBeInTheDocument();
      expect(input2Players).toBeInTheDocument();
      expect(input4x4).toBeInTheDocument();
      expect(input6x6).toBeInTheDocument();
      expect(button).toBeInTheDocument();

      userEvent.click(inputIcons);
      userEvent.click(input1Player);
      userEvent.click(input6x6);
      userEvent.click(button);
    });
  });
});
