import {
	Autocomplete,
	Box,
	Button,
	Card,
	Checkbox,
	FormControlLabel,
	Grid,
	Switch,
	TextField,
} from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { FormikProvider, useFormik } from 'formik';
import { useCallback } from 'react';
import FormItemLabel from '../../components/form-item-label';
import { initialValues } from './common/config-render';
import { FormikDataType } from './common/type';
import { validationSchema } from './common/validation';

const UpdateCoupon = () => {
	const handleSubmit = useCallback(async (values: any) => {
		console.log(values);
	}, []);

	const formikBag = useFormik<FormikDataType>({
		initialValues,
		validationSchema,
		onSubmit: handleSubmit,
	});

	const onSubmit = useCallback(() => {
		formikBag.submitForm();
	}, [formikBag]);

	return (
		<FormikProvider value={formikBag}>
			<Card sx={{ width: '100%', padding: '24px 40px', marginTop: '20px' }}>
				<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
					<Grid container columnSpacing={{ xs: 2, sm: 3, md: 4 }} justifyContent="space-between">
						<Grid item xs={5}>
							<FormItemLabel label={'Mã coupon'}>
								<TextField
									fullWidth
									id="code"
									name="code"
									placeholder="Mã coupon"
									value={formikBag.values.code}
									onChange={formikBag.handleChange}
									error={formikBag.touched.code && Boolean(formikBag.errors.code)}
									helperText={formikBag.touched.code && formikBag.errors.code}
								/>
							</FormItemLabel>
							<FormItemLabel label={'Thời gian hoạt động'}>
								<Grid justifyContent="space-between" display={'flex'}>
									<LocalizationProvider dateAdapter={AdapterDateFns}>
										<DatePicker
											label="Ngày bắt đầu"
											value={formikBag.values.dateStart !== '' ? formikBag.values.dateStart : null}
											onChange={(newValue) => {
												formikBag.setFieldValue('dateStart', newValue);
											}}
											renderInput={(params) => (
												<TextField
													{...params}
													error={formikBag.touched.dateStart && Boolean(formikBag.errors.dateStart)}
													helperText={formikBag.touched.dateStart && formikBag.errors.dateStart}
												/>
											)}
										/>
										<DatePicker
											label="Ngày kết thúc"
											value={formikBag.values.dateEnd !== '' ? formikBag.values.dateEnd : null}
											onChange={(newValue) => {
												formikBag.setFieldValue('dateEnd', newValue);
											}}
											renderInput={(params) => (
												<TextField
													{...params}
													error={formikBag.touched.dateEnd && Boolean(formikBag.errors.dateEnd)}
													helperText={formikBag.touched.dateEnd && formikBag.errors.dateEnd}
												/>
											)}
										/>
									</LocalizationProvider>
								</Grid>
							</FormItemLabel>
							<FormItemLabel label={'User'}>
								<Autocomplete
									fullWidth
									id="user"
									options={['', 'The Godfather', 'Pulp Fiction']}
									value={formikBag.values.user}
									onChange={formikBag.handleChange}
									isOptionEqualToValue={(option: any, value: any) => option.value === value.value}
									renderInput={(params) => (
										<TextField
											{...params}
											label="Vui lòng chọn trường này"
											error={formikBag.touched.user && Boolean(formikBag.errors.user)}
											helperText={formikBag.touched.user && formikBag.errors.user}
										/>
									)}
								/>
							</FormItemLabel>
							<FormItemLabel label={'Chương trình khuyến mãi'}>
								<Autocomplete
									fullWidth
									id="promotion"
									options={['The Godfather', 'Pulp Fiction']}
									value={formikBag.values.promotion}
									onChange={formikBag.handleChange}
									isOptionEqualToValue={(option: any, value: any) => option.value === value.value}
									renderInput={(params) => (
										<TextField
											{...params}
											label="Vui lòng chọn trường này"
											error={formikBag.touched.promotion && Boolean(formikBag.errors.promotion)}
											helperText={formikBag.touched.promotion && formikBag.errors.promotion}
										/>
									)}
								/>
							</FormItemLabel>
						</Grid>
						<Grid item xs={5}>
							<Grid mb={5}>
								<FormControlLabel control={<Switch defaultChecked />} label="Tùy chỉnh" />
							</Grid>
							<FormItemLabel label={'Số lượng mã'}>
								<TextField
									fullWidth
									type="number"
									id="quantity"
									name="quantity"
									placeholder="Vui lòng nhập trường này"
									value={formikBag.values.quantity}
									onChange={formikBag.handleChange}
									error={formikBag.touched.quantity && Boolean(formikBag.errors.quantity)}
									helperText={formikBag.touched.quantity && formikBag.errors.quantity}
								/>
							</FormItemLabel>
							<FormItemLabel label={'Số lượng ký tự'}>
								<TextField
									fullWidth
									type="number"
									id="couponLength"
									name="couponLength"
									placeholder="Vui lòng nhập trường này"
									value={formikBag.values.codeGeneration}
									onChange={formikBag.handleChange}
									error={
										formikBag.touched.codeGeneration && Boolean(formikBag.errors.codeGeneration)
									}
									helperText={formikBag.touched.codeGeneration && formikBag.errors.codeGeneration}
								/>
							</FormItemLabel>
							<FormItemLabel label={'Quy định ký tự bắt buộc'}>
								<TextField
									fullWidth
									id="codeGeneration"
									name="codeGeneration"
									placeholder="XXXXXXXXXX"
									value={formikBag.values.codeGeneration}
									onChange={formikBag.handleChange}
									error={
										formikBag.touched.codeGeneration && Boolean(formikBag.errors.codeGeneration)
									}
									helperText={formikBag.touched.codeGeneration && formikBag.errors.codeGeneration}
								/>
								<Grid mt={4}>
									<FormControlLabel
										control={
											<Checkbox
												value={formikBag.values.codeGeneration}
												onChange={formikBag.handleChange}
											/>
										}
										label="Bao gồm số (VD: 1234)"
									/>
									<FormControlLabel
										control={
											<Checkbox
												value={formikBag.values.codeGeneration}
												onChange={formikBag.handleChange}
											/>
										}
										label="Bao gồm các ký tự viết hoa (VD: ABCDEFGH)"
									/>
									<FormControlLabel
										control={
											<Checkbox
												value={formikBag.values.codeGeneration}
												onChange={formikBag.handleChange}
											/>
										}
										label="Bao gồm các ký tự viết thường (VD: abcdefgh)"
									/>
								</Grid>
							</FormItemLabel>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<Box sx={{ textAlign: 'right' }}>
						<Button variant="contained" onClick={onSubmit}>
							Lưu
						</Button>
					</Box>
				</Grid>
			</Card>
		</FormikProvider>
	);
};

export default UpdateCoupon;
