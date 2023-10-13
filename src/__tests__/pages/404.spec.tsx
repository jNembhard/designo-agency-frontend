import { render, screen } from "@testing-library/react";
import NotFound from "../../pages/404";
import { LayoutPropTest } from "../types/LayoutPropTest";

jest.mock("../../components/atoms/SEO", () => () => (
  <div data-testid="mock-seo" />
));

jest.mock("@mui/material/Container", () => ({ children }: LayoutPropTest) => (
  <div data-testid="mock-container">{children}</div>
));

jest.mock(
  "../../components/templates/NotFoundTemplate/NotFoundTemplate",
  () => () => <div data-testid="mock-not-found" />
);

describe("404 Page", () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  it("renders the 404 Page", () => {
    render(<NotFound />);
    const mockSeo = screen.getByTestId("mock-seo");
    const mockContainer = screen.getByTestId("mock-container");
    const mockNotFound = screen.getByTestId("mock-not-found");

    expect(mockSeo).toBeInTheDocument();
    expect(mockContainer).toBeInTheDocument();
    expect(mockNotFound).toBeInTheDocument();
  });
});
