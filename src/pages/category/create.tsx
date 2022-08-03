import { Grid } from '@mui/material';
import CreateComponent from '../../features/category/create';

const Create = () => {
	return (
		<Grid container spacing={6}>
			<Grid item xs={12}>
				<CreateComponent />
			</Grid>
		</Grid>
	);
};

export default Create;
