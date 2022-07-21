import Actions from "@/src/components/Actions";
import FilterLayout from "@/src/components/Filter";
import FormItemLabel from "@/src/components/form-item-label";
import TableLayout from "@/src/components/Table";
import { Card, Grid, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { useColumns } from "./common/hooks";
import { FormikFilterType } from "./common/types";

const StoreComponent = () => {
  const router = useRouter();
  const columns = useColumns();

  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(10);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const onSubmit = useCallback((values: FormikFilterType) => {
    console.log(values);
  }, []);

  const formik = useFormik<FormikFilterType>({
    initialValues: {
      provinceId: 0,
      districtId: 0,
    },
    onSubmit,
  });

  const onReset = useCallback(() => {
    formik.resetForm();
  }, []);

  const onRefresh = useCallback(() => {
    //
  }, []);

  const onPageSize = useCallback((pageSize: number) => {
    setPageSize(pageSize);
  }, []);

  const onPageChange = useCallback((page: number) => {
    setPage(page);
  }, []);

  const onDelete = useCallback((array: any) => {
    //
  }, []);

  const onCreate = useCallback(() => router.push("/store/create"), []);

  return (
    <Grid container spacing={6} mt={1} justifyContent="space-between">
      <FilterLayout
        formik={formik}
        loading={false}
        onFilter={() => formik.submitForm()}
        onReFresh={onReset}
      >
        <Grid item xs={6} md={4}>
          <FormItemLabel label="Tỉnh/TP">
            <TextField
              fullWidth
              select
              size="small"
              name="provinceId"
              value={formik.values.provinceId}
              //   onChange={onChangeProvinces}
            >
              {/* {provinces?.map((item, index) => (
                <MenuItem key={index} value={item.value}>
                  {item.label}
                </MenuItem>
              ))} */}
            </TextField>
          </FormItemLabel>
        </Grid>

        <Grid item xs={6} md={4}>
          <FormItemLabel label="Quận/Huyện">
            <TextField
              fullWidth
              select
              size="small"
              name="districtId"
              value={formik.values.districtId}
              //   onChange={onChangeDistricts}
            >
              {/* {districts?.map((item, index) => (
                <MenuItem key={index} value={item.value}>
                  {item.label}
                </MenuItem>
              ))} */}
            </TextField>
          </FormItemLabel>
        </Grid>
      </FilterLayout>
      <Grid item xs={12}>
        <Card>
          <Actions refresh={onRefresh} create={onCreate} />
          <TableLayout
            rows={[
              {
                id: "1",
                name: "Pamperme Lê Văn Việt",
                address: "261 Lê Văn Việt, Tăng Nhơn Phú B Quận 9",
                active: true,
              },
            ]}
            columns={columns}
            loading={loading}
            onHandlePageSize={onPageSize}
            onHandlePageChange={onPageChange}
            onConfirmDelete={onDelete}
            page={page}
            pageSize={pageSize}
            total={total}
            selectModels={true}
          />
        </Card>
      </Grid>
    </Grid>
  );
};

export default StoreComponent;
