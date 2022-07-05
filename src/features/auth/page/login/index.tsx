// ** React Imports
import { MouseEvent, useState, useEffect } from 'react';

// ** Next Imports
import { useRouter } from 'next/router';

// ** MUI Components
import Box from '@mui/material/Box';
import MuiCard, { CardProps } from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled, useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

// ** Icons Imports
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline';
import EyeOutline from 'mdi-material-ui/EyeOutline';

// ** Configs
import themeConfig from 'src/configs/themeConfig';

// ** Demo Imports
import LoadingButton from '@mui/lab/LoadingButton';
import { FormikProvider, useFormik } from 'formik';
import FooterIllustrationsV1 from '@/src/components/FooterIllustrations/auth';
import { isLogin, setToken, setProfile } from '../../../../helpers/auth';
import { LoginRequest, AuthorizedType, AccountType } from '../../../../models';
import { validationSchema } from './validation';
import FormHelperText from '@mui/material/FormHelperText';
import { ResponseCommon } from '../../../../helpers/types';
import { useNotify } from '../../../../helpers/notify';

// ** Styled Components
const Card = styled(MuiCard)<CardProps>(({ theme }) => ({
	[theme.breakpoints.up('sm')]: { width: '28rem' },
}));

const LoginPage = () => {
	const [loading, setLoading] = useState<boolean>(false);
	const [showPassword, setShowPassword] = useState<boolean>(false);
	const theme = useTheme();
	const router = useRouter();
	const { successNotify, errorNotify } = useNotify();

	useEffect(() => {
		if (isLogin()) {
			router.push('/');
		}
	}, [router]);

	const handleClickShowPassword = () => {
		setShowPassword(!showPassword);
	};

	const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
	};

	const fakeLogin = async (params: LoginRequest) => {
		console.log('params', params);
		try {
			const response: ResponseCommon<AuthorizedType> = await (async () => {
				await new Promise((r) => setTimeout(r, 1000));
				return {
					success: true,
					data: {
						accessToken: 'fakeToken',
						refreshToken: 'fakeToken',
						expiresIn: 3600,
						profile: {
							id: 1,
							userName: 'admin',
							email: 'admin@localhost.com',
							firstName: 'Nguyễn Văn',
							lastName: 'Phước',
							phone: '0123456789',
						},
					},
				} as ResponseCommon<AuthorizedType>;
			})();

			const { data, success } = response;
			if (success) {
				const token = data as AuthorizedType;
				setToken(token);

				const profile: AccountType = response.data?.profile as AccountType;
				setProfile(profile);
				successNotify('Bạn đã đăng nhập thành công');
				return true;
			}
		} catch (error) {
			errorNotify('Tài khoản hoặc mật khẩu không đúng');
			return false;
		}
	};

	const handleSubmit = async (values: any) => {
		setLoading(true);

		const payload: LoginRequest = {
			username: values.username,
			password: values.password,
		};

		const response = await fakeLogin(payload);

		if (response) {
			router.push('/');
		}
		setLoading(false);
	};

	const formikBag = useFormik({
		initialValues: {
			username: '',
			password: '',
		},
		validationSchema: validationSchema,
		onSubmit: handleSubmit,
	});

	const login = (e: any) => {
		formikBag.submitForm();
		e.preventDefault();
	};

	return (
		<Box className="content-center">
			<Card sx={{ zIndex: 1 }}>
				<CardContent sx={{ padding: (theme) => `${theme.spacing(12, 9, 7)} !important` }}>
					<Box
						sx={{
							mb: 8,
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						<svg
							width={35}
							height={29}
							version="1.1"
							viewBox="0 0 30 23"
							xmlns="http://www.w3.org/2000/svg"
							xmlnsXlink="http://www.w3.org/1999/xlink"
						>
							<g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
								<g id="Artboard" transform="translate(-95.000000, -51.000000)">
									<g id="logo" transform="translate(95.000000, 50.000000)">
										<path
											id="Combined-Shape"
											fill={theme.palette.primary.main}
											d="M30,21.3918362 C30,21.7535219 29.9019196,22.1084381 29.7162004,22.4188007 C29.1490236,23.366632 27.9208668,23.6752135 26.9730355,23.1080366 L26.9730355,23.1080366 L23.714971,21.1584295 C23.1114106,20.7972624 22.7419355,20.1455972 22.7419355,19.4422291 L22.7419355,19.4422291 L22.741,12.7425689 L15,17.1774194 L7.258,12.7425689 L7.25806452,19.4422291 C7.25806452,20.1455972 6.88858935,20.7972624 6.28502902,21.1584295 L3.0269645,23.1080366 C2.07913318,23.6752135 0.850976404,23.366632 0.283799571,22.4188007 C0.0980803893,22.1084381 2.0190442e-15,21.7535219 0,21.3918362 L0,3.58469444 L0.00548573643,3.43543209 L0.00548573643,3.43543209 L0,3.5715689 C3.0881846e-16,2.4669994 0.8954305,1.5715689 2,1.5715689 C2.36889529,1.5715689 2.73060353,1.67359571 3.04512412,1.86636639 L15,9.19354839 L26.9548759,1.86636639 C27.2693965,1.67359571 27.6311047,1.5715689 28,1.5715689 C29.1045695,1.5715689 30,2.4669994 30,3.5715689 L30,3.5715689 Z"
										/>
										<polygon
											id="Rectangle"
											opacity="0.077704"
											fill={theme.palette.common.black}
											points="0 8.58870968 7.25806452 12.7505183 7.25806452 16.8305646"
										/>
										<polygon
											id="Rectangle"
											opacity="0.077704"
											fill={theme.palette.common.black}
											points="0 8.58870968 7.25806452 12.6445567 7.25806452 15.1370162"
										/>
										<polygon
											id="Rectangle"
											opacity="0.077704"
											fill={theme.palette.common.black}
											points="22.7419355 8.58870968 30 12.7417372 30 16.9537453"
											transform="translate(26.370968, 12.771227) scale(-1, 1) translate(-26.370968, -12.771227) "
										/>
										<polygon
											id="Rectangle"
											opacity="0.077704"
											fill={theme.palette.common.black}
											points="22.7419355 8.58870968 30 12.6409734 30 15.2601969"
											transform="translate(26.370968, 11.924453) scale(-1, 1) translate(-26.370968, -11.924453) "
										/>
										<path
											id="Rectangle"
											fillOpacity="0.15"
											fill={theme.palette.common.white}
											d="M3.04512412,1.86636639 L15,9.19354839 L15,9.19354839 L15,17.1774194 L0,8.58649679 L0,3.5715689 C3.0881846e-16,2.4669994 0.8954305,1.5715689 2,1.5715689 C2.36889529,1.5715689 2.73060353,1.67359571 3.04512412,1.86636639 Z"
										/>
										<path
											id="Rectangle"
											fillOpacity="0.35"
											fill={theme.palette.common.white}
											transform="translate(22.500000, 8.588710) scale(-1, 1) translate(-22.500000, -8.588710) "
											d="M18.0451241,1.86636639 L30,9.19354839 L30,9.19354839 L30,17.1774194 L15,8.58649679 L15,3.5715689 C15,2.4669994 15.8954305,1.5715689 17,1.5715689 C17.3688953,1.5715689 17.7306035,1.67359571 18.0451241,1.86636639 Z"
										/>
									</g>
								</g>
							</g>
						</svg>
						<Typography
							variant="h6"
							sx={{
								ml: 3,
								lineHeight: 1,
								fontWeight: 600,
								textTransform: 'uppercase',
								fontSize: '1.5rem !important',
							}}
						>
							{themeConfig.templateName}
						</Typography>
					</Box>
					<Box sx={{ mb: 6 }}>
						<Typography
							variant="h5"
							sx={{ fontWeight: 600, marginBottom: 1.5, textAlign: 'center' }}
						>
							Chào mừng admin {themeConfig.templateName}! 👋🏻
						</Typography>
						<Typography variant="body2" sx={{ textAlign: 'center' }}>
							Vui lòng đăng nhập vào tài khoản của bạn
						</Typography>
					</Box>
					<FormikProvider value={formikBag}>
						<form noValidate autoComplete="off">
							<Box sx={{ mb: 6 }}>
								<TextField
									autoFocus
									fullWidth
									id="username"
									name="username"
									label="Tên đăng nhập"
									sx={{ marginBottom: 4 }}
									value={formikBag.values.username}
									onChange={formikBag.handleChange}
									error={formikBag.touched.username && Boolean(formikBag.errors.username)}
									helperText={formikBag.touched.username && formikBag.errors.username}
								/>
								<FormControl fullWidth>
									<InputLabel htmlFor="auth-login-password">Mật khẩu</InputLabel>
									<OutlinedInput
										label="Mật khẩu"
										id="auth-login-password"
										name="password"
										type={showPassword ? 'text' : 'password'}
										value={formikBag.values.password}
										onChange={formikBag.handleChange}
										error={formikBag.touched.password && Boolean(formikBag.errors.password)}
										endAdornment={
											<InputAdornment position="end">
												<IconButton
													edge="end"
													onClick={handleClickShowPassword}
													onMouseDown={handleMouseDownPassword}
													aria-label="toggle password visibility"
												>
													{showPassword ? <EyeOutline /> : <EyeOffOutline />}
												</IconButton>
											</InputAdornment>
										}
									/>
									{formikBag.touched.password && (
										<FormHelperText error id="accountId-error">
											{formikBag.errors.password}
										</FormHelperText>
									)}
								</FormControl>
							</Box>
							<LoadingButton
								fullWidth
								size="large"
								variant="contained"
								sx={{ marginBottom: 7 }}
								type="submit"
								loading={loading}
								onClick={login}
							>
								Đăng nhập
							</LoadingButton>
						</form>
					</FormikProvider>
				</CardContent>
			</Card>
			<FooterIllustrationsV1 />
		</Box>
	);
};

export default LoginPage;
