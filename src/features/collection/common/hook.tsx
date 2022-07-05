import Tag from '@/src/components/Tags';
import Link from 'next/link';
import { useMemo } from 'react';

const useColumnsRender: any = () => {
	const columns: any = useMemo(() => {
		return [
			{ field: 'firstName', headerName: 'Tên', flex: 1, renderCell: ({ row: record }: any) => {
				return (
					<Link href={`/collection/${record.id}`} passHref>
						<a className="link-primary" href="">
							{record.firstName}
						</a>
					</Link>
				);
			}, },
			{
				field: 'tagName',
				headerName: 'Thẻ',
				width: 180,
				flex: 1,
				renderCell: ({ row: record }: any) => {
					return <Tag label={record.tagName} color="default" />;
				},
			},
			{
				field: 'dateStart',
				headerName: 'Từ ngày',
				width: 180,
				flex: 1,
			},
			{
				field: 'dateEnd',
				headerName: 'Đến ngày',
				width: 180,
				flex: 1,
			},
			{
				field: 'status',
				headerName: 'Tình trạng hoạt động',
				width: 180,
				flex: 1,
				renderCell: ({ row: record }: any) => {
					return <Tag label={record.status} color="success" />;
				},
			},
			{
				field: 'config',
				headerName: 'Ưu tiên cấu hình',
				width: 180,
				flex: 1,
				renderCell: ({ row: record }: any) => {
					return <Tag label={record.config} color="success" />;
				},
			},
		];
	}, []);
	return { columns };
};

export default useColumnsRender;
