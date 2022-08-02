import { Box, Button } from '@mui/material';
import React from 'react';
import { Refresh, Plus, Export } from 'mdi-material-ui';
type Props = React.ComponentProps<typeof Box> & {
	exportFile?: VoidFunction | any;
	refresh?: VoidFunction | any;
	create?: VoidFunction | any;
};

const Actions: React.FC<Props> = ({ exportFile, refresh, create, children }) => {
	return (
		<Box
			sx={{
				width: '100%',
				padding: '20px',
				paddingBottom: 0,
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				gap: 5,
			}}
		>
			<Box>{children}</Box>
			<Box>
				{exportFile && (
					<Button
						endIcon={<Export />}
						size="large"
						variant="contained"
						onClick={exportFile}
						sx={{ background: '#C22026', color: '#fff', marginRight: '15px' }}
					>
						Xuất excel
					</Button>
				)}
				{create && (
					<Button
						endIcon={<Plus />}
						size="large"
						variant="contained"
						onClick={create}
						sx={{ background: '#C22026', color: '#fff' }}
					>
						Thêm mới
					</Button>
				)}
				{refresh && (
					<Button size="large" onClick={refresh}>
						<Refresh />
					</Button>
				)}
			</Box>
		</Box>
	);
};

export default Actions;
