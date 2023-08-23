import React from "react";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Keypoints from "../../../components/organisms/Keypoints/Keypoints";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { calloutTypeDefs } from "../../graphql/calloutTypeDef";
import { apolloRender } from "../../mockWrappers/ApolloRenderWrapper";

const schema = makeExecutableSchema({ typeDefs: calloutTypeDefs });

const testImage = process.env.REACT_APP_TEST_IMAGE_ENDPOINT;
const mock = {
  calloutID: "callout-1",
  title: "title 1",
  description: "this is a test callout",
  image: testImage,
};

describe("Keypoints Component", () => {
  const calloutMock = {
    mocks: {
      callouts: () => mock,
    },
  };

  it("displays the loading skeleton while the image is loading", () => {
    apolloRender(<Keypoints />, calloutMock, schema);

    const keyPointSkeleton = screen.getByLabelText("loading a keypoint...");
    expect(keyPointSkeleton).toBeInTheDocument();
  });

  it("should render a keypoint based on data passed to query", async () => {
    apolloRender(<Keypoints />, calloutMock, schema);

    const images = await screen.findAllByAltText("Hello World");

    expect(images.length).toBe(2);
    expect(images[1]).toHaveAttribute(
      "src",
      process.env.REACT_APP_CLOUDFRONT_ENDPOINT + "Hello World"
    );
  });
});