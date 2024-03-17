import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import renderWithProvider from "@/AppProvider/TestingProvider";

import Tooltip, { Props } from "./Tooltip";
import Avatar from "../Avatar";

const defaultProps: Props = {
  title: "Giza systems",
  children: (
    <Avatar
      image="https://images.unsplash.com/photo-1682687218608-5e2522b04673?q=80&w=1550&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      dataTest="avatar-component"
    />
  ),
};

describe("Components > tooltip", () => {
  const user = userEvent.setup();
  test("should render wrapped component correctly", () => {
    // Arrange
    renderWithProvider(<Tooltip {...defaultProps} />);
    // Act
    const childComponent = screen.getByTestId("avatar-component");

    // Assertion
    expect(childComponent).toBeInTheDocument();
  });
  test("tooltip should be visible, if children is hovered", async () => {
    // Arrange
    renderWithProvider(<Tooltip {...defaultProps} />);
    // Act
    const childComponent = screen.getByTestId("avatar-component");

    await user.hover(childComponent);

    const tip = await screen.findByText(defaultProps.title as string);

    expect(tip).toBeInTheDocument();
  });
});
