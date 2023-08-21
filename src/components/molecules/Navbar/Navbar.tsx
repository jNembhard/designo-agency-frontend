import { useState } from "react";
import { navbarStyles } from "./NavbarStyles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { navlinks } from "../../../utils/navLinks";
import Link from "@mui/material/Link";
import BurgerNav from "../../atoms/BurgerNav/BurgerNav";

export const Navbar = () => {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <Box component="header" sx={{ ...navbarStyles.wrapper }}>
      <AppBar sx={{ ...navbarStyles.appBar }}>
        <Toolbar sx={{ ...navbarStyles.toolbar }}>
          <Link href="/" sx={{ ...navbarStyles.logo }}>
            <Box
              component="img"
              src={
                process.env.REACT_APP_CLOUDFRONT_ENDPOINT +
                "assets/shared/desktop/logo-dark.png"
              }
              width="12.625rem"
              height="1.688rem"
              alt=""
            />
          </Link>
          <Box>
            {navlinks.map((navlink) => (
              <Typography
                component={Link}
                key={navlink.id}
                href={navlink.slug}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                sx={{ ...navbarStyles.linkContainers }}
              >
                <Box component="span" sx={{ ...navbarStyles.linkText }}>
                  {navlink.name}
                </Box>
              </Typography>
            ))}
            <IconButton
              size="large"
              edge="start"
              aria-label="menu"
              sx={{ ...navbarStyles.iconButton }}
            >
              <BurgerNav />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
