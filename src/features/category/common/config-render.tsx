/* eslint-disable react/display-name */
import Link from 'next/link';
import { useMemo } from 'react';
import { DataTypeProvider } from '@devexpress/dx-react-grid';

const NameCustom = (props: any) => (
	<DataTypeProvider
		formatterComponent={({ row }) => {
			return (
				<Link href={`/category/${row.id}`} passHref>
					<a className="link-primary" href="">
						{row.name}
					</a>
				</Link>
			);
		}}
		{...props}
	/>
);

export const useColumnRender = () => {
	const columns = useMemo(() => {
		return [
			{
				title: 'Tên',
				name: 'name',
			},
			{
				title: 'Mô tả',
				name: 'description',
			},
			{
				title: 'Độ ưu tiên',
				name: 'priority',
			},
		];
	}, []);

	const custom = useMemo(() => {
		return [<NameCustom for={['name']} key={1} />];
	}, []);

	return { columns, custom };
};
