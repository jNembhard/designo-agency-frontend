import { render, screen } from "@testing-library/react";
import { LayoutPropTest } from "../types/LayoutPropTest";
import Locations from "../../pages/Locations";

jest.mock("../../components/atoms/SEO", () => () => (
  <div data-testid="mock-seo" />
));

jest.mock("@mui/material/Box", () => ({ children }: LayoutPropTest) => (
  <div data-testid="mock-box">{children}</div>
));

jest.mock("../../components/molecules/Maps/Maps", () => () => (
  <div data-testid="mock-location-maps" />
));

describe("Contact Page", () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  it("renders the Locations Page", () => {
    render(<Locations />);

    const mockSeo = screen.getByTestId("mock-seo");
    const mockBox = screen.getByTestId("mock-box");
    const mockLocationMaps = screen.getByTestId("mock-location-maps");

    expect(mockSeo).toBeInTheDocument();
    expect(mockBox).toBeInTheDocument();
    expect(mockLocationMaps).toBeInTheDocument();
  });
});
