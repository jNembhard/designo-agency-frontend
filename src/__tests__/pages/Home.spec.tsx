import { render, screen } from "@testing-library/react";
import Home from "../../pages/Home";
import { LayoutPropTest } from "../types/LayoutPropTest";

jest.mock("../../components/atoms/SEO", () => () => (
  <div data-testid="mock-seo" />
));

jest.mock("@mui/material/Box", () => ({ children }: LayoutPropTest) => (
  <div data-testid="mock-box">{children}</div>
));

jest.mock("../../components/organisms/HeroCTA/HeroCTA", () => () => (
  <div data-testid="mock-hero" />
));

jest.mock(
  "../../components/organisms/DesignGallery/DesignGallery",
  () => () => <div data-testid="mock-gallery" />
);

jest.mock("../../components/organisms/Keypoints/Keypoints", () => () => (
  <div data-testid="mock-keypoints" />
));

describe("Home Page", () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  it("renders the Home Page", () => {
    render(<Home />);

    expect(screen.getByTestId("mock-seo")).toBeInTheDocument();
    expect(screen.getByTestId("mock-hero")).toBeInTheDocument();
    expect(screen.getByTestId("mock-box")).toBeInTheDocument();
    expect(screen.getByTestId("mock-gallery")).toBeInTheDocument();
    expect(screen.getByTestId("mock-keypoints")).toBeInTheDocument();
  });
});
