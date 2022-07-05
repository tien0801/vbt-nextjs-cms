import { Grid } from '@mui/material';
import UpdateComponent from '../../features/coupon/update';

const Update = () => {
	return (
		<Grid container spacing={6}>
			<Grid item xs={12}>
				<UpdateComponent />
			</Grid>
		</Grid>
	);
};

export default Update;
