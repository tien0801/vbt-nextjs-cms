/* eslint-disable @typescript-eslint/no-explicit-any */
import { Grid, MenuItem, TextField } from '@mui/material';
import React from 'react';
import FormItemLabel from '../../components/form-item-label';
import Select from '@mui/material/Select';

type Props = {
	formik: any;
};

const FilterChild: React.FC<Props> = ({ formik }) => {
	return (
		<>
			<Grid item xs={12} sm={6}>
				<FormItemLabel label="Tên sản phẩm">
					<TextField
						value={formik.values.name}
						onChange={formik.handleChange}
						name={'name'}
						fullWidth
						placeholder={'Nhập dữ liệu'}
					/>
				</FormItemLabel>
			</Grid>
			<Grid item xs={12} sm={6}>
				<FormItemLabel label="Mã sản phẩm">
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
				<FormItemLabel label="Tình trạng">
					<Select
						sx={{ width: '100%' }}
						labelId="status"
						id="status"
						name="status"
						value={formik.values?.status}
						onChange={formik.handleChange}
					>
						<MenuItem value={1}>Còn hàng</MenuItem>
						<MenuItem value={2}>Hết hàng</MenuItem>
					</Select>
				</FormItemLabel>
			</Grid>
			<Grid item xs={12} sm={6}>
				<FormItemLabel label="Trạng thái">
					<Select
						sx={{ width: '100%' }}
						labelId="active"
						id="active"
						name="active"
						value={formik.values?.active}
						onChange={formik.handleChange}
					>
						<MenuItem value={1}>Đang bán</MenuItem>
						<MenuItem value={2}>Không bán</MenuItem>
					</Select>
				</FormItemLabel>
			</Grid>
		</>
	);
};

export default FilterChild;
