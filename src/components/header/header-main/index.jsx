import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import { Stack } from "@mui/system";
import ThemeSwitch from "./ThemeSwitch";
import { CustomContainer } from "../../../styled-components/CustomStyled.style";
import DropdownMenu from "./DropdownMenu";
import { subMenu } from "../menudata.js";
const logoURL = "/image/logo.png";

const HeaderMain = () => {
  const [showSearch, setShowSearch] = React.useState(false);
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
            <IconButton size="large" aria-label="Menu" color="inherit">
              <DashboardCustomizeOutlinedIcon />
            </IconButton>
            <IconButton
              size="large"
              aria-label="Search"
              color="inherit"
              onClick={() => setShowSearch(true)}>
              <SearchOutlinedIcon />
            </IconButton>
            <IconButton size="large" aria-label="Video" color="inherit">
              <VideocamOutlinedIcon />
            </IconButton>
            {/* <ThemeSwitch /> */}
          </Stack>
        </Toolbar>
        {/* {showSearch && <h1>Search Component</h1>} */}
      </CustomContainer>
    </AppBar>
  );
};

export default HeaderMain;
