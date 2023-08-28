import { render, screen } from "@testing-library/react";
import { useMediaQuery as useMockMediaQuery } from "@mui/material";
import { KeypointsSkeleton } from "../../../components/organisms/Keypoints/KeypointsSkeleton";

jest.mock("@mui/material/useMediaQuery");

describe("DesignGallery component", () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  const directions = [
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

  test.each(directions)(
    "renders with row direction when isBreakpoint1024 matches a media query of (min-width: '1024px').",
    (direction) => {
      (useMockMediaQuery as jest.Mock).mockReturnValue(
        direction.isBreakpoint1024
      );

      render(<KeypointsSkeleton />);

      const stacks = screen.getAllByLabelText("orientation change");

      for (let item in stacks) {
        expect(stacks[item]).toHaveStyle(direction.flex);
      }
    }
  );
});
