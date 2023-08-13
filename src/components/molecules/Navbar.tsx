import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { navlinks } from "../../utils/navLinks";
import Link from "@mui/material/Link";
import BurgerNav from "../atoms/BurgerNav";

export const Navbar = () => {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <Box component="header" sx={{ flexGrow: 1 }} maxWidth="69.438rem" mx="auto">
      <AppBar
        position="static"
        sx={{
          boxShadow: "none",
          backgroundColor: "transparent",
          padding: {
            mobile: "2.188rem 0",
            tablet: "2rem 0",
          },
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Link
            href="/"
            maxWidth="12.625rem"
            sx={{
              flexGrow: 1,
              paddingTop: "0.625rem",
            }}
          >
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
          <div>
            {navlinks.map((navlink) => (
              <Typography
                component={Link}
                key={navlink.id}
                href={navlink.slug}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                sx={{
                  color: "black.main",
                  fontSize: "0.875rem",
                  fontWeight: 400,
                  letterSpacing: "0.125rem",
                  margin: "0 1.313rem",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  display: {
                    mobile: "none",
                    tablet: "unset",
                  },
                  "&:hover": {
                    textDecoration: "none",
                  },
                }}
              >
                <Box
                  component="span"
                  sx={{
                    position: "relative",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "0",
                      height: "0.063rem",
                      bgcolor: "black.main",
                      transition: "width 0.3s ease",
                    },
                    "&:hover::before": {
                      width: "100%",
                    },
                    "&:not(:hover)::before": {
                      width: "0",
                      transition: "width 0.3s ease",
                      right: 0,
                      left: "auto",
                    },
                  }}
                >
                  {navlink.name}
                </Box>
              </Typography>
            ))}
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{
                display: {
                  tablet: "none",
                },
              }}
            >
              <BurgerNav />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
