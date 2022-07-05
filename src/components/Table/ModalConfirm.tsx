/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
	Typography,
	Button,
} from '@mui/material';
import React from 'react';

type Props = {
	confirmDialog: any;
	setConfirmDialog: any;
};

const ModalConfirm: React.FC<Props> = ({ confirmDialog, setConfirmDialog }) => {
	return (
		<Dialog open={confirmDialog.isOpen}>
			<DialogTitle>
				<Typography variant='subtitle1'>Xác nhận xóa mục</Typography>
				<Typography variant="subtitle2">Bạn chắc chắn xoá các mục này không ?</Typography>
			</DialogTitle>
			<DialogContent></DialogContent>
			<DialogActions>
				<Button onClick={() => setConfirmDialog({ ...confirmDialog, isOpen: false })}>Huỷ</Button>
				<Button color="primary" onClick={() => confirmDialog.action()}>
					Xác nhận
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default React.memo(ModalConfirm);
