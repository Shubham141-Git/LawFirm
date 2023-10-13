import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { ReactComponent as Logo } from "../../assets/logo.svg";

import { ReactComponent as Insta } from "../../assets/insta.svg";
import { ReactComponent as Fb } from "../../assets/fb.svg";
import { ReactComponent as Tweet } from "../../assets/tweet.svg";
import { ReactComponent as Pin } from "../../assets/pin.svg";
import styles from "./Footer.modules.css";

const pages = ["Home", "Attorneys", "Practice Areas", "About Us"];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box
      sx={{
        width: "lg",
        height: "367px",
        bgColor: "#171717",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <AppBar position="static" className={styles.wrapper}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Logo />

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box
              sx={{
                display: "flex",
                width: "187px",
                height: "30px",
                justifyContent: "space-around",
              }}
            >
              <Insta />
              <Fb />
              <Tweet />
              <Pin />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box>
        <Box
          sx={{
            display: "flex",
            width: "425px",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography
              sx={{
                color: "white",
                fontFamily: "Helvetica Now Display",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "20px",
              }}
            >
              © 2020 Acme. All right reserved.
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                color: "white",
                fontFamily: "Helvetica Now Display",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "20px",
              }}
            >
              Privacy Policy
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                color: "white",
                fontFamily: "Helvetica Now Display",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "20px",
              }}
            >
              Terms of Service
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
export default NavBar;
