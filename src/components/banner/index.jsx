import React, { useRef, useState } from "react";
import { Button, Stack, Typography } from "@mui/material";
import { SwiperWrap } from "./Banner.style";
import { CustomContainer } from "../../styled-components/CustomStyled.style";
import LocalLibraryOutlinedIcon from "@mui/icons-material/LocalLibraryOutlined";
import CustomImage from "../global/CustomImage";
import { EffectCreative, Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTheme } from "@emotion/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-creative";
const BannerImg = "/image/media/banner.png";

const Banner = () => {
  const theme = useTheme();

  return (
    <SwiperWrap PaginationCenter="true">
      <Swiper
        pagination={{
          clickable: true,
        }}
        speed={500}
        grabCursor={true}
        loop={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -800],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[EffectCreative, Autoplay, Pagination]}>
        <SwiperSlide>
          <CustomImage boxClass="banner-bg-img" src={BannerImg} />
          <CustomContainer>
            <Stack alignItems="center" pb={28} pt={28} textAlign="center">
              <Typography
                variant="h1"
                color={theme.palette.neutral[100]}
                textTransform="uppercase"
                maxWidth="999px"
                lineHeight={1.2}
                mb={2.5}
                sx={{
                  fontSize: {
                    xl: "72px",
                    lg: "64px",
                    md: "56px",
                    sm: "48px",
                    xs: "36px",
                  },
                }}>
                Energy Efficiency And Emissions Reduction
              </Typography>
              <Typography
                fontSize="1.125rem"
                color={theme.palette.neutral[100]}
                maxWidth="850px"
                mb={5.5}>
                The Country leads the global effort through developing circular
                carbon economy (CCE), in order maximise sustainable benefit
                while ensuring sustainable economic growth.{" "}
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                sx={{ borderRadius: "50rem" }}
                startIcon={<LocalLibraryOutlinedIcon />}>
                Read More
              </Button>
            </Stack>
          </CustomContainer>
        </SwiperSlide>
        <SwiperSlide>
          <CustomImage boxClass="banner-bg-img" src={BannerImg} />
          <CustomContainer>
            <Stack alignItems="center" pb={28} pt={28} textAlign="center">
              <Typography
                variant="h1"
                color={theme.palette.neutral[100]}
                textTransform="uppercase"
                maxWidth="999px"
                lineHeight={1.2}
                mb={2.5}
                sx={{
                  fontSize: {
                    xl: "72px",
                    lg: "64px",
                    md: "56px",
                    sm: "48px",
                    xs: "36px",
                  },
                }}>
                Energy Efficiency And Emissions Reduction
              </Typography>
              <Typography
                fontSize="1.125rem"
                color={theme.palette.neutral[100]}
                maxWidth="850px"
                mb={5.5}>
                The Country leads the global effort through developing circular
                carbon economy (CCE), in order maximise sustainable benefit
                while ensuring sustainable economic growth.{" "}
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                sx={{ borderRadius: "50rem" }}
                startIcon={<LocalLibraryOutlinedIcon />}>
                Read More
              </Button>
            </Stack>
          </CustomContainer>
        </SwiperSlide>
        <SwiperSlide>
          <CustomImage boxClass="banner-bg-img" src={BannerImg} />
          <CustomContainer>
            <Stack alignItems="center" pb={28} pt={28} textAlign="center">
              <Typography
                variant="h1"
                color={theme.palette.neutral[100]}
                textTransform="uppercase"
                maxWidth="999px"
                lineHeight={1.2}
                mb={2.5}
                sx={{
                  fontSize: {
                    xl: "72px",
                    lg: "64px",
                    md: "56px",
                    sm: "48px",
                    xs: "36px",
                  },
                }}>
                Energy Efficiency And Emissions Reduction
              </Typography>
              <Typography
                fontSize="1.125rem"
                color={theme.palette.neutral[100]}
                maxWidth="850px"
                mb={5.5}>
                The Country leads the global effort through developing circular
                carbon economy (CCE), in order maximise sustainable benefit
                while ensuring sustainable economic growth.{" "}
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                sx={{ borderRadius: "50rem" }}
                startIcon={<LocalLibraryOutlinedIcon />}>
                Read More
              </Button>
            </Stack>
          </CustomContainer>
        </SwiperSlide>
      </Swiper>
    </SwiperWrap>
  );
};

export default Banner;
