import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import FooterCTA from "../../../components/molecules/footer_components/FooterCTA";

describe("FooterCTA component", () => {
  it("should render the component and locate the title and description text", () => {
    render(<FooterCTA />);

    const titleText = screen.getByText("Let's talk about your project");
    const descriptionText = screen.getByText(
      "Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow."
    );

    expect(titleText).toBeInTheDocument();
    expect(descriptionText).toBeInTheDocument();
  });

  it("should provide the option to navigate to a section of the /contact page on Designo's website.", () => {
    render(<FooterCTA />);

    const button = screen.getByRole("button", { name: "get in touch" });
    expect(button).toHaveAttribute("islight", "true");
  });

  it("renders with row direction when isBreakpoint1024 matches a media query of (min-width: '1024px').", () => {
    render(<FooterCTA />);

    const stack = screen.getByLabelText("change column direction");
    expect(stack).toHaveStyle("justify-content: space-between");
  });
});
