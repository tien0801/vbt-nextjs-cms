import { Card, Grid, Box, Switch, TextField, Button, MenuItem } from '@mui/material';
import { FormikProvider, useFormik } from 'formik';
import FormItemLabel from '../../components/form-item-label';
import TextFieldPrice from '../../components/text-field-price';
import UploadImages, { FileUploadProps } from '../../features/upload';
import { validationSchema } from './common/validation';

const UpdateProduct = () => {
	const initUploadProp: FileUploadProps = {
		accept: 'image/*',
		onChange: (values: any) => {
			console.log(values);
			if (values.file) {
				console.log(`Saving ${values.inputName}: `, values.file);
				// set value to formik
				// do somthing
			}
		},
		previewImage: true,
	};

	const handleSubmit = async (values: any) => {
		console.log(values);
	};

	const formikBag = useFormik({
		initialValues: {
			name: '',
			code: '',
			category: '',
			price: 0,
			status: true,
			active: true,
		},
		validationSchema: validationSchema,
		onSubmit: handleSubmit,
	});

	const onSubmit = () => {
		formikBag.submitForm();
	};

	return (
		<FormikProvider value={formikBag}>
			<Card sx={{ width: '100%', padding: '24px 40px', marginTop: '20px' }}>
				<Grid container spacing={6} justifyContent="space-between">
					<Grid item xs={4}>
						<FormItemLabel label={'Ảnh máy tính'}>
							<UploadImages {...initUploadProp} name={'imageUrl'} />
						</FormItemLabel>
					</Grid>
					<Grid item xs={4}>
						<FormItemLabel label={'Ảnh điện thoại'}>
							<UploadImages {...initUploadProp} name={'mobileImageUrl'} />
						</FormItemLabel>
					</Grid>
					<Grid container columnSpacing={{ xs: 2, sm: 3, md: 4 }}>
						<Grid item xs={6}>
							<FormItemLabel label={'Tên sản phẩm'}>
								<TextField
									placeholder="Nhập dữ liệu"
									autoFocus
									fullWidth
									id="name"
									name="name"
									value={formikBag.values.name}
									onChange={formikBag.handleChange}
									error={formikBag.touched.name && Boolean(formikBag.errors.name)}
									helperText={formikBag.touched.name && formikBag.errors.name}
								/>
							</FormItemLabel>
						</Grid>
						<Grid item xs={6}>
							<FormItemLabel label={'Mã sản phẩm'}>
								<TextField
									placeholder="Nhập dữ liệu"
									autoFocus
									fullWidth
									id="code"
									name="code"
									value={formikBag.values.code}
									onChange={formikBag.handleChange}
									error={formikBag.touched.code && Boolean(formikBag.errors.code)}
									helperText={formikBag.touched.code && formikBag.errors.code}
								/>
							</FormItemLabel>
						</Grid>
						<Grid item xs={6}>
							<FormItemLabel label="Loại sản phẩm">
								<TextField
									value={formikBag.values.category}
									onChange={formikBag.handleChange}
									name={'category'}
									fullWidth
									select
									error={formikBag.touched.code && Boolean(formikBag.errors.code)}
									helperText={formikBag.touched.code && formikBag.errors.code}
								>
									<MenuItem value={1}>Áo</MenuItem>
									<MenuItem value={2}>Quần</MenuItem>
								</TextField>
							</FormItemLabel>
						</Grid>
						<Grid item xs={6}>
							<FormItemLabel label={'Giá sản phẩm'}>
								<TextFieldPrice
									onChange={formikBag.handleChange}
									formikBag={formikBag}
									placeholder="Nhập dữ liệu"
									autoFocus
									fullWidth
									id="price"
									name="price"
									value={formikBag.values.price}
									error={
										formikBag.touched.price && Boolean(formikBag.errors.price)
									}
									helperText={formikBag.touched.price && formikBag.errors.price}
								/>
							</FormItemLabel>
						</Grid>

						<Grid item xs={6}>
							<FormItemLabel label={'Còn hàng'}>
								<Switch
									defaultChecked
									onChange={(e) =>
										formikBag.setFieldValue('status', e.target.checked)
									}
									value={formikBag.values.status}
								/>
							</FormItemLabel>
						</Grid>
						<Grid item xs={6}>
							<FormItemLabel label={'Hiển thị'}>
								<Switch
									defaultChecked
									onChange={(e) =>
										formikBag.setFieldValue('active', e.target.checked)
									}
									value={formikBag.values.active}
								/>
							</FormItemLabel>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<Box sx={{ textAlign: 'right' }}>
						<Button variant={'contained'} onClick={onSubmit}>
							Cập nhật
						</Button>
					</Box>
				</Grid>
			</Card>
		</FormikProvider>
	);
};

export default UpdateProduct;
