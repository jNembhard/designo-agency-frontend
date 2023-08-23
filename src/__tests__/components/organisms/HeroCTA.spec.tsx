import { useState as useStateMock } from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import HeroCTA from "../../../components/organisms/HeroCTA/HeroCTA";

type LoadedImageState = {
  loaded: boolean;
  error: boolean;
  right: boolean;
};

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));
const setState = jest.fn();

describe("HeroCTA Component", () => {
  beforeEach(() => {
    (useStateMock as jest.Mock).mockImplementation((init: LoadedImageState) => [
      init,
      setState,
    ]);
  });

  it("displays the loading skeleton while the image is loading", () => {
    render(<HeroCTA />);

    const heroSkeleton = screen.getByLabelText(
      "loading homepage hero and images..."
    );
    expect(heroSkeleton).toBeInTheDocument();
  });

  it("displays an error when loading the image", () => {
    (useStateMock as jest.Mock).mockImplementationOnce(() => [
      { loaded: false, error: true },
      setState,
    ]);

    render(<HeroCTA />);

    const errorMessage = screen.getByText("Error loading image");
    expect(errorMessage).toBeTruthy();
  });

  describe("Learn More Button", () => {
    it("navigate to correct route when 'learn more' button is clicked", () => {
      (useStateMock as jest.Mock).mockImplementationOnce(() => [
        { loaded: true, error: false },
        setState,
      ]);

      render(<HeroCTA />);

      const button = screen.getByText("learn more");
      expect(button).toBeInTheDocument();
    });
  });
});
