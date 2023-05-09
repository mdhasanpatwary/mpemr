import { StyledHeaderMiddle } from "../Header.style";
import { CustomContainer } from "../../../styled-components/CustomStyled.style";
import { Stack } from "@mui/system";
import { t } from "i18next";
import LatestNewsTicker from "./LatestNewsTicker";
import { Box, Typography, alpha } from "@mui/material";
import { useTheme } from "@emotion/react";
import CustomImage from "../../global/CustomImage";
const logoURL = "/image/logo.png";
const imgURL = "/image/media/mujib.png";

const news = [
  {
    id: 1,
    value: "Local resident discovers giant avocado in backyard",
  },
  {
    id: 2,
    value:
      "New study shows dogs can understand human emotions better than previously thought",
  },
  {
    id: 3,
    value:
      "Scientists develop eco-friendly plastic alternative made from seaweed",
  },
  {
    id: 4,
    value:
      "Controversial statue removed from town square following public outcry",
  },
  {
    id: 5,
    value:
      "Famous chef announces new vegan cookbook featuring plant-based twists on classic dishes",
  },
];

const HeaderMiddle = () => {
  const theme = useTheme();
  return (
    <StyledHeaderMiddle>
      <CustomContainer>
        <Stack
          alignItems="center"
          justifyContent="space-between"
          sx={{
            gap: { xs: 1.5, md: 10, lg: 20 },
            flexDirection: { xs: "column", md: "row" },
          }}>
          <Stack direction="row" gap={3} alignItems="center">
            <CustomImage src={imgURL} width="81" />
            <CustomImage src={logoURL} width="175" logo />
          </Stack>
          <Stack
            direction="row"
            flexGrow={1}
            alignItems="center"
            overflow="hidden"
            maxWidth="100%"
            sx={{
              border: `0.03125rem solid ${alpha(
                theme.palette.primary.main,
                0.3
              )}`,
              borderRadius: "0.3125rem",
            }}>
            <Box padding={theme.spacing(0, 1.5)} overflow="hidden">
              <LatestNewsTicker news={news} />
            </Box>
            <Typography
              variant="h6"
              color={theme.palette.primary.main}
              whiteSpace="nowrap"
              padding=".8125rem 1.25rem"
              backgroundColor={alpha(theme.palette.primary.main, 0.1)}>
              {t("Latest News")}
            </Typography>
          </Stack>
        </Stack>
      </CustomContainer>
    </StyledHeaderMiddle>
  );
};

export default HeaderMiddle;
