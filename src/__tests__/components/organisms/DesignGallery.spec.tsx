import { render, screen } from "@testing-library/react";
import DesignGallery from "../../../components/organisms/DesignGallery/DesignGallery";

jest.mock(
  "../../../components/molecules/home_components/PrimeDesign/PrimeDesign",
  () => () => <div data-testid="mock-prime-design" />
);

jest.mock(
  "../../../components/molecules/home_components/SubDesign/SubDesign",
  () => () => <div data-testid="mock-sub-design" />
);

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
});
