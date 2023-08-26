import { designHeaderStyles } from "./DesignHeaderStyles";
import { useQuery } from "@apollo/client";
import { GET_DESIGN_HEADER } from "../../../graphql/designQueries";
import { capitalizeWordsWithASpace } from "../../../utils/capitalizeWords";
import SEO from "../../atoms/SEO";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { DesignsHeaderSkeleton } from "./DesignHeaderSkeleton";

type DesignHeaderProp = {
  designID: string;
};

const DesignHeader = ({ designID }: DesignHeaderProp) => {
  const { loading, error, data } = useQuery(GET_DESIGN_HEADER, {
    variables: { DesignID: designID },
  });

  if (loading) return <DesignsHeaderSkeleton />;

  if (error) return <div>Error occured while fetching data</div>;

  const { header, images, title } = data.design;
  const capitaltitle = capitalizeWordsWithASpace(title);

  return (
    <>
      {!loading && !error && (
        <>
          <SEO
            author="Jason Nembhard"
            title={capitaltitle}
            description={header}
            type="webapp"
          />
          <Box sx={{ ...designHeaderStyles.wrapper }}>
            <Box
              component="img"
              src={process.env.REACT_APP_CLOUDFRONT_ENDPOINT + images.bgPattern}
              sx={{ ...designHeaderStyles.bgImage }}
              alt=""
            />
            <Box sx={{ ...designHeaderStyles.textContainer }}>
              <Typography variant="h1" sx={{ ...designHeaderStyles.title }}>
                {title}
              </Typography>
              <Typography variant="body1" sx={{ ...designHeaderStyles.text }}>
                {header}
              </Typography>
            </Box>
          </Box>
        </>
      )}
    </>
  );
};

export default DesignHeader;
