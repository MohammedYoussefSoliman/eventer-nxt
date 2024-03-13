import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Card from "./Card";
import { CardProps } from "./types";
// test || it

const defaultProps: CardProps = {
  content: <div data-testid="card-content">content</div>,
  heading: "some heading",
  onClick: jest.fn(),
  onCount: jest.fn(),
};

describe("Components > Card", () => {
  const user = userEvent.setup();

  test("Card should render correctly", () => {
    // Arrange
    render(<Card {...defaultProps} />);

    // Act
    const content = screen.getByTestId("card-content");
    const heading = screen.getByText(defaultProps.heading);

    //Assertion
    expect(content).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
  });

  test("Card should not render helperText", () => {
    // Arrange
    render(<Card {...defaultProps} />);

    // Act
    const helperText = screen.queryByTestId("helper-text");

    //Assertion
    expect(helperText).toBeNull();
  });

  test("Card onClick", async () => {
    // Arrange
    render(<Card {...defaultProps} />);

    // Act
    const approveBtn = screen.getByRole("button", {
      name: "approve",
    });

    //Assertion
    expect(approveBtn).toBeInTheDocument();
    // Act
    await user.click(approveBtn);

    // Assertion
    expect(defaultProps.onClick).toHaveBeenCalled();
  });

  test("Card onCount", async () => {
    // Arrange
    render(<Card {...defaultProps} />);

    // Act
    const countBtn = screen.getByRole("button", {
      name: "count",
    });

    //Assertion
    expect(countBtn).toBeInTheDocument();

    // Act
    await user.click(countBtn);

    // Assertion
    expect(defaultProps.onCount).toHaveBeenCalledWith(20);

    expect(await screen.findByText("20")).toBeInTheDocument();
  });
});
