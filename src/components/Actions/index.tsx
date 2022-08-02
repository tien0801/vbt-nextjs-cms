/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Button } from '@mui/material';
import React from 'react';
import { Refresh, Plus, Export } from 'mdi-material-ui';

type Props = React.ComponentProps<typeof Box> & {
	exportFile?: VoidFunction | any;
	exportFileLabel?: VoidFunction | any;
	refresh?: VoidFunction | any;
	create?: VoidFunction | any;
	createLabel?: VoidFunction | any;
};

const Actions: React.FC<Props> = ({
	exportFile,
	refresh,
	create,
	children,
	exportFileLabel = 'Xuất excel',
	createLabel = 'Thêm mới',
}) => {
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
						variant="contained"
						onClick={exportFile}
						sx={{ ml: 4 }}
					>
						{exportFileLabel}
					</Button>
				)}
				{create && (
					<Button endIcon={<Plus />} variant="contained" onClick={create} sx={{ ml: 4 }}>
						{createLabel}
					</Button>
				)}
				{refresh && (
					<Button onClick={refresh} sx={{ ml: 4 }}>
						<Refresh />
					</Button>
				)}
			</Box>
		</Box>
	);
};

export default Actions;
