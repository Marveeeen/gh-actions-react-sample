import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import MainContent from "../MainContent";

describe("MainContent", () => {
  it("should render a button", () => {
    render(<MainContent />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("should show help area after clicking the button", async () => {
    render(<MainContent />);

    const button = screen.getByRole("button");
    await userEvent.click(button);
    const helpArea = screen.getByTestId("help-area");
    expect(helpArea).toBeInTheDocument();
  });
});
