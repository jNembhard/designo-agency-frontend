import { render, screen } from "@testing-library/react";
import Footer from "../../../components/organisms/Footer/Footer";

jest.mock(
  "../../../components/molecules/footer_components/FooterCTA",
  () => () => <div data-testid="mock-footer-cta" />
);

jest.mock(
  "../../../components/molecules/footer_components/FooterBottom",
  () => () => <div data-testid="mock-footer-bottom" />
);

describe("Footer Component", () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  it("renders the Footer Component", () => {
    render(<Footer />);

    expect(screen.getByTestId("mock-footer-cta")).toBeInTheDocument();
    expect(screen.getByTestId("mock-footer-bottom")).toBeInTheDocument();
  });
});
