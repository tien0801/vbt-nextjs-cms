import Chip from '@mui/material/Chip';

const ButtonDetail = (props: any) => {
	const { callback } = props;
	return <Chip label="Xem chi tiết" onClick={callback} />;
};

export default ButtonDetail;
