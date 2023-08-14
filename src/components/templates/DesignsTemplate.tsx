import { useEffect, useState } from "react";
import { IDesignTemplate } from "../../interface/DesignTemplate";
import { IDirection } from "../../interface/Direction";
import { createDesignFilter } from "../../utils/createDesignFilter";
import DesignHeader from "../molecules/DesignHeader";
import Box from "@mui/material/Box";
import Products from "../organisms/Products";
import SubDesign from "../molecules/home_components/SubDesign";

const DesignsTemplate = ({ slug }: { slug: string }) => {
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
              mb: {
                mobile: "6rem",
                tablet: "7.5rem",
                laptop: "10rem",
              },
              mx: {
                mobile: "1.5rem",
                tablet: "2.5rem",
                laptop: "auto",
              },
              display: { mobile: "flex" },
              alignItems: { laptop: "center" },
              flexDirection: {
                mobile: `${direction.column}`,
                laptop: `${direction.row}`,
              },
              justifyContent: { laptop: "space-between" },
              maxWidth: "69.438rem",
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
