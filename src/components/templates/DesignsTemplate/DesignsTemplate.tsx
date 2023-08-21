import { useEffect, useState } from "react";
import { IDesignTemplate } from "../../../interface/DesignTemplate";
import { IDirection } from "../../../interface/Direction";
import { createDesignFilter } from "../../../utils/createDesignFilter";
import DesignHeader from "../../molecules/DesignHeader/DesignHeader";
import Box from "@mui/material/Box";
import Products from "../../organisms/Products/Products";
import SubDesign from "../../molecules/home_components/SubDesign/SubDesign";
import { designTemplateStyles } from "./DesignTemplateStyles";

type DesignsTemplateProp = {
  slug: string;
};

const DesignsTemplate = ({ slug }: DesignsTemplateProp) => {
  const [design, setDesign] = useState<IDesignTemplate>({
    hash: "",
    designType: "",
    productLinks: [],
    title: "",
  });
  const [direction, setDirection] = useState<IDirection>({
    row: "row",
    column: "column",
  });

  useEffect(() => {
    const convertedDesign = createDesignFilter(slug);

    setDesign({
      hash: convertedDesign.hash,
      designType: convertedDesign.designType,
      productLinks: convertedDesign.productLinks,
      title: convertedDesign.title,
    });

    if (slug === "graphic-design") {
      setDirection({ row: "row-reverse", column: "column-reverse" });
    }
  }, [slug]);

  return (
    <>
      {design.hash && (
        <div>
          <DesignHeader designID={design.hash} />
          <Products productType={design.designType} />
          <Box
            sx={{
              ...designTemplateStyles.container,
              flexDirection: {
                mobile: direction.column,
                laptop: direction.row,
              },
            }}
          >
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
