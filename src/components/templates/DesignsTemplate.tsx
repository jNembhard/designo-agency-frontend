import { useEffect, useState } from "react";
import Products from "../organisms/Products";
import { capitalizeWords } from "../../utils/capitalizeWords";
import DesignHeader from "../molecules/DesignHeader";

const DesignsTemplate = ({ slug }: { slug: string }) => {
  const [design, setDesign] = useState<{
    hash: string | undefined;
    designType: string;
  }>({
    hash: "",
    designType: "",
  });

  const ids: { [key: string]: string } = {
    "design-1": "web-design",
    "design-2": "app-design",
    "design-3": "graphic-design",
  };

  useEffect(() => {
    if (
      slug === "app-design" ||
      slug === "graphic-design" ||
      slug === "web-design"
    ) {
      let type = capitalizeWords(slug);
      let hashID = Object.keys(ids).find((key) => ids[key] === slug);
      setDesign({ hash: hashID, designType: type });
    }
  }, [slug]);

  return (
    <>
      {design.hash && (
        <div>
          <DesignHeader designID={design.hash} />
          <Products productType={design.designType} />
        </div>
      )}
    </>
  );
};

export default DesignsTemplate;
