import { Stack } from "@mui/material";
import { CustomContainer } from "../../../styled-components/CustomStyled.style";
import { StyledHeaderTop } from "../Header.style";
import SocialLinks from "../../footer/footer-bottom/SocialLinks";
import CustomLanguage from "../header-main/CustomLanguage";

const HeaderTop = () => {
  return (
    <StyledHeaderTop>
      <CustomContainer>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center">
          <SocialLinks />
          <CustomLanguage />
        </Stack>
      </CustomContainer>
    </StyledHeaderTop>
  );
};

export default HeaderTop;
