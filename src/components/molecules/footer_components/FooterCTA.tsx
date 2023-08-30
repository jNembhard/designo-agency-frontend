import useMediaQuery from "@mui/material/useMediaQuery";
import { footerCTAStyles } from "./FooterCTAStyles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { DesignButton } from "../../atoms/DesignoButton";

const FooterCTA = () => {
  const isBreakpoint1024 = useMediaQuery("(min-width: 1024px)");

  return (
    <Box sx={{ ...footerCTAStyles.wrapper }}>
      <Box
        component="img"
        src={
          process.env.REACT_APP_CLOUDFRONT_ENDPOINT +
          "assets/shared/desktop/bg-pattern-call-to-action.svg"
        }
        sx={{ ...footerCTAStyles.bgImage }}
        alt=""
      />
      <Stack
        aria-label="change column direction"
        direction={isBreakpoint1024 ? "row" : "column"}
        sx={{ ...footerCTAStyles.container }}
      >
        <Box sx={{ ...footerCTAStyles.inner }}>
          <Box sx={{ ...footerCTAStyles.titleWrapper }}>
            <Typography variant="h2" sx={{ ...footerCTAStyles.title }}>
              Let's talk about your project
            </Typography>
          </Box>
          <Box sx={{ ...footerCTAStyles.descriptionWrapper }}>
            <Typography variant="body1" sx={{ ...footerCTAStyles.description }}>
              Ready to take it to the next level? Contact us today and find out
              how our expertise can help your business grow.
            </Typography>
          </Box>
        </Box>
        <Box>
          <DesignButton link="/contact" islight="true" text="get in touch" />
        </Box>
      </Stack>
    </Box>
  );
};

export default FooterCTA;
