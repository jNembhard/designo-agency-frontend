import { useState, useRef, useEffect } from "react";
import { navlinks } from "../../../utils/navLinks";
import { Sling as Hamburger } from "hamburger-react";
import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import { useOnClickOutside } from "usehooks-ts";
import { burgerNavStyles } from "./BurgerNavStyles";

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
        aria-label="backdrop"
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
