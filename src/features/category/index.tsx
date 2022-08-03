import Actions from '@/src/components/Actions';
import TableTreeLayout from '@/src/components/Table/tree';
import { Card, Grid } from '@mui/material';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import React, { useState, useCallback } from 'react';
import dataFake from '../data/categories';
import { useColumnRender } from './common/config-render';
import { FormikDataType } from './common/type';
import Filter from './filter';

const Category = () => {
	const [page, setPage] = useState(1);
	const [pageSize, setPageSize] = useState(10);
	const router = useRouter();
	const initValues: FormikDataType = {
		name: '',
	};
	const { columns, custom } = useColumnRender();
	const handleSubmit = useCallback(async (values: FormikDataType) => {
		console.log(values);
	}, []);
	console.log(custom);

	const formikBag = useFormik<FormikDataType>({
		initialValues: initValues,
		onSubmit: handleSubmit,
	});

	const onFilter = useCallback(() => {
		formikBag.submitForm();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const onClear = useCallback(() => {
		formikBag.resetForm();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

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
				<Filter formikBag={formikBag} loading={false} onFilter={onFilter} onReFresh={onClear} />
				<Grid item xs={12}>
					<Card>
						<Actions refresh={onClear} create={createNew} exportFile={createNew} />
						<TableTreeLayout
							childKey={'items'}
							treeIconOnKey={'name'}
							rows={dataFake}
							total={dataFake.length}
							columns={columns}
							custom={custom}
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

export default Category;
