import { Card, Grid, Box, Slider, Switch, TextField, Button } from '@mui/material';
import { FormikProvider, useFormik } from 'formik';
import FormItemLabel from '../../components/form-item-label';
import UploadImages, { FileUploadProps } from '../../features/upload';
import { validationSchema } from './common/validation';

const CreateBanner = () => {
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

	const formikBag = useFormik({
		initialValues: {
			title: '',
			linkUrl: '',
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
					<Grid item xs={4}>
						<FormItemLabel label={'Ảnh app'}>
							<UploadImages {...initUploadProp} name={'mobileAppImageUrl'} />
						</FormItemLabel>
					</Grid>
					<Grid container columnSpacing={{ xs: 2, sm: 3, md: 4 }}>
						<Grid item xs={6}>
							<FormItemLabel label={'Tên banner'}>
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
									id="linkUrl"
									name="linkUrl"
									value={formikBag.values.linkUrl}
									onChange={formikBag.handleChange}
									error={formikBag.touched.linkUrl && Boolean(formikBag.errors.linkUrl)}
									helperText={formikBag.touched.linkUrl && formikBag.errors.linkUrl}
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

export default CreateBanner;
