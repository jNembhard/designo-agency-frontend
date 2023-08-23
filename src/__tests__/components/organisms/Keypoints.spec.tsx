import React from "react";
import { screen, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Keypoints from "../../../components/organisms/Keypoints/Keypoints";
import Keypoint from "../../../components/molecules/Keypoint/Keypoint";
import { GET_CALLOUTS } from "../../../graphql/calloutQueries";
import { MockedProvider } from "@apollo/react-testing";

const testImage = process.env.REACT_APP_TEST_IMAGE_ENDPOINT;
const mock = {
  calloutID: "callout-1",
  title: "title 1",
  description: "this is a test callout",
  image: testImage,
};
const mock2 = mock;
const mock3 = mock2;

describe("Keypoints Component", () => {
  const keypointMock = {
    request: {
      query: GET_CALLOUTS,
      variables: {
        count: 1,
      },
      result: {
        data: {
          callouts: {
            callout: [{ mock }, { mock2 }, { mock3 }],
          },
        },
      },
    },
  };
  it("displays the loading skeleton while the image is loading", () => {
    render(
      <MockedProvider mocks={[keypointMock]} addTypename={false}>
        <Keypoints />
      </MockedProvider>
    );

    const keyPointSkeleton = screen.getByLabelText("loading a keypoint...");
    expect(keyPointSkeleton).toBeInTheDocument();
  });

  it("should render a keypoint", async () => {
    render(
      <MockedProvider mocks={[keypointMock]} addTypename={false}>
        <Keypoints />
      </MockedProvider>
    );

    expect(
      await screen.findByText("loading a keypoint...")
    ).toBeInTheDocument();
    expect(await screen.findByText("test 1")).toBeInTheDocument();
  });
});
