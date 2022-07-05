import { Grid } from '@mui/material';
import UpdateBannerComponent from '../../features/banner/update';

const UpdateBanner = () => {
	return (
		<Grid container spacing={6}>
			<Grid item xs={12}>
				<UpdateBannerComponent />
			</Grid>
		</Grid>
	);
};

export default UpdateBanner;
