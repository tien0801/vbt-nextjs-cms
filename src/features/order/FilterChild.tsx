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
				<FormItemLabel label={'Cửa hàng'}>
					<TextField
						value={formik.values.store}
						onChange={formik.handleChange}
						name={'store'}
						fullWidth
						label={'Cửa hàng'}
						placeholder={'Nhập dữ liệu'}
					/>
				</FormItemLabel>
			</Grid>
			<Grid item xs={12} sm={6}>
				<FormItemLabel label={'Số điện thoại'}>
					<TextField
						value={formik.values.phone}
						onChange={formik.handleChange}
						name={'phone'}
						fullWidth
						placeholder={'Nhập dữ liệu'}
					/>
				</FormItemLabel>
			</Grid>
			<Grid item xs={12} sm={6}>
				<FormItemLabel label={'Mã đơn'}>
					<TextField
						value={formik.values.code}
						onChange={formik.handleChange}
						name={'code'}
						fullWidth
						placeholder={'Nhập dữ liệu'}
					/>
				</FormItemLabel>
			</Grid>
			<Grid item xs={12} sm={6}>
				<FormItemLabel label={'Trạng thái'}>
					<TextField
						value={formik.values.orderStatus}
						onChange={formik.handleChange}
						name={'orderStatus'}
						fullWidth
						select
					>
						<MenuItem key={1} value={1}></MenuItem>
						<MenuItem key={2} value={2}>
							Ngưng hoạt động
						</MenuItem>
					</TextField>
				</FormItemLabel>
			</Grid>

			<Grid item xs={12} sm={6}>
				<FormItemLabel label={'Phương thức thanh toán'}>
					<TextField
						value={formik.values.type}
						onChange={formik.handleChange}
						name={'type'}
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
