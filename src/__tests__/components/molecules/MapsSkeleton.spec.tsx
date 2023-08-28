import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MapsSkeleton } from "../../../components/molecules/Maps/MapsSkeleton";
import { useMediaQuery as useMockMediaQuery } from "@mui/material";

jest.mock("@mui/material/useMediaQuery");

describe("FooteBottom Component", () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  const directions767 = [
    { isBreakpoint767: true, flex: "flex-direction: row" },
    { isBreakpoint767: false, flex: "flex-direction: column" },
  ];

  test.each(directions767)(
    "renders with specific Grid direction based on the breakpoint at 767px",
    (direction767) => {
      (useMockMediaQuery as jest.Mock).mockReturnValue(
        direction767.isBreakpoint767
      );

      render(<MapsSkeleton />);

      const locations = screen.getAllByLabelText("Loading location...");

      expect(locations[0]).toHaveStyle(direction767.flex);
    }
  );

  const directions1024 = [
    { isBreakpoint1024: true, flex: "flex-direction: row" },
    { isBreakpoint1024: false, flex: "flex-direction: column" },
  ];

  test.each(directions1024)(
    "renders with specific Grid direction based on the breakpoint at 1024px",
    (direction1024) => {
      (useMockMediaQuery as jest.Mock).mockReturnValue(
        direction1024.isBreakpoint1024
      );

      render(<MapsSkeleton />);

      const locations = screen.getAllByLabelText("Loading location...");

      expect(locations[0]).toHaveStyle(direction1024.flex);
    }
  );
});
