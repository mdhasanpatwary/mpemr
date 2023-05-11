import { Stack, styled, Box } from "@mui/material";
export const LayoutWrap = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  minHeight: "100vh",
}));

export const CustomContainer = styled(Stack)(({ theme, maxWidth }) => ({
  maxInlineSize: maxWidth ? maxWidth : "1320px",
  inlineSize: "100%",
  paddingInline: "1rem",
  marginInline: "auto",
}));

// export const Media = styled("div")(({ theme, gap }) => ({
//   display: "flex",
//   alignItems: "center",
//   gap: gap ? gap : "1rem",
// }));

// export const MediaBody = styled("div")(({ theme }) => ({
//   flex: 1,
// }));

export const AboutGalleryWrap = styled(Box)(({ theme }) => ({
  position: "relative",
  "&::after": {
    inlineSize: "100%",
    blockSize: "75%",
    backgroundColor: theme.palette.neutral[200],
    content: '""',
    position: "absolute",
    zIndex:-1,
    insetInlineStart: 0,
    insetBlockStart: 0
  }
}));