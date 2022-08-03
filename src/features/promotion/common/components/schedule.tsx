import {
	Checkbox,
	Grid,
	ListItemText,
	MenuItem,
	OutlinedInput,
	Select,
	Switch,
	TextField,
} from '@mui/material';
import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import FormItemLabel from '@/src/components/form-item-label';

const daysOfWeek = ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ Nhật'];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250,
		},
	},
};

type Props = {
	formikBag: any;
};

const PromotionScheduleComponent = (props: Props) => {
	const { formikBag } = props;

	return (
		<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
			<Grid item xs={12}>
				<FormItemLabel label={'Kích hoạt'}>
					<Switch defaultChecked />
				</FormItemLabel>
			</Grid>
			<Grid item xs={4}>
				<FormItemLabel label={'Ngày trong tuần'}>
					<Select
						multiple
						id="daysOfWeek"
						name="daysOfWeek"
						value={formikBag.values.daysOfWeek}
						onChange={formikBag.handleChange}
						input={<OutlinedInput label="Name" />}
						renderValue={(selected) => selected.join(', ')}
						style={{ width: '100%' }}
						MenuProps={MenuProps}
					>
						{daysOfWeek.map((name) => (
							<MenuItem key={name} value={name}>
								<Checkbox checked={formikBag.values.daysOfWeek.indexOf(name) > -1} />
								<ListItemText primary={name} />
							</MenuItem>
						))}
					</Select>
				</FormItemLabel>
			</Grid>
			<Grid item xs={4}>
				<FormItemLabel label={'Loại trừ những ngày'}>
					<Select
						multiple
						id="daysOfWeek"
						name="daysOfWeek"
						value={formikBag.values.daysOfWeek}
						onChange={formikBag.handleChange}
						input={<OutlinedInput label="Name" />}
						renderValue={(selected) => selected.join(', ')}
						style={{ width: '100%' }}
						MenuProps={MenuProps}
					>
						{daysOfWeek.map((name) => (
							<MenuItem key={name} value={name}>
								<Checkbox checked={formikBag.values.daysOfWeek.indexOf(name) > -1} />
								<ListItemText primary={name} />
							</MenuItem>
						))}
					</Select>
				</FormItemLabel>
			</Grid>
			<Grid item xs={4}>
				<FormItemLabel label={'Áp dụng cho những ngày'}>
					<Select
						multiple
						id="daysOfWeek"
						name="daysOfWeek"
						value={formikBag.values.daysOfWeek}
						onChange={formikBag.handleChange}
						input={<OutlinedInput label="Name" />}
						renderValue={(selected) => selected.join(', ')}
						style={{ width: '100%' }}
						MenuProps={MenuProps}
					>
						{daysOfWeek.map((name) => (
							<MenuItem key={name} value={name}>
								<Checkbox checked={formikBag.values.daysOfWeek.indexOf(name) > -1} />
								<ListItemText primary={name} />
							</MenuItem>
						))}
					</Select>
				</FormItemLabel>
			</Grid>
			<Grid item xs={4}>
				<FormItemLabel label={'Cách áp dụng'}>
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
						<MenuItem value={1}>Mọi lúc</MenuItem>
						<MenuItem value={2}>Một lần một ngày</MenuItem>
						<MenuItem value={1}>Một lần một tuần</MenuItem>
					</TextField>
				</FormItemLabel>
			</Grid>
			<Grid item xs={6}>
				<LocalizationProvider dateAdapter={AdapterDateFns}>
					<FormItemLabel label={'Thời gian áp dụng'}>
						<Grid justifyContent="space-between" display={'flex'}>
							<TimePicker
								label="Start time"
								value={formikBag.values.slug}
								onChange={formikBag.handleChange}
								renderInput={(params) => <TextField {...params} />}
							/>
							<TimePicker
								label="End time"
								value={formikBag.values.slug}
								onChange={formikBag.handleChange}
								renderInput={(params) => <TextField {...params} />}
							/>
						</Grid>
					</FormItemLabel>
				</LocalizationProvider>
			</Grid>
		</Grid>
	);
};

export default PromotionScheduleComponent;
