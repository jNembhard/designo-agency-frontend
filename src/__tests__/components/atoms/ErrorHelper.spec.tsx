import { screen, render, waitFor } from "@testing-library/react";
import ErrorHelper from "../../../components/atoms/ErrorHelper/ErrorHelper";

const errorObjects = [
  {
    text: "Invalid phone number",
    width: {
      mobile: "11.25rem",
    },
    marginLeft: {
      mobile: "-5.5rem",
      tablet: "-3.938rem",
      laptop: "-7rem",
    },
  },
  {
    text: "Can't be empty",
    width: {
      mobile: "11.25rem",
    },
    marginLeft: {
      mobile: "-3.5rem",
      tablet: "-0.938rem",
      laptop: "-4.2rem",
    },
  },
];

const fireResize = async (width: number) => {
  window.innerWidth = width;
  const event = new Event("resize");

  window.dispatchEvent(event);
};

describe("ErrorHelper", () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  it("renders the error messsage", () => {
    render(<ErrorHelper errorMessage="Invalid phone number" />);
    expect(screen.getByText("Invalid phone number")).toBeInTheDocument();
  });

  describe("Invalid width", () => {
    test.each(errorObjects)(
      "renders the error message width and corresponding correct styling expetations for a phone number",
      async (errorObject) => {
        await waitFor(() => {
          fireResize(375);
        });

        render(<ErrorHelper errorMessage={errorObject.text} />);

        const errorText = screen.getByLabelText(
          "when the icon is displayed, there is an input error that needs attention"
        );
        const computedStyles = window.getComputedStyle(errorText);
        expect(computedStyles.width).toBe(errorObject.width.mobile);
      }
    );
  });

  describe("Invalid marginLeft", () => {
    test.each(errorObjects)(
      "renders the error message with the marginLeft styling expetations at a breakpoint",
      async (errorObject) => {
        await waitFor(() => {
          fireResize(375);
        });

        render(<ErrorHelper errorMessage={errorObject.text} />);

        const errorText = screen.getByLabelText(
          "when the icon is displayed, there is an input error that needs attention"
        );

        const computedStyles = window.getComputedStyle(errorText);
        expect(computedStyles.marginLeft).toBe(errorObject.marginLeft.mobile);
      }
    );
  });
});
