import * as React from "react";
import Drawer from "@mui/material/Drawer";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { Stack } from "@mui/material";

const CustomDrawer = ({ anchor, open, setOpen, children }) => {
  return (
    <>
      <Drawer
        anchor={anchor ? anchor : "left"}
        open={open}
        sx={{
          "& .MuiDrawer-paper": {
            inlineSize: "320px",
          },
        }}
        onClose={() => setOpen(!open)}>
        <Stack alignItems="flex-end" px={3} pt={2}>
          <CloseOutlinedIcon
            onClick={() => setOpen(!open)}
            sx={{ cursor: "pointer" }}
          />
        </Stack>
        {children}
      </Drawer>
    </>
  );
};

export default CustomDrawer;
