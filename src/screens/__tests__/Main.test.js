import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import Main from "../Main";
import { NameProvider } from "../../utils/NameManager";

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

it("renders default text", () => {
  const screen = render(<Main />, { wrapper: NameProvider });
  screen.getByText("Welcome, No Name!");
});

it("changes the text on submit", () => {
  const screen = render(<Main />, { wrapper: NameProvider });
  fireEvent.changeText(screen.getByPlaceholderText("Example"), "Trived");
  screen.getByText("Welcome, No Name!");
  fireEvent.press(screen.getByText("Change"));
  screen.getByText("Welcome, Trived!");
});
