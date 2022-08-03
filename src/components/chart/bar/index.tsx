import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { Box, Typography } from '@mui/material';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

type Props = {
	chartLabel: Array<string>;
	chartData: any;
	indexAxis?: 'x' | 'y';
	legendPosition?: 'bottom' | 'top' | 'right' | 'left';
	chartTitle: string | React.ReactNode;
	chartSubTitle?: string | React.ReactNode;
};
const BarChartCommon = ({
	chartLabel,
	chartSubTitle = '',
	chartData = [],
	chartTitle,
	legendPosition = 'bottom',
	indexAxis = 'x',
}: Props) => {
	const options = {
		indexAxis: indexAxis,
		responsive: true,
		plugins: {
			legend: {
				position: legendPosition,
			},
		},
	};

	const data = {
		labels: chartLabel,
		datasets: chartData,
	};

	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column',
			}}
		>
			<Typography variant="h6" gutterBottom sx={{ textTransform: 'capitalize' }}>
				{chartTitle}
			</Typography>
			<Typography
				variant="body2"
				gutterBottom
				sx={{ fontSize: 14, textTransform: 'capitalize' }}
			>
				{chartSubTitle}
			</Typography>
			<Bar data={data} options={options} />
		</Box>
	);
};

export default BarChartCommon;
