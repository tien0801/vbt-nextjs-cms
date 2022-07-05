import React from 'react';
import { Typography, Box } from '@mui/material';

type Props = {
	label: string;
};

const FormItemLabel: React.FC<Props> = ({ children, label }) => {
	return (
		<Box mb={4}>
			<Typography mb={2}>{label}</Typography>
			{children}
		</Box>
	);
};

export default FormItemLabel;
