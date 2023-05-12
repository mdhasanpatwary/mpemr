import Banner from "../src/components/banner";
import { config_api } from "../src/api-manage/ApiRoutes";
import MainApi from "../src/api-manage/MainApi";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Router } from "next/router";
import { setConfigData } from "../src/redux/slices/configData";
import Meta from "../src/components/global/Meta";
import About from '../src/components/about';
import Gallery from '../src/components/gallery';
import { AboutGalleryWrap } from "../src/styled-components/CustomStyled.style";
import { Box } from "@mui/material";

const Home = ({ categoryData, configData }) => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   if (configData && configData.length === 0) {
  //     Router.push("/404");
  //   } else {
  //     dispatch(setConfigData(configData));
  //   }
  // }, [configData]);

  // useEffect(() => {
  //   categoryData &&
  //     categoryData?.details?.length > 0 &&
  //     dispatch(setCategoryData(categoryData?.details));
  // }, [categoryData]);

  return (
    <>
    <Meta title={`MPEMR | Ministry of Power, Energy and Mineral Resources`} description={`Ministry of Power, Energy and Mineral Resources`} />
      <Banner />
      <AboutGalleryWrap pt={12.5} pb={6}>
        <About />
        <Box pb={6}></Box>
        <Gallery />
      </AboutGalleryWrap>
    </>
  );
}

// Home.getLayout = function (page) {
//   return (
//     <>
//       <Layout>{page}</Layout>
//     </>
//   );
// };

export const getServerSideProps = async () => {
  // const { data: categoryData } = await MainApi.get(`${categories_api}`);
  // const { data: configData } = await MainApi.get(`${config_api}`);
  // const categoryRes = await fetch(
  //   `${process.env.NEXT_PUBLIC_BASE_URL}${categories_api}`,
  //   {
  //     method: "GET",
  //     // headers: {
  //     //   "X-software-id": 33571750,
  //     //   "X-server": "server",
  //     //   origin: process.env.NEXT_CLIENT_HOST_URL,
  //     // },
  //   }
  // );
  // const configRes = await fetch(
  //   `${process.env.NEXT_PUBLIC_BASE_URL}${config_api}`,
  //   {
  //     method: "GET",
  //   }
  // );
  // const category = await categoryRes.json();
  // const configData = await configRes.json();
  return {
    props: {
      categoryData: {},
      configData: {},
    },
  };
};

export default Home;