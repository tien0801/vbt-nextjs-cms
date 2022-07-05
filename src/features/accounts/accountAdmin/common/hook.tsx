import Tag from '@/src/components/Tags';
import { useMemo } from 'react';
import Link from 'next/link';

const useColumnsRender = () => {
	const columns = useMemo(() => {
		return [
			{
				flex: 1,
				field: 'name',
				headerName: 'Tên',
				renderCell: ({ row: record }: any) => {
					return (
						<Link href={`/account-admin/${record.id}`} passHref>
							<a className="link-primary" href="">
								{record.name}
							</a>
						</Link>
					);
				},
			},
			{  flex: 1, field: 'email', headerName: 'Email', },
			{
				field: 'phone',
				headerName: 'Số điện thoại',
				flex: 1,
			},
			{
				field: 'rule',
				headerName: 'Quyền',
				flex: 1,
				renderCell: ({ row: record }: any) => {
					return <Tag label={record.rule} color="default" />;
				},
			},
		];
	}, []);
	return { columns };
};

export default useColumnsRender;
