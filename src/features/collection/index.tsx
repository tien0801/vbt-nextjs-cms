/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Actions from '@/src/components/Actions';
import FilterLayout from '@/src/components/Filter';
import TableLayout from '@/src/components/Table';
import { Card, Grid } from '@mui/material';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import React, { useState, useCallback } from 'react';
import { rows } from './common/data';
import useColumnsRender from './common/hook';
import { FormikDataType } from './common/type';
import FilterChild from './FilterChild';

const CollectionComponent: React.FC = () => {
	const [page, setPage] = useState(1);
	const [pageSize, setPageSize] = useState(10);
	const router = useRouter();
	const { columns } = useColumnsRender();
	const initValues: FormikDataType = {
		status: '',
		tag: '',
		dateStart: '',
		dateEnd: '',
		config: '',
	};

	const handleSubmit = (values: FormikDataType) => {
		console.log(values);
	};

	const formikBag = useFormik<FormikDataType>({
		initialValues: initValues,
		onSubmit: handleSubmit,
	});

	const onFilter = () => {
		formikBag.submitForm();
	};

	const onClear = () => {
		console.log(formikBag.values);

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
		<Grid container spacing={6} mt={1}>
			<FilterLayout
				formik={formikBag}
				loading={false}
				onFilter={onFilter}
				onReFresh={onClear}
			>
				<FilterChild formikBag={formikBag} />
			</FilterLayout>
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
						selectModels={true}
					/>
				</Card>
			</Grid>
		</Grid>
	);
};

export default CollectionComponent;
