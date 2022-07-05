import Tag from '@/src/components/Tags';
import Link from 'next/link';
import { useMemo } from 'react';

const useColumnsRender = () => {
	const columns = useMemo(() => {
		return [
			{
				flex: 1,
				field: 'title',
				headerName: 'Tiêu đề',
				renderCell: ({ row: record }: any) => {
					return (
						<Link href={`/content/${record.id}`} passHref>
							<a className="link-primary" href="">
								{record.title}
							</a>
						</Link>
					);
				},
			},
			{  flex: 1, field: 'order', headerName: 'Thứ tự', },
			{
				field: 'slug',
				headerName: 'SEO Slug',
				width: 180,
			},
			{
				field: 'type',
				headerName: 'Loại bài viết',
				width: 180,
			},
			{
				field: 'approve',
				headerName: 'Trạng thái',
				width: 180,
				renderCell: ({ row: record }: any) => {
					return (
						<Tag label={record.approve ? 'Đã duyệt': 'Chưa duyệt'} color={record.approve ? 'success' : 'error'} />
					);
				},
			},
		];
	}, []);
	return { columns };
};

export default useColumnsRender;
