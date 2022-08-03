/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Actions from '@/src/components/Actions';
import FilterLayout from '@/src/components/Filter';
import TableLayout from '@/src/components/Table';
import { Card, Grid } from '@mui/material';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import React, { useCallback, useState } from 'react';
import { FormikDataType } from './common/type';
import FilterChild from './FilterChild';
import rows from '../data/orders';
import useColumnsRender from './common/hook';

const OrderComponent: React.FC = () => {
	const [page, setPage] = useState(1);
	const [pageSize, setPageSize] = useState(10);
	const router = useRouter();
	const { columns } = useColumnsRender();

	const initValues: FormikDataType = {
		orderStatus: '',
		store: '',
		dateStart: '',
		dateEnd: '',
		type: '',
		phone: '',
		code: '',
	};

	const handleSubmit = (values: FormikDataType) => {
		console.log(values);
	};

	const formik = useFormik<FormikDataType>({
		initialValues: initValues,
		onSubmit: handleSubmit,
	});

	const onFilter = () => {
		formik.submitForm();
	};

	const onClear = () => {
		formik.resetForm();
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
		router.push(`${router.pathname}/`);
	};

	return (
		<Grid container spacing={6} mt={1}>
			<FilterLayout formik={formik} loading={false} onFilter={onFilter} onReFresh={onClear}>
				<FilterChild formik={formik} />
			</FilterLayout>
			<Grid item xs={12}>
				<Card>
					<Actions refresh={onClear} create={createNew} />
					<TableLayout
						rows={rows}
						columns={columns}
						pageSize={pageSize}
						total={rows.length}
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
	);
};

export default OrderComponent;
