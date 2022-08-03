import CloseIcon from '@mui/icons-material/Close';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

let style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 'auto',
	minWidth: '900px',
	bgcolor: 'background.paper',
	borderRadius: '4px',
	border: '1px solid #ccc',
	boxShadow: 24,
	p: 6,
	':focus-visible': {
		outline: 'none',
	},
};

type Props = {
	children: any;
	visible: any;
	setVisible: any;
	footer?: any;
	title?: string;
};

const BasicModal = ({ children, visible, setVisible, footer, title = '' }: Props) => {
	return (
		<div>
			<Modal
				open={visible}
				onClose={setVisible}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Box
						display={'flex'}
						justifyContent={'space-between'}
						sx={{ borderBottom: '1px solid #ccc' }}
					>
						<Box sx={{ paddingBottom: '5px' }}>
							<Typography variant="h6">{title}</Typography>
						</Box>
						<Box onClick={setVisible} sx={{ cursor: 'pointer' }}>
							<CloseIcon />
						</Box>
					</Box>
					<Box>{children}</Box>
					{footer && <Box>{footer}</Box>}
				</Box>
			</Modal>
		</div>
	);
};
export default BasicModal;
