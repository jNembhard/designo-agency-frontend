import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Product from "../../../components/molecules/Product/Product";

const mockProduct = {
  ProductType: "AppDesign",
  ProductID: "app-1",
  description: "Mock Product Description",
  image: "mock-image.jpg",
  title: "Mock Product Title",
};

type HoverStates = {
  text: string;
  ariaLabel: {
    first: string;
    second: string;
  };
}[];

const hoverStates: HoverStates = [
  {
    text: mockProduct.title,
    ariaLabel: {
      first: "white text",
      second: "peach text",
    },
  },
  {
    text: mockProduct.description,
    ariaLabel: {
      first: "white text",
      second: "black text",
    },
  },
];

describe("Product", () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  it("should render product information", () => {
    render(<Product {...mockProduct} />);
    const titleElement = screen.getByText("Mock Product Title");
    const descriptionElement = screen.getByText("Mock Product Description");
    const imageElement = screen.getByAltText("Mock Product Description");

    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
  });

  test.each(hoverStates)(
    "should change the text colors on hover states",
    (hoverState) => {
      render(<Product {...mockProduct} />);

      const productTitle = screen.getByText(hoverState.text);

      userEvent.hover(productTitle);
      expect(productTitle).toHaveAttribute(
        "aria-label",
        hoverState.ariaLabel.first
      );

      userEvent.unhover(productTitle);
      expect(productTitle).toHaveAttribute(
        "aria-label",
        hoverState.ariaLabel.second
      );
    }
  );

  it("should change the background colors on hover states", () => {
    render(<Product {...mockProduct} />);

    const productTitle = screen.getByLabelText("sand background");

    userEvent.hover(productTitle);
    expect(productTitle).toHaveAttribute("aria-label", "peach background");

    userEvent.unhover(productTitle);
    expect(productTitle).toHaveAttribute("aria-label", "sand background");
  });
});
