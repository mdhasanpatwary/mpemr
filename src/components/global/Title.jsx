import { useTheme } from "@emotion/react";
import { Typography } from "@mui/material";
import React from "react";

function Title({ title, subTitle, description, marginBottom, center }) {
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
      <Typography
        variant="h2"
        textAlign={center ? "center" : "start"}
        mb={marginBottom ? marginBottom : 2}>
        {title}
      </Typography>
      {description && (
        <Typography
          variant="body1"
          textAlign={center ? "center" : "start"}
          maxWidth={740}
          color={theme.palette.text.secondary}
          mx={center ? "auto" : "initial"}
          mb={4}>
          {description}
        </Typography>
      )}
    </>
  );
}

export default Title;
