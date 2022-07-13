/* eslint-disable no-undef */
import { Card, Grid, Typography } from '@mui/material';
import React from 'react';

type Props = {
	total: number;
	clearCheckedRows: VoidFunction;
	onDelete: VoidFunction;
};

const DeleteCard: React.FC<Props> = ({ total, clearCheckedRows, onDelete }) => {
	return (
		<>
			{total > 0 && (
				<Card
					sx={{
						width: '100%',
						padding: '20px',
						marginBottom: '20px',
						display: 'flex',
						justifyContent: 'space-between',
					}}
				>
					<Grid xs={6} display={'flex'} gap={5}>
						Đã chọn {total}
						<Typography
							color={'red'}
							style={{ cursor: 'pointer' }}
							onClick={clearCheckedRows}
						>
							Huỷ
						</Typography>
					</Grid>
					<Grid xs={6} display={'flex'} justifyContent={'flex-end'}>
						<Typography color={'red'} style={{ cursor: 'pointer' }} onClick={onDelete}>
							Xoá {total} mục
						</Typography>
					</Grid>
				</Card>
			)}
		</>
	);
};

export default DeleteCard;
