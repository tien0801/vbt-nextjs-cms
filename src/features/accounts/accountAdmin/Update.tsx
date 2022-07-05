import { Card, Grid, Box, TextField, Button } from '@mui/material';
import { FormikProvider, useFormik, Form } from 'formik';
import FormItemLabel from '@/src/components/form-item-label';
import { validationSchema } from './common/validation';

const UpdateAccount = () => {
	const handleSubmit = async (values: any) => {
		console.log(values);
	};

	const formikBag = useFormik({
		initialValues: {
			userName: '',
			password: '',
			lastName: '',
			firstName: '',
			phone: '',
			email: '',
			rule: '',
		},
		validationSchema: validationSchema,
		onSubmit: handleSubmit,
	});

	const onSubmit = (e: any) => {
		e.preventDefault();
		formikBag.submitForm();
	};

	return (
		<FormikProvider value={formikBag}>
			<Form onSubmit={onSubmit} action="">
				<Card sx={{ width: '100%', padding: '24px 40px', marginTop: '20px' }}>
					<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
						<Grid container columnSpacing={{ xs: 2, sm: 3, md: 4 }}>
							<Grid item xs={6}>
								<FormItemLabel label={'User name'}>
									<TextField
										placeholder="Nhập dữ liệu"
										autoFocus
										fullWidth
										id="userName"
										name="userName"
										value={formikBag.values.userName}
										onChange={formikBag.handleChange}
										error={formikBag.touched.userName && Boolean(formikBag.errors.userName)}
										helperText={formikBag.touched.userName && formikBag.errors.userName}
									/>
								</FormItemLabel>
							</Grid>
							<Grid item xs={6}>
								<FormItemLabel label={'Mật khẩu'}>
									<TextField
										placeholder="Nhập dữ liệu"
										autoFocus
										fullWidth
										type={'password'}
										id="password"
										name="password"
										value={formikBag.values.password}
										onChange={formikBag.handleChange}
										error={formikBag.touched.password && Boolean(formikBag.errors.password)}
										helperText={formikBag.touched.password && formikBag.errors.password}
									/>
								</FormItemLabel>
							</Grid>
							<Grid item xs={6}>
								<FormItemLabel label={'Họ'}>
									<TextField
										placeholder="Nhập dữ liệu"
										autoFocus
										fullWidth
										id="lastName"
										name="lastName"
										value={formikBag.values.lastName}
										onChange={formikBag.handleChange}
										error={formikBag.touched.lastName && Boolean(formikBag.errors.lastName)}
										helperText={formikBag.touched.lastName && formikBag.errors.lastName}
									/>
								</FormItemLabel>
							</Grid>
							<Grid item xs={6}>
								<FormItemLabel label={'Tên'}>
									<TextField
										placeholder="Nhập dữ liệu"
										autoFocus
										fullWidth
										id="firstName"
										name="firstName"
										value={formikBag.values.firstName}
										onChange={formikBag.handleChange}
										error={formikBag.touched.firstName && Boolean(formikBag.errors.firstName)}
										helperText={formikBag.touched.firstName && formikBag.errors.firstName}
									/>
								</FormItemLabel>
							</Grid>
							<Grid item xs={6}>
								<FormItemLabel label={'Email'}>
									<TextField
										placeholder="Nhập dữ liệu"
										autoFocus
										fullWidth
										type={'email'}
										id="email"
										name="email"
										value={formikBag.values.email}
										onChange={formikBag.handleChange}
										error={formikBag.touched.email && Boolean(formikBag.errors.email)}
										helperText={formikBag.touched.email && formikBag.errors.email}
									/>
								</FormItemLabel>
							</Grid>
							<Grid item xs={6}>
								<FormItemLabel label={'Số điện thoại'}>
									<TextField
										placeholder="Nhập dữ liệu"
										autoFocus
										fullWidth
										type={'phone'}
										id="phone"
										name="phone"
										value={formikBag.values.phone}
										onChange={formikBag.handleChange}
										error={formikBag.touched.phone && Boolean(formikBag.errors.phone)}
										helperText={formikBag.touched.phone && formikBag.errors.phone}
									/>
								</FormItemLabel>
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={12}>
						<Box sx={{ textAlign: 'right' }}>
							<Button variant={'contained'} type="submit">
								Tạo
							</Button>
						</Box>
					</Grid>
				</Card>
			</Form>
		</FormikProvider>
	);
};

export default UpdateAccount;
