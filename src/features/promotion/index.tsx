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
			<FilterLayout
				formik={formikBag}
				loading={false}
				onFilter={onFilter}
				onReFresh={onReset}
			>
				<Grid item sm={12} md={6} lg={4}>
					<FormItemLabel label="Mã khuyến mãi">
						<TextField
							fullWidth
							name="code"
							value={formikBag.values.code}
							onChange={formikBag.handleChange}
							placeholder="Nhập dữ liệu"
							size="small"
						/>
					</FormItemLabel>
				</Grid>
				<Grid item sm={12} md={6} lg={4}>
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
										label="Ngày kết thúc"
										value={
											formikBag.values.to !== '' ? formikBag.values.to : null
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
				<Grid item sm={12} md={6} lg={4}>
					<FormItemLabel label="Kích hoạt">
						<TextField
							select
							fullWidth
							name="active"
							value={formikBag.values.active}
							onChange={formikBag.handleChange}
							size="small"
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
