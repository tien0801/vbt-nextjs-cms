import { Grid } from '@mui/material';
import CategoryComponent from '../../features/category';

const Category = () => {
	return (
		<Grid container spacing={6}>
			<Grid item xs={12}>
				<CategoryComponent />
			</Grid>
		</Grid>
	);
};

export default Category;
