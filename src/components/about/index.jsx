import React from "react";
import { CustomContainer } from "../../styled-components/CustomStyled.style";
import {
  Button,
  Grid,
  ImageList,
  ImageListItemBar,
  Typography,
} from "@mui/material";
import CustomImage from "../global/CustomImage";
import { CustomImageListItem } from "./About.style";
import Title from "../global/Title";
import { useTheme } from "@emotion/react";
import LocalLibraryOutlinedIcon from "@mui/icons-material/LocalLibraryOutlined";
import { CustomButton } from "../../styled-components/CustomButton";

const AboutImg1 = "/image/media/about1.png";
const AboutImg2 = "/image/media/about2.png";
const AboutImg3 = "/image/media/about3.png";
const AboutBottomImg = "/image/media/about-bottom-img.png";

const Index = () => {
  const theme = useTheme();
  return (
    <CustomContainer>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} lg={6}>
          <ImageList
            variant="masonry"
            cols={2}
            gap={24}
            sx={{ marginBlock: 0 }}>
            <CustomImageListItem>
              <CustomImage width="100%" src={AboutImg1} />
              <ImageListItemBar
                title="Prime Minister"
                subtitle="Sheikh Hasina"
              />
            </CustomImageListItem>
            <CustomImageListItem>
              <CustomImage width="100%" src={AboutImg2} />
              <ImageListItemBar
                title="Tawfiq-e-Elahi Chowdhury"
                subtitle="Adviser (Minister)"
              />
            </CustomImageListItem>
            <CustomImageListItem>
              <CustomImage width="100%" src={AboutImg3} />
              <ImageListItemBar
                title="Minister of State"
                subtitle="Nasrul Hamid"
              />
            </CustomImageListItem>
          </ImageList>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Title
            title="Ministry of Power, Energy & Mineral"
            subTitle="Ministry Related"
          />
          <Typography color={theme.palette.text.secondary} mb={3}>
            Welcome from Ministry of power, energy & mineral resources (MPEMR),
            bangladesh. MPE – ministry MR – has two separate
            departments/secretariats headed by two departments. Power Sector
            Power generation using conventional.
          </Typography>
          <Typography color={theme.palette.text.secondary} mb={4}>
            Responsible for policy-making and implementation in all matters
            related transmission & distribution. Power sector is inextricably
            linked to all three functions generation.
          </Typography>
          <CustomButton
            variant="contained"
            sx={{ marginBottom: "1.5rem" }}
            startIcon={<LocalLibraryOutlinedIcon />}>
            Read More
          </CustomButton>
        </Grid>
        <Grid item xs={12} sx={{ img: { maxWidth: "100%" } }}>
          <CustomImage width="865" src={AboutBottomImg} />
        </Grid>
      </Grid>
    </CustomContainer>
  );
};

export default Index;
