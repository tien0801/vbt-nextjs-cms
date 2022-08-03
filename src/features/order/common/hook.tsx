import Link from 'next/link';
import { useMemo } from 'react';

const useColumnsRender = () => {
	const columns = useMemo(() => {
		return [
			{
				flex: 1,
				field: 'code',
				headerName: 'Mã đơn hàng',
				renderCell: ({ row: record }: any) => {
					return (
						<Link href={`/order/${record.code}`} passHref>
							<a className="link-primary" href="">
								{record.code}
							</a>
						</Link>
					);
				},
			},
			{  flex: 1, field: 'type', headerName: 'Phương thức đặt hàng', },
			{
				field: 'status',
				headerName: 'Trạng thái',
				width: 180,
			},
			{
				field: 'note',
				headerName: 'Ghi chú',
				width: 180,
			},
			{
				field: 'status',
				headerName: 'Tình trạng hoạt động',
				width: 180,
			},
		];
	}, []);
	return { columns };
};

export default useColumnsRender;
