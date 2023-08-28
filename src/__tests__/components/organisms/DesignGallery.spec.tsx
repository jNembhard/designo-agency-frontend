import { render, screen } from "@testing-library/react";
import DesignGallery from "../../../components/organisms/DesignGallery/DesignGallery";
import { useMediaQuery as useMockMediaQuery } from "@mui/material";

jest.mock("@mui/material/useMediaQuery");

jest.mock(
  "../../../components/molecules/home_components/PrimeDesign/PrimeDesign",
  () => () => <div data-testid="mock-prime-design" />
);

jest.mock(
  "../../../components/molecules/home_components/SubDesign/SubDesign",
  () => () => <div data-testid="mock-sub-design" />
);

const directions = [
  {
    idx: 1,
    isBreakpoint1024: true,
    flex: "flex-direction: row",
    margin: "margin: 0px 0px 0px 24px",
  },
  {
    idx: 2,
    isBreakpoint1024: false,
    flex: "flex-direction: column",
    margin: "margin: none",
  },
];

describe("DesignGallery component", () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  it("renders the DesignGallery component", () => {
    render(<DesignGallery />);

    const mockPrime = screen.getByTestId("mock-prime-design");
    const mockSubDesign = screen.getAllByTestId("mock-sub-design");

    expect(mockPrime).toBeInTheDocument();
    expect(mockSubDesign).toHaveLength(2);
  });

  test.each(directions)(
    "renders with row direction when isBreakpoint1024 matches a media query of (min-width: '1024px').",
    (direction) => {
      (useMockMediaQuery as jest.Mock).mockReturnValue(
        direction.isBreakpoint1024
      );

      render(<DesignGallery />);

      const stack = screen.getByLabelText(
        "change component orientation and spacing"
      );
      const subStack = screen.getByLabelText("change substack spacing");

      expect(stack).toHaveStyle(direction.flex);
      expect(subStack).toHaveStyle(direction.margin);
    }
  );
});
