/* eslint-disable @typescript-eslint/no-explicit-any */
import { Grid, TextField } from '@mui/material';
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
					name={'name'}
					fullWidth
					label={'Tên'}
					placeholder={'Nhập dữ liệu'}
				/>
			</Grid>
			<Grid item xs={12} sm={6}>
				<TextField
					value={formik.values.title}
					onChange={formik.handleChange}
					name={'email'}
					fullWidth
					label={'Email'}
					placeholder={'Nhập dữ liệu'}
				/>
			</Grid>
		</>
	);
};

export default FilterChild;
