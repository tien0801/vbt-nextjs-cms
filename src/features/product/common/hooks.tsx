import Link from 'next/link';
import { useMemo } from 'react';
import Tag from '@/src/components/Tags';
import { formatCurrency, copyText } from '@/src/helpers';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useNotify } from '@/src/helpers/notify';

export const useMarks = () => {
	const marks = useMemo(
		() => [
			{
				value: 0,
				label: 'Thấp',
			},
			{
				value: 50,
				label: 'Trung bình',
			},
			{
				value: 100,
				label: 'Cao',
			},
		],
		[]
	);

	return marks;
};

export const kinds = [
	{
		value: 'Sale',
		label: 'SP Bán',
	},
	{
		value: 'Promotion',
		label: 'SP Khuyến mãi',
	},
	{
		value: 'Mixed',
		label: 'SP Bán Và Khuyến Mãi',
	},
];

export const useColumns = () => {
	const { successNotify } = useNotify();

	const columns = useMemo(() => {
		return [
			{
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
				width: 300,
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
					return <Tag label={record?.category} color="default" />;
				},
			},
			{
				flex: 1,
				headerName: 'Giá bán lẻ',
				field: 'salePrice',
				renderCell: ({ row: record }: any) => {
					return <span>{formatCurrency(record.salePrice)}</span>;
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

	return columns;
};
