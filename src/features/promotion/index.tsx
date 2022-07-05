import Actions from '@/src/components/Actions';
import FilterLayout from '@/src/components/Filter';
import TableLayout from '@/src/components/Table';
import { Card, Grid, MenuItem, TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import FormItemLabel from '../../components/form-item-label';
import dataFake from '../data/promotion';
import { initialFilterValues, useColumns } from './common/hooks';
import { FormikFilterType } from './common/types';

const PromotionComponent = () => {
	const router = useRouter();

	const { promotionColumns } = useColumns();
	const [loading, setLoading] = useState(false);
	
	const [data, setData] = useState(dataFake);
	const [total, setTotal] = useState(10);
	const [page, setPage] = useState(1);
	const [pageSize, setPageSize] = useState(10);

	const onFilter = useCallback(() => {
		console.log();
	}, []);

	const onReset = useCallback(() => {
		console.log();
	}, []);

	const onRefresh = useCallback(() => {
		setData([]);
		setTotal(10);
	}, []);

	const onCreate = useCallback(() => {
		router.push('/promotion/create');
	}, [router]);

	const onExport = useCallback((values) => {
		console.log(values);
	}, []);

	const onPageSize = useCallback((pageSize) => {
		setPageSize(pageSize);
	}, []);

	const onPageChange = useCallback((page) => {
		setPage(page);
	}, []);

	const onDelete = useCallback((values) => {
		console.log(values);
	}, []);

	const onSubmit = useCallback((values) => {
		setLoading(true);
		console.log(values);
	}, []);

	const formikBag = useFormik<FormikFilterType>({
		initialValues: initialFilterValues,
		onSubmit,
	});

	return (
		<Grid container spacing={6} mt={1}>
			<FilterLayout formik={formikBag} loading={false} onFilter={onFilter} onReFresh={onReset}>
				<Grid item xs={6}>
					<FormItemLabel label="Mã khuyến mãi">
						<TextField
							fullWidth
							name="code"
							value={formikBag.values.code}
							onChange={formikBag.handleChange}
							placeholder="Vui lòng nhập trường này"
						/>
					</FormItemLabel>
				</Grid>
				<Grid item xs={6}>
					<FormItemLabel label="Mô tả">
						<TextField
							fullWidth
							name="description"
							value={formikBag.values.description}
							onChange={formikBag.handleChange}
							placeholder="Vui lòng nhập trường này"
						/>
					</FormItemLabel>
				</Grid>
				<Grid item xs={6}>
					<FormItemLabel label="Thời gian áp dụng">
						<Grid item justifyContent="space-between" display="flex">
							<LocalizationProvider dateAdapter={AdapterDateFns}>
								<DatePicker
									value={formikBag.values.date !== '' ? formikBag.values.date : null}
									onChange={(newValue) => formikBag.setFieldValue('date', newValue)}
									renderInput={(params) => <TextField fullWidth {...params} />}
								/>
							</LocalizationProvider>
						</Grid>
					</FormItemLabel>
				</Grid>
				<Grid item xs={6}>
					<FormItemLabel label="Kích hoạt">
						<TextField
							select
							fullWidth
							name="active"
							value={formikBag.values.active}
							onChange={formikBag.handleChange}
						>
							<MenuItem value="true">Kích hoạt</MenuItem>
							<MenuItem value="false">Chưa kích hoạt</MenuItem>
						</TextField>
					</FormItemLabel>
				</Grid>
			</FilterLayout>
			<Grid item xs={12}>
				<Card>
					<Actions refresh={onRefresh} create={onCreate} exportFile={onExport} />
					<TableLayout
						loading={loading}
						rows={data}
						columns={promotionColumns}
						total={total}
						page={page}
						pageSize={pageSize}
						onHandlePageSize={onPageSize}
						onHandlePageChange={onPageChange}
						onConfirmDelete={onDelete}
						selectModels={true}
					/>
				</Card>
			</Grid>
		</Grid>
	);
};

export default PromotionComponent;
