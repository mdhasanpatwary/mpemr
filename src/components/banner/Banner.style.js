import { alpha, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
const BannerImg = "/image/media/banner.png";

export const SwiperWrap = styled(Box)(
  ({ theme }) => ({
    ".swiper": {
      inlineSize: "100%",
      blockSize: "100%",
      "&-slide": {
        backgroundColor: theme.palette.neutral[200],
        position: "relative",
        zIndex: 1,
        "& img" : {
          display: "block",
          inlineSize: "100%",
          blockSize: "100%",
          objectFit: "cover",
        },
        ".banner-bg-img": {
          position: "absolute",
          inlineSize: "100%",
          blockSize: "100%",
          zIndex: -1,
          "&::after": {
            position: "absolute",
            inlineSize: "100%",
            blockSize: "100%",
            content: '""',
            insetInlineStart: "0",
            insetBlockStart: "0",
            backgroundColor: alpha(theme.palette.neutral[1000], 0.66),
            zIndex: 0,
          }
        }
      },
      "&-pagination": {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        insetBlockEnd: "30px !important",
      },
      "&-pagination-bullet": {
        inlineSize: "6px",
        blockSize: "6px",
        textAlign: "center",
        lineHeight: "20px",
        fontSize: "12px",
        opacity: 1,
        backgroundColor: theme.palette.neutral[100],
        "&-active": {
          inlineSize: "16px",
          blockSize: "16px",
          backgroundColor: theme.palette.secondary.main,
          position: "relative",
          border: `5px solid ${theme.palette.neutral[100]}`,
          outline: `1px solid ${theme.palette.secondary.main}`,
          padding: ".25rem",
        }
      }
    }
    
  })
);