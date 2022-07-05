/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-explicit-any */
import LoadingButton from '@mui/lab/LoadingButton';
import { Card, CardActions, CardContent, Grid } from '@mui/material';
import React from 'react';
import { Magnify, Close } from 'mdi-material-ui';
import { FormikProvider } from 'formik';

type Props = {
	onFilter: VoidFunction;
	onReFresh: VoidFunction;
	loading: boolean;
	formik: any;
    children: any
};

const FilterLayout: React.FC<Props> = ({ children, onFilter, onReFresh, loading, formik }) => {
	return (
		<FormikProvider value={formik}>
			<Grid item xs={12}>
				<Card>
					<CardContent>
						<Grid container spacing={5}>
							{children}
						</Grid>
					</CardContent>
					<CardActions>
						<LoadingButton
							size="large"
							type="submit"
							sx={{ mr: 2 }}
							variant="contained"
							loading={loading}
							onClick={onFilter}
							loadingPosition="end"
							endIcon={<Magnify />}
						>
							Tìm kiếm
						</LoadingButton>
						<LoadingButton
							loadingPosition="end"
							endIcon={<Close />}
							onClick={onReFresh}
							size="large"
							color="secondary"
							variant="outlined"
							loading={loading}
						>
							Huỷ
						</LoadingButton>
					</CardActions>
				</Card>
			</Grid>
		</FormikProvider>
	);
};

export default FilterLayout;
