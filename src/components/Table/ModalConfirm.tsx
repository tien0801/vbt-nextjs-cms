import {
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
	Typography,
	Button,
} from '@mui/material';
import React, { useCallback } from 'react';

type Props = {
	confirmDialog: any;
	setConfirmDialog: any;
	sub_t?: string;
	sub_b?: string;
};

const ModalConfirm: React.FC<Props> = ({
	confirmDialog,
	setConfirmDialog,
	sub_t = 'Xác nhận xóa mục',
	sub_b = 'Bạn chắc chắn xoá mục này không ?',
}) => {
	const onClose = useCallback(
		() =>
			setConfirmDialog({
				isOpen: false,
				action: undefined,
			}),
		[setConfirmDialog]
	);

	return (
		<Dialog open={confirmDialog.isOpen} onClose={onClose}>
			<DialogTitle>
				<Typography variant="subtitle1">{sub_t}</Typography>
				<Typography variant="subtitle2">{sub_b}</Typography>
			</DialogTitle>
			<DialogContent></DialogContent>
			<DialogActions>
				<Button onClick={onClose}>Huỷ</Button>
				<Button color="primary" onClick={() => confirmDialog.action()}>
					Xác nhận
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default React.memo(ModalConfirm);
