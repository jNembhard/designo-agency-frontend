export const seoPath = (slug: string) => {
  let baseSlug = "/designs/";
  let designHash =
    baseSlug + slug === "/designs/web-design"
      ? "design-1"
      : baseSlug + slug === "/designs/app-design"
      ? "design-2"
      : baseSlug + slug === "/designs/graphic-design"
      ? "design-3"
      : "";

  return designHash;
};
