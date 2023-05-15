import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Stack, Box
} from "@mui/material";
import { useTheme } from '@mui/material/styles';
import React from "react";
import Link from "next/link";
import { subMenu } from "../menudata.js";
import { DashboardIcon } from "../../../custom-icons";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

const MobileMenu = () => {
  const theme = useTheme()
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  console.log(subMenu);
  return (
    <>
      <Stack>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        
        <Collapse
            in={open}
            timeout="auto"
            unmountOnExit
            sx={{ width: "100%" }}>
            <Box component="ul" sx={{ paddingLeft: "0" }}>
            {subMenu?.map((menu, index) => (
                <MenuItem
                disableRipple
                key={index}
                sx={{
                    minHeight: "0",
                    paddingY: "8px",
                    "&:hover": {
                    // backgroundColor: "primary.light",
                    color: theme.palette.primary.main,
                    },
                    borderRadius: "5px",
                    "&:not(:last-child)": {
                    // borderBottom: `1px solid ${theme.palette.divider}`,
                    },
                    minWidth: { lg: "200px" },
                }}>
                <Link href={menu?.url ? menu?.url : "#"}>{menu?.title}</Link>
                </MenuItem>
            ))}
            </Box>
        </Collapse>
      </Stack>
    </>
  );
};

export default MobileMenu;
