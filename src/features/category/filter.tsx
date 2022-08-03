import FilterLayout from "@/src/components/Filter";
import { Grid, TextField } from "@mui/material";
import React from "react";

type Props = {
  formikBag: any;
  onFilter: () => void;
  onReFresh: () => void;
  loading: boolean;
};
const Filter = React.memo(
  ({ formikBag, onFilter, onReFresh, loading }: Props) => {
    return (
      <FilterLayout
        formik={formikBag}
        loading={loading}
        onFilter={onFilter}
        onReFresh={onReFresh}
      >
        <Grid item xs={4}>
          <TextField
            defaultValue=""
            onChange={formikBag.handleChange}
            name={"name"}
            value={formikBag.values.name}
            fullWidth
            label={"Tên"}
            placeholder={"Nhập dữ liệu"}
            size="small"
          />
        </Grid>
      </FilterLayout>
    );
  }
);

export default Filter;
