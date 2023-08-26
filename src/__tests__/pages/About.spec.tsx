import { render, screen } from "@testing-library/react";
import { LayoutPropTest } from "../types/LayoutPropTest";
import About from "../../pages/About";

jest.mock("../../components/atoms/SEO", () => () => (
  <div data-testid="mock-seo" />
));

jest.mock("@mui/material/Box", () => ({ children }: LayoutPropTest) => (
  <div data-testid="mock-box">{children}</div>
));

jest.mock("../../components/molecules/AboutCard/AboutCard", () => () => (
  <div data-testid="mock-about-card" />
));

jest.mock("../../components/organisms/Places/Places", () => () => (
  <div data-testid="mock-places" />
));

describe("About Page", () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  it("renders the About Page", () => {
    render(<About />);

    const mockSeo = screen.getByTestId("mock-seo");
    const mockBox = screen.getByTestId("mock-box");
    const mockAboutCard = screen.getAllByTestId("mock-about-card");
    const mockPlaces = screen.getByTestId("mock-places");

    expect(mockSeo).toBeInTheDocument();
    expect(mockBox).toBeInTheDocument();
    expect(mockAboutCard).toHaveLength(3);
    expect(mockPlaces).toBeInTheDocument();
  });
});
