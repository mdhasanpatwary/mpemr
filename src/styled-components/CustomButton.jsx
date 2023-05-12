import { styled, Button, Box } from "@mui/material";

export const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.neutral[1000],
  color: theme.palette.neutral[100],
  borderRadius: "50rem",
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
  },
}));

export const YoutubeButton = styled(Button)(({ theme, width, height }) => ({
  color: theme.palette.secondary.main,
  borderRadius: "50%",
  padding: "0",
  svg: {
    inlineSize: width ? `${width}px` : "90px",
    blockSize: height ? `${height}px` : "90px",
  },
  "&:hover": {
    color: theme.palette.primary.main,
  },
}));
