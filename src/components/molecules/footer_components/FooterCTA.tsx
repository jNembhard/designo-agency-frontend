import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { DesignButton } from "../../atoms/DesignoButton";

const FooterCTA = () => {
  const mediaQuery = useMediaQuery("(min-width: 1200px)");

  return (
    <Box
      position="relative"
      overflow="hidden"
      zIndex={0}
      bgcolor="peach.main"
      textAlign="center"
      sx={{
        padding: {
          mobile: "4rem 0.75rem",
          tablet: "unset",
          laptop: "4.5rem 5.938rem",
        },
        mx: { mobile: "1.5rem", tablet: "2.438rem", laptop: "10.25rem" },
      }}
      borderRadius="0.938rem"
    >
      <Box
        position="absolute"
        zIndex="-1"
        component="img"
        src={
          process.env.REACT_APP_CLOUDFRONT_ENDPOINT +
          "assets/shared/desktop/bg-pattern-call-to-action.svg"
        }
        sx={{
          bottom: {
            mobile: "-6.25rem",
          },
          right: {
            mobile: "-18.75rem",
            tablet: "-10rem",
            laptop: "0",
          },
        }}
        alt=""
      />
      <Stack
        direction={mediaQuery ? "row" : "column"}
        sx={{
          margin: {
            tablet: "3.688rem 3.563rem",
            laptop: "0",
          },
          alignItems: {
            laptop: "center",
            justifyContent: "space-between",
          },
        }}
      >
        <Box marginBottom="0.375rem" zIndex={2}>
          <Box sx={{ maxWidth: { laptop: "28.688rem" } }}>
            <Typography
              variant="h2"
              color="white.main"
              mx="auto"
              sx={{
                fontSize: {
                  mobile: "2rem",
                  tablet: "2.5rem",
                },
                lineHeight: {
                  mobile: "1.25rem",
                  tablet: "2.5rem",
                },
                textAlign: {
                  mobile: "center",
                  laptop: "left",
                },
                maxWidth: {
                  tablet: "20.938rem",
                  laptop: "unset",
                },
                mb: {
                  tablet: "20px",
                },
              }}
            >
              Let's talk about your project
            </Typography>
          </Box>
          <Box
            marginBottom="2rem"
            marginTop="1.25rem"
            sx={{
              textAlign: {
                laptop: "left",
              },
            }}
          >
            <Typography
              variant="body1"
              color="white.main"
              lineHeight="1.563rem"
              sx={{
                mx: {
                  mobile: "auto",
                  laptop: "unset",
                },
                maxWidth: {
                  mobile: "29.688rem",
                  laptop: "45ch",
                },
              }}
            >
              Ready to take it to the next level? Contact us today and find out
              how our expertise can help your business grow.
            </Typography>
          </Box>
        </Box>
        <DesignButton link="/contact" islight={true} text="get in touch" />
      </Stack>
    </Box>
  );
};

export default FooterCTA;
