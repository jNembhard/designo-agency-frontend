import { render, screen } from "@testing-library/react";
import { ProductSkeleton } from "../../../components/organisms/Products/ProductSkeleton";
import { useMediaQuery as useMockMediaQuery } from "@mui/material";

jest.mock("@mui/material/useMediaQuery");

const products = [
  {
    title: "AppDesign",
    ariaLabel: "There are 5 total products...",
    isBreakpoint: true,
    flex: "flex-direction: column",
  },
  {
    title: "Graphic Design",
    ariaLabel: "There are 3 total products...",
    isBreakpoint: false,
    flex: "flex-direction: column",
  },
  {
    title: "WebDesign",
    ariaLabel: "There are 6 total products...",
    isBreakpoint: true,
    flex: "flex-direction: column",
  },
];

describe("Product Skeleton Component", () => {
  test.each(products)("updates count state based on group prop", (product) => {
    render(<ProductSkeleton group={product.title} />);

    const skeletonElements = screen.getAllByRole("listitem");

    for (let item in skeletonElements) {
      expect(skeletonElements[item]).toHaveAttribute(
        "aria-label",
        `${product.ariaLabel}`
      );
    }
  });

  test.each(products)(
    "renders with row direction when isBreakpoint1024 matches a media query of (min-width: '1024px').",
    (product) => {
      (useMockMediaQuery as jest.Mock).mockReturnValue(product.isBreakpoint);

      render(<ProductSkeleton group={product.title} />);

      const stacks = screen.getAllByRole("listitem");

      for (let item in stacks) {
        expect(stacks[item]).toHaveStyle(product.flex);
      }
    }
  );
});
