// ** MUI Imports
import { Avatar, Box, Card, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import React, { useMemo } from "react";
import ApexChartWrapper from "src/@core/styles/libs/react-apexcharts";
import Switch from "@mui/material/Switch";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  root: {
    "& .MuiDataGrid-columnHeaderCheckbox .MuiDataGrid-columnHeaderTitleContainer":
      {
        display: "none",
      },
  },
}));

function createData(id: string, name: string, active: boolean) {
  return { id, name, active };
}

const rows = [
  createData("1", "ATM", true),
  createData("2", "Tiền mặt", true),
  createData("3", "Thẻ tín dụng/ Ghi nợ", true),
  createData("4", "Ví Moca của Grab", false),
  createData("5", "Ví Momo", true),
  createData("6", "Ví Shopee", true),
  createData("7", "Ví Zalopay", false),
];

const useColumns = (): GridColDef[] => {
  const columns = useMemo(
    () => [
      {
        field: "name",
        headerName: "Hình thức",
        width: 200,
      },
      {
        field: "active",
        headerName: "Kích hoạt",
        renderCell: (params: GridValueGetterParams) => {
          const { active } = params.row;
          return <Switch defaultChecked={active} />;
        },
      },
    ],
    []
  );
  return columns;
};

const DashboardContainer: React.FC = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={12}>
          <Card sx={{ padding: 5 }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Avatar
                alt="Johnny Depp"
                src="https://avatars.dicebear.com/api/micah/your-custom-seed.svg"
                sx={{ width: 120, height: 120 }}
              />
              <Box sx={{ marginLeft: 10 }}>
                <Typography variant="h5" gutterBottom>
                  Xin chào, Admin!
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                  ADMIN | VBT NEXTJS CMS
                </Typography>
              </Box>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={4} md={4}>
          <Card sx={{ padding: 5 }}>
            <DataGrid
              rows={rows}
              columns={useColumns()}
              rowsPerPageOptions={[5]}
              autoHeight
              hideFooter
              className={useStyles().root}
            />
          </Card>
        </Grid>
      </Grid>
    </ApexChartWrapper>
  );
};

export default DashboardContainer;
