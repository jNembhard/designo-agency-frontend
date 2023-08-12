import Box from "@mui/material/Box";
import Places from "../components/organisms/Places";
import ContactTemplate from "../components/templates/ContactTemplate";
import { SEO } from "../components/atoms/SEO";

const Contact = () => {
  return (
    <Box>
      <SEO
        author="Jason Nembhard"
        title="Contact Us"
        description="reach out to us"
        type="webapp"
      />
      <ContactTemplate />
      <Places />
    </Box>
  );
};

export default Contact;
