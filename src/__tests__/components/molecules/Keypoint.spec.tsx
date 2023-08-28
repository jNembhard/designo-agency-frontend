import { render, screen } from "@testing-library/react";
import Keypoint from "../../../components/molecules/Keypoint/Keypoint";

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
});
