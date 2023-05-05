import { useTheme } from "@emotion/react";
import { ReactTicker } from "@guna81/react-ticker";
import { Typography } from "@mui/material";

const LatestNewsTicker = ({news}) => {
  const theme = useTheme()

  const renderItem = (news) => {
    return (
      <Typography variant="body1" fontSize="1rem" whiteSpace="nowrap" color={theme.palette.primary.main}>
        {news.value}
      </Typography>
    );
  };

  return (
      <ReactTicker
        data={news}
        component={renderItem}
        speed={40}
        keyName={news?.id}
        loop={true}
        delay={-20}
        tickerStyle={{
          width: "100%",
          backgroundColor: theme.palette.background.paper,
        }}
        itemStyle={{
          padding: "0 .5rem",
        }}
      />
  );
}
export default LatestNewsTicker