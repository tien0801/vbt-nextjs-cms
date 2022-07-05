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
				<FilterLayout formik={formikBag} loading={false} onFilter={onFilter} onReFresh={onClear}>
					<Grid item xs={6}>
						<FormItemLabel label="Mã coupon">
							<TextField
								defaultValue=""
								onChange={formikBag.handleChange}
								name={'code'}
								value={formikBag.values.code}
								fullWidth
								label={'Mã coupon'}
								placeholder={'Nhập dữ liệu'}
							/>
						</FormItemLabel>
					</Grid>
					<Grid item xs={6}>
						<FormItemLabel label="Trạng thái">
							<TextField
								value={formikBag.values.active}
								onChange={formikBag.handleChange}
								name={'active'}
								fullWidth
								label={'Trạng thái'}
								select
							>
								<MenuItem value={1}>Đang hoạt động</MenuItem>
								<MenuItem value={2}>Không hoạt động</MenuItem>
							</TextField>
						</FormItemLabel>
					</Grid>

					<Grid item xs={6}>
						<FormItemLabel label="Thời gian áp dụng">
							<Grid item justifyContent={'space-between'} display={'flex'}>
								<LocalizationProvider dateAdapter={AdapterDateFns}>
									<DatePicker
										label="Ngày bắt đầu"
										value={formikBag.values.from !== '' ? formikBag.values.from : null}
										onChange={(newValue) => {
											formikBag.setFieldValue('from', newValue);
										}}
										renderInput={(params) => <TextField {...params} />}
									/>
									<DatePicker
										label="Ngày kết thúc"
										value={formikBag.values.to !== '' ? formikBag.values.to : null}
										onChange={(newValue) => {
											formikBag.setFieldValue('to', newValue);
										}}
										renderInput={(params) => <TextField {...params} />}
									/>
								</LocalizationProvider>
							</Grid>
						</FormItemLabel>
					</Grid>
				</FilterLayout>
				<Grid item xs={12}>
					<Card>
						<Actions refresh={onClear} create={createNew} exportFile={createNew} />
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
