import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

type Props = {
  chartLabel: Array<string>;
  chartData: any;
  indexAxis?: "x" | "y";
  legendPosition?: "bottom" | "top" | "right" | "left";
  chartTitle: string;
  chartSubTitle?: string;
};
const PieChartCommon = ({
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

  return <Pie data={data} options={options} />;
};

export default PieChartCommon;
