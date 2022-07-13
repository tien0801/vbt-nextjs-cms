import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import * as React from 'react';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

type Props = {
	position?: Anchor;
	children: any;
	selected?: any;
	initSelected?: any;
	visible: any;
	setVisible: any;
	title: string;
};

const DrawerComponent = ({ children, position = 'right', visible, setVisible, title }: Props) => {
	const toggleDrawer = () => (event: React.KeyboardEvent | React.MouseEvent) => {
		if (
			event.type === 'keydown' &&
			((event as React.KeyboardEvent).key === 'Tab' ||
				(event as React.KeyboardEvent).key === 'Shift')
		) {
			return;
		}
		setVisible(false);
	};

	return (
		<React.Fragment>
			<Drawer anchor={position} open={visible} onClose={toggleDrawer()}>
				<Box
					sx={{
						width: 'auto',
						padding: '20px',
					}}
					role="presentation"
					onKeyDown={toggleDrawer()}
				>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
							borderBottom: '1px solid #C22026',
							paddingBottom: '5px',
							marginBottom: '5px',
						}}
					>
						<Typography
							sx={{
								fontWeight: 600,
								fontSize: '1rem',
								textTransform: 'uppercase',
								marginLeft: '10px',
							}}
						>
							{title}
						</Typography>
						<Chip label="Đóng" variant="outlined" onClick={toggleDrawer()} />
					</Box>
					{children}
				</Box>
			</Drawer>
		</React.Fragment>
	);
};

export default DrawerComponent;
