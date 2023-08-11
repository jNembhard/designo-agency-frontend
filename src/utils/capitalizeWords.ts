export const capitalizeWords = (slug: string) => {
  let primaryKey = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
    .replace(" ", "");

  return primaryKey;
};