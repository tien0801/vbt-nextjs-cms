import { TypeBanner } from '../banner/common/type';

function createData(
	id: number,
	title: string,
	imageUrl: string,
	mobileImageUrl: string,
	mobileAppImageUrl: string,
	linkUrl: string,
	order: number,
	bannerType: TypeBanner,
	approve: boolean
) {
	return {
		id,
		title,
		imageUrl,
		mobileImageUrl,
		mobileAppImageUrl,
		order,
		bannerType,
		linkUrl,
		approve,
	};
}

const rows = [
	createData(1, 'Ưu đãi', '', '', '', 'uu-dai', 1, { name: 'slides' }, true),
	createData(2, 'Sale ngày 9/9', '', '', '', 'sale-ngay-9-9', 2, { name: 'slides' }, true),
	createData(
		3,
		'Ưu đãi black friday',
		'',
		'',
		'',
		'uu-dai-black-friday',
		3,
		{ name: 'slides' },
		true
	),
	createData(
		4,
		'Combo quần áo siêu khủng',
		'',
		'',
		'',
		'combo-quan-ao-si-eu-khung',
		4,
		{ name: 'slides' },
		true
	),
	createData(5, 'Combo quần áo nữ', '', '', '', 'combo-quan-ao-nu', 5, { name: 'slides' }, true),
	createData(
		6,
		'Khuyến mãi áo vest',
		'',
		'',
		'',
		'khuyen-mai-ao-vest',
		6,
		{ name: 'slides' },
		true
	),
];

export default rows;
