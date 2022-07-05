/* eslint-disable react/display-name */
import Link from 'next/link';
import { useMemo } from 'react';

export const useColumnRender = () => {
	const columns = useMemo(() => {
		return [
			{
				flex: 1,
				headerName: 'Tên',
				field: 'title',
				renderCell: ({ row: record }: any) => {
					return (
						<Link href={`/banner/${record.id}`} passHref>
							<a className="link-primary" href="">
								{record.title}
							</a>
						</Link>
					);
				},
			},
			{
				flex: 1,
				headerName: 'Đường dẫn',
				field: 'linkUrl',
			},
			{
				flex: 1,
				headerName: 'Loại',
				field: 'bannerType',
				renderCell: ({ row: record }: any) => {
					return <span>{record.bannerType.name}</span>;
				},
			},
		];
	}, []);

	return { columns };
};
