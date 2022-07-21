import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type Props = {
  chartLabel: Array<string>;
  chartData: any;
  indexAxis?: "x" | "y";
  legendPosition?: "bottom" | "top" | "right" | "left";
  chartTitle: string;
  chartSubTitle?: string;
};
const BarChartCommon = ({
  chartLabel,
  chartSubTitle = "",
  chartData = [],
  chartTitle,
  legendPosition = "bottom",
  indexAxis = "x",
}: Props) => {
  const options = {
    indexAxis: indexAxis,
    responsive: true,
    plugins: {
      legend: {
        position: legendPosition,
      },
      title: {
        display: true,
        text: [chartTitle, chartSubTitle],
        padding: {
          top: 10,
          bottom: 20,
        },
      },
    },
  };

  const data = {
    labels: chartLabel,
    datasets: chartData,
  };

  return <Bar data={data} options={options} />;
};

export default BarChartCommon;
