import { alpha, styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const VideoWrap = styled(Box)(({ theme, center }) => ({
  position: "relative",
  img: {
    borderRadius: ".625rem",
  },
  ".MuiButtonBase-root": {
    position: "absolute",
    zIndex: 1,
    insetInlineEnd: center ? "50%" : "60px",
    insetBlockEnd: center ? "50%" : "60px",
    transform: center ? "Translate(50%, 50%)" : "none",
  },
}));
