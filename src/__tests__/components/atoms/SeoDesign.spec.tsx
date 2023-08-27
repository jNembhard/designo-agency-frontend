import "@testing-library/jest-dom";
import { screen, waitFor } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import SeoDesign from "../../../components/atoms/SeoDesign";
import {
  apolloRender,
  apolloSeoRender,
} from "../../mockWrappers/ApolloRenderWrapper";
import { designTypeDef } from "../../graphql/designTypeDef";
import { makeExecutableSchema } from "@graphql-tools/schema";

const mockPaths = [
  {
    header: "app-design",
    title: "App Design",
  },
  {
    header: "graphic-design",
    title: "Graphic Design",
  },
  {
    header: "web-design",
    title: "Web Design",
  },
];

const path = {
  DesignID: "design-1",
  images: {
    bgPattern: "bgimage.jpg",
  },
  header: "this is a description of the design",
  title: "Web Design",
};

const seoMock = {
  Query: {
    design: () => path,
  },
};

const schema = makeExecutableSchema({
  typeDefs: designTypeDef,
  resolvers: seoMock,
});

describe("SeoDesign Component", () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  it("displays a loading skeleton while the social icon is loading", async (): Promise<void> => {
    apolloSeoRender(
      <SeoDesign author="Jason Nembhard" type="webapp" slug="web-design" />,
      seoMock,
      schema,
      true
    );

    const seoLoadingState = screen.queryByRole("div");
    expect(seoLoadingState).toBeNull();
  });

  test.each(mockPaths)(
    "should render the Seo component",
    async (mockPath): Promise<void> => {
      const seoDynamicMock = {
        Query: {
          design: () => mockPath,
        },
      };

      const seoSchemas = makeExecutableSchema({
        typeDefs: designTypeDef,
        resolvers: seoDynamicMock,
      });

      apolloRender(
        <HelmetProvider>
          <SeoDesign
            author="Jason Nembhard"
            type="webapp"
            slug={mockPath.header}
          />
        </HelmetProvider>,
        seoDynamicMock,
        seoSchemas,
        true
      );

      await waitFor(() => {
        expect(document.title).toBe(`${mockPath.title} | Designo`);
      });
    }
  );
});
