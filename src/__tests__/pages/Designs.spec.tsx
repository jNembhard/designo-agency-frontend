import { render, screen } from "@testing-library/react";
import Designs from "../../pages/Designs";
import { MemoryRouter, Route, Routes } from "react-router-dom";

jest.mock("../../components/atoms/SeoDesign", () => () => (
  <div data-testid="mock-design-seo" />
));

jest.mock("../../components/atoms/SEO", () => () => (
  <div data-testid="mock-seo" />
));

jest.mock(
  "../../components/templates/DesignsTemplate/DesignsTemplate",
  () => () => <div data-testid="mock-designs-template" />
);

describe("Designs Page", () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  test.each([
    "/designs/app-design",
    "/designs/graphic-design",
    "/designs/web-design",
  ])(
    "renders the correct DesignsTemplate based on the route",
    (initialRoute) => {
      render(
        <MemoryRouter initialEntries={[initialRoute]}>
          <Routes>
            <Route path="/designs/:slug" element={<Designs />} />
          </Routes>
        </MemoryRouter>
      );

      const designsTemplate = screen.getByTestId("mock-designs-template");
      expect(designsTemplate).toBeInTheDocument();
    }
  );

  it("renders the 404 page when the route is invalid", async () => {
    render(
      <MemoryRouter initialEntries={["/designs/fake-route"]}>
        <Routes>
          <Route path="/designs/:slug" element={<Designs />} />
        </Routes>
      </MemoryRouter>
    );

    const notFound = await screen.findByText(
      "You've ventured into a land of uncharted sorrows...the black hole of NOTHINGNESS!"
    );
    expect(notFound).toBeInTheDocument();
  });
});
