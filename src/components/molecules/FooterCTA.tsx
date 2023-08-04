import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import DesignoButton from "../atoms/DesignoButton";

const FooterCTA = () => {
  return (
    <Box
      position="relative"
      overflow="hidden"
      zIndex={0}
      bgcolor="peach.main"
      textAlign="center"
      sx={{ padding: { mobile: "4rem 0.75rem" }, mx: { mobile: "1.5rem" } }}
      borderRadius="0.938rem"
    >
      <Box
        position="absolute"
        bottom="-6.25rem"
        right="-18.75rem"
        zIndex={-1}
        component="img"
        src="https://designo-image-bucket.s3.amazonaws.com/assets/shared/desktop/bg-pattern-call-to-action.svg"
        alt=""
      />

      <Box marginBottom="0.375rem" zIndex={2}>
        <Typography
          variant="h2"
          fontSize="2rem"
          lineHeight="2.25rem"
          color="white.main"
        >
          Let's talk about your project
        </Typography>
      </Box>
      <Box marginBottom="2rem">
        <Typography
          variant="body1"
          color="white.main"
          lineHeight="1.563rem"
          mx="0.125rem"
        >
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </Typography>
      </Box>
      <DesignoButton link="/contact" isLight={true} text="get in touch" />
    </Box>
  );
};

export default FooterCTA;
