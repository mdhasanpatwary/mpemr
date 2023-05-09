import { FooterWrapStyle } from "./Footer.style";
import FooterBottom from "./footer-bottom";
import FooterTop from "./footer-top";

const Footer = () => {
  return (
    <footer>
      <FooterWrapStyle>
        <FooterTop />
        <FooterBottom />
      </FooterWrapStyle>
    </footer>
  );
};

export default Footer;
