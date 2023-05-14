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
            fontFamily: '"Inter","sans-serif"',
          },
        }}>
        {data?.length ? (
          <>
            <Link href={url ? url : "#"}>
              {title}
              <Typography
                variant="subtitle1"
                sx={{ svg: { inlineSize: "1rem", blockSize: "1rem" } }}>
                <AddIcon color={theme.palette.neutral[900]} />
              </Typography>
            </Link>
            {!tabScreen && (
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
                    ".MuiButtonBase-root a": {
                      fontWeight: "400!important",
                      fontFamily: '"Inter","sans-serif"',
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
                      <CustomMenuItem disableRipple>
                        <Link href={item?.url ? item?.url : "#"}>
                          {item?.title}
                        </Link>
                      </CustomMenuItem>
                    )}
                  </React.Fragment>
                ))}
              </Popover>
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
