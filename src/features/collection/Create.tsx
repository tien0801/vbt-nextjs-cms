import Actions from '@/src/components/Actions';
import DrawerComponent from '@/src/components/drawer';
import TableLayout from '@/src/components/Table';
import { Box, Button, Card, Grid, Switch, TextField, Typography } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { Form, FormikProvider, useFormik } from 'formik';
import { useCallback, useState } from 'react';
import FormItemLabel from '../../components/form-item-label';
import { useColumns } from '../product/common/hooks';
import { validationSchema } from './common/validation';
import ProductList from './components/product';

const CreateCollection = () => {
	const [visibleDrawer, setVisibleDrawer] = useState<boolean>(false);
	const [dataProduct, setDataProduct] = useState<any[]>([]);
	const columns = useColumns();

	const handleSubmit = async (values: any) => {
		console.log(values);
	};

	const formikBag = useFormik({
		initialValues: {
			title: '',
			description: '',
			tag: '',
			dateStart: '',
			dateEnd: '',
		},
		validationSchema: validationSchema,
		onSubmit: handleSubmit,
	});

	const onSubmit = (e: any) => {
		e.preventDefault();
		formikBag.submitForm();
	};

	const onAddProduct = useCallback(() => {
		setVisibleDrawer(true);
	}, []);

	const onSelectedRows = useCallback((selected, rows) => {
		formikBag.setFieldValue('products', selected);
		setDataProduct(rows);
	}, []);

	const handleDeleteProduct = useCallback(
		(values: number[]) => {
			const newData = dataProduct?.filter(
				(product: any) => product.id && !values.includes(product.id)
			);
			setDataProduct(newData);
			formikBag.setFieldValue(
				'products',
				newData?.map((item) => item.id)
			);
		},
		[dataProduct]
	);

	return (
		<FormikProvider value={formikBag}>
			<Form onSubmit={onSubmit} action="">
				<Card sx={{ width: '100%', padding: '24px 40px', marginTop: '20px' }}>
					<Grid container spacing={6}>
						<Grid item xs={12}>
							<FormItemLabel label={'Tình trạng hoạt động'}>
								<Switch defaultChecked />
							</FormItemLabel>
						</Grid>

						<Grid item xs={6}>
							<FormItemLabel label={'Tên bộ sưu tập'}>
								<TextField
									placeholder="Nhập dữ liệu"
									autoFocus
									fullWidth
									id="title"
									name="title"
									value={formikBag.values.title}
									onChange={formikBag.handleChange}
									error={
										formikBag.touched.title && Boolean(formikBag.errors.title)
									}
									helperText={formikBag.touched.title && formikBag.errors.title}
								/>
							</FormItemLabel>
						</Grid>
						<Grid item xs={6}>
							<FormItemLabel label={'Đường dẫn'}>
								<TextField
									placeholder="Nhập dữ liệu"
									autoFocus
									fullWidth
									id="description"
									name="description"
									value={formikBag.values.description}
									onChange={formikBag.handleChange}
									error={
										formikBag.touched.description &&
										Boolean(formikBag.errors.description)
									}
									helperText={
										formikBag.touched.description &&
										formikBag.errors.description
									}
								/>
							</FormItemLabel>
						</Grid>
						<Grid item xs={6}>
							<FormItemLabel label={'Thẻ'}>
								<TextField
									placeholder="Nhập dữ liệu"
									autoFocus
									fullWidth
									id="tag"
									name="tag"
									value={formikBag.values.tag}
									onChange={formikBag.handleChange}
									error={formikBag.touched.tag && Boolean(formikBag.errors.tag)}
									helperText={formikBag.touched.tag && formikBag.errors.tag}
								/>
							</FormItemLabel>
						</Grid>
						<Grid item xs={6}>
							<FormItemLabel label="Thời gian áp dụng">
								<Grid item justifyContent={'space-between'} display={'flex'}>
									<LocalizationProvider dateAdapter={AdapterDateFns}>
										<DatePicker
											label="Ngày bắt đầu"
											value={
												formikBag.values.dateStart !== ''
													? formikBag.values.dateStart
													: null
											}
											onChange={(newValue) => {
												formikBag.setFieldValue('dateStart', newValue);
											}}
											renderInput={(params) => (
												<TextField
													{...params}
													error={
														formikBag.touched.dateStart &&
														Boolean(formikBag.errors.dateStart)
													}
													helperText={
														formikBag.touched.dateStart &&
														formikBag.errors.dateStart
													}
												/>
											)}
										/>
										<DatePicker
											label="Ngày kết thúc"
											value={
												formikBag.values.dateEnd !== ''
													? formikBag.values.dateEnd
													: null
											}
											onChange={(newValue) => {
												formikBag.setFieldValue('dateEnd', newValue);
											}}
											renderInput={(params) => (
												<TextField
													{...params}
													error={
														formikBag.touched.dateEnd &&
														Boolean(formikBag.errors.dateEnd)
													}
													helperText={
														formikBag.touched.dateEnd &&
														formikBag.errors.dateEnd
													}
												/>
											)}
										/>
									</LocalizationProvider>
								</Grid>
							</FormItemLabel>
						</Grid>
					</Grid>

					<Grid item xs={12}>
						<Box
							sx={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<Typography sx={{ width: '50%', marginBottom: 0 }} mb={2}>
								Sản phẩm & Dịch vụ
							</Typography>
							<Actions create={onAddProduct} />
						</Box>

						<TableLayout
							loading={false}
							rows={dataProduct}
							columns={columns}
							total={10}
							page={1}
							pageSize={10}
							onConfirmDelete={handleDeleteProduct}
							selectModels
							noPagination
						/>
					</Grid>
					<DrawerComponent
						title="Thêm sản phẩm vào bộ sưu tập"
						visible={visibleDrawer}
						setVisible={setVisibleDrawer}
					>
						<ProductList onSelectedRows={onSelectedRows} initSelected={dataProduct} />
					</DrawerComponent>

					<Grid item xs={12}>
						<Box sx={{ textAlign: 'right' }}>
							<Button variant={'contained'} type="submit">
								Tạo
							</Button>
						</Box>
					</Grid>
				</Card>
			</Form>
		</FormikProvider>
	);
};

export default CreateCollection;
