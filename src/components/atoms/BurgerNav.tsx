import { useEffect, useState, useRef } from "react";
import { navlinks } from "../../utils/navLinks";
import { Sling as Hamburger } from "hamburger-react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import { useOnClickOutside } from "usehooks-ts";

type Props = {};

const BurgerNav = (props: Props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const ref = useRef(null);

  useOnClickOutside(ref, () => {
    if (modalOpen) setModalOpen(false);
  });

  const toggle = () => setModalOpen(!modalOpen);

  //   useEffect(() => {
  //     const body = document.querySelector("body");
  //     body.style.overflow = modalOpen ? "hidden" : "unset";
  //   });

  return (
    <Box position="relative" sx={{ display: { tablet: "none" } }}>
      <div>
        <Hamburger
          color="#33323D"
          toggled={modalOpen}
          toggle={() => toggle()}
        />
      </div>
      <Stack
        width="375px"
        height="235px"
        bgcolor="black.main"
        padding="48px 24px"
        spacing="2rem"
        alignItems="left"
        justifyContent="start"
        position="absolute"
        zIndex="modal"
        top="87px"
        right="-16px"
      >
        {navlinks.map((navlink) => (
          <Link
            href={navlink.slug}
            fontSize="24px"
            lineHeight="25px"
            letterSpacing="2px"
            textTransform="uppercase"
            textAlign="left"
            sx={{ textDecoration: "none", color: "inherit" }}
          >
            {navlink.name}
          </Link>
        ))}
      </Stack>
    </Box>
  );
};

export default BurgerNav;
