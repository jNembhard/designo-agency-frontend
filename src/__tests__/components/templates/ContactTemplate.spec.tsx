import { useState as useStateMock } from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ContactTemplate from "../../../components/templates/ContactTemplate/ContactTemplate";

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

describe("Home Page", () => {
  beforeEach(() => {
    (useStateMock as jest.Mock).mockImplementation((init: LoadedImageState) => [
      init,
      setState,
    ]);
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  it("display a loading skeleton while contact form is loading", () => {
    render(<ContactTemplate />);

    const contactTemplateSkeleton = screen.getByLabelText(
      "loading contact form..."
    );
    expect(contactTemplateSkeleton).toBeInTheDocument();
  });

  it("displays an error when loading the image", async (): Promise<void> => {
    (useStateMock as jest.Mock).mockImplementationOnce(() => [
      { loaded: false, error: true },
      setState,
    ]);

    render(<ContactTemplate />);

    const errorMessage = screen.getByText("Error loading image");
    expect(errorMessage).toBeTruthy();
  });

  it("renders the contact template when image is loaded succesfully", () => {
    (useStateMock as jest.Mock).mockImplementationOnce(() => [
      { loaded: true, error: false },
      setState,
    ]);

    render(<ContactTemplate />);

    const textTitle = screen.getByText("Contact Us");
    const description = screen.getByText(
      "Ready to take it to the next level? Let's talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that's relatable to your users, drop us a line."
    );
    const button = screen.getByRole("button", { name: "submit" });

    expect(textTitle).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
