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
};

const ModalConfirm: React.FC<Props> = ({ confirmDialog, setConfirmDialog }) => {
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
				<Typography variant="subtitle1">Xác nhận xóa mục</Typography>
				<Typography variant="subtitle2">Bạn chắc chắn xoá mục này không ?</Typography>
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
