import { seoPath } from "../../utils/seoPath";

test("seoPath returns correct design hash for different slugs", () => {
  const webDesign = seoPath("web-design");
  const appDesign = seoPath("app-design");
  const graphicDesign = seoPath("graphic-design");

  expect(webDesign).toBe("design-1");
  expect(appDesign).toBe("design-2");
  expect(graphicDesign).toBe("design-3");
});

test("seoPath handles edge cases", () => {
  const emptyString = seoPath("");
  const unknownString = seoPath("unknown");

  expect(emptyString).toBe("");
  expect(unknownString).toBe("");
});
