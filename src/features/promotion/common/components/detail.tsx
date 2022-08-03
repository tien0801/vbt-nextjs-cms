import FormItemLabel from '@/src/components/form-item-label';
import { TabContext, TabPanel } from '@mui/lab';
import { Box, Button, Grid, Slider, Tab, Tabs, Typography } from '@mui/material';
import { Close, Plus } from 'mdi-material-ui';
import { useCallback, useState } from 'react';
import { useMarks } from '../hooks';
import PromotionDetailConditionsComponent from './conditions';
import PromotionDetailOperationsComponent from './operations';

type Props = {
	formikBag: any;
};

const PromotionDetailComponent = (props: Props) => {
	const { formikBag } = props;

	const marks = useMarks();
	const [tabSwitch, setTabSwitch] = useState('1');

	const onAddItem = useCallback(() => {
		const specifications = [...formikBag.values.specifications];
		specifications.push({ id: Math.random(), priority: 0, conditions: [], operations: [] });
		formikBag.setFieldValue('specifications', specifications);
	}, [formikBag]);

	const onDeleteItem = useCallback(
		(index: number) => {
			const specifications = [...formikBag.values.specifications];
			specifications.splice(index, 1);
			formikBag.setFieldValue('specifications', specifications);
		},
		[formikBag]
	);

	return (
		<Box sx={{ flexGrow: 1, display: 'flex' }}>
			<TabContext value={tabSwitch}>
				<Tabs
					orientation="vertical"
					variant="scrollable"
					value={tabSwitch}
					onChange={(e, value) => setTabSwitch(value)}
					aria-label="Vertical tabs example"
					sx={{ borderRight: 1, borderColor: 'divider', minWidth: 150 }}
				>
					{formikBag.values.specifications?.map((_: any, index: number) => (
						<Tab key={index} label={`Thông số #${index + 1}`} value={`${index + 1}`} />
					))}
					<Button variant="contained" style={{ margin: 10 }} onClick={onAddItem}>
						<Plus />
					</Button>
				</Tabs>
				{formikBag.values.specifications?.map((_: any, index: number) => (
					<TabPanel key={index} value={`${index + 1}`} style={{ width: '100%' }}>
						<Grid container rowSpacing={1}>
							<Grid item xs={6}>
								<FormItemLabel label={'Độ ưu tiên'}>
									<Slider
										step={1}
										min={0}
										max={100}
										defaultValue={50}
										marks={marks}
										valueLabelDisplay="auto"
										onChange={(_, value) => console.log(value)}
									/>
								</FormItemLabel>
							</Grid>
							<Grid item xs={6}>
								<Box sx={{ display: 'flex', justifyContent: 'end' }}>
									<Button variant="outlined" onClick={() => onDeleteItem(index)}>
										<Close />
										Xóa thông số
									</Button>
								</Box>
							</Grid>
							<Grid item xs={12}>
								<Typography variant="h6" gutterBottom>
									Điều kiện
								</Typography>
								<PromotionDetailConditionsComponent
									formikBag={formikBag}
									specificationIndex={index}
								/>
							</Grid>
							<Grid item xs={12}>
								<Typography variant="h6" gutterBottom>
									Ưu đãi
								</Typography>
								<PromotionDetailOperationsComponent
									formikBag={formikBag}
									specificationIndex={index}
								/>
							</Grid>
						</Grid>
					</TabPanel>
				))}
			</TabContext>
		</Box>
	);
};

export default PromotionDetailComponent;
