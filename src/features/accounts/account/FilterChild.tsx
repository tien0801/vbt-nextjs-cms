/* eslint-disable @typescript-eslint/no-explicit-any */
import { Grid, TextField } from '@mui/material';
import React from 'react';

type Props = {
	formik: any;
};

const FilterChild: React.FC<Props> = ({ formik }) => {
	return (
		<>
			<Grid item sm={12} md={6} lg={4}>
				<TextField
					value={formik.values.title}
					onChange={formik.handleChange}
					name={'name'}
					fullWidth
					label={'Tên'}
					placeholder={'Nhập dữ liệu'}
					size="small"
				/>
			</Grid>
			<Grid item sm={12} md={6} lg={4}>
				<TextField
					value={formik.values.title}
					onChange={formik.handleChange}
					name={'email'}
					fullWidth
					label={'Email'}
					placeholder={'Nhập dữ liệu'}
					size="small"
				/>
			</Grid>
		</>
	);
};

export default FilterChild;
