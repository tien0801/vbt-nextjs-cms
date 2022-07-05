import { Grid } from '@mui/material';
import CreateBannerComponent from '../../features/banner/create';

const Banner = () => {
	return (
		<Grid container spacing={6}>
			<Grid item xs={12}>
				<CreateBannerComponent />
			</Grid>
		</Grid>
	);
};

export default Banner;
