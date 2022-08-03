import { Box, Grid, Slider, Switch, TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import FormItemLabel from '@/src/components/form-item-label';
import UploadImages, { FileUploadProps } from '../../../../features/upload';
import { useMarks } from '../hooks';

type Props = {
	formikBag: any;
};

const PromotionInfoComponent = (props: Props) => {
	const { formikBag } = props;

	const initUploadProp: FileUploadProps = {
		accept: 'image/*',
		onChange: (values: any) => {
			console.log(values);
			if (values.file) {
				console.log(`Saving ${values.inputName}: `, values.file);
			}
		},
		previewImage: true,
	};

	return (
		<Grid container rowSpacing={1}>
			<Grid item xs={4}>
				<FormItemLabel label={'Hình ảnh'}>
					<UploadImages {...initUploadProp} name="imageUrl" />
				</FormItemLabel>
			</Grid>
			<Grid container columnSpacing={{ xs: 2, sm: 3, md: 4 }} justifyContent="space-between">
				<Grid item xs={5}>
					<FormItemLabel label={'Tên chương trình'}>
						<TextField
							fullWidth
							id="name"
							name="name"
							placeholder="Vui lòng nhập trường này"
							value={formikBag.values.name}
							onChange={formikBag.handleChange}
							error={formikBag.touched.name && Boolean(formikBag.errors.name)}
							helperText={formikBag.touched.name && formikBag.errors.name}
						/>
					</FormItemLabel>
				</Grid>
				<Grid item xs={5}>
					<FormItemLabel label={'Thời gian áp dụng'}>
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
				</Grid>
				<Grid item xs={5}>
					<FormItemLabel label={'Slug'}>
						<TextField
							fullWidth
							id="slug"
							name="slug"
							placeholder="Vui lòng nhập trường này"
							value={formikBag.values.slug}
							onChange={formikBag.handleChange}
							error={formikBag.touched.slug && Boolean(formikBag.errors.slug)}
							helperText={formikBag.touched.slug && formikBag.errors.slug}
						/>
					</FormItemLabel>
				</Grid>
				<Grid item xs={5}>
					<FormItemLabel label={'Mô tả'}>
						<TextField
							fullWidth
							multiline
							rows={4}
							id="description"
							name="description"
							placeholder="Vui lòng nhập trường này"
							value={formikBag.values.description}
							onChange={formikBag.handleChange}
							error={formikBag.touched.description && Boolean(formikBag.errors.description)}
							helperText={formikBag.touched.description && formikBag.errors.description}
						/>
					</FormItemLabel>
				</Grid>
				<Grid item xs={5}>
					<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
						<FormItemLabel label={'Kích hoạt'}>
							<Switch defaultChecked />
						</FormItemLabel>
						<FormItemLabel label={'Cho phép ẩn danh'}>
							<Switch defaultChecked />
						</FormItemLabel>
					</Box>
					<FormItemLabel label={'Độ ưu tiên'}>
						<Slider
							step={1}
							min={0}
							max={100}
							defaultValue={50}
							marks={useMarks()}
							valueLabelDisplay="auto"
							onChange={(_, value) => console.log(value)}
						/>
					</FormItemLabel>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default PromotionInfoComponent;
