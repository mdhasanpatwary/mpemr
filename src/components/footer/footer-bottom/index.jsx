import { Stack } from "@mui/system";
import { CustomContainer } from "../../../styled-components/CustomStyled.style";
import { FooterBottomStyle } from "../Footer.style";
import { Link, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useTheme } from "@emotion/react";

const Index = () => {
  const theme = useTheme();
  // const { configData } = useSelector((state) => state.configData);
  // const copyrightText = configData?.details?.copyright_text;
  return (
    <FooterBottomStyle>
      <Stack pt={2} pb={2}>
        <CustomContainer>
          <Stack alignItems="center">
            <Typography>
              copyright 2023 All rights reserved. Power by{" "}
              <Link href={`#`} color={theme.palette.secondary.main}>
                AbiT-Solution
              </Link>{" "}
              .
            </Typography>
          </Stack>
        </CustomContainer>
      </Stack>
    </FooterBottomStyle>
  );
};

export default Index;
