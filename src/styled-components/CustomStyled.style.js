import { Stack, styled, Box, Button } from "@mui/material";
const AboutBg = "image/media/about-bg.png"

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
  zIndex: 1,
  "&::after": {
    inlineSize: "100%",
    blockSize: "75%",
    backgroundColor: theme.palette.background.custom,
    backgroundImage: `url(${AboutBg})`,
    backgroundSize: "cover",
    backgroundPosition: "top right",
    content: '""',
    position: "absolute",
    zIndex:-1,
    insetInlineStart: 0,
    insetBlockStart: 0
  }
}));

export const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#000",
  color: "#fff",
  borderRadius: "50rem",
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
  }
}));