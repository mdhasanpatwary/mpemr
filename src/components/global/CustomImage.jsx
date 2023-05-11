import { Box } from "@mui/material";
import Link from "next/link";
import { useState, useEffect } from "react";

function CustomImage({ src, alt, logo, boxClass, ...rest }) {
  // const [imgSrc, setImgSrc] = useState("");
  // useEffect(() => {
  //   setImgSrc(src);
  // }, [src]);

  return (
    <>
      {logo ? (
        <Link href="/">
          <img
            src={src}
            onError={({ target }) => {
              // currentTarget.onerror = null; // prevents looping
              //   setImgSrc(placeholder.src);
              // setImgSrc("https://via.placeholder.com/1200");
              target.src = "https://via.placeholder.com/1200";
            }}
            loading="lazy"
            alt={alt ? alt : ""}
            {...rest}
          />
        </Link>
      ) : (
        <Box className={boxClass && boxClass}>
          <img
            src={src}
            onError={({ target }) => {
              // currentTarget.onerror = null; // prevents looping
              //   setImgSrc(placeholder.src);
              // setImgSrc("https://via.placeholder.com/1200");
              target.src = "https://via.placeholder.com/1200";
            }}
            loading="lazy"
            alt={alt ? alt : ""}
            {...rest}
          />
        </Box>
      )}
    </>
  );
}

export default CustomImage;
