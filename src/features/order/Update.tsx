import Tag from '@/src/components/Tags';
import { Button, Card, Grid, MenuItem, TextField, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { Form, FormikProvider, useFormik } from 'formik';

const UpdateOrder = () => {
	const handleSubmit = async (values: any) => {
		console.log(values);
	};

	const formikBag = useFormik({
		initialValues: {
			status: '',
		},
		onSubmit: handleSubmit,
	});

	const onSubmit = (e: any) => {
		e.preventDefault();
		formikBag.submitForm();
	};

	const orderStatus = [
		{
			name: 'Chờ xác nhận',
			status: 'pending',
		},
		{
			name: 'Đã xác nhận',
			status: 'confirmed',
		},
		{
			name: 'Đã giao hàng',
			status: 'completed',
		},
	];

	const columns = [
		{ field: 'name', headerName: 'Tên sản phẩm', flex: 1 },
		{ field: 'quatity', headerName: 'Số lượng', flex: 1 },
		{ field: 'sale', headerName: 'Khuyến mãi', flex: 1 },
		{
			field: 'total',
			headerName: 'Tổng tiền',
			flex: 1,
		},
	];

	const rows = [{ id: 1, name: 'Áo', quatity: '1', sale: '', total: '100.000đ' }];

	const current = 'pending';

	const itemActive = orderStatus.findIndex((e) => e.status === current);

	return (
		<FormikProvider value={formikBag}>
			<Card sx={{ width: '100%', padding: '24px 40px', marginTop: '20px' }}>
				<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
					<Grid container columnSpacing={{ xs: 2, sm: 3, md: 4 }}>
						<Grid item xs={6}>
							<Typography variant="h6" sx={{ mb: 3 }}>
								Thông tin khách hàng
							</Typography>
							<Typography variant="body1" sx={{ mb: 3 }}>
								Tên khách hành: Nhut Tien
							</Typography>
							<Typography variant="body1" sx={{ mb: 3 }}>
								Email: nhuttien22102001@gmail.com
							</Typography>
							<Typography variant="body1" sx={{ mb: 3 }}>
								Số điện thoại: 0949814865
							</Typography>
							<Typography variant="body1" sx={{ mb: 3 }}>
								Địa chỉ: Quận 10, Thành phố Hồ Chí Minh, Việt Nam
							</Typography>
							<Typography variant="body1" sx={{ mb: 3 }}>
								Cửa hàng: Quận 10, Thành phố Hồ Chí Minh, Việt Nam
							</Typography>
						</Grid>
						<Grid item xs={6}>
							<Typography variant="h6" sx={{ mb: 3 }}>
								Thông tin đơn hàng
							</Typography>
							<Typography variant="body1" sx={{ mb: 3 }}>
								Mã đơn: X4OYEFM08E21DUGV
							</Typography>
							<Typography variant="body1" sx={{ mb: 3 }}>
								Số điện thoại: 0949814865
							</Typography>
							<Typography variant="body1" sx={{ mb: 3 }}>
								Địa chỉ: Quận 10, Thành phố Hồ Chí Minh, Việt Nam
							</Typography>
							<Typography variant="body1" sx={{ mb: 3 }}>
								Ghi chú:
							</Typography>
							<Typography variant="body1" sx={{ mb: 3 }}>
								Thời gian đặt: 10:48 19/06/2022
							</Typography>
							<Typography variant="body1" sx={{ mb: 3 }}>
								Trạng thái đơn hàng: <Tag color="success" label="Đã hoàn thành" />
							</Typography>
							<Typography variant="body1" sx={{ mb: 3 }}>
								Phương thức thanh toán: <Tag label="COD" color="default" />{' '}
							</Typography>
							<Typography variant="body1" sx={{ mb: 3 }}>
								Trạng thái thanh toán: <Tag label="Chưa thanh toán" color="error" />{' '}
							</Typography>
							<Typography variant="body1" sx={{ mb: 3 }}>
								Tổng: 5.104.000 ₫
							</Typography>
							<Typography variant="body1" sx={{ mb: 3 }}>
								Giảm giá: 0 ₫
							</Typography>
							<Typography variant="body1" sx={{ mb: 3 }}>
								Tổng đơn hàng: <span style={{ fontWeight: 700 }}>5.104.000 ₫</span>{' '}
							</Typography>
							<Form onSubmit={onSubmit} action="" style={{ display: 'flex', gap: 15 }}>
								<TextField
									onChange={formikBag.handleChange}
									value={formikBag.values.status}
									select
									name="status"
									label={'Cập nhật trạng thái đơn hàng'}
									sx={{ maxWidth: '20vw', width: '100%' }}
								>
									{orderStatus.map((e, i) => {
										return (
											<MenuItem style={i == itemActive ? { fontWeight: 700 } : undefined} disabled={i <= itemActive ? true : false} key={i} value={e.status}>
												{e.name}
											</MenuItem>
										);
									})}
								</TextField>
								<Button type="submit">Cập nhật</Button>
							</Form>
						</Grid>
						<Grid xs={12} item>
							<Typography sx={{ mt: 3 }} variant="h6">
								Thông tin sản phẩm
							</Typography>
							<DataGrid
								sx={{ mt: 5 }}
								getRowId={(row) => row.id}
								hideFooter
								rows={rows}
								columns={columns}
								autoHeight
								components={{ Pagination: null }}
							/>
						</Grid>
					</Grid>
				</Grid>
			</Card>
		</FormikProvider>
	);
};

export default UpdateOrder;
