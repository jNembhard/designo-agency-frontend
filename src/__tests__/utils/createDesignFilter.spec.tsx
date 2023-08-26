import { createDesignFilter } from "../../utils/createDesignFilter";

describe("createDesignFiler", () => {
  const designFilters = [
    {
      designHash: "design-1",
      slug: "web-design",
      expectedTitle: "Web Design",
      expectedType: "WebDesign",
    },
    {
      designHash: "design-2",
      slug: "app-design",
      expectedTitle: "App Design",
      expectedType: "AppDesign",
    },
    {
      designHash: "design-3",
      slug: "graphic-design",
      expectedTitle: "Graphic Design",
      expectedType: "GraphicDesign",
    },
  ];
  it("should create a design object for a valid slug", () => {
    const slug = "web-design";
    const result = createDesignFilter(slug);

    expect(result.hash).toBe("design-1");
    expect(result.designType).toBe("WebDesign");
    expect(result.productLinks).toEqual(["design-2", "design-3"]);
    expect(result.title).toBe("Web Design");
  });

  it("should return an empty design object for an invalid slug", () => {
    const slug = "invalid-design";
    const result = createDesignFilter(slug);

    expect(result.hash).toBe("");
    expect(result.designType).toBe("");
    expect(result.productLinks).toEqual([]);
    expect(result.title).toBe("");
  });

  test.each(designFilters)("should handle valid slugs", (designFilter) => {
    const result = createDesignFilter(designFilter.slug);

    expect(result.hash).toBe(designFilter.designHash);
    expect(result.designType).toBe(designFilter.expectedType);
    expect(result.productLinks).toHaveLength(2);
    expect(result.title).toBe(designFilter.expectedTitle);
  });
});
