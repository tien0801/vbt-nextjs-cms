import Actions from '@/src/components/Actions';
import FormItemLabel from '@/src/components/form-item-label';
import TableLayout from '@/src/components/Table';
import { Box, Button, Card, Grid, Switch, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { useCallback, useEffect, useState } from 'react';
import dataFake from '../data/roles';
import { initialValues, useColumns } from './common/hooks';
import { FormikDataType } from './common/types';

const RoleComponent = () => {
	const [loading, setLoading] = useState(false);
	const [selected, setSelected] = useState(null);

	const [data, setData] = useState(dataFake);
	const [total, setTotal] = useState(10);
	const [page, setPage] = useState(1);
	const [pageSize, setPageSize] = useState(10);

	const onRefresh = useCallback(() => {
		setData([]);
		setTotal(10);
	}, []);

	const onPageSize = useCallback((pageSize) => {
		setPageSize(pageSize);
	}, []);

	const onPageChange = useCallback((page) => {
		setPage(page);
	}, []);

	const onSubmit = useCallback((values) => {
		setLoading(true);
		console.log(values);
	}, []);

	const formikBag = useFormik<FormikDataType>({
		initialValues: initialValues,
		onSubmit,
	});

	useEffect(() => {
		const selectedData = data?.find((item) => item.id === selected);
		formikBag.setValues({
			name: selectedData?.name || '',
			isDefault: selectedData?.isDefault || false,
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data, selected]);

	return (
		<Grid container spacing={6} mt={1}>
			<Grid item xs={5}>
				<Card style={{ padding: 20 }}>
					<FormItemLabel label={'Tên quyền hạn'}>
						<TextField
							fullWidth
							id="name"
							name="name"
							placeholder="Vui lòng nhập trường này"
							value={formikBag.values.name}
							onChange={formikBag.handleChange}
							error={formikBag.touched.name && Boolean(formikBag.errors.name)}
							helperText={formikBag.touched.name && formikBag.errors.name}
						/>
					</FormItemLabel>
					<FormItemLabel label={'Mặc định'}>
						<Switch />
					</FormItemLabel>
					<Grid item xs={12}>
						<Box sx={{ textAlign: 'right' }}>
							{selected && (
								<Button
									type="button"
									variant="outlined"
									onClick={() => setSelected(null)}
									style={{ marginRight: 5 }}
								>
									Hủy
								</Button>
							)}
							<Button type="button" variant="contained" onClick={() => formikBag.submitForm()}>
								{selected ? 'Cập nhật' : 'Thêm mới'}
							</Button>
						</Box>
					</Grid>
				</Card>
			</Grid>
			<Grid item xs={7}>
				<Card>
					<Actions refresh={onRefresh} />
					<TableLayout
						loading={loading}
						rows={data}
						columns={useColumns({ onSelect: setSelected })}
						total={total}
						page={page}
						pageSize={pageSize}
						onHandlePageSize={onPageSize}
						onHandlePageChange={onPageChange}
					/>
				</Card>
			</Grid>
		</Grid>
	);
};

export default RoleComponent;
