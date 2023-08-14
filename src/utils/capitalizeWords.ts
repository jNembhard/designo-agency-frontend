export const capitalizeWords = (slug: string) => {
  let primaryKey = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return primaryKey;
};

export const capitalizeWordsWithASpace = (name: string) => {
  return name.replace(/\b\w/g, (char) => char.toUpperCase());
};
