import { useQuery } from "@apollo/client";
import { GET_DESIGN_HEADER } from "../../graphql/designQueries";
import { capitalizeWordsWithASpace } from "../../utils/capitalizeWords";
import { SEO } from "../atoms/SEO";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

type DesignHeaderProp = {
  designID: string;
};

const DesignHeader = ({ designID }: DesignHeaderProp) => {
  const { loading, error, data } = useQuery(GET_DESIGN_HEADER, {
    variables: { DesignID: designID },
  });

  if (loading) {
    return (
      <Box
        bgcolor="peach.main"
        textAlign="center"
        sx={{
          minHeight: {
            mobile: "20rem",
          },
          padding: {
            mobile: "6.563rem 1.5rem",
          },
        }}
      >
        Loading...
      </Box>
    );
  }

  if (error) {
    return <div>Error occured while fetching data</div>;
  }

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
          <Box
            bgcolor="peach.main"
            position="relative"
            overflow="hidden"
            maxWidth="69.438rem"
            zIndex="1"
            sx={{
              minHeight: {
                mobile: "20rem",
                tablet: "15.75rem",
              },
              padding: {
                mobile: "6.563rem 1.5rem",
                tablet: "4rem 1.5rem",
              },
              mx: {
                tablet: "2.5rem",
                laptop: "auto",
              },
              borderRadius: {
                tablet: "0.938rem",
              },
            }}
          >
            <Box
              component="img"
              position="absolute"
              src={process.env.REACT_APP_CLOUDFRONT_ENDPOINT + images.bgPattern}
              zIndex="-1"
              sx={{
                top: {
                  mobile: "1.875rem",
                  tablet: "-10.625rem",
                },
                right: {
                  mobile: "0",
                  tablet: "-11.25rem",
                },
              }}
              alt=""
            />
            <Box textAlign="center" margin="auto">
              <Typography
                variant="h1"
                color="white.main"
                textTransform="capitalize"
                sx={{
                  mb: {
                    mobile: "1.5rem",
                  },
                  fontSize: { tablet: "3rem" },
                  lineHeight: { tablet: "3rem" },
                }}
              >
                {title}
              </Typography>
              <Typography
                variant="body1"
                color="white.main"
                maxWidth="40ch"
                margin="auto"
              >
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
