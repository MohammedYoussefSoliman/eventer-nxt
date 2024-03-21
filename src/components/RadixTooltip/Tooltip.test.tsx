import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import renderWithProvider from "@/AppProvider/TestingProvider";

import Tooltip from "./Tooltip";
import type { TooltipProps } from "./Tooltip.types";
import Avatar from "../Avatar";

const defaultProps: TooltipProps = {
  tip: "Giza systems",
  children: (
    <Avatar
      image="https://images.unsplash.com/photo-1682687218608-5e2522b04673?q=80&w=1550&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      dataTest="avatar-component"
    />
  ),
};

jest.mock("@radix-ui/react-tooltip", () => ({
  Provider: jest
    .fn()
    .mockImplementation(({ children }) => <div>{children}</div>),
  Root: jest.fn().mockImplementation(({ children }) => <div>{children}</div>),
  Trigger: jest
    .fn()
    .mockImplementation(({ children }) => <div>{children}</div>),
  Portal: jest.fn().mockImplementation(({ children }) => <div>{children}</div>),
  Content: jest
    .fn()
    .mockImplementation(({ children }) => <div>{children}</div>),
  Arrow: jest.fn().mockImplementation(() => <div />),
}));

describe("Components > Tooltip", () => {
  const user = userEvent.setup();
  test("should show tip when avatar is hovered", async () => {
    renderWithProvider(<Tooltip {...defaultProps} />);

    const avatar = screen.getByTestId("avatar-component");
    await user.hover(avatar);
    const tip = screen.getByText("Giza systems");
    expect(tip).toBeInTheDocument();
  });
});
