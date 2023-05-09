import { Stack } from "@mui/material";
import { CustomContainer } from "../../../styled-components/CustomStyled.style";
import { StyledHeaderTop } from "../Header.style";
import CustomLanguage from "../header-main/CustomLanguage";
import SocialLinks from "../../global/SocialLinks";

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
