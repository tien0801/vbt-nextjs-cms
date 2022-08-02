import Actions from '@/src/components/Actions';
import FilterLayout from '@/src/components/Filter';
import TableLayout from '@/src/components/Table';
import { Card, Grid, TextField, MenuItem } from '@mui/material';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import React, { useState, useCallback } from 'react';
import dataFake from '../data/coupons';
import { useColumnRender } from './common/config-render';
import { FormikFilterType } from './common/type';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import FormItemLabel from '../../components/form-item-label';

const Coupon = () => {
	const [page, setPage] = useState(1);
	const [pageSize, setPageSize] = useState(10);
	const router = useRouter();
	const initValues: FormikFilterType = {
		code: '',
		from: '',
		to: '',
		active: undefined,
	};
	const { columns } = useColumnRender();
	const handleSubmit = (values: FormikFilterType) => {
		console.log(values);
	};

	const formikBag = useFormik<FormikFilterType>({
		initialValues: initValues,
		onSubmit: handleSubmit,
	});

	const onFilter = () => {
		formikBag.submitForm();
	};

	const onClear = () => {
		formikBag.resetForm();
	};

	const handlePageSize = useCallback((num: number) => {
		setPageSize(num);
	}, []);

	const handlePageChange = useCallback((num: number) => {
		setPage(num);
	}, []);

	const conFirmDelete = useCallback((array: []) => {
		console.log(array);
	}, []);

	const createNew = () => {
		router.push(`${router.pathname}/create`);
	};
	return (
		<React.Fragment>
			<Grid container spacing={6} mt={1}>
				<FilterLayout
					formik={formikBag}
					loading={false}
					onFilter={onFilter}
					onReFresh={onClear}
				>
					<Grid item sm={12} md={6} lg={4}>
						<FormItemLabel label="Mã coupon">
							<TextField
								defaultValue=""
								onChange={formikBag.handleChange}
								name={'code'}
								value={formikBag.values.code}
								fullWidth
								label={'Mã coupon'}
								placeholder={'Nhập dữ liệu'}
								size="small"
							/>
						</FormItemLabel>
					</Grid>
					<Grid item sm={12} md={6} lg={4}>
						<FormItemLabel label="Trạng thái">
							<TextField
								value={formikBag.values.active}
								onChange={formikBag.handleChange}
								name={'active'}
								fullWidth
								label={'Trạng thái'}
								select
								size="small"
							>
								<MenuItem value={1}>Đang hoạt động</MenuItem>
								<MenuItem value={2}>Không hoạt động</MenuItem>
							</TextField>
						</FormItemLabel>
					</Grid>

					<Grid item sm={12} md={12} lg={8}>
						<FormItemLabel label="Thời gian áp dụng">
							<LocalizationProvider dateAdapter={AdapterDateFns}>
								<Grid
									xs={12}
									display={'flex'}
									justifyContent="space-between"
									spacing={6}
								>
									<Grid item xs={6} style={{ paddingRight: '10px' }}>
										<DatePicker
											label="Từ ngày"
											value={
												formikBag.values.from !== ''
													? formikBag.values.from
													: null
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
											label="Đến ngày"
											value={
												formikBag.values.to !== ''
													? formikBag.values.to
													: null
											}
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
				</FilterLayout>

				<Grid item xs={12}>
					<Card>
						<Actions refresh={onClear} create={createNew} />
						<TableLayout
							rows={dataFake}
							total={dataFake.length}
							columns={columns}
							pageSize={pageSize}
							loading={false}
							onHandlePageSize={handlePageSize}
							onHandlePageChange={handlePageChange}
							onConfirmDelete={conFirmDelete}
							page={page}
							selectModels={true}
						/>
					</Card>
				</Grid>
			</Grid>
		</React.Fragment>
	);
};

export default Coupon;
