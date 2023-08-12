import { useEffect, useState } from "react";
import { SEO } from "../atoms/SEO";
import { IDesignTemplate } from "../../interface/DesignTemplate";
import { capitalizeWords } from "../../utils/capitalizeWords";
import DesignHeader from "../molecules/DesignHeader";
import Box from "@mui/material/Box";
import Products from "../organisms/Products";
import SubDesign from "../molecules/home_components/SubDesign";

const DesignsTemplate = ({ slug }: { slug: string }) => {
  const [design, setDesign] = useState<IDesignTemplate>({
    hash: "",
    designType: "",
    productLinks: [],
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
      let filteredIDs = Object.keys(ids).filter((key) => key !== hashID);
      setDesign({ hash: hashID, designType: type, productLinks: filteredIDs });
    }
  }, [slug]);

  return (
    <>
      {design.hash && (
        <div>
          <SEO
            author="Jason Nembhard"
            title={design.designType}
            description={design.hash}
            type="webapp"
          />
          <DesignHeader designID={design.hash} />
          <Products productType={design.designType} />
          <Box sx={{ mb: { mobile: "6rem" } }}>
            {design.productLinks.map((productLink) => (
              <SubDesign key={productLink} designID={productLink} />
            ))}
          </Box>
        </div>
      )}
    </>
  );
};

export default DesignsTemplate;
