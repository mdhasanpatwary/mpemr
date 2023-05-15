import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { Stack } from "@mui/system";
import ThemeSwitch from "./ThemeSwitch";
import { CustomContainer } from "../../../styled-components/CustomStyled.style";
import DropdownMenu from "./DropdownMenu";
import { subMenu } from "../menudata.js";
import { DashboardIcon, SearchIcon, VideoIcon } from "../../../custom-icons";
import {
  Collapse,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CustomDrawer from "../../global/CustomDrawer";
import MobileMenu from "./MobileMenu";
const logoURL = "/image/logo.png";

const HeaderMain = () => {
  const [showSearch, setShowSearch] = React.useState(false);
  const [openDrawer, setOpenDrawer] = React.useState(false);
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
            <IconButton
              size="large"
              aria-label="Menu"
              color="inherit"
              onClick={() => setOpenDrawer(true)}>
              <DashboardIcon />
            </IconButton>
            <Divider
              orientation="vertical"
              variant="middle"
              sx={{ marginInline: 1 }}
              flexItem
            />
            <IconButton
              size="large"
              aria-label="Search"
              color="inherit"
              onClick={() => setShowSearch(true)}>
              <SearchIcon />
            </IconButton>
            <Divider
              orientation="vertical"
              variant="middle"
              sx={{ marginInline: 1 }}
              flexItem
            />
            <IconButton size="large" aria-label="Video" color="inherit">
              <VideoIcon />
            </IconButton>
            {/* <ThemeSwitch /> */}
          </Stack>
        </Toolbar>
        {/* {showSearch && <h1>Search Component</h1>} */}
        <CustomDrawer open={openDrawer} setOpen={setOpenDrawer}>
          <MobileMenu />
        </CustomDrawer>
      </CustomContainer>
    </AppBar>
  );
};

export default HeaderMain;
