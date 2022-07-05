import TableLayout from '@/src/components/Table';
import { useCallback, useState } from 'react';
import dataFake from '../../../data/products';
import { useColumns } from '../hooks';

const PromotionProductsComponent = () => {
	const { productColumns } = useColumns();
	const [loading, setLoading] = useState(false);
	const [selectedRows, setSelectedRows] = useState<string[]>([]);

	const [data, setData] = useState(dataFake);
	const [total, setTotal] = useState(10);
	const [page, setPage] = useState(1);
	const [pageSize, setPageSize] = useState(10);

	const onPageSize = useCallback((pageSize) => {
        setData(dataFake);
        setTotal(10);
        setLoading(false);
		setPageSize(pageSize);
	}, []);

	const onPageChange = useCallback((page) => {
		setPage(page);
	}, []);

	return (
		<TableLayout
			loading={loading}
			rows={data}
			columns={productColumns}
			total={total}
			page={page}
			pageSize={pageSize}
			onHandlePageSize={onPageSize}
			onHandlePageChange={onPageChange}
			selectModels
			selectedRows={selectedRows}
			setSelectedRows={(value) => setSelectedRows(value)}
		/>
	);
};

export default PromotionProductsComponent;
