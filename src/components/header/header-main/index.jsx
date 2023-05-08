import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Badge from "@mui/material/Badge";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import { Divider, Hidden, MenuItem } from "@mui/material";
import { useTranslation } from "react-i18next";

import Logo from "../../logo/Logo";
import NavLinks from "./NavLinks";
import Search from "./Search";
import NavCategoroy from "./NavCategoroy";
import Profile from "./Profile";
import { Stack } from "@mui/system";
import ThemeSwitch from "./ThemeSwitch";
import { useRouter } from "next/router";
import { CustomContainer } from "../../../styled-components/CustomStyled.style";
import DropdownMenu from "./DropdownMenu";
import { subMenu } from "../menudata.js";
const logoURL = "/image/logo.png";

function HeaderMain() {
  const { t } = useTranslation();
  const router = useRouter();
  const signInClick = () => {
    router.push("/auth/sign-in");
  };
  const signUpClick = () => {
    router.push("/auth/sign-up");
  };
  let token = undefined;
  if (typeof window !== "undefined") {
    token = localStorage.getItem("token");
  }
  const signOutClick = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("token");
    }
    router.push("/auth/sign-in");
  };
  return (
    <AppBar position="static" color="inherit" elevation={1}>
      <CustomContainer>
        <Toolbar
          sx={{
            gap: "1rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingInline: "0rem !important",
          }}>
          <Stack direction="row" alignItems="center" flexGrow="1">
            {/* <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ display: { xs: "flex", md: "none" } }}>
                <MenuIcon />
              </IconButton> */}
            {/* <Logo src={logoURL} width="120px" /> */}
            {/* <Hidden mdDown>
                <NavCategoroy />
              </Hidden> */}
            {/* <Search /> */}
            {subMenu?.map((item) => {
              return (
                <DropdownMenu
                  key={item?.id}
                  title={item?.title}
                  url={item?.url}
                  data={item?.submenu}
                />
              );
            })}
          </Stack>

          <Stack direction="row" alignItems="center">
            {/* <Hidden lgDown>
              <NavLinks />
            </Hidden> */}
            <IconButton size="large" aria-label="Menu" color="inherit">
              <DashboardCustomizeOutlinedIcon />
            </IconButton>
            <IconButton size="large" aria-label="Search" color="inherit">
              <SearchOutlinedIcon />
            </IconButton>
            <IconButton size="large" aria-label="Video" color="inherit">
              <VideocamOutlinedIcon />
            </IconButton>
            {/* <Hidden mdDown>
                <Divider orientation="vertical" variant="middle" flexItem />
                {token ? (
                  <Button onClick={signOutClick} size="small" color="inherit">
                    Sign Out
                  </Button>
                ) : (
                  <>
                    <Button onClick={signInClick} size="small" color="inherit">
                      {t("Login")}
                    </Button>
                    <Button
                      onClick={signUpClick}
                      size="small"
                      variant="contained">
                      {t("Sign Up")}
                    </Button>
                  </>
                )}
              </Hidden> */}
            {/* <ThemeSwitch /> */}
            {/* {token && <Profile />} */}
          </Stack>
        </Toolbar>
      </CustomContainer>
    </AppBar>
  );
}

export default HeaderMain;
