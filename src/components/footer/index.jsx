import { FooterWrapStyle } from "./Footer.style";
import FooterBottom from "./footer-bottom";
import FooterMain from "./footer-main";

const Footer = () => {
  return (
    <footer>
      <FooterWrapStyle>
        <FooterMain />
        <FooterBottom />
      </FooterWrapStyle>
    </footer>
  );
};

export default Footer;
