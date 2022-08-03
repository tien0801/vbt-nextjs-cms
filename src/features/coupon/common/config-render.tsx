/* eslint-disable react/display-name */
import Link from 'next/link';
import Tag from '@/src/components/Tags';
import { FormikDataType } from './type';

export const initialValues: FormikDataType = {
	code: '',
	dateStart: '',
	dateEnd: '',
	user: '',
	quantity: 1,
	codeGeneration: 1,
};

export const useColumnRender = () => {
	const columns = [
		{
			flex: 1,
			headerName: 'Mã coupon',
			field: 'code',
			renderCell: ({ row: record }: any) => {
				return (
					<Link href={`/coupon/${record.id}`} passHref>
						<a className="link-primary" href="">
							{record.code}
						</a>
					</Link>
				);
			},
		},
		{
			flex: 1,
			headerName: 'Số lượng mã',
			field: 'quantity',
		},
		{
			flex: 1,
			headerName: 'Thời gian áp dụng',
			field: 'from',
			renderCell: ({ row: record }: any) => {
				return (
					<span>
						{record.from} - {record.to}
					</span>
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
						label={record.active ? 'Đang hoạt động' : 'Không hoạt động'}
						color={record.active ? 'success' : 'error'}
					/>
				);
			},
		},
	];

	return { columns };
};
