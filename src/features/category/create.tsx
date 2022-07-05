import { Card, Grid, Box, Slider, Switch, TextField, Button, MenuItem } from '@mui/material';
import { FormikProvider, useFormik } from 'formik';
import FormItemLabel from '../../components/form-item-label';
import UploadImages, { FileUploadProps } from '../../features/upload';
import { validationSchema } from './common/validation';
import { CategoryItemType } from './common/type';

const CreateCategory = () => {
	const marks = [
		{
			value: 0,
			label: 'Thấp',
		},
		{
			value: 50,
			label: 'Trung bình',
		},
		{
			value: 100,
			label: 'Cao',
		},
	];

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

	const formikBag = useFormik<CategoryItemType>({
		initialValues: {
			imageUrl: '',
			mobileImageUrl: '',
			code: '',
			title: '',
			description: '',
			seoUrl: '',
			parentCategory: '',
			active: true,
			order: 50,
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
				<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
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
							<FormItemLabel label={'Tên danh mục'}>
								<TextField
									placeholder="Nhập dữ liệu"
									autoFocus
									fullWidth
									id="title"
									name="title"
									value={formikBag.values.title}
									onChange={formikBag.handleChange}
									error={formikBag.touched.title && Boolean(formikBag.errors.title)}
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
									id="seoUrl"
									name="seoUrl"
									value={formikBag.values.seoUrl}
									onChange={formikBag.handleChange}
									error={formikBag.touched.seoUrl && Boolean(formikBag.errors.seoUrl)}
									helperText={formikBag.touched.seoUrl && formikBag.errors.seoUrl}
								/>
							</FormItemLabel>
						</Grid>
						<Grid item xs={6}>
							<FormItemLabel label={'Mã danh mục'}>
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
							<FormItemLabel label="Danh mục cha">
								<TextField
									value={formikBag.values.parentCategory}
									onChange={formikBag.handleChange}
									name={'parentCategory'}
									fullWidth
									select
									error={
										formikBag.touched.parentCategory && Boolean(formikBag.errors.parentCategory)
									}
									helperText={formikBag.touched.parentCategory && formikBag.errors.parentCategory}
								>
									<MenuItem value={1}>Áo</MenuItem>
									<MenuItem value={2}>Quần</MenuItem>
								</TextField>
							</FormItemLabel>
						</Grid>
						<Grid item xs={12}>
							<FormItemLabel label={'Mô tả'}>
								<TextField
									placeholder="Nhập dữ liệu"
									autoFocus
									id="description"
									multiline
									rows={6}
									fullWidth
									name="description"
									value={formikBag.values.description}
									onChange={formikBag.handleChange}
									error={formikBag.touched.description && Boolean(formikBag.errors.description)}
									helperText={formikBag.touched.description && formikBag.errors.description}
								/>
							</FormItemLabel>
						</Grid>
					</Grid>
					<Grid item xs={12}>
						<FormItemLabel label={'Độ ưu tiên'}>
							<Slider
								aria-label="Temperature"
								defaultValue={50}
								valueLabelDisplay="auto"
								onChange={(_, value) => {
									console.log(value);
								}}
								step={1}
								min={0}
								max={100}
								marks={marks}
							/>
						</FormItemLabel>
					</Grid>
					<Grid item xs={12}>
						<FormItemLabel label={'Hiển thị'}>
							<Switch defaultChecked />
						</FormItemLabel>
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<Box sx={{ textAlign: 'right' }}>
						<Button variant={'contained'} onClick={onSubmit}>
							Tạo
						</Button>
					</Box>
				</Grid>
			</Card>
		</FormikProvider>
	);
};

export default CreateCategory;
