import { TabContext, TabPanel } from '@mui/lab';
import {
	Box,
	Button,
	Card, Grid, Tab,
	Tabs
} from '@mui/material';
import { FormikProvider, useFormik } from 'formik';
import { useCallback, useState } from 'react';
import PromotionDetailComponent from './common/components/detail';
import { initialValues } from './common/hooks';
import PromotionInfoComponent from './common/components/info';
import PromotionProductComponent from './common/components/products';
import PromotionScheduleComponent from './common/components/schedule';
import { FormikDataType } from './common/types';
import { validationSchema } from './common/validation';

const PromotionCreateComponent = () => {
	const [tabSwitch, setTabSwitch] = useState('1');

	const onSubmit = useCallback(async (values: any) => {
		console.log(values);
	}, []);

	const formikBag = useFormik<FormikDataType>({
		initialValues,
		validationSchema,
		onSubmit,
	});

	return (
		<FormikProvider value={formikBag}>
			<Card sx={{ width: '100%', padding: '24px 40px', marginTop: '20px' }}>
				<TabContext value={tabSwitch}>
					<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
						<Tabs value={tabSwitch} onChange={(e, value) => setTabSwitch(value)}>
							<Tab label="Thông tin khuyến mãi" value="1" />
							<Tab label="Thông số kỹ thuật" value="2" />
							<Tab label="Sản phẩm áp dụng" value="3" />
							<Tab label="Lịch trình" value="4" />
						</Tabs>
					</Box>
					<TabPanel value="1">
						<PromotionInfoComponent formikBag={formikBag} />
					</TabPanel>
					<TabPanel value="2">
						<PromotionDetailComponent formikBag={formikBag} />
					</TabPanel>
					<TabPanel value="3">
						<PromotionProductComponent />
					</TabPanel>
					<TabPanel value="4">
						<PromotionScheduleComponent formikBag={formikBag} />
					</TabPanel>
					<Grid item xs={12}>
						<Box sx={{ textAlign: 'right' }}>
							<Button type="button" variant="contained" onClick={() => formikBag.submitForm()}>
								Lưu
							</Button>
						</Box>
					</Grid>
				</TabContext>
			</Card>
		</FormikProvider>
	);
};

export default PromotionCreateComponent;
