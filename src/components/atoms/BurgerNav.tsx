import { useEffect, useState, useRef } from "react";
import { navlinks } from "../../utils/navLinks";
import { Sling as Hamburger } from "hamburger-react";
import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import { useOnClickOutside } from "usehooks-ts";

const BurgerNav = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const ref = useRef(null);

  useOnClickOutside(ref, () => {
    if (modalOpen) setModalOpen(false);
  });

  const toggle = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <Box position="relative" sx={{ display: { tablet: "none" } }} ref={ref}>
      <div>
        <Hamburger
          color="#1D1C1E"
          toggled={modalOpen}
          toggle={() => toggle()}
        />
      </div>
      <Backdrop
        sx={{
          color: "#fff",
          zIndex: "tooltip",
        }}
        onClick={() => toggle()}
        open={modalOpen}
      >
        <Stack
          width="100vw"
          height="14.688rem"
          bgcolor="black.main"
          padding="3rem 1.5rem"
          spacing="2rem"
          alignItems="left"
          justifyContent="start"
          position="absolute"
          zIndex="drawer"
          top="142px"
          sx={{
            transition: "opacity 0.3s ease-in-out, transform 0.3s ease-in-out",
            opacity: modalOpen ? 1 : 0,
            transform: modalOpen ? "translateY(0)" : "translateY(-10px)",
          }}
        >
          {navlinks.map((navlink) => (
            <Link
              href={navlink.slug}
              fontSize="1.5rem"
              lineHeight="1.563rem"
              letterSpacing="0.125rem"
              textTransform="uppercase"
              textAlign="left"
              sx={{ textDecoration: "none", color: "inherit" }}
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
