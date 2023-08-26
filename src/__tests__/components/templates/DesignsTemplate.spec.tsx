import { render, screen } from "@testing-library/react";
import DesignsTemplate from "../../../components/templates/DesignsTemplate/DesignsTemplate";

jest.mock(
  "../../../components/molecules/DesignHeader/DesignHeader",
  () => () => <div data-testid="mock-design-header" />
);

jest.mock("../../../components/atoms/SEO", () => () => (
  <div data-testid="mock-seo" />
));

jest.mock("../../../components/organisms/Products/Products", () => () => (
  <div data-testid="mock-products" />
));

jest.mock(
  "../../../components/molecules/home_components/SubDesign/SubDesign",
  () => () => <div data-testid="mock-sub-design" />
);

describe("Home Page", () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  it("renders the Home Page", () => {
    render(<DesignsTemplate slug="app-design" />);

    const mockDesignHeader = screen.getByTestId("mock-design-header");
    const mockProducts = screen.getByTestId("mock-products");
    const mockSubDesigns = screen.getAllByTestId("mock-sub-design");

    expect(mockDesignHeader).toBeInTheDocument();
    expect(mockProducts).toBeInTheDocument();
    expect(mockSubDesigns).toHaveLength(2);
  });
});
