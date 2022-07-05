import Link from 'next/link';
import { useMemo } from 'react';
import { FormikDataType, FormikFilterType } from './types';
import Tag from '@/src/components/Tags';

export const initialValues: FormikDataType = {
	name: '',
	slug: '',
	description: '',
	dateStart: '',
	dateEnd: '',
	daysOfWeek: [],
	specifications: [],
};

export const initialFilterValues: FormikFilterType = {
	code: '',
	description: '',
	date: '',
	active: false,
};

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

export const useColumns = () => {
	const productColumns = useMemo(
		() => [
			{
				flex: 1,
				headerName: 'Tên sản phẩm',
				field: 'name',
			},
			{
				flex: 1,
				headerName: 'Mã',
				field: 'code',
			},
			{
				flex: 1,
				headerName: 'Giá mặc định',
				field: 'price',
			},
			{
				headerName: 'Tình trạng hoạt động',
				field: 'active',
				width: 180,
				renderCell: ({ row: record }: any) => {
					return (
						<Tag
							label={record.active ? 'Đang bán' : 'Không bán'}
							color={record.active ? 'success' : 'error'}
						/>
					);
				},
			},
		],
		[]
	);

	const promotionColumns = useMemo(
		() => [
			{
				flex: 1,
				headerName: 'Tên chương trình',
				field: 'name',
				renderCell: ({ row: record }: any) => {
					return (
						<Link href={`/promotion/${record.id}`} passHref>
							<a className="link-primary" href="">
								{record.name}
							</a>
						</Link>
					);
				},
			},
			{
				flex: 1,
				headerName: 'Mô tả',
				field: 'description',
			},
			{
				flex: 1,
				headerName: 'Ngày áp dụng',
				field: 'date',
				renderCell: ({ row: record }: any) => {
					return (
						<span>
							{record.from} ~ {record.to}
						</span>
					);
				},
			},
			{
				headerName: 'Kích hoạt',
				field: 'active',
				width: 180,
				renderCell: ({ row: record }: any) => {
					return (
						<Tag
							label={record.active ? 'Kích hoạt' : 'Không kích hoạt'}
							color={record.active ? 'success' : 'error'}
						/>
					);
				},
			},
		],
		[]
	);

	return { productColumns, promotionColumns };
};
