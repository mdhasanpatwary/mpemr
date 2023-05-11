/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Collapse, MenuItem, Popover, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box } from "@mui/system";
import Link from "next/link";
import React, { useRef, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { CustomMenuItem } from "../Header.style";
import DropdownMenu2 from "./DropdownMenu2";

const DropdownMenu = ({ data, title, url }) => {
  const theme = useTheme();
  const tabScreen = useMediaQuery(theme.breakpoints.down("lg"));

  const [anchorEl, setAnchorEl] = useState(null);
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  return (
    <>
      <CustomMenuItem
        onMouseEnter={(e) => handleClick(e)}
        onMouseLeave={(e) => handleClose(e)}
        sx={{
          a: {
            display: "flex",
            inlineSize: "100%",
            justifyContent: "space-between",
          },
        }}>
        {data?.length ? (
          <>
            <Link href={url ? url : "#"}>
              {title}
              <Typography
                variant="caption"
                sx={{ svg: { inlineSize: ".75rem", blockSize: ".75rem" } }}>
                <AddIcon color={theme.palette.neutral[900]} />
              </Typography>
            </Link>
            {!tabScreen ? (
              <Popover
                disableScrollLock={false}
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                elevation={0}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                sx={{
                  pointerEvents: "none",
                  textTransform: "capitalize",
                  ".MuiPaper-root": {
                    pointerEvents: "auto",
                    padding: "10px",
                    borderTopRightRadius: "0",
                    borderTopLeftRadius: "0",
                    ".MuiButtonBase-root a": {
                      fontWeight: "400!important",
                    },
                  },
                }}>
                {data?.map((item, index) => (
                  <React.Fragment key={index}>
                    {item?.submenu?.length ? (
                      <DropdownMenu2
                        data={item?.submenu}
                        title={item?.title}
                        url={item?.url}
                      />
                    ) : (
                      <MenuItem disableRipple>
                        <Link href={item?.url ? item?.url : "#"}>
                          {item?.title}
                        </Link>
                      </MenuItem>
                    )}
                  </React.Fragment>
                ))}
              </Popover>
            ) : (
              <Collapse
                in={open}
                timeout="auto"
                unmountOnExit
                sx={{ width: "100%" }}>
                <Box component="ul" sx={{ paddingLeft: "0" }}>
                  {data?.map(({ title, url }, index) => (
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
                      <Link href={url ? url : "#"}>{title}</Link>
                    </MenuItem>
                  ))}
                </Box>
              </Collapse>
            )}
          </>
        ) : (
          <Link href={url ? url : "#"}>{title}</Link>
        )}
      </CustomMenuItem>
    </>
  );
};

DropdownMenu.propTypes = {};

export default DropdownMenu;
