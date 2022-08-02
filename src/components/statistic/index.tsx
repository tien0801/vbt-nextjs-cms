import { Card, Typography } from '@mui/material';
import React from 'react';

type Props = {
	title: string;
	value: number;
};

const Statistic = (props: Props) => {
	const { title, value } = props;
	return (
		<Card sx={{ padding: 5 }}>
			<Typography variant="body2" sx={{ textTransform: 'uppercase' }}>
				{title}
			</Typography>
			<Typography variant="h5" gutterBottom>
				{value.toLocaleString('en-US')}
			</Typography>
		</Card>
	);
};

export default Statistic;
