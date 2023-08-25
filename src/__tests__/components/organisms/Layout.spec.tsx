import { render, screen } from "@testing-library/react";
import Layout from "../../../components/organisms/Layout";
import { LayoutPropTest } from "../../types/LayoutPropTest";

jest.mock("../../../components/molecules/Navbar/Navbar", () => () => (
  <div data-testid="mock-navbar" />
));

jest.mock("@mui/material/Container", () => ({ children }: LayoutPropTest) => (
  <div data-testid="mock-container">{children}</div>
));

jest.mock("../../../components/organisms/Footer/Footer", () => () => (
  <div data-testid="mock-footer" />
));

describe("Layout Component", () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  it("renders the components inside the layout wrapper", () => {
    render(<Layout>layout test</Layout>);

    expect(screen.getByTestId("mock-container")).toBeInTheDocument();
    expect(screen.getByTestId("mock-navbar")).toBeInTheDocument();
    expect(screen.getByText("layout test")).toBeInTheDocument();
    expect(screen.getByTestId("mock-footer")).toBeInTheDocument();
  });
});
