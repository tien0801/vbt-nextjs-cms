// ** React Imports
import { ReactNode } from 'react';

// ** Next Import
import Link from 'next/link';

// ** MUI Components
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box, { BoxProps } from '@mui/material/Box';

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout';

// ** Demo Imports
import FooterIllustrations from '@/src/components/FooterIllustrations/misc';

// ** Styled Components
const BoxWrapper = styled(Box)<BoxProps>(({ theme }) => ({
	[theme.breakpoints.down('md')]: {
		width: '90vw',
	},
}));

const Img = styled('img')(({ theme }) => ({
	marginBottom: theme.spacing(10),
	[theme.breakpoints.down('lg')]: {
		height: 450,
		marginTop: theme.spacing(10),
	},
	[theme.breakpoints.down('md')]: {
		height: 400,
	},
	[theme.breakpoints.up('lg')]: {
		marginTop: theme.spacing(13),
	},
}));

const TreeIllustration = styled('img')(({ theme }) => ({
	left: 0,
	bottom: '5rem',
	position: 'absolute',
	[theme.breakpoints.down('lg')]: {
		bottom: 0,
	},
}));

const Error404 = () => {
	return (
		<Box className="content-center">
			<Box
				sx={{
					p: 5,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					textAlign: 'center',
				}}
			>
				<BoxWrapper>
					<Typography variant="h1">404</Typography>
					<Typography variant="h5" sx={{ mb: 1, fontSize: '1.5rem !important' }}>
						Không tìm thấy trang ⚠️
					</Typography>
					<Typography variant="body2">
						Xin lỗi, chúng tôi không thể tìm thấy trang bạn đang tìm kiếm.
					</Typography>
				</BoxWrapper>
				<Link passHref href="/">
					<Button component="a" variant="contained" sx={{ px: 5.5, mt: 4 }}>
						Quay lại trang chủ
					</Button>
				</Link>
				<Img height="487" alt="error-illustration" src="/images/pages/404.png" />
				
			</Box>
			<FooterIllustrations image={<TreeIllustration alt="tree" src="/images/pages/tree.png" />} />
		</Box>
	);
};

Error404.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>;

export default Error404;
