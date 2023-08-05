import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { navlinks } from "../../../utils/navLinks";
import { Stack } from "@mui/material";
import FooterContact from "../../atoms/FooterContact";
import Socials from "../Socials";

const FooterBottom = () => {
  return (
    <Box
      bgcolor="black.dark"
      textAlign="center"
      position="absolute"
      zIndex={-1}
      top="11.5rem"
      sx={{
        width: {
          mobile: "100%",
          tablet: "100%",
        },
        height: {
          mobile: "54.938rem",
        },
        padding: { mobile: "15.813rem 1.438rem 4rem 1.5rem" },
      }}
    >
      <Link href="/">
        <Box
          component="img"
          src="https://designo-image-bucket.s3.amazonaws.com/assets/shared/desktop/logo-light.png"
          width="12.625rem"
          height="1.688rem"
          alt=""
        />
      </Link>
      <Stack marginTop="2rem" paddingTop="1rem" borderTop="1px solid gray">
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
