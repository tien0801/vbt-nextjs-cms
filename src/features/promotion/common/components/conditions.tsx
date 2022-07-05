import {
	Box,
	Button,
	Card,
	CardContent,
	Divider,
	FormControlLabel,
	Radio,
	RadioGroup,
	Typography,
} from '@mui/material';
import { Plus } from 'mdi-material-ui';
import { useCallback } from 'react';
import PromotionDetailConditionsRulesComponent from './rules';

type Props = {
	formikBag: any;
	specificationIndex: number;
};

const PromotionDetailConditionsComponent = (props: Props) => {
	const { formikBag, specificationIndex } = props;

	const { conditions = [] } = formikBag.values.specifications?.[specificationIndex] || {};

	const onAddItem = useCallback(() => {
		const specifications = [...formikBag.values.specifications];
		const conditions = [...specifications[specificationIndex].conditions];
		conditions.push({ required: true, matchedType: '', rules: [] });
		specifications[specificationIndex].conditions = conditions;
		formikBag.setFieldValue('specifications', specifications);
	}, [formikBag, specificationIndex]);

	const onDeleteItem = useCallback(
		(index: number) => {
			const specifications = [...formikBag.values.specifications];
			const conditions = [...specifications[specificationIndex].conditions];
			conditions.splice(index, 1);
			specifications[specificationIndex].conditions = conditions;
			formikBag.setFieldValue('specifications', specifications);
		},
		[formikBag, specificationIndex]
	);

	return (
		<Card>
			{conditions?.map((condition: any, index: number) => (
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
							<Typography py={2}>Loại áp dụng</Typography>
							<RadioGroup defaultValue="1">
								<FormControlLabel value="1" control={<Radio />} label="Tất cả" />
								<FormControlLabel value="2" control={<Radio />} label="Tùy chọn" />
							</RadioGroup>
							<PromotionDetailConditionsRulesComponent
								formikBag={formikBag}
								conditionIndex={index}
								specificationIndex={specificationIndex}
							/>
						</CardContent>
					</Card>
				</CardContent>
			))}
			<Box sx={{ padding: 5 }}>
				<Button variant="outlined" style={{ minWidth: '100%' }} onClick={onAddItem}>
					<Plus />
					Thêm điều kiện
				</Button>
			</Box>
		</Card>
	);
};

export default PromotionDetailConditionsComponent;
