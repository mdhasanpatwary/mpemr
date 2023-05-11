import React from "react";
import { CustomContainer } from "../../styled-components/CustomStyled.style";
import {
  Grid,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  ListSubheader,
  Typography,
} from "@mui/material";
import CustomImage from "../global/CustomImage";

const Index = () => {
  return (
    <CustomContainer>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={6}>
          <ImageList variant="masonry" cols={2} gap={24}>
            <ImageListItem>
              <CustomImage
                width="100%"
                height="450px"
                src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
              />
              <ImageListItemBar
                title="Prime Minister"
                subtitle="Sheikh Hasina"
              />
            </ImageListItem>
            <ImageListItem>
              <CustomImage
                width="100%"
                src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
              />
              <ImageListItemBar
                title="Tawfiq-e-Elahi Chowdhury"
                subtitle="Adviser (Minister)"
              />
            </ImageListItem>
            <ImageListItem>
              <CustomImage
                width="100%"
                src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
              />
              <ImageListItemBar
                title="Minister of State"
                subtitle="Nasrul Hamid"
              />
            </ImageListItem>
          </ImageList>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Typography variant="h3">Ministry Related</Typography>
          <Typography variant="h2">
            Ministry of Power, Energy & Mineral
          </Typography>
          <Typography>
            Welcome from Ministry of power, energy & mineral resources (MPEMR),
            bangladesh. MPE – ministry MR – has two separate
            departments/secretariats headed by two departments. Power Sector
            Power generation using conventional.
          </Typography>
          <Typography>
            Responsible for policy-making and implementation in all matters
            related transmission & distribution. Power sector is inextricably
            linked to all three functions generation.
          </Typography>
        </Grid>
      </Grid>
    </CustomContainer>
  );
};

export default Index;
