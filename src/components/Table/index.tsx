/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	Box,
	Grid,
	MenuItem,
	Pagination as DefaultPagination,
	TextField,
	Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { DataGrid } from '@mui/x-data-grid';
import { useRouter } from 'next/router';
import React, { useCallback, useState } from 'react';
import DeleteCard from './DeleteCard';
import ModalConfirm from './ModalConfirm';

const useStyles = makeStyles(() => ({
	root: {
		'& .Mui-selected': {
			backgroundColor: '#C22026',
			color: '#fff',
			fontWeight: '700',
			'&:hover': {
				backgroundColor: '#9B1C25 !important',
			},
		},
	},
}));

type Props = React.ComponentProps<typeof DataGrid> & {
	loading: boolean;
	rows: any[] | any;
	columns: any[];
	total: number;
	page: number;
	pageSize: number;
	selectModels?: boolean;
	onHandlePageChange: (num: number) => void;
	onHandlePageSize: (num: number | any) => void;
	selectedRows?: string[];
	setSelectedRows?: (rows: string[]) => void;
	onConfirmDelete?: (arr: [] | any) => void;
};

const TableLayout: React.FC<Props> = (props: Props) => {
	const {
		loading,
		rows = [],
		columns = [],
		total,
		page,
		pageSize,
		selectModels,
		onHandlePageChange,
		onHandlePageSize,
		selectedRows,
		setSelectedRows,
		onConfirmDelete,
		...otherProps
	} = props;

	const classes = useStyles();
	const { query } = useRouter();

	const [selectionModel, setSelectionModel] = useState<any[]>(selectedRows || []);
	const [confirmDialog, setConfirmDialog] = useState<any>({ isOpen: false, action: undefined });

	const clearSelectedRows = useCallback(() => {
		setSelectedRows && setSelectedRows([]);
		setSelectionModel([]);
	}, [setSelectedRows]);

	const handleDelete = useCallback(() => {
		if (onConfirmDelete) {
			setConfirmDialog({
				isOpen: true,
				action: () => {
					setConfirmDialog({ ...confirmDialog, isOpen: false });
					onConfirmDelete(selectionModel);
				},
			});
		}
	}, [confirmDialog, onConfirmDelete, selectionModel]);

	const Pagination = () => (
		<Grid display='flex' alignItems='center' justifyContent='flex-end' gap={5} padding={5}>
			<Typography>
				Hiện {pageSize * (page - 1) + 1} - {pageSize * page > total ? total : pageSize * page} trong{' '}
				{total} kết quả
			</Typography>
			<DefaultPagination
				className={classes.root}
				count={Math.ceil(rows.length / pageSize) || 1}
				variant="outlined"
				defaultPage={Number(page || query.page)}
				onChange={(_, pageNumber) => onHandlePageChange(pageNumber)}
				disabled={loading}
			/>
			<TextField
				label={`${pageSize}/Trang`}
				defaultValue=""
				select
				onChange={(value) => onHandlePageSize(value.target.value)}
				disabled={loading}
			>
				<MenuItem value={10}>10/Trang</MenuItem>
				<MenuItem value={20}>20/Trang</MenuItem>
				<MenuItem value={50}>50/Trang</MenuItem>
				<MenuItem value={100}>100/Trang</MenuItem>
			</TextField>
		</Grid>
	);

	return (
		<>
			<Box sx={{ width: '100%', padding: '20px' }}>
				{onConfirmDelete && (
					<DeleteCard
						clearCheckedRows={clearSelectedRows}
						total={selectionModel?.length}
						onDelete={handleDelete}
					/>
				)}
				<DataGrid
					disableSelectionOnClick
					disableColumnMenu
					disableColumnSelector
					getRowId={(row) => row.id}
					loading={loading}
					autoHeight
					rows={rows}
					columns={columns}
					pageSize={pageSize}
					checkboxSelection={selectModels}
					onSelectionModelChange={(ids: any) => {
						setSelectedRows && setSelectedRows(ids);
						setSelectionModel(ids);
					}}
					selectionModel={selectionModel}
					pagination
					components={{ Pagination }}
					keepNonExistentRowsSelected
					page={page - 1}
					{...otherProps}
				/>
			</Box>
			<ModalConfirm confirmDialog={confirmDialog} setConfirmDialog={setConfirmDialog} />
		</>
	);
};

export default React.memo(TableLayout);
