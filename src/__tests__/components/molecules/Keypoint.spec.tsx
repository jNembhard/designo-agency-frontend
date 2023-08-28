import { render, screen } from "@testing-library/react";
import Keypoint from "../../../components/molecules/Keypoint/Keypoint";
import { useMediaQuery as useMockMediaQuery } from "@mui/material";

jest.mock("@mui/material/useMediaQuery");

const mock = {
  title: "title 1",
  description: "this is a test callout",
  image: "scout.jpg",
};

const callouts = [
  {
    id: "callout-1",
    transform: "transform: none",
  },
  {
    id: "callout-2",
    transform: "transform: rotate(270deg)",
  },
  {
    id: "callout-3",
    transform: "transform: rotate(90deg)",
  },
];

describe("Keypoint Component", () => {
  test.each(callouts)(
    "applies correct transform style based on the calloutID",
    (callout) => {
      render(<Keypoint calloutID={callout.id} {...mock} />);
      const imageWrapper = screen.getByRole("figure");
      expect(imageWrapper).toHaveStyle(callout.transform);
    }
  );

  const laptopDirections = [
    {
      idx: 1,
      isBreakpoint1024: true,
      flex: "flex-direction: column",
    },
    {
      idx: 2,
      isBreakpoint1024: false,
      flex: "flex-direction: column",
    },
  ];

  test.each(laptopDirections)(
    "renders with row direction when isBreakpoint1024 matches a media query of (min-width: '1024px').",
    (direction) => {
      (useMockMediaQuery as jest.Mock).mockReturnValue(
        direction.isBreakpoint1024
      );

      render(<Keypoint calloutID="callout-1" {...mock} />);

      const stack = screen.getByLabelText("orientation change");

      expect(stack).toHaveStyle(direction.flex);
    }
  );
});
