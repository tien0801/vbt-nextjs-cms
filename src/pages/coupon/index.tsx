import { Grid } from '@mui/material';
import CouponComponent from '../../features/coupon';

const Coupon = () => {
	return (
		<Grid container spacing={6}>
			<Grid item xs={12}>
				<CouponComponent />
			</Grid>
		</Grid>
	);
};

export default Coupon;
