import { Grid } from '@mui/material';
import BannerComponent from '../../features/banner';

const Banner = () => {
	return (
		<Grid container spacing={6}>
			<Grid item xs={12}>
				<BannerComponent />
			</Grid>
		</Grid>
	);
};

export default Banner;
