import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Form from "./Form";
import userEvent from "@testing-library/user-event";
window.React = React;

describe("Given a Form function", () => {
  describe("When it is called", () => {
    test("Then it should render 6 <input> tag and a <button>", () => {
      render(<Form onSubmit={() => {}} onChange={() => {}} />);

      const inputIcons = screen.getByRole("radio", { name: "Icons" });
      const inputNumbers = screen.getByRole("radio", { name: "Numbers" });
      const input1Player = screen.getByRole("radio", { name: "1 Player" });
      const input2Players = screen.getByRole("radio", {
        name: "2 Players",
      });
      const input4x4 = screen.getByRole("radio", { name: "4x4" });
      const input5x5 = screen.getByRole("radio", { name: "5x5" });

      const button = screen.getByRole("button", { name: "Start Game" });

      expect(inputIcons).toBeInTheDocument();
      expect(inputNumbers).toBeInTheDocument();
      expect(input1Player).toBeInTheDocument();
      expect(input2Players).toBeInTheDocument();
      expect(input4x4).toBeInTheDocument();
      expect(input5x5).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });
    describe("When the radio are selected and the button is clicked", () => {
      test("Then the onSubmit function should be called", () => {
        const onSubmit = jest.fn((event) => event.preventDefault());

        render(<Form onSubmit={onSubmit} onChange={() => {}} />);

        const inputIcons = screen.getByRole("radio", { name: "Icons" });
        const input1Player = screen.getByRole("radio", { name: "1 Player" });
        const input4x4 = screen.getByRole("radio", { name: "4x4" });
        const button = screen.getByRole("button", { name: "Start Game" });

        userEvent.click(inputIcons);
        userEvent.click(input1Player);
        userEvent.click(input4x4);
        userEvent.click(button);

        expect(onSubmit).toHaveBeenCalled();
      });
    });
  });
});
