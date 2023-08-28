import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../App";

jest.mock("../components/atoms/SeoDesign", () => () => (
  <div data-testid="mock-design-seo" />
));

jest.mock("../components/atoms/SEO", () => () => (
  <div data-testid="mock-seo" />
));

jest.mock("../pages/Home", () => () => <div data-testid="mock-home" />);
jest.mock("../pages/About", () => () => <div data-testid="mock-about" />);
jest.mock("../pages/Locations", () => () => (
  <div data-testid="mock-locations" />
));
jest.mock("../pages/Contact", () => () => <div data-testid="mock-contact" />);

jest.mock("../components/organisms/Footer/Footer", () => () => <div />);

const paths = [
  { route: "/", mockID: "mock-home" },
  { route: "/about", mockID: "mock-about" },
  { route: "/locations", mockID: "mock-locations" },
  { route: "/contact", mockID: "mock-contact" },
];

describe("App Component", () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  test.each(paths)("render the home page", (path) => {
    render(
      <MemoryRouter initialEntries={[path.route]}>
        <App />
      </MemoryRouter>
    );
    const mockRoute = screen.getByTestId(path.mockID);

    expect(mockRoute).toBeInTheDocument();
  });
});
