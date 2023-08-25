import { render, screen } from "@testing-library/react";
import Navbar from "../../../components/molecules/Navbar/Navbar";
import userEvent from "@testing-library/user-event";
import { navlinks } from "../../../utils/navLinks";

describe("BurgerNav Menu Buttons", () => {
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
      expect(links.length).toEqual(4);

      const navLink = links[linkIndex.id];

      userEvent.hover(navLink);
      expect(navLink).toHaveStyle("color: peach.main");

      userEvent.unhover(navLink);
      expect(navLink).toHaveStyle("color: white.main");
    }
  );
});
