import { Card, Grid, Box, Switch, TextField, Button, Slider } from '@mui/material';
import { FormikProvider, useFormik, Form } from 'formik';
import FormItemLabel from '../../components/form-item-label';
import { validationSchema } from './common/validation';
import UploadImages, { FileUploadProps } from '../../features/upload';
import Editor from '@/src/components/Editor';

const CreateContent = () => {
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
			description: '',
			content: '',
			richContent: '',
		},
		validationSchema: validationSchema,
		onSubmit: handleSubmit,
	});

	const onSubmit = (e: any) => {
		e.preventDefault();
		formikBag.submitForm();
	};

	return (
		<FormikProvider value={formikBag}>
			<Form onSubmit={onSubmit} action="">
				<Card sx={{ width: '100%', padding: '24px 40px', marginTop: '20px' }}>
					<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
						<Grid
							container
							columnSpacing={{ xs: 2, sm: 3, md: 4 }}
							justifyContent="space-between"
						>
							<Grid item xs={5}>
								<FormItemLabel label={'Ảnh máy tính'}>
									<UploadImages {...initUploadProp} name={'imageUrl'} />
								</FormItemLabel>
							</Grid>
							<Grid item xs={5}>
								<FormItemLabel label={'Ảnh điện thoại'}>
									<UploadImages {...initUploadProp} name={'mobileImageUrl'} />
								</FormItemLabel>
							</Grid>
							<Grid item xs={5}>
								<FormItemLabel label={'Tiêu đề'}>
									<TextField
										placeholder="Nhập dữ liệu"
										autoFocus
										fullWidth
										id="title"
										name="title"
										value={formikBag.values.title}
										onChange={formikBag.handleChange}
										error={
											formikBag.touched.title &&
											Boolean(formikBag.errors.title)
										}
										helperText={
											formikBag.touched.title && formikBag.errors.title
										}
									/>
								</FormItemLabel>
							</Grid>
							<Grid item xs={5}>
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
							<Grid item xs={5}>
								<FormItemLabel label={'Mô tả'}>
									<TextField
										placeholder="Nhập dữ liệu"
										autoFocus
										id="content"
										multiline
										rows={6}
										fullWidth
										name="content"
										value={formikBag.values.content}
										onChange={formikBag.handleChange}
										error={
											formikBag.touched.content &&
											Boolean(formikBag.errors.content)
										}
										helperText={
											formikBag.touched.content && formikBag.errors.content
										}
									/>
								</FormItemLabel>
							</Grid>
							<Grid item xs={5}>
								<FormItemLabel label={'Duyệt bài'}>
									<Switch defaultChecked />
								</FormItemLabel>
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
								<FormItemLabel label={'Nội dung'}>
									<Editor
										name="richContent"
										formIk={formikBag}
										value={formikBag.values.richContent}
									/>
								</FormItemLabel>
							</Grid>
						</Grid>
					</Grid>
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

export default CreateContent;
