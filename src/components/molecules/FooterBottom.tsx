import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { navlinks } from "../../utils/navLinks";
import { Stack } from "@mui/material";
import FooterContact from "../atoms/FooterContact";
import Socials from "./Socials";

const FooterBottom = () => {
  return (
    <Box
      bgcolor="black.dark"
      textAlign="center"
      position="absolute"
      zIndex={-1}
      top="200px"
      sx={{
        width: {
          mobile: "100vw",
          tablet: "100%",
        },
        height: {
          mobile: "800px",
        },
        paddingTop: {
          mobile: "253px",
        },
      }}
    >
      <Link href="/">
        <img
          src="https://designo-image-bucket.s3.amazonaws.com/assets/shared/desktop/logo-light.png"
          width="202px"
          height="27px"
          alt=""
        />
      </Link>
      <Stack marginTop="2rem" paddingTop="1rem">
        {navlinks.map((navlink) => (
          <Typography
            key={navlink.id}
            href={navlink.slug}
            component={Link}
            sx={{
              color: "white.main",
              textTransform: "uppercase",
              textDecoration: "none",
              lineHeight: "14px",
              letterSpacing: "2px",
              fontSize: {
                mobile: "14px",
              },
              margin: {
                mobile: "1rem 0",
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
    </Box>
  );
};

export default FooterBottom;
