import { styled, alpha, Stack, Button, MenuItem } from "@mui/material";

export const StyledHeaderTop = styled(Stack)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: theme.palette.primary.main,
}));

export const StyledHeaderMiddle = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(2, 0),
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: theme.palette.background.paper,
  borderBlock: "1px solid #ddd",
}));

export const LanguageSwitchButton = styled(Button)(({ theme, active }) => ({
  padding: theme.spacing(0.25, 2.5),
  color: theme.palette.neutral[100],
  borderRadius: "0",
  backgroundColor:
    active === "true" ? theme.palette.secondary.main : "transparent",
  "&:hover": {
    backgroundColor:
      active === "true"
        ? theme.palette.secondary.main
        : alpha(theme.palette.secondary.main, 0.12),
  },
}));

export const CustomMenuItem = styled(MenuItem)(({ theme }) => ({
  a: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    fontWeight: "600",
    gap: "5px",
  },
  [theme.breakpoints.down("lg")]: {
    minHeight: "36px",
    flexWrap: "wrap",
    ".MuiCollapse-wrapperInner": {
      paddingBlockStart: "10px",
    },
    ".MuiMenuItem-root": {
      paddingBlock: "3px",
    },
  },
}));
