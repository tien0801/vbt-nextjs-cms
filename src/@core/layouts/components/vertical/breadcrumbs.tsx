import HomeIcon from '@mui/icons-material/Home';
import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Link from 'next/Link';
import { useRouter } from 'next/router';
import * as React from 'react';

// ** Styled Components
const BreadcrumbLink = styled('a')<any>(({ theme }) => ({
	width: '100%',
	color: theme.palette.text.primary,
	transition: 'opacity .25s ease-in-out',
	textDecoration: 'none',
	display: 'flex',
	alignItems: 'center',
	'&:hover': {
		textDecoration: 'underline',
	},
}));

const IconBreadcrumbs = React.memo(({ data }: any) => {
	const router = useRouter();
	const { id } = router.query;

	return (
		<div role="presentation">
			<Breadcrumbs aria-label="breadcrumb">
				<Link href="/" passHref>
					<BreadcrumbLink>
						<HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
						Trang chủ
					</BreadcrumbLink>
				</Link>
				{data.map((ele: any, index: number) => (
					<Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
						{data?.length > 1 && index == data?.length - 1 ? (
							<Box sx={{ display: 'flex', alignItems: 'center' }}>
								<Typography sx={{ display: 'flex', alignItems: 'center' }} color="text.primary">
									{ele?.icon && <ele.icon fontSize="inherit" sx={{ mr: 1 }} />} {ele?.title}{' '}
									{id && `"${id}"`}
								</Typography>
							</Box>
						) : (
							<Link href={ele.path} passHref>
								<BreadcrumbLink>
									{ele?.icon && <ele.icon fontSize="inherit" sx={{ mr: 1 }} />} {ele?.title}
								</BreadcrumbLink>
							</Link>
						)}
					</Box>
				))}
			</Breadcrumbs>
		</div>
	);
});

IconBreadcrumbs.displayName = 'IconBreadcrumbs';

export default IconBreadcrumbs;
