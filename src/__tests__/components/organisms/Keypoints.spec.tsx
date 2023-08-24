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

  it("should render a keypoint based on data passed in the query", async () => {
    apolloRender(<Keypoints />, calloutMock, schema);

    const images = await screen.findAllByAltText("Hello World");

    expect(images.length).toBe(2);
    expect(images[1]).toHaveAttribute(
      "src",
      process.env.REACT_APP_CLOUDFRONT_ENDPOINT + "Hello World"
    );
  });

  it("should show an error message when the getCallouts query fails", async () => {
    const calloutErrorMock = {
      mocks: {
        Query: {
          callouts: () => {
            throw Error("invalid callout query");
          },
        },
      },
    };

    apolloRender(<Keypoints />, calloutErrorMock, schema);

    await screen.findByText("Error occured while fetching data");
  });
});
