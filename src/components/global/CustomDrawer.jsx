import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";

const CustomDrawer = ({ anchor, open, setOpen, children }) => {
  return (
    <>
      <Button onClick={() => setOpen(true)}>left</Button>
      <Drawer
        anchor={anchor ? anchor : "left"}
        open={open}
        onClose={() => setOpen(!open)}>
        <Button onClick={() => setOpen(!open)}>Close</Button>
        {children}
      </Drawer>
    </>
  );
};

export default CustomDrawer;
