import { render, screen } from "@testing-library/react";
import Navbar from "../../../components/molecules/Navbar/Navbar";
import userEvent from "@testing-library/user-event";

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
      expect(links).toHaveLength(4);
    });
  });

  describe("Link hovering", () => {
    const navlinks = [1, 2, 3];
    test.each(navlinks)(
      "should underline a text link",
      async (linkIndex: number): Promise<void> => {
        render(<Navbar />);

        const link = screen.getAllByRole("link")[linkIndex];
        const hoverStyles = window.getComputedStyle(link, ":hover");

        userEvent.hover(link);
        expect(hoverStyles.textDecoration).toBe("none");

        userEvent.unhover(link);
        expect(hoverStyles.textDecoration).toBe("none");
      }
    );
  });
});
