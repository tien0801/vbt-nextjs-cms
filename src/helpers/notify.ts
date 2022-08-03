import { useSnackbar } from 'notistack';

export const useNotify = () => {
	const { enqueueSnackbar } = useSnackbar();

	const successNotify = (message = '') => {
		return enqueueSnackbar(message, {
			anchorOrigin: {
				vertical: 'top',
				horizontal: 'right',
			},
			variant: 'success',
		});
	};

	const errorNotify = (message = '') => {
		return enqueueSnackbar(message, {
			anchorOrigin: {
				vertical: 'top',
				horizontal: 'right',
			},
			variant: 'error',
		});
	};

	const warningNotify = (message = '') => {
		return enqueueSnackbar(message, {
			anchorOrigin: {
				vertical: 'top',
				horizontal: 'right',
			},
			variant: 'warning',
		});
	};

	const infoNotify = (message = '') => {
		return enqueueSnackbar(message, {
			anchorOrigin: {
				vertical: 'top',
				horizontal: 'right',
			},
			variant: 'info',
		});
	};

	return { successNotify, errorNotify, warningNotify, infoNotify };
};
