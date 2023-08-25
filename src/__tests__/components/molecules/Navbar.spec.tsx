import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "../../../components/molecules/Navbar/Navbar";

describe("Navbar", () => {
  describe("Navbar rendering", () => {
    it("should render the Navbar", () => {
      render(<Navbar />);

      const logoImage = screen.getByAltText("designo-logo");
      expect(logoImage).toBeInTheDocument();
    });

    it("should render all links in the navbar", () => {
      render(<Navbar />);

      const links = screen.getAllByRole("link");
      expect(links.length).toEqual(4);
    });
  });

  describe("Link hovering", () => {
    const navlinks = [1, 2, 3];
    test.each(navlinks)(
      "should underline a text link",
      async (linkIndex: number) => {
        render(<Navbar />);

        const firstNavLink = screen.getAllByRole("link")[linkIndex];
        const hoverStyles = window.getComputedStyle(firstNavLink, ":hover");

        fireEvent.mouseEnter(firstNavLink);
        expect(hoverStyles.textDecoration).toBe("none");

        fireEvent.mouseLeave(firstNavLink);
        expect(hoverStyles.textDecoration).toBe("none");
      }
    );
  });
});
