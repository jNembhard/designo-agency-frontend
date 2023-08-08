import Box from "@mui/material/Box";
import ContactDescription from "../organisms/ContactDescription";
import Form from "../organisms/Form";

const ContactTemplate = () => {
  return (
    <Box bgcolor="peach.main" sx={{ padding: { mobile: "4.5rem 1.5rem" } }}>
      <ContactDescription />
      <Form />
    </Box>
  );
};

export default ContactTemplate;
