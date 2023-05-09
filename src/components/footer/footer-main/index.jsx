import { CustomContainer } from "../../../styled-components/CustomStyled.style";
import { Grid, Link, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { developmentPartner } from "./demoLinks";
import FooterLinksWidget from "./FooterLinksWidget";
import CustomImage from "../../global/CustomImage";
import { useTheme } from "@emotion/react";
import SocialLinks from "../../global/SocialLinks";
const footerLogo = "image/footer-logo.png";

const numbers = [9551261, 9555962, 9566099, 9572097, 9554664];

const Index = () => {
  const theme = useTheme();
  return (
    <Stack sx={{ paddingTop: "80px", paddingBottom: "30px" }}>
      <CustomContainer>
        <Grid container spacing={2}>
          <Grid item sm={6} lg={3}>
            <CustomImage width={168} src={footerLogo} />
          </Grid>
          <Grid item sm={6} lg={3}>
            <FooterLinksWidget
              footerLinks={developmentPartner}
              title="Development Partner"
            />
          </Grid>
          <Grid item sm={6} lg={3}>
            <>
              <Typography
                variant="h5"
                mb={2}
                sx={{
                  textTransform: "capitalize",
                  fontWeight: "500",
                  color: theme.palette.neutral[200],
                }}>
                Contact
              </Typography>
              <Stack spacing={1}>
                <Link
                  color={theme.palette.footer.color}
                  sx={{ "&:hover": { color: theme.palette.secondary.main } }}
                  href="mailto:info@mpemr.gov.bd">
                  info@mpemr.gov.bd
                </Link>
                <Stack direction="row" spacing={1}>
                  <Typography
                    variant="body1"
                    color={theme.palette.footer.color}>
                    Tel:
                  </Typography>
                  {numbers?.map((num, index) => (
                    <Link
                      key={index}
                      variant="body1"
                      color={theme.palette.footer.color}
                      sx={{
                        "&:hover": { color: theme.palette.secondary.main },
                      }}
                      href={`tel:${num}`}>
                      {num},
                    </Link>
                  ))}
                </Stack>
              </Stack>
            </>
          </Grid>
          <Grid item sm={6} lg={3}>
            <SocialLinks center />
          </Grid>
        </Grid>
      </CustomContainer>
    </Stack>
  );
};

export default Index;
