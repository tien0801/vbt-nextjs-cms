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
			<Grid item sm={12} md={6} lg={4}>
				<FormItemLabel label="Tên sản phẩm">
					<TextField
						value={formik.values.name}
						onChange={formik.handleChange}
						name={'name'}
						fullWidth
						placeholder={'Nhập dữ liệu'}
						size="small"
					/>
				</FormItemLabel>
			</Grid>
			<Grid item sm={12} md={6} lg={4}>
				<FormItemLabel label="Mã sản phẩm">
					<TextField
						value={formik.values.code}
						onChange={formik.handleChange}
						name={'code'}
						fullWidth
						placeholder={'Nhập dữ liệu'}
						size="small"
					/>
				</FormItemLabel>
			</Grid>

			<Grid item sm={12} md={6} lg={4}>
				<FormItemLabel label="Tình trạng">
					<Select
						sx={{ width: '100%' }}
						labelId="status"
						id="status"
						name="status"
						value={formik.values?.status}
						onChange={formik.handleChange}
						size="small"
					>
						<MenuItem value="">
							<em>Không chọn</em>
						</MenuItem>
						<MenuItem value={1}>Còn hàng</MenuItem>
						<MenuItem value={2}>Hết hàng</MenuItem>
					</Select>
				</FormItemLabel>
			</Grid>
			<Grid item sm={12} md={6} lg={4}>
				<FormItemLabel label="Loại sản phẩm">
					<Select
						sx={{ width: '100%' }}
						labelId="active"
						id="active"
						name="active"
						value={formik.values?.active}
						onChange={formik.handleChange}
						size="small"
					>
						<MenuItem value="">
							<em>Không chọn</em>
						</MenuItem>
						<MenuItem value={1}>Sản phẩm bán</MenuItem>
						<MenuItem value={2}>Sản phẩm Khuyến mãi</MenuItem>
					</Select>
				</FormItemLabel>
			</Grid>
		</>
	);
};

export default FilterChild;
