import "@testing-library/jest-dom";
import { render, waitFor } from "@testing-library/react";
import SEO from "../../../components/atoms/SEO";
import { HelmetProvider } from "react-helmet-async";

describe("SEO", () => {
  it("should render the Seo component", async () => {
    render(
      <HelmetProvider>
        <SEO
          author="Jason Nembhard"
          title="Home"
          description="Experience award-winning custom designs and digital branding solutions. Transform your brand with responsive websites, app design, and engaging experiences. Learn more."
          type="webapp"
        />
        ,
      </HelmetProvider>,
      { container: document.head }
    );

    await waitFor(() => {
      expect(document.title).toBe("Home | Designo");
    });
  });
});
