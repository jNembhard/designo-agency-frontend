import { IDesignTemplate } from "../interface/DesignTemplate";
import { capitalizeWords } from "./capitalizeWords";

export const createDesignFilter = (slug: string): IDesignTemplate => {
  const ids: { [key: string]: string } = {
    "design-1": "web-design",
    "design-2": "app-design",
    "design-3": "graphic-design",
  };

  let designObj: IDesignTemplate = {
    hash: "",
    designType: "",
    productLinks: [],
    title: "",
  };

  if (
    slug === "app-design" ||
    slug === "graphic-design" ||
    slug === "web-design"
  ) {
    let type = capitalizeWords(slug).replace(" ", "");
    let hashID = Object.keys(ids).find((key) => ids[key] === slug);
    let filteredIDs = Object.keys(ids).filter((key) => key !== hashID);
    let convertedTitle = capitalizeWords(slug);

    if (hashID && filteredIDs) {
      designObj = {
        hash: hashID,
        designType: type,
        productLinks: filteredIDs,
        title: convertedTitle,
      };
    }
  }

  return designObj;
};
