import { modalStyles } from "./FormModalStyles";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { FormButton } from "../../atoms/DesignoButton";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";

const FormModal = ({
  openModal,
  closeModal,
}: {
  openModal: boolean;
  closeModal: () => void;
}) => {
  return (
    <Modal
      open={openModal}
      onClose={closeModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={openModal}>
        <Box sx={{ ...modalStyles.modalWrapper }}>
          <Typography
            id="modal-modal-title"
            variant="h2"
            sx={{ ...modalStyles.title }}
          >
            Thanks for your submission!
          </Typography>
          <Typography
            id="modal-modal-description"
            variant="body1"
            sx={{ ...modalStyles.description }}
          >
            Your message is in good hands. Our team will review your ideas and
            get back to you soon
          </Typography>
          <Box onClick={closeModal} sx={{ ...modalStyles.buttonWrapper }}>
            <FormButton islight="false" text="close" />
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};

export default FormModal;
