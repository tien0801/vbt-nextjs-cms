import React from 'react';
import { Typography, Box } from '@mui/material';

type Props = {
	label: string;
	required?: boolean;
};

const FormItemLabel: React.FC<Props> = ({ children, label, required }) => {
	return (
		<Box mb={4}>
			<Typography mb={2}>
				{required && <span style={{ color: '#C22026', paddingRight: '5px' }}>*</span>}
				{label}
			</Typography>
			{children}
		</Box>
	);
};

export default FormItemLabel;
