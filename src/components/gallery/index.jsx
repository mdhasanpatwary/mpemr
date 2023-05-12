import React from "react";
import { CustomContainer } from "../../styled-components/CustomStyled.style";
import { Grid } from "@mui/material";
import CustomImage from "../global/CustomImage";
import { VideoWrap } from "./Gallery.style";
import PopupVideo from "../global/PopupVideo";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperWrap } from "../banner/Banner.style";
const GalleryMainImg = "image/media/gallery.png";
const GalleryImg1 = "image/media/gallery1.png";
const GalleryImg2 = "image/media/gallery2.png";
const GalleryImg3 = "image/media/gallery3.png";

import "swiper/css";
import "swiper/css/pagination";

const Index = () => {
  return (
    <CustomContainer>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <VideoWrap>
            <CustomImage width="100%" src={GalleryMainImg} />
            <PopupVideo videoId="5w3KhhQB75o" width={120} height={120} />
          </VideoWrap>
        </Grid>
        <Grid item xs={12} md={4}>
          <VideoWrap center="true">
            <CustomImage width="100%" src={GalleryImg1} />
            <PopupVideo videoId="8YUmQ62L9zU" />
          </VideoWrap>
        </Grid>
        <Grid item xs={12} md={4}>
          <SwiperWrap borderRadius=".625rem">
            <Swiper
              pagination={{
                clickable: true,
              }}
              speed={500}
              grabCursor={true}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Pagination]}>
              <SwiperSlide>
                <CustomImage src={GalleryImg2} />
              </SwiperSlide>
              <SwiperSlide>
                <CustomImage src={GalleryImg2} />
              </SwiperSlide>
              <SwiperSlide>
                <CustomImage src={GalleryImg2} />
              </SwiperSlide>
            </Swiper>
          </SwiperWrap>
        </Grid>
        <Grid item xs={12} md={4}>
          <SwiperWrap borderRadius=".625rem">
            <Swiper
              pagination={{
                clickable: true,
              }}
              speed={500}
              grabCursor={true}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Pagination]}>
              <SwiperSlide>
                <CustomImage src={GalleryImg3} />
              </SwiperSlide>
              <SwiperSlide>
                <CustomImage src={GalleryImg3} />
              </SwiperSlide>
              <SwiperSlide>
                <CustomImage src={GalleryImg3} />
              </SwiperSlide>
            </Swiper>
          </SwiperWrap>
        </Grid>
      </Grid>
    </CustomContainer>
  );
};

export default Index;
