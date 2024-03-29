/* eslint-disable react-hooks/exhaustive-deps */
import { Collapse, ListItemIcon, Typography } from '@mui/material';
import React, { useState, ReactNode, useEffect } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import UserIcon from 'src/layouts/components/UserIcon';
import themeConfig from 'src/configs/themeConfig';
import { makeStyles, createStyles } from '@mui/styles';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTheme } from '@mui/material/styles';

type Props = {
	item: any;
	MenuItemTextMetaWrapper: any;
	MenuNavLink: any;
};

const AccordionDefault: React.FC<Props> = ({ item, MenuItemTextMetaWrapper, MenuNavLink }) => {
	const theme = useTheme();

	const [open, setOpen] = useState(false);
	const router = useRouter();
	const useStyles = makeStyles(() =>
		createStyles({
			rotateIcon: {
				transform: open ? 'rotate(180deg)' : '',
			},
			hover: {
				'&:hover': {
					backgroundColor: '#ecedf3',
					borderRadius: '0px 50px 50px 0px',
				},
			},
		})
	);
	const Style = useStyles();
	const IconTag: ReactNode = item.icon;

	const toggle = () => setOpen(!open);
	const pathSplit = router.pathname.split('/')[1];
	const findItem = () => {
		return item.dropdownItems.findIndex((e: any) => e.path === `/${pathSplit}`);
	};
	const itemIndex = item.dropdownItems[findItem()];

	useEffect(() => {
		if (itemIndex?.path === `/${pathSplit}`) {
			setOpen(true);
		}
	}, []);

	const cusTomLink = {
		color: 'rgba(58, 53, 65, 0.87)',
		textDecoration: 'none',
		display: 'block',
	};

	return (
		<>
			<MenuNavLink
				component={'a'}
				className={open ? '' : ''}
				{...(item.openInNewTab ? { target: '_blank' } : null)}
				sx={{
					pl: 5.5,
					mt: 2,
					...(item.disabled ? { pointerEvents: 'none' } : { cursor: 'pointer' }),
				}}
				onClick={() => toggle()}
			>
				<ListItemIcon
					sx={{
						mr: 2.5,
						color: 'text.primary',
						transition: 'margin .25s ease-in-out',
					}}
				>
					<UserIcon icon={IconTag} />
				</ListItemIcon>

				<MenuItemTextMetaWrapper>
					<Typography {...(themeConfig.menuTextTruncate && { noWrap: true })}>
						{item.title}
					</Typography>
					<ExpandMoreIcon className={Style.rotateIcon} />
				</MenuItemTextMetaWrapper>
			</MenuNavLink>
			<Collapse in={open}>
				<div style={{ marginTop: '15px' }}>
					{item.dropdownItems.map((e: any, i: any) => {
						return (
							<Typography
								key={i}
								className={Style.hover}
								style={
									e?.path === `/${pathSplit}`
										? {
												backgroundImage: `linear-gradient(98deg, ${theme.palette.customColors.primaryGradient}, ${theme.palette.primary.main} 94%)`,
												borderRadius: '0 50px 50px 0',
										  }
										: undefined
								}
								sx={{ pt: 2.5, pb: 2.5, pl: 14 }}
								{...(themeConfig.menuTextTruncate && { noWrap: true })}
							>
								<Link href={e.path} passHref>
									<a
										href=""
										style={
											e?.path === `/${pathSplit}`
												? {
														...cusTomLink,
														color: `${theme.palette.common.white}`,
												  }
												: cusTomLink
										}
									>
										{e.title}
									</a>
								</Link>
							</Typography>
						);
					})}
				</div>
			</Collapse>
		</>
	);
};

export default AccordionDefault;
