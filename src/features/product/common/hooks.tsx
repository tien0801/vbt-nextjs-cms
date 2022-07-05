import Link from 'next/link';
import { useMemo } from 'react';
import Tag from '@/src/components/Tags';
import { formatCurrency, copyText } from '@/src/helpers';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useNotify } from '@/src/helpers/notify';

export const useColumnRender = () => {
	const { successNotify } = useNotify();

	const columns = useMemo(() => {
		return [
			{
				flex: 2,
				headerName: 'Tên sản phẩm',
				field: 'name',
				renderCell: ({ row: record }: any) => {
					return (
						<Link href={`/product/${record.id}`} passHref>
							<a className="link-primary" href="">
								{record.name}
							</a>
						</Link>
					);
				},
			},
			{
				flex: 1,
				headerName: 'Mã sản phẩm',
				field: 'code',
				renderCell: ({ row: record }: any) => {
					return (
						<>
							<Tag label={record.code} color="default" />
							<ContentCopyIcon
								fontSize="small"
								sx={{ marginLeft: '10px', cursor: 'pointer' }}
								onClick={() => {
									copyText(record.code);
									successNotify(`Sao chép "${record.code}" thành công`);
								}}
							/>
						</>
					);
				},
			},
			{
				flex: 1,
				headerName: 'Loại sản phẩm',
				field: 'category',
				renderCell: ({ row: record }: any) => {
					return <Tag label={record?.category?.name || '-'} color="default" />;
				},
			},
			{
				flex: 1,
				headerName: 'Giá mặc định',
				field: 'price',
				renderCell: ({ row: record }: any) => {
					return <span>{formatCurrency(record.price)}</span>;
				},
			},
			{
				flex: 1,
				headerName: 'Tình trạng',
				field: 'status',
				renderCell: ({ row: record }: any) => {
					return (
						<Tag
							label={record.status ? 'Còn hàng' : 'Hết hàng'}
							color={record.status ? 'success' : 'error'}
						/>
					);
				},
			},
			{
				flex: 1,
				headerName: 'Trạng thái',
				field: 'active',
				renderCell: ({ row: record }: any) => {
					return (
						<Tag
							label={record.active ? 'Đang bán' : 'Không bán'}
							color={record.active ? 'success' : 'error'}
						/>
					);
				},
			},
		];
	}, [successNotify]);

	return { columns };
};
