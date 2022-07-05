import TableLayout from '@/src/components/Table';
import { useCallback, useEffect, useState } from 'react';
import rows from '../data/products';
import { useColumnRender } from './common/hooks';
import { Card, Grid } from '@mui/material';
import Actions from '@/src/components/Actions';
import { FormikDataType } from './common/type';
import { useFormik } from 'formik';
import FilterLayout from '@/src/components/Filter';
import FilterChild from './ProductFilter';
import { useRouter } from 'next/router';

const ProductComponent = () => {
	const { columns } = useColumnRender();
	const router = useRouter();

	const [loading, setLoading] = useState(false);
	const [total, setTotal] = useState(10);
	const [page, setPage] = useState(1);
	const [pageSize, setPageSize] = useState(10);

	const handleSubmit = (values: FormikDataType) => {
		console.log(values);
	};

	const formik = useFormik<FormikDataType>({
		initialValues: {
			name: '',
			code: '',
			status: '',
			active: '',
		},
		onSubmit: handleSubmit,
	});

	const onFilter = () => {
		formik.submitForm();
	};

	useEffect(() => {
		setTotal(rows.length);
	}, []);

	const onCreate = useCallback(() => {
		router.push(`${router.pathname}/create`);
	}, [router]);

	const onRefresh = useCallback(() => {
		setLoading(false);
		formik.resetForm();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const onPageChange = useCallback((page: number) => {
		setPage(page);
	}, []);

	const onPageSize = useCallback((pageSize: number) => {
		setPageSize(pageSize);
	}, []);

	const onConFirmDelete = useCallback((selected) => {
		setLoading(true);
		console.log(selected);
		setLoading(false);
	}, []);

	return (
		<Grid container spacing={6} mt={1}>
			<FilterLayout formik={formik} loading={false} onFilter={onFilter} onReFresh={onRefresh}>
				<FilterChild formik={formik} />
			</FilterLayout>
			<Grid item xs={12}>
				<Card>
					<Actions create={onCreate} refresh={onRefresh} />
					<TableLayout
						loading={loading}
						rows={rows}
						columns={columns}
						total={total}
						page={page}
						pageSize={pageSize}
						selectModels
						onHandlePageChange={onPageChange}
						onHandlePageSize={onPageSize}
						onConfirmDelete={onConFirmDelete}
					/>
				</Card>
			</Grid>
		</Grid>
	);
};

export default ProductComponent;
