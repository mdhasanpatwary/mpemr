import { Stack } from "@mui/system";
import Logo from "../../logo/Logo";
const logoURL = "/image/logo.png";
import { CustomContainer } from "../../../styled-components/CustomStyled.style";
import { FooterBottomStyle } from "../Footer.style";
import { Typography } from "@mui/material";
import SocialLinks from "./SocialLinks";
import CustomLanguage from "../../header/header-main/CustomLanguage";
import { useSelector } from "react-redux";

function index() {
  // const { configData } = useSelector((state) => state.configData);
  // const copyrightText = configData?.details?.copyright_text;
  return (
    <FooterBottomStyle>
      <Stack pt={2} pb={2}>
        <CustomContainer>
          <Stack
            direction="row"
            gap="2rem"
            alignItems="center"
            justifyContent="space-between"
          >
            <SocialLinks />
            <Typography>copyrightText</Typography>
            {/* <Logo src={logoURL} width="120px" /> */}
            <CustomLanguage />
          </Stack>
        </CustomContainer>
      </Stack>
    </FooterBottomStyle>
  );
}

export default index;
