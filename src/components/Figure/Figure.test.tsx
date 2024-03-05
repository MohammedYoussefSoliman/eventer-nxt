import { screen } from "@testing-library/react";

import renderWithProvider from "@/AppProvider/TestingProvider";

import Figure from "./Figure";

describe("Components > Figure", () => {
  test("should render placeholder icon if url not passed", () => {
    renderWithProvider(<Figure />);
    const icon = screen.getByTestId("icon-question-mark");
    expect(icon).toBeInTheDocument();
  });
});
