import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { navlinks } from "../../../utils/navLinks";
import FooterContact from "../../atoms/FooterContact";
import Socials from "../Socials";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import useMediaQuery from "@mui/material/useMediaQuery";

const FooterBottom = () => {
  const mediaQuery = useMediaQuery("(min-width: 767px)");

  return (
    <Grid
      container
      direction={mediaQuery ? "row" : "column"}
      zIndex="-1"
      bgcolor="black.dark"
      position="absolute"
      sx={{
        alignItems: {
          mobile: "center",
        },
        justifyContent: {
          mobile: "center",
          tablet: "space-between",
        },
        textAlign: {
          mobile: "center",
          tablet: "left",
        },
        top: {
          mobile: "15rem",
          laptop: "12rem",
        },
        width: {
          mobile: "100%",
          tablet: "100%",
        },
        height: {
          mobile: "54.938rem",
          tablet: "26.438rem",
        },
        pt: { mobile: "100px", tablet: "173px" },
        px: { tablet: "39px", laptop: "164px" },
      }}
    >
      <Grid md={4}>
        <Link href="/">
          <Box
            component="img"
            src={
              process.env.REACT_APP_CLOUDFRONT_ENDPOINT +
              "assets/shared/desktop/logo-light.png"
            }
            width="12.625rem"
            height="1.688rem"
            alt=""
          />
        </Link>
      </Grid>
      <Divider
        color="gray"
        sx={{ width: "85%", marginTop: "2rem", display: { tablet: "none" } }}
      />
      <Stack
        direction={mediaQuery ? "row" : "column"}
        sx={{
          pt: {
            mobile: "1rem",
            tablet: "0",
          },
        }}
      >
        {navlinks.map((navlink) => (
          <Typography
            key={navlink.id}
            href={navlink.slug}
            component={Link}
            sx={{
              color: "white.main",
              textTransform: "uppercase",
              textDecoration: "none",
              lineHeight: "0.875rem",
              letterSpacing: "0.125rem",
              fontSize: {
                mobile: "0.875rem",
              },
              margin: {
                mobile: "1rem 0",
                tablet: "0 21px",
              },
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            {navlink.name}
          </Typography>
        ))}
      </Stack>
      <Divider
        color="gray"
        sx={{
          width: { tablet: "90vw", laptop: "100%" },
          display: { mobile: "none", tablet: "unset" },
        }}
      />
      <FooterContact
        heading="designo central office"
        titleOne="3886 wellington street"
        titleTwo="toronto, ontario M9C 3J5"
      />
      <FooterContact
        heading="contact us (central office)"
        titleOne="P : +1 253-863-8967"
        titleTwo="M : contact@designo.co"
      />
      <Socials />
    </Grid>
  );
};

export default FooterBottom;
