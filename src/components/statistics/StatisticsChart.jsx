import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { CustomContainer } from "../../styled-components/CustomStyled.style";
import { Box } from "@mui/material";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
    },
  },
  interaction: {
    intersect: false,
    mode: "index",
  },
  scales: {
    x: {
      display: true,
      grid: {
        display: false, // remove x-axis grid lines
      },
    },
    y: {
      display: true,
      grid: {
        display: false, // remove y-axis grid lines
      },
      // ticks: { stepSize: 5 },
    },
  },
};

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const data = {
  labels,
  datasets: [
    {
      // fill: true,
      label: "Oil Reserves",
      data: [1, 3, 5, 7, 2, 3, 6, 3, 5, 7, 2, 3],
      borderColor: "rgb(0, 97, 225)",
      // background: (ctx) => {
      //   const gradient = ctx.canvas
      //     .getContext("2d")
      //     .createLinearGradient(0, 0, 0, 450);
      //   gradient.addColorStop(0, "rgba(255, 99, 132, 0.5)");
      //   gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
      //   return gradient;
      // },
      fill: "origin",
      // background:
      //   "linear-gradient(to bottom, rgba(0,97,255,1) 0%,rgba(255,255,255,0) 100%)",

      backgroundColor: "rgba(0, 97, 225, 0.1)",
      cubicInterpolationMode: "monotone",
      borderWidth: 1,
    },
    {
      fill: false,
      label: "Gas Reserves",
      data: [6, 3, 2, 7, 5, 3, 1, 2, 7, 5, 3, 1],
      borderColor: "rgb(7, 167, 77)",
      backgroundColor: "rgba(7, 167, 77, 0.5)",
      cubicInterpolationMode: "monotone",
      borderWidth: 1,
    },
    {
      fill: false,
      label: "Electricity",
      data: [5, 3, 1, 6, 3, 2, 7, 1, 6, 3, 2, 7],
      borderColor: "rgb(244, 42, 65)",
      backgroundColor: "rgba(244, 42, 65, 0.5)",
      cubicInterpolationMode: "monotone",
      borderWidth: 1,
    },
  ],
};

const StatisticsChart = () => {
  return (
    <CustomContainer>
      <Box
        height={300}
        sx={{
          backgroundColor: "#F8FAFF",
          padding: "1.25rem",
          borderRadius: ".5rem",
        }}>
        <Line options={options} data={data} width="100%" />
      </Box>
    </CustomContainer>
  );
};

export default StatisticsChart;
