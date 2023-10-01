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
import { footerBottomStyles } from "./FooterBottomStyles";

const FooterBottom = () => {
  const [hovered, setHovered] = useState<boolean>(false);
  const isBreakpoint767 = useMediaQuery("(min-width: 767px)");

  return (
    <Grid
      container
      aria-label="changes grid direction"
      direction={isBreakpoint767 ? "row" : "column"}
      sx={{ ...footerBottomStyles.container }}
    >
      <Grid>
        <Link href="/">
          <Box
            component="img"
            src={
              process.env.REACT_APP_CLOUDFRONT_ENDPOINT +
              "assets/shared/desktop/logo-light.png"
            }
            sx={{ ...footerBottomStyles.logo }}
            alt="designo-logo"
          />
        </Link>
      </Grid>
      <Divider color="gray" sx={{ ...footerBottomStyles.divider }} />
      <Stack
        aria-label="changes stack direction"
        direction={isBreakpoint767 ? "row" : "column"}
        sx={{ ...footerBottomStyles.navLinkWrapper }}
      >
        {navlinks.map((navlink) => (
          <Typography
            key={navlink.id}
            href={navlink.slug}
            component={Link}
            onMouseOver={() => setHovered(hovered)}
            onMouseLeave={() => setHovered(!hovered)}
            sx={{ ...footerBottomStyles.navLinkText }}
          >
            <Box
              component="span"
              sx={{ ...footerBottomStyles.navLinkContainer }}
            >
              {navlink.name}
            </Box>
          </Typography>
        ))}
      </Stack>
      <Divider color="gray" sx={{ ...footerBottomStyles.dividerTwo }} />
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
