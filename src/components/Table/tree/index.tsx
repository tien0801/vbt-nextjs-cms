import React, { useState, useCallback } from "react";
import { TreeDataState, CustomTreeData } from "@devexpress/dx-react-grid";
import {
  Grid as GridTable,
  Table,
  TableHeaderRow,
  TableTreeColumn,
  TableSelection,
  PagingPanel,
} from "@devexpress/dx-react-grid-material-ui";
import {
  SelectionState,
  PagingState,
  IntegratedPaging,
  IntegratedSelection,
} from "@devexpress/dx-react-grid";
import {
  Box,
  Grid,
  MenuItem,
  Paper,
  Pagination as DefaultPagination,
  TextField,
  Typography,
  CircularProgress,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import ModalConfirm from "../ModalConfirm";
import { useRouter } from "next/router";
import DeleteCard from "../DeleteCard";
import NoData from "../NoData";
import { useTheme } from "@mui/material/styles";

const LoadingState = ({ loading, columnCount }: any) => (
  <td
    colSpan={columnCount + 1}
    style={{ textAlign: "center", verticalAlign: "middle", paddingTop: "30px" }}
  >
    <big>{loading ? <CircularProgress size={28} /> : <NoData />}</big>
  </td>
);

type Props = React.ComponentProps<any> & {
  loading: boolean;
  rows: any[] | any;
  columns: any[];
  total: number;
  page: number;
  pageSize: number;
  selectModels: boolean;
  onHandlePageChange: (num: number) => void;
  onHandlePageSize: (num: number | any) => void;
  onConfirmDelete: (arr: [] | any) => void;
  treeIconOnKey: string;
  childKey: string;
  custom?: any;
};

const TableTree: React.FC<Props> = (props: Props) => {
  const theme = useTheme();
  const useStyles = makeStyles(() => ({
    root: {
      "& .Mui-selected": {
        backgroundColor: theme.palette.primary.main,
        color: "#fff",
        fontWeight: "700",
        "&:hover": {
          backgroundColor: `${theme.palette.primary.dark} !important`,
        },
      },
    },
  }));
  const {
    loading,
    rows = [],
    columns = [],
    page,
    pageSize,
    onHandlePageChange,
    onHandlePageSize,
    onConfirmDelete,
    treeIconOnKey,
    childKey,
    custom,
    defaultSelection = [],
    rowKey = "id",
    total,
  } = props;
  const [selection, setSelection] = useState(defaultSelection);
  const [confirmDialog, setConfirmDialog] = useState<any>({
    isOpen: false,
    action: undefined,
  });
  const classes = useStyles();
  const { query } = useRouter();
  const getChildRows = (row: any, rootRows: any) =>
    row ? row[`${childKey}`] : rootRows;
  function checkChildren(arr: any) {
    return arr.map((item: any) => {
      let children = null;
      if (item[childKey] && item[childKey].length > 0)
        children = checkChildren(item[childKey]);

      return {
        ...item,
        children,
      };
    });
  }
  const onSelectionChange = useCallback((selected) => {
    setSelection(selected);
  }, []);

  const clearSelectionChange = useCallback(() => {
    setSelection([]);
  }, []);

  const handleDelete = useCallback(() => {
    if (onConfirmDelete) {
      setConfirmDialog({
        isOpen: true,
        action: () => {
          setConfirmDialog({ ...confirmDialog, isOpen: false });
          onConfirmDelete(selection);
          setSelection([]);
        },
      });
    }
  }, [confirmDialog, onConfirmDelete, selection]);

  const Pagination = ({
    onCurrentPageChange,
    pageSize,
    onPageSizeChange,
  }: any) => {
    return (
      <Grid
        display={"flex"}
        alignItems={"center"}
        justifyContent={"flex-end"}
        gap={5}
        padding={5}
      >
        <Typography>
          Hiện {total > 0 ? pageSize * (page - 1) + 1 : 0}-{" "}
          {pageSize * page > total ? total : pageSize * page} trong {total} kết
          quả
        </Typography>
        <DefaultPagination
          className={classes.root}
          count={Math.ceil(total / pageSize) || 1}
          variant="outlined"
          defaultPage={Number(page || query.page)}
          onChange={(_, pageNumber) => {
            onHandlePageChange(pageNumber);
            onCurrentPageChange(pageNumber - 1);
          }}
          disabled={loading}
        />
        <TextField
          label={`${pageSize}/Trang`}
          defaultValue=""
          select
          onChange={(value) => {
            onHandlePageSize(value.target.value);
            onPageSizeChange(value.target.value);
          }}
          disabled={loading}
        >
          <MenuItem value={10}>10/Trang</MenuItem>
          <MenuItem value={20}>20/Trang</MenuItem>
          <MenuItem value={50}>50/Trang</MenuItem>
          <MenuItem value={100}>100/Trang</MenuItem>
        </TextField>
      </Grid>
    );
  };

  const renderLoadingState = () => {
    return <LoadingState columnCount={columns.length} loading={loading} />;
  };

  return (
    <>
      <Box sx={{ width: "100%", padding: "20px" }}>
        <DeleteCard
          clearCheckedRows={clearSelectionChange}
          total={selection?.length}
          onDelete={handleDelete}
        />
        <Paper>
          <GridTable
            rows={checkChildren(rows)}
            columns={columns}
            getRowId={(row: any) => row[`${rowKey}`]}
          >
            {custom && custom?.map((item: any) => item)}
            <PagingState defaultCurrentPage={0} pageSize={pageSize} />
            <IntegratedPaging />
            <TreeDataState />
            <CustomTreeData getChildRows={getChildRows} />
            <SelectionState
              selection={selection}
              onSelectionChange={onSelectionChange}
            />
            <IntegratedSelection />
            <Table noDataCellComponent={renderLoadingState} />
            <TableHeaderRow />
            <PagingPanel containerComponent={Pagination} />
            <TableTreeColumn for={treeIconOnKey} showSelectAll />
            <TableSelection showSelectAll highlightRow />
          </GridTable>
        </Paper>
      </Box>
      <ModalConfirm
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
    </>
  );
};

export default TableTree;
