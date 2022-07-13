/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Button } from '@mui/material';
import React from 'react';
import { Refresh, Plus, Export } from 'mdi-material-ui';
type Props = {
	exportFile?: VoidFunction | any;
	refresh?: VoidFunction | any;
	create?: VoidFunction | any;
};

const Actions: React.FC<Props> = ({ exportFile, refresh, create }) => {
	return (
		<Box
			sx={{
				width: '100%',
				padding: '20px',
				paddingBottom: 0,
				display: 'flex',
				justifyContent: 'flex-end',
				gap: 5,
			}}
		>
			{exportFile && (
				<Button
					endIcon={<Export />}
					size="large"
					variant="contained"
					onClick={exportFile}
					sx={{ background: '#C22026', color: '#fff' }}
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
	);
};

export default Actions;
