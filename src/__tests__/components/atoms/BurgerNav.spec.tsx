import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "../../../components/molecules/Navbar/Navbar";
import userEvent from "@testing-library/user-event";
import { navlinks } from "../../../utils/navLinks";

describe("BurgerNav Menu Buttons", () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  it("should open the menu", () => {
    render(<Navbar />);

    const iconButton = screen.getByRole("button", { expanded: false });

    userEvent.click(iconButton);
    expect(iconButton).toHaveAttribute("aria-expanded", "true");
  });

  test.each(navlinks)(
    "should hover over link %i and navigate to a page",
    (linkIndex) => {
      render(<Navbar />);

      const iconButton = screen.getByRole("button", { expanded: false });
      userEvent.click(iconButton);

      const links = screen.getAllByRole("link");
      expect(links).toHaveLength(4);

      const navLink = links[linkIndex.id];

      userEvent.hover(navLink);
      expect(navLink).toHaveStyle("color: peach.main");

      userEvent.unhover(navLink);
      expect(navLink).toHaveStyle("color: white.main");
    }
  );

  it("should open and close the menu when the backdrop is clicked", () => {
    const setStateMock = jest.fn();
    const useStateMock: any = (useState: boolean) => [useState, setStateMock];
    jest.spyOn(React, "useState").mockImplementation(useStateMock);

    render(<Navbar />);

    const iconButton = screen.getByRole("button", { expanded: false });
    const backdrop = screen.getByLabelText("backdrop");

    userEvent.click(iconButton);
    expect(setStateMock).toHaveBeenCalledWith(true);

    userEvent.click(backdrop);
    expect(setStateMock).toHaveBeenCalledWith(true);
    expect(iconButton).toHaveAttribute("aria-expanded", "false");
  });
});
