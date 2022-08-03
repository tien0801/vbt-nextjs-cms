import FormItemLabel from '@/src/components/form-item-label';
import {
	Box,
	Button,
	Card,
	CardContent,
	Divider,
	Switch,
	Typography,
	TextField,
	MenuItem,
	Grid,
} from '@mui/material';
import { Plus } from 'mdi-material-ui';
import { useCallback } from 'react';

type Props = {
	formikBag: any;
	conditionIndex: number;
	specificationIndex: number;
};

const PromotionDetailConditionsRulesComponent = (props: Props) => {
	const { formikBag, conditionIndex, specificationIndex } = props;

	const { rules = [] } =
		formikBag.values.specifications?.[specificationIndex]?.conditions?.[conditionIndex] || {};

	const onAddItem = useCallback(() => {
		const specifications = [...formikBag.values.specifications];
		const conditions = [...specifications[specificationIndex].conditions];
		const rules = [...conditions[conditionIndex].rules];
		rules.push({ required: true, ruleType: '' });
		conditions[conditionIndex].rules = rules;
		specifications[specificationIndex].conditions = conditions;
		formikBag.setFieldValue('specifications', specifications);
	}, [conditionIndex, formikBag, specificationIndex]);

	const onDeleteItem = useCallback(
		(index: number) => {
			const specifications = [...formikBag.values.specifications];
			const conditions = [...specifications[specificationIndex].conditions];
			const rules = [...conditions[conditionIndex].rules];
			rules.splice(index, 1);
			conditions[conditionIndex].rules = rules;
			specifications[specificationIndex].conditions = conditions;
			formikBag.setFieldValue('specifications', specifications);
		},
		[conditionIndex, formikBag, specificationIndex]
	);

	return (
		<Card>
			{rules?.map((rule: any, index: number) => (
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
								<Typography py={2}>Quy tắc #{index + 1}</Typography>
								<Button onClick={() => onDeleteItem(index)}>Xóa</Button>
							</Box>
							<Divider />
							<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
								<Grid item xs={6}>
									<FormItemLabel label={'Loại tùy chọn'}>
										<Switch defaultChecked />
									</FormItemLabel>
								</Grid>
								<Grid item xs={6}>
									<FormItemLabel label={'Loại quy tắc'}>
										<TextField
											fullWidth
											select
											id="slug"
											name="slug"
											placeholder="Vui lòng nhập trường này"
											value={formikBag.values.slug}
											onChange={formikBag.handleChange}
											error={formikBag.touched.slug && Boolean(formikBag.errors.slug)}
											helperText={formikBag.touched.slug && formikBag.errors.slug}
										>
											<MenuItem value={1}>Theo tổng tiền đơn hàng</MenuItem>
											<MenuItem value={2}>Theo sản phẩm</MenuItem>
											<MenuItem value={3}>Theo số lượng sản phẩm</MenuItem>
											<MenuItem value={4}>Theo loại đơn hàng</MenuItem>
											<MenuItem value={5}>Theo thời gian mua</MenuItem>
										</TextField>
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
					Thêm quy tắc
				</Button>
			</Box>
		</Card>
	);
};

export default PromotionDetailConditionsRulesComponent;
