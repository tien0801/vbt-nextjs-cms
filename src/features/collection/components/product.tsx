import { useAppDispatch, useAppSelector } from '@/src/app/hooks';
import Actions from '@/src/components/Actions';
import FilterLayout from '@/src/components/Filter';
import FormItemLabel from '@/src/components/form-item-label';
import TableLayout from '@/src/components/Table';
import { Card, Grid, MenuItem, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { ProductType, ProductListRequest } from '../../product/api/type';
import { initialFilterValues, useColumns, kinds } from '../../product/common/hooks';
import { FormikFilterType } from '../../product/common/type';
import * as actions from '../../product/saga/action';

type Props = {
	onSelectedRows: any;
	initSelected?: any;
};

const ProductComponent = ({ onSelectedRows, initSelected = [] }: Props) => {
	const router = useRouter();
	const search = router.query;
	const dispatch = useAppDispatch();

	const { columns } = useColumns();
	const [loading, setLoading] = useState(false);

	const [data, setData] = useState<ProductType[]>([]);
	const [total, setTotal] = useState(10);
	const [page, setPage] = useState(1);
	const [pageSize, setPageSize] = useState(10);

	const onSubmit = useCallback(
		(values: FormikFilterType) => {
			setLoading(true);
		},
		[callGetProductList, pageSize]
	);

	const formik = useFormik<FormikFilterType>({
		initialValues: initialFilterValues,
		onSubmit,
	});

	const onReset = useCallback(() => {
		formik.resetForm();
		callGetProductList({});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const onRefresh = useCallback(() => {
		setLoading(true);
		callGetProductList({ params: { page, page_size: pageSize } });
	}, [callGetProductList, page, pageSize]);

	const onPageSize = useCallback(
		(pageSize: number) => {
			setPageSize(pageSize);
			callGetProductList({ params: { page: 1, page_size: pageSize } });
		},
		[callGetProductList]
	);

	const onPageChange = useCallback(
		(page: number) => {
			setPage(page);
			callGetProductList({ params: { page, page_size: pageSize } });
		},
		[callGetProductList, pageSize]
	);

	return (
		<Grid container spacing={6} mt={1}>
			<FilterLayout
				formik={formik}
				loading={false}
				onFilter={() => formik.submitForm()}
				onReFresh={onReset}
			>
				<Grid item xs={12} sm={6}>
					<FormItemLabel label={'Tên sản phẩm'}>
						<TextField
							fullWidth
							name="name"
							placeholder="Nhập dữ liệu"
							value={formik.values.name}
							onChange={formik.handleChange}
						/>
					</FormItemLabel>
				</Grid>
				<Grid item xs={12} sm={6}>
					<FormItemLabel label={'Mã sản phẩm'}>
						<TextField
							fullWidth
							name="sku"
							placeholder="Nhập dữ liệu"
							value={formik.values.sku}
							onChange={formik.handleChange}
						/>
					</FormItemLabel>
				</Grid>
				<Grid item xs={12} sm={6}>
					<FormItemLabel label={'Trạng thái'}>
						<TextField
							select
							fullWidth
							name="is_active"
							placeholder="Nhập dữ liệu"
							value={formik.values.is_active}
							onChange={formik.handleChange}
						>
							<MenuItem value={'true'}>Đang bán</MenuItem>
							<MenuItem value={'false'}>Không bán</MenuItem>
						</TextField>
					</FormItemLabel>
				</Grid>
				<Grid item xs={12} sm={6}>
					<FormItemLabel label={'Loại sản phẩm'}>
						<TextField
							select
							fullWidth
							name="kind"
							placeholder="Nhập dữ liệu"
							value={formik.values.kind}
							onChange={formik.handleChange}
						>
							{kinds.map((kind) => (
								<MenuItem key={kind.value} value={kind.value}>
									{kind.label}
								</MenuItem>
							))}
						</TextField>
					</FormItemLabel>
				</Grid>
			</FilterLayout>
			<Grid item xs={12}>
				<Card>
					<Actions refresh={onRefresh} />
					<TableLayout
						loading={loading}
						rows={data}
						columns={columns}
						total={total}
						page={page}
						pageSize={pageSize}
						onHandlePageSize={onPageSize}
						onHandlePageChange={onPageChange}
						onSelectedRows={onSelectedRows}
						selectModels={true}
						selectedRows={initSelected?.map((item: any) => item.id)}
						selectedRowsFull={initSelected}
					/>
				</Card>
			</Grid>
		</Grid>
	);
};

export default ProductComponent;
