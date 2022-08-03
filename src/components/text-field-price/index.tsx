import NumberFormat from 'react-number-format';
import { TextField } from '@mui/material';

function NumberFormatCustom(props: any) {
	const { inputRef, onChange, ...other } = props;

	return (
		<NumberFormat
			{...other}
			getInputRef={inputRef}
			onValueChange={(values) => {
				onChange({
					target: {
						name: props.name,
						value: values.value,
					},
				});
			}}
			thousandSeparator
			// isNumericString
		/>
	);
}

const TextFieldPrice = (props: any) => {
	return (
		<div className="App">
			<TextField
				{...props}
				InputProps={{
					inputComponent: NumberFormatCustom,
				}}
			/>
		</div>
	);
};

export default TextFieldPrice;
