/* eslint-disable @typescript-eslint/no-explicit-any */
import FormItemLabel from '@/src/components/form-item-label';
import { Grid, MenuItem, TextField } from '@mui/material';
import React from 'react';

type Props = {
	formik: any;
};

const FilterChild: React.FC<Props> = ({ formik }) => {
	return (
		<>
			<Grid item xs={12} sm={6}>
				<FormItemLabel label={'Tiêu đề'}>
					<TextField
						value={formik.values.title}
						onChange={formik.handleChange}
						name={'title'}
						fullWidth
						placeholder={'Nhập dữ liệu'}
						size="small"
					/>
				</FormItemLabel>
			</Grid>
			<Grid item xs={12} sm={6}>
				<FormItemLabel label={'Loại bài viết'}>
					<TextField
						value={formik.values.type}
						onChange={formik.handleChange}
						name={'type'}
						fullWidth
						select
						size="small"
					>
						<MenuItem value={1}>Tuyển dụng</MenuItem>
						<MenuItem value={2}>Khuyến mãi</MenuItem>
					</TextField>
				</FormItemLabel>
			</Grid>
		</>
	);
};

export default FilterChild;
