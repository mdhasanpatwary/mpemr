import { useRouter } from "next/router";
import Image from "next/image";
import { styled } from "@mui/material";
export const ImgWrap = styled("div")(({ theme, height, width }) => ({
  inlineSize: width,
  blockSize: height,
  //   justifyContent: "center",
  cursor: "pointer",
  //   "& img": {
  //     width: "100%",
  //     height: "100%",
  //     objectFit: "contain",
  //   },
}));

const CustomImage = ({ src, atlText, height, width, ...rest }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/").then();
  };
  return (
    <ImgWrap width={width} height={height} onClick={handleClick}>
      <img width={width} src={src} alt={atlText} {...rest} />
      {/* <Image src={logoURL} alt={atlText} layout="fill" objectFit="contain" /> */}
    </ImgWrap>
  );
};
export default CustomImage;
