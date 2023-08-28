import { render, screen } from "@testing-library/react";
import { ProductSkeleton } from "../../../components/organisms/Products/ProductSkeleton";

const products = [
  {
    title: "AppDesign",
    ariaLabel: "There are 5 total products...",
  },
  {
    title: "Graphic Design",
    ariaLabel: "There are 3 total products...",
  },
  {
    title: "WebDesign",
    ariaLabel: "There are 6 total products...",
  },
];
describe("Keypoint Component", () => {
  test.each(products)("updates count state based on group prop", (product) => {
    render(<ProductSkeleton group={product.title} />);

    const skeletionElement = screen.getAllByRole("listitem");
    expect(skeletionElement[0]).toHaveAttribute(
      "aria-label",
      `${product.ariaLabel}`
    );
  });
});
