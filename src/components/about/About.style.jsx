import { alpha, styled } from "@mui/material/styles";
import { ImageListItem } from "@mui/material";

export const CustomImageListItem = styled(ImageListItem)(({ theme }) => ({
  img: {
    borderRadius: ".625rem",
  },
  ".MuiImageListItemBar-root": {
    inlineSize: "80%",
    backgroundColor: theme.palette.background.custom,
    borderStartEndRadius: ".625rem",
    bottom: ".25rem",
    ".MuiImageListItemBar-title": {
      color: theme.palette.text.primary,
    },
    ".MuiImageListItemBar-subtitle": {
      color: theme.palette.text.secondary,
    },
  },
}));
