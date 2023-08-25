import { render, screen } from "@testing-library/react";
import { LayoutPropTest } from "../types/LayoutPropTest";
import Contact from "../../pages/Contact";

jest.mock("../../components/atoms/SEO", () => () => (
  <div data-testid="mock-seo" />
));

jest.mock("@mui/material/Box", () => ({ children }: LayoutPropTest) => (
  <div data-testid="mock-box">{children}</div>
));

jest.mock(
  "../../components/templates/ContactTemplate/ContactTemplate",
  () => () => <div data-testid="mock-contact-template" />
);

jest.mock("../../components/organisms/Places/Places", () => () => (
  <div data-testid="mock-places" />
));

describe("Contact Page", () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  it("renders the Contact Page", () => {
    render(<Contact />);

    expect(screen.getByTestId("mock-seo")).toBeInTheDocument();
    expect(screen.getByTestId("mock-box")).toBeInTheDocument();
    expect(screen.getByTestId("mock-contact-template")).toBeInTheDocument();
    expect(screen.getByTestId("mock-places")).toBeInTheDocument();
  });
});
