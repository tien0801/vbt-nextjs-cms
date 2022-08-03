import { convertDate } from "@/src/helpers/moment";
import SaveIcon from "@mui/icons-material/Save";
import LoadingButton from "@mui/lab/LoadingButton";
import { Box, Card, Grid, Switch, TextField } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { FormikProvider, useFormik } from "formik";
import { useCallback, useState } from "react";
import FormItemLabel from "../../components/form-item-label";
import { initialValues } from "./common/hooks";
import { FormikDataType } from "./common/types";

const StoreUpdateComponent = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = useCallback((values: FormikDataType) => {
    console.log(values);
    setLoading(true);
    setLoading(false);
  }, []);

  const formik = useFormik<FormikDataType>({
    initialValues,
    onSubmit,
  });

  return (
    <FormikProvider value={formik}>
      <Card sx={{ width: "100%", padding: "24px 40px", marginTop: "20px" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid container spacing={6} columnSpacing={{ xs: 2, sm: 3, md: 4 }}>
            <Grid item xs={6}>
              <FormItemLabel label="Tên cửa hàng">
                <TextField
                  placeholder="Nhập dữ liệu"
                  fullWidth
                  id="name"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
              </FormItemLabel>
            </Grid>

            <Grid item xs={6}>
              <FormItemLabel label="Địa chỉ">
                <TextField
                  placeholder="Nhập dữ liệu"
                  fullWidth
                  id="address"
                  name="address"
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.address && Boolean(formik.errors.address)
                  }
                  helperText={formik.touched.address && formik.errors.address}
                />
              </FormItemLabel>
            </Grid>

            <Grid item xs={6}>
              <FormItemLabel label="Tỉnh/TP">
                <TextField
                  value={formik.values.provinceId}
                  //   onChange={onChangeProvinces}
                  name="provinceId"
                  fullWidth
                  select
                  error={
                    formik.touched.provinceId &&
                    Boolean(formik.errors.provinceId)
                  }
                  helperText={
                    formik.touched.provinceId && formik.errors.provinceId
                  }
                >
                  {/* {provinces?.map((item, index) => (
                    <MenuItem key={index} value={item.value}>
                      {item.label}
                    </MenuItem>
                  ))} */}
                </TextField>
              </FormItemLabel>
            </Grid>

            <Grid item xs={6}>
              <FormItemLabel label="Quận/Huyện">
                <TextField
                  value={formik.values.districtId}
                  //   onChange={onChangeDistricts}
                  name="districtId"
                  fullWidth
                  select
                  error={
                    formik.touched.districtId &&
                    Boolean(formik.errors.districtId)
                  }
                  helperText={
                    formik.touched.districtId && formik.errors.districtId
                  }
                >
                  {/* {districts?.map((item, index) => (
                    <MenuItem key={index} value={item.value}>
                      {item.label}
                    </MenuItem>
                  ))} */}
                </TextField>
              </FormItemLabel>
            </Grid>

            <Grid item xs={6}>
              <FormItemLabel label="Vĩ độ">
                <TextField
                  placeholder="Nhập dữ liệu"
                  fullWidth
                  id="lat"
                  name="lat"
                  value={formik.values.lat}
                  onChange={formik.handleChange}
                  error={formik.touched.lat && Boolean(formik.errors.lat)}
                  helperText={formik.touched.lat && formik.errors.lat}
                />
              </FormItemLabel>
            </Grid>
            <Grid item xs={6}>
              <FormItemLabel label="Kinh độ">
                <TextField
                  placeholder="Nhập dữ liệu"
                  fullWidth
                  id="lng"
                  name="lng"
                  value={formik.values.lng}
                  onChange={formik.handleChange}
                  error={formik.touched.lng && Boolean(formik.errors.lng)}
                  helperText={formik.touched.lng && formik.errors.lng}
                />
              </FormItemLabel>
            </Grid>

            <Grid item xs={6}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Grid container>
                  <Grid item xs={6}>
                    <FormItemLabel label="Giờ mở cửa">
                      <Grid justifyContent="space-between" display="flex">
                        <TimePicker
                          inputFormat="hh:mm"
                          label="Time"
                          value={formik.values.openTime}
                          onChange={(newValue) => {
                            formik.setFieldValue(
                              "openTime",
                              convertDate(newValue, "hh:mm:ss")
                            );
                          }}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </Grid>
                    </FormItemLabel>
                  </Grid>
                  <Grid item xs={6}>
                    <FormItemLabel label="Giờ đóng cửa">
                      <Grid justifyContent="space-between" display="flex">
                        <TimePicker
                          inputFormat="hh:mm"
                          label="Time"
                          value={formik.values.closeTime}
                          onChange={(newValue2) => {
                            formik.setFieldValue(
                              "closeTime",
                              convertDate(newValue2, "hh:mm:ss")
                            );
                          }}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </Grid>
                    </FormItemLabel>
                  </Grid>
                </Grid>
              </LocalizationProvider>
            </Grid>

            <Grid item xs={6}>
              <FormItemLabel label="Tình trạng hoạt động">
                <Switch
                  defaultChecked
                  name="active"
                  onChange={formik.handleChange}
                />
              </FormItemLabel>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ textAlign: "right", marginTop: "20px" }}>
            <LoadingButton
              variant="contained"
              onClick={() => formik.submitForm()}
              loading={loading}
              loadingPosition="start"
              startIcon={<SaveIcon />}
            >
              Tạo
            </LoadingButton>
          </Box>
        </Grid>
      </Card>
    </FormikProvider>
  );
};

export default StoreUpdateComponent;
