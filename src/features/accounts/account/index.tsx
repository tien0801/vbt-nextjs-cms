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
import useColumnsRender from './common/hook';
import { rows } from './common/data';

const AccountComponent: React.FC = () => {
	const [page, setPage] = useState(1);
	const [pageSize, setPageSize] = useState(10);
	const router = useRouter();
	const { columns } = useColumnsRender();
	
	const initValues: FormikDataType = {
		name: '',
		email: ''
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

	const handlePageSize = useCallback( (num: number) => {
		setPageSize(num);
	}, [])

	const handlePageChange = useCallback( (num: number) => {
		setPage(num);
	},[])

	const conFirmDelete = useCallback((array: []) => {
		console.log(array);
	}, [])

	const createNew = () => {		
		router.push(`${router.pathname}`);
	};

	return (
		<Grid container spacing={6} mt={1}>
			<FilterLayout formik={formik} loading={false} onFilter={onFilter} onReFresh={onClear}>
				<FilterChild formik={formik} />
			</FilterLayout>
			<Grid item xs={12}>
				<Card>
					<Actions refresh={onClear} create={null} exportFile={createNew} />
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
						selectModels={false}
					/>
				</Card>
			</Grid>
		</Grid>
	);
};

export default AccountComponent;