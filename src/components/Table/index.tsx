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
import Nodata from './NoData';
import { useTheme } from '@mui/material/styles';

type Props = React.ComponentProps<typeof DataGrid> & {
	loading: boolean;
	rows: any[] | any;
	columns: any[];
	total: number;
	page: number;
	pageSize: number;
	selectModels?: boolean;
	onHandlePageChange?: (num: number) => void;
	onHandlePageSize?: (num: number | any) => void;
	selectedRows?: string[];
	setSelectedRows?: (rows: string[]) => void;
	onConfirmDelete?: (arr: [] | any) => void;
	onSelectedRows?: (arr: [] | any, rows: any) => void;
	noPagination?: boolean;
};

const TableLayout: React.FC<Props> = (props: Props) => {
	const theme = useTheme();
	const useStyles = makeStyles(() => ({
		root: {
			'& .Mui-selected': {
				backgroundColor: theme.palette.primary.main,
				color: '#fff',
				fontWeight: '700',
				'&:hover': {
					backgroundColor: `${theme.palette.primary.dark} !important`,
				},
			},
		},
	}));

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
		onSelectedRows,
		noPagination,
		...otherProps
	} = props;

	const classes = useStyles();
	const { query } = useRouter();

	const [selectionModel, setSelectionModel] = useState<any[]>(selectedRows || []);
	const [confirmDialog, setConfirmDialog] = useState<any>({
		isOpen: false,
		action: undefined,
	});

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
					setSelectionModel([]);
				},
			});
		}
	}, [confirmDialog, onConfirmDelete, selectionModel]);

	const onChangeSelectedRows = useCallback(
		(ids: any) => {
			const selectedIDs = new Set(ids);
			const selectedRowData = rows.filter((row: any) => selectedIDs.has(row.id));
			setSelectedRows && setSelectedRows(ids);
			setSelectionModel(ids);
			onSelectedRows && onSelectedRows(ids, selectedRowData);
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[rows, onSelectedRows]
	);

	const Pagination = () => (
		<Grid display="flex" alignItems="center" justifyContent="flex-end" gap={5} padding={5}>
			<Typography>
				Hiện {total > 0 ? pageSize * (page - 1) + 1 : 0} -{' '}
				{pageSize * page > total ? total : pageSize * page} trong {total} kết quả
			</Typography>
			<DefaultPagination
				className={classes.root}
				count={Math.ceil(total / pageSize) || 1}
				variant="outlined"
				defaultPage={Number(page || query.page)}
				onChange={(_, pageNumber) => onHandlePageChange && onHandlePageChange(pageNumber)}
				disabled={loading}
			/>
			<TextField
				defaultValue={10}
				select
				onChange={(value) => onHandlePageSize && onHandlePageSize(value.target.value)}
				disabled={loading}
				size="small"
			>
				<MenuItem value={10}>10/Trang</MenuItem>
				<MenuItem value={20}>20/Trang</MenuItem>
				<MenuItem value={50}>50/Trang</MenuItem>
				<MenuItem value={100}>100/Trang</MenuItem>
			</TextField>
		</Grid>
	);

	const NoPaginate = () => <span></span>;
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
					onSelectionModelChange={onChangeSelectedRows}
					selectionModel={selectionModel}
					pagination
					components={{
						Pagination: noPagination ? NoPaginate : Pagination,
						NoRowsOverlay: Nodata,
					}}
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
