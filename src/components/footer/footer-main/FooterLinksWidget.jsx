import { useTheme } from "@emotion/react";
import { Typography, Stack } from "@mui/material";
import { useRouter } from "next/router";
import { PropTypes } from "prop-types";

const FooterLinksWidget = ({ footerLinks, title }) => {
  const router = useRouter();
  const theme = useTheme();
  function footerLinkClick(url) {
    router.push(url);
  }
  return (
    <>
      <Typography
        variant="h5"
        mb={2}
        sx={{
          textTransform: "capitalize",
          fontWeight: "500",
          color: theme.palette.neutral[200],
        }}>
        {title}
      </Typography>
      <Stack spacing={1}>
        {footerLinks.map((item, index) => {
          return (
            <Typography
              key={index}
              onClick={() => footerLinkClick(item.url)}
              sx={{
                cursor: "pointer",
                color: theme.palette.footer.color,
                transition: "all .3s ease",
                "&:hover": { color: theme.palette.secondary.main },
              }}>
              {item.linkText}
            </Typography>
          );
        })}
      </Stack>
    </>
  );
};

FooterLinksWidget.propTypes = {
  footerLinks: PropTypes.array,
  title: PropTypes.string,
};

export default FooterLinksWidget;
