import Actions from '@/src/components/Actions';
import FilterLayout from '@/src/components/Filter';
import TableLayout from '@/src/components/Table';
import { Card, Grid, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import React, { useState, useCallback } from 'react';
import dataFake from '../data/banners';
import { useColumnRender } from './common/config-render';
import { FormikDataType } from './common/type';

const Banner = () => {
	const [page, setPage] = useState(1);
	const [pageSize, setPageSize] = useState(10);
	const router = useRouter();
	const initValues: FormikDataType = {
		name: '',
	};
	const { columns } = useColumnRender();
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
					<Grid item xs={4}>
						<TextField
							defaultValue=""
							onChange={formikBag.handleChange}
							name={'name'}
							value={formikBag.values.name}
							fullWidth
							label={'Tên banner'}
							placeholder={'Nhập dữ liệu'}
							size="small"
						/>
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

export default Banner;
