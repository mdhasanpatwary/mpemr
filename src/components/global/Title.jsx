import { useTheme } from "@emotion/react";
import { Typography } from "@mui/material";
import React from "react";

function Title({ title, subTitle, marginBottom }) {
  const theme = useTheme();
  return (
    <>
      {subTitle && (
        <Typography
          variant="h3"
          textTransform="uppercase"
          color={theme.palette.primary.main}
          mb={2}
          sx={{
            borderInlineStart: `3px solid ${theme.palette.secondary.main}`,
            paddingInlineStart: ".5rem",
            lineHeight: 0.8,
          }}>
          {subTitle}
        </Typography>
      )}
      <Typography variant="h2" mb={marginBottom ? marginBottom : "1rem"}>
        {title}
      </Typography>
    </>
  );
}

export default Title;
