import { Stack } from "@mui/system";
import { CustomContainer } from "../../../styled-components/CustomStyled.style";
import { Box, Link, Typography, alpha } from "@mui/material";
import { useSelector } from "react-redux";
import { useTheme } from "@emotion/react";

const Index = () => {
  const theme = useTheme();
  // const { configData } = useSelector((state) => state.configData);
  // const copyrightText = configData?.details?.copyright_text;
  return (
    <Box>
      <CustomContainer>
        <Stack
          alignItems="center"
          sx={{
            borderBlockStart: `1px solid ${alpha(
              theme.palette.background.paper,
              0.2
            )}`,
            paddingBlock: theme.spacing(3),
            textTransform: "capitalize",
          }}>
          <Typography color={theme.palette.neutral[200]}>
            copyright 2023 All rights reserved. Power by{" "}
            <Link href={`#`} color={theme.palette.secondary.main}>
              AbiT-Solution.
            </Link>
          </Typography>
        </Stack>
      </CustomContainer>
    </Box>
  );
};

export default Index;
