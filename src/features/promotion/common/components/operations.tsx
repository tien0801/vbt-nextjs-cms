import FormItemLabel from '@/src/components/form-item-label';
import {
	Box,
	Button,
	Card,
	CardContent,
	Divider,
	FormControlLabel,
	Grid,
	Radio,
	RadioGroup,
	Slider,
	TextField,
	Typography,
} from '@mui/material';
import { Plus } from 'mdi-material-ui';
import { useCallback } from 'react';
import { useMarks } from '../hooks';

type Props = {
	formikBag: any;
	specificationIndex: number;
};

const PromotionDetailOperationsComponent = (props: Props) => {
	const { formikBag, specificationIndex } = props;

	const marks = useMarks();
	const { operations = [] } = formikBag.values.specifications?.[specificationIndex] || {};

	const onAddItem = useCallback(() => {
		const specifications = [...formikBag.values.specifications];
		const operations = [...specifications[specificationIndex].operations];
		operations.push({ type: 'discount', note: '', priority: 1 });
		specifications[specificationIndex].operations = operations;
		formikBag.setFieldValue('specifications', specifications);
	}, [formikBag, specificationIndex]);

	const onDeleteItem = useCallback(
		(index: number) => {
			const specifications = [...formikBag.values.specifications];
			const operations = [...specifications[specificationIndex].operations];
			operations.splice(index, 1);
			specifications[specificationIndex].operations = operations;
			formikBag.setFieldValue('specifications', specifications);
		},
		[formikBag, specificationIndex]
	);

	return (
		<Card>
			{operations?.map((condition: any, index: number) => (
				<CardContent key={index}>
					<Card>
						<CardContent>
							<Box
								sx={{
									flexGrow: 1,
									display: 'flex',
									justifyContent: 'space-between',
								}}
							>
								<Typography py={2}>Điều kiện #{index + 1}</Typography>
								<Button onClick={() => onDeleteItem(index)}>Xóa</Button>
							</Box>
							<Divider />
							<Typography py={2}>Loại ưu đãi</Typography>
							<RadioGroup defaultValue="1">
								<FormControlLabel value="1" control={<Radio />} label="Giảm % tổng bill" />
								<FormControlLabel
									value="2"
									control={<Radio />}
									label="Giảm số tiền trên tổng bill"
								/>
								<FormControlLabel value="3" control={<Radio />} label="Mua với combo" />
								<FormControlLabel
									value="4"
									control={<Radio />}
									label="Giảm số tiền trên sản phẩm"
								/>
							</RadioGroup>
							<Grid container rowSpacing={3} style={{ justifyContent: 'space-between' }} mt={4}>
								<Grid item xs={5}>
									<FormItemLabel label={'Giảm giá tối đa'}>
										<TextField
											fullWidth
											id="note"
											name="note"
											placeholder="Vui lòng nhập trường này"
											value={formikBag.values.slug}
											onChange={formikBag.handleChange}
											error={formikBag.touched.slug && Boolean(formikBag.errors.slug)}
											helperText={formikBag.touched.slug && formikBag.errors.slug}
										/>
									</FormItemLabel>
								</Grid>
								<Grid item xs={5}>
									<FormItemLabel label={'Phần trăm'}>
										<TextField
											fullWidth
											id="note"
											name="note"
											placeholder="Vui lòng nhập trường này"
											value={formikBag.values.slug}
											onChange={formikBag.handleChange}
											error={formikBag.touched.slug && Boolean(formikBag.errors.slug)}
											helperText={formikBag.touched.slug && formikBag.errors.slug}
										/>
									</FormItemLabel>
								</Grid>
								<Grid item xs={5}>
									<FormItemLabel label={'Ghi chú'}>
										<TextField
											fullWidth
											id="note"
											name="note"
											placeholder="Vui lòng nhập trường này"
											value={formikBag.values.slug}
											onChange={formikBag.handleChange}
											error={formikBag.touched.slug && Boolean(formikBag.errors.slug)}
											helperText={formikBag.touched.slug && formikBag.errors.slug}
										/>
									</FormItemLabel>
								</Grid>
								<Grid item xs={5}>
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
							</Grid>
						</CardContent>
					</Card>
				</CardContent>
			))}
			<Box sx={{ padding: 5 }}>
				<Button variant="outlined" style={{ minWidth: '100%' }} onClick={onAddItem}>
					<Plus />
					Thêm ưu đãi
				</Button>
			</Box>
		</Card>
	);
};

export default PromotionDetailOperationsComponent;
