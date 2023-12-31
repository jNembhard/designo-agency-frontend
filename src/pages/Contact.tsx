import Box from "@mui/material/Box";
import Places from "../components/organisms/Places/Places";
import ContactTemplate from "../components/templates/ContactTemplate/ContactTemplate";
import SEO from "../components/atoms/SEO";

const Contact = () => {
  return (
    <>
      <SEO
        author="Jason Nembhard"
        title="Contact Us"
        description="Elevate your business with tailored digital experiences. Let's discuss your project to fuel growth. Reach out for relatable solutions."
        type="webapp"
      />
      <Box>
        <ContactTemplate />
        <Places />
      </Box>
    </>
  );
};

export default Contact;
