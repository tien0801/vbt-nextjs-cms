/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Grid, TextField, MenuItem } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import FormItemLabel from '@/src/components/form-item-label';

type Props = {
	formikBag: any;
};

const FilterChild: React.FC<Props> = ({ formikBag }) => {
	return (
		<>
			<Grid item xs={8}>
				<FormItemLabel label="Thời gian áp dụng">
					<LocalizationProvider dateAdapter={AdapterDateFns}>
						<Grid
							item
							xs={12}
							display={'flex'}
							justifyContent="space-between"
							spacing={6}
						>
							<Grid item xs={6} style={{ paddingRight: '10px' }}>
								<DatePicker
									label="Ngày bắt đầu"
									value={
										formikBag.values.from !== '' ? formikBag.values.from : null
									}
									onChange={(newValue) => {
										formikBag.setFieldValue('from', newValue);
									}}
									renderInput={(params) => (
										<TextField fullWidth size="small" {...params} />
									)}
								/>
							</Grid>
							<Grid item xs={6} style={{ paddingLeft: '10px' }}>
								<DatePicker
									label="Ngày kết thúc"
									value={formikBag.values.to !== '' ? formikBag.values.to : null}
									onChange={(newValue) => {
										formikBag.setFieldValue('to', newValue);
									}}
									renderInput={(params) => (
										<TextField fullWidth size="small" {...params} />
									)}
								/>
							</Grid>
						</Grid>
					</LocalizationProvider>
				</FormItemLabel>
			</Grid>
			<Grid item sm={12} md={6} lg={4}>
				<FormItemLabel label="Thẻ">
					<TextField
						value={formikBag.values.tag}
						onChange={formikBag.handleChange}
						name={'tag'}
						fullWidth
						placeholder={'Nhập dữ liệu'}
						size="small"
					/>
				</FormItemLabel>
			</Grid>
			<Grid item sm={12} md={6} lg={4}>
				<FormItemLabel label="Tình trạng">
					<TextField
						value={formikBag.values.status}
						onChange={formikBag.handleChange}
						name={'status'}
						fullWidth
						select
						size="small"
					>
						<MenuItem value={1}>Đang hoạt động</MenuItem>
						<MenuItem value={2}>Ngưng hoạt động</MenuItem>
					</TextField>
				</FormItemLabel>
			</Grid>
			<Grid item sm={12} md={6} lg={4}>
				<FormItemLabel label="Cấu hình">
					<TextField
						value={formikBag.values.config}
						onChange={formikBag.handleChange}
						name={'config'}
						fullWidth
						select
						size="small"
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
