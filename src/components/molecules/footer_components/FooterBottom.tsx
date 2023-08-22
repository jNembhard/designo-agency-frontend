import { useState } from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { navlinks } from "../../../utils/navLinks";
import FooterContact from "../../atoms/FooterContact/FooterContact";
import Socials from "../Socials/Socials";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import useMediaQuery from "@mui/material/useMediaQuery";

const FooterBottom = () => {
  const [hovered, setHovered] = useState<boolean>(false);
  const isBreakpoint767 = useMediaQuery("(min-width: 767px)");

  return (
    <Grid
      container
      direction={isBreakpoint767 ? "row" : "column"}
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
        pt: { mobile: "6.25rem", tablet: "10.813rem" },
        px: { tablet: "2.438rem", laptop: "10.25rem" },
        pb: { tablet: "1.25rem", laptop: "1.875rem" },
      }}
    >
      <Grid>
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
        direction={isBreakpoint767 ? "row" : "column"}
        sx={{
          pt: {
            mobile: "1rem",
            tablet: "0",
          },
          px: "0",
        }}
      >
        {navlinks.map((navlink) => (
          <Typography
            key={navlink.id}
            href={navlink.slug}
            component={Link}
            onMouseOver={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            sx={{
              color: "white.main",
              textTransform: "uppercase",
              textDecoration: "none",
              lineHeight: "0.875rem",
              letterSpacing: "0.125rem",
              px: "0",
              fontSize: {
                mobile: "0.875rem",
              },
              margin: {
                mobile: "1rem 0",
                tablet: "0 1.313rem",
              },
              "&:hover": {
                textDecoration: "none",
              },
            }}
          >
            <Box
              component="span"
              sx={{
                position: "relative",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "0",
                  height: "0.063rem",
                  bgcolor: "white.main",
                  transition: "width 0.3s ease",
                },
                "&:hover::before": {
                  width: "100%",
                },
                "&:not(:hover)::before": {
                  width: "0",
                  transition: "width 0.3s ease",
                  right: 0,
                  left: "auto",
                },
              }}
            >
              {navlink.name}
            </Box>
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
