import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { navlinks } from "../../utils/navLinks";
import Link from "@mui/material/Link";
import BurgerNav from "../atoms/BurgerNav";

export const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }} zIndex="modal">
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
        <Toolbar>
          <Link href="/" sx={{ flexGrow: 1, paddingTop: "10px" }}>
            <Box
              component="img"
              src="https://designo-image-bucket.s3.amazonaws.com/assets/shared/desktop/logo-dark.png"
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
                sx={{
                  color: "black.main",
                  fontSize: "0.875rem",
                  fontWeight: 400,
                  letterSpacing: "0.125rem",
                  padding: "0 1.313rem",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  display: {
                    mobile: "none",
                    tablet: "unset",
                  },
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                {navlink.name}
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
