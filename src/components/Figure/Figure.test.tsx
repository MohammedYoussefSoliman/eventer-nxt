/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { screen } from "@testing-library/react";

import renderWithProvider from "@/AppProvider/TestingProvider";

import Figure from "./Figure";

describe("Components > Figure", () => {
  test("should not render img and renders icon", () => {
    // Arrange
    renderWithProvider(<Figure />);

    // Act
    const icon = screen.getByTestId("icon-question-mark");
    //Assert
    expect(icon).toBeInTheDocument();
  });
  test("should render img correctly", () => {
    // Arrange
    renderWithProvider(
      <Figure url="https://images.unsplash.com/photo-1682687218608-5e2522b04673?q=80&w=1550&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    );

    // Act
    const icon = screen.queryByTestId("icon-question-mark");
    const img = screen.getByRole("img");

    //Assert
    expect(img.className.includes("image")).toBeTruthy();
  });
});
