import dynamic from "next/dynamic";
import { LayoutWrap } from "../../styled-components/CustomStyled.style";
import Footer from "../footer";
import { NoSsr } from "@mui/material";
// import Header from "../header/index";

function Layout({ children }) {
  const DynamicHeadear = dynamic(() => import("../header"), {
    ssr: false,
  });
  return (
    <LayoutWrap>
      <NoSsr>
        <DynamicHeadear />
      </NoSsr>
      <main>{children}</main>
      <Footer />
    </LayoutWrap>
  );
}

export default Layout;
