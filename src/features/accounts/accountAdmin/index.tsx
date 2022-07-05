/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Actions from '@/src/components/Actions';
import TableLayout from '@/src/components/Table';
import { Card, Grid } from '@mui/material';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import React, { useCallback, useState } from 'react';
import { FormikDataType } from './common/type';
import useColumnsRender from './common/hook';
import { rows } from './common/data';

const AccountAdminComponent: React.FC = () => {
	const [page, setPage] = useState(1);
	const [pageSize, setPageSize] = useState(10);
	const router = useRouter();
	const { columns } = useColumnsRender();
	
	const initValues: FormikDataType = {
		title: '',
		type: ''
	};

	const handleSubmit = (values: FormikDataType) => {
		console.log(values);
	};

	const formik = useFormik<FormikDataType>({
		initialValues: initValues,
		onSubmit: handleSubmit,
	});

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
		router.push(`${router.pathname}/create`);
	};

	return (
		<Grid container spacing={6} mt={1}>
			<Grid item xs={12}>
				<Card>
					<Actions refresh={onClear} create={createNew} exportFile={createNew} />
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

export default AccountAdminComponent;