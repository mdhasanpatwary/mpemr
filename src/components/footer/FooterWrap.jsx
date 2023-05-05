import React from "react";
import { FooterWrapStyle } from "./Footer.style";
import FooterBottom from "./footer-bottom";
import FooterTop from "./footer-top";

function FooterWrap() {
  return (
    <FooterWrapStyle>
      <FooterTop />
      <FooterBottom />
    </FooterWrapStyle>
  );
}

export default FooterWrap;
