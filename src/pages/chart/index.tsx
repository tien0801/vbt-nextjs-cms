import BarChart from "@/src/components/chart/bar";
import PieChart from "@/src/components/chart/pie";
import { Card, Grid } from "@mui/material";

const ChartCommon = () => {
  const labels = ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4"];
  const chartData = [
    {
      label: "Tổng DT",
      data: [50, 60, 70, 80],
      backgroundColor: "green",
    },
    {
      label: "DT từ gói",
      data: [15, 14, 86, 22],
      backgroundColor: "pink",
    },
    {
      label: "DT từ trải nghiệm",
      data: [87, 66, 22, 11],
      backgroundColor: "blue",
    },
    {
      label: "DT từ bán lẻ",
      data: [91, 43, 26, 87],
      backgroundColor: "red",
    },
  ];

  const pieData = [
    {
      label: "# of Votes",
      data: [18, 36, 44, 2],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      //   borderColor: [
      //     "rgba(255, 99, 132, 1)",
      //     "rgba(54, 162, 235, 1)",
      //     "rgba(255, 206, 86, 1)",
      //     "rgba(75, 192, 192, 1)",
      //     "rgba(153, 102, 255, 1)",
      //     "rgba(255, 159, 64, 1)",
      //   ],
      //   borderWidth: 1,
    },
  ];

  return (
    <Card sx={{ padding: "20px" }}>
      <Grid container spacing={6}>
        <Grid item xs={6}>
          <BarChart
            chartLabel={labels}
            chartData={chartData}
            chartTitle="BÁO CÁO DOANH THU"
            chartSubTitle="Đơn vị: tỷ"
          />
        </Grid>
        <Grid item xs={6}>
          <BarChart
            chartLabel={labels}
            chartData={chartData}
            chartTitle="BÁO CÁO DOANH THU"
            indexAxis="y"
            chartSubTitle="Đơn vị: tỷ"
          />
        </Grid>
        <Grid item xs={4}>
          <PieChart
            chartLabel={labels}
            chartData={pieData}
            chartTitle="BÁO CÁO DOANH THU"
            indexAxis="y"
            chartSubTitle="Đơn vị: %"
          />
        </Grid>
      </Grid>
    </Card>
  );
};

export default ChartCommon;
