/* eslint-disable @typescript-eslint/no-explicit-any */
import { Grid, MenuItem, TextField } from '@mui/material';
import React from 'react';

type Props = {
	formik: any;
};

const FilterChild: React.FC<Props> = ({ formik }) => {

	return (
		<>
			<Grid item xs={12} sm={6}>
				<TextField
					value={formik.values.title}
					onChange={formik.handleChange}
					name={'title'}
					fullWidth
					label={'Tiêu đề'}
					placeholder={'Nhập dữ liệu'}
				/>
			</Grid>
			<Grid item xs={12} sm={6}>
				<TextField
					value={formik.values.type}
					onChange={formik.handleChange}
					name={'type'}
					fullWidth
					label={'Loại bài viết'}
					select
				>
					<MenuItem value={1}>Tuyển dụng</MenuItem>
					<MenuItem value={2}>Khuyến mãi</MenuItem>
				</TextField>
			</Grid>
		</>
	);
};

export default FilterChild;
