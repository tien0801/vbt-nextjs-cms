/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Grid, TextField, MenuItem } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import FormItemLabel from '@/src/components/form-item-label';

type Props = {
	formik: any;
};

const FilterChild: React.FC<Props> = ({ formik }) => {
	return (
		<>
			<Grid item xs={6}>
				<FormItemLabel label="Thời gian áp dụng">
					<Grid item justifyContent={'space-between'} display={'flex'}>
						<LocalizationProvider dateAdapter={AdapterDateFns}>
							<DatePicker
								label="Ngày bắt đầu"
								value={formik.values.dateStart !== '' ? formik.values.dateStart : null}
								onChange={(newValue) => {
									formik.setFieldValue('dateStart', newValue);
								}}
								renderInput={(params) => <TextField {...params} />}
							/>
							<DatePicker
								label="Ngày kết thúc"
								value={formik.values.dateEnd !== '' ? formik.values.dateEnd : null}
								onChange={(newValue) => {
									formik.setFieldValue('dateEnd', newValue);
								}}
								renderInput={(params) => <TextField {...params} />}
							/>
						</LocalizationProvider>
					</Grid>
				</FormItemLabel>
			</Grid>
			<Grid item xs={12} sm={6}>
				<FormItemLabel label="Thẻ">
					<TextField
						value={formik.values.tag}
						onChange={formik.handleChange}
						name={'tag'}
						fullWidth
						placeholder={'Nhập dữ liệu'}
					/>
				</FormItemLabel>
			</Grid>
			<Grid item xs={12} sm={6}>
				<FormItemLabel label="Tình trạng">
				<TextField
					value={formik.values.status}
					onChange={formik.handleChange}
					name={'status'}
					fullWidth
					
					select
				>
					<MenuItem value={1}>Đang hoạt động</MenuItem>
					<MenuItem value={2}>Ngưng hoạt động</MenuItem>
				</TextField>
				</FormItemLabel>
			</Grid>
			<Grid item xs={12} sm={6}>
				<FormItemLabel label="Cấu hình">
				<TextField
					value={formik.values.config}
					onChange={formik.handleChange}
					name={'config'}
					fullWidth
					select
				>
					<MenuItem value={1}>Có</MenuItem>
					<MenuItem value={2}>Không</MenuItem>
				</TextField>
				</FormItemLabel>
			</Grid>
		</>
	);
};

export default FilterChild;
