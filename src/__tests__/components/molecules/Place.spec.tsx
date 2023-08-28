import { render, screen } from "@testing-library/react";
import Place from "../../../components/molecules/Place/Place";

const mock = {
  images: {
    icon: "icon.png",
  },
  title: "United States",
  slug: "/united-states",
};

const locations = [
  {
    id: "location-1",
    transform: "transform: rotate(90deg)",
  },
  {
    id: "location-2",
    transform: "transform: none",
  },
  {
    id: "location-3",
    transform: "transform: rotate(270deg)",
  },
];

describe("Places Component", () => {
  test.each(locations)(
    "applies correct transform style based on the LocationID",
    (location) => {
      render(<Place LocationID={location.id} {...mock} />);
      const imageWrapper = screen.getByRole("figure");
      expect(imageWrapper).toHaveStyle(location.transform);
    }
  );
});
