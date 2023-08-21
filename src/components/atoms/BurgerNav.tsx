import { useState, useRef, useEffect } from "react";
import { navlinks } from "../../utils/navLinks";
import { Sling as Hamburger } from "hamburger-react";
import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import { useOnClickOutside } from "usehooks-ts";

const burgerNavWrapper = {
  position: "relative",
  display: {
    tablet: "none",
  },
};

const burgerNavBackdrop = {
  color: "black.main",
  zIndex: "tooltip",
  top: "8.875rem",
};

const burgerNavBackdropContainer = {
  width: "100vw",
  height: "14.688rem",
  bgcolor: "black.main",
  padding: "3rem 1.5rem",
  alignItems: "left",
  justifyContent: "start",
  position: "absolute",
  zIndex: "drawer",
  top: "-0.05rem",
};

const burgerNavLinks = {
  fontSize: "1.5rem",
  lineHeight: "1.563rem",
  letterSpacing: "0.125rem",
  textTransform: "uppercase",
  textAlign: "left",
  textDecoration: "none",
  color: "white.main",
  transition: "color 0.3s ease-in-out",
  "&:hover": {
    color: "peach.main",
    transition: "color 0.3s ease-in-out",
  },
};

const burgerNavStyles = {
  wrapper: burgerNavWrapper,
  backdrop: burgerNavBackdrop,
  backdropContainer: burgerNavBackdropContainer,
  links: burgerNavLinks,
};

const BurgerNav = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const ref = useRef(null);

  useOnClickOutside(ref, () => {
    if (modalOpen) setModalOpen(false);
  });

  const toggle = () => {
    setModalOpen(!modalOpen);
  };

  useEffect(() => {
    modalOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  });

  return (
    <Box sx={{ ...burgerNavStyles.wrapper }} ref={ref}>
      <div>
        <Hamburger
          color="#1D1C1E"
          toggled={modalOpen}
          toggle={() => toggle()}
        />
      </div>
      <Backdrop
        sx={{ ...burgerNavStyles.backdrop }}
        onClick={() => toggle()}
        open={modalOpen}
      >
        <Stack
          spacing="2rem"
          sx={{
            ...burgerNavStyles.backdropContainer,
            transition: "opacity 0.3s ease-in-out, transform 0.3s ease-in-out",
            opacity: modalOpen ? 1 : 0,
            transform: modalOpen ? "translateY(0)" : "translateY(-10px)",
          }}
        >
          {navlinks.map((navlink) => (
            <Link
              key={navlink.id}
              href={navlink.slug}
              sx={{ ...burgerNavStyles.links }}
            >
              {navlink.name}
            </Link>
          ))}
        </Stack>
      </Backdrop>
    </Box>
  );
};

export default BurgerNav;
