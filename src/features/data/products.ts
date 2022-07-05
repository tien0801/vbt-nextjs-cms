function createData(
	id: string,
	name: string,
	code: string,
	category: any,
	price: number,
	status: boolean
) {
	return { id, name, code, category, price, status };
}

const rows = [
	createData(
		'1',
		'Áo Polo Nữ Cafe Phối Nẹp Siêu Nhẹ Siêu Mát',
		'P00001',
		{ name: 'Áo' },
		299000,
		true
	),
	createData(
		'2',
		'Giày Ankle Strap Satin Quai Đính Đá Phối Xích',
		'P00002',
		{ name: 'Giày' },
		299000,
		true
	),
	createData('3', 'Áo Polo  Basic Nữ WPO 2012 - Hồng Nhạt', 'P00003', { name: 'Áo' }, 299000, true),
	createData('4', 'Áo Polo Basic Nữ WPO 2011 - Xanh đen', 'P00004', { name: 'Áo' }, 299000, true),
	createData(
		'5',
		'Áo khoác Nam vải Xược Đánh Bông Vai MOK 1023',
		'P00005',
		{ name: 'Áo' },
		299000,
		false
	),
	createData('6', 'Áo khoác NỮ UV chống nắng WOK 2020', 'P00006', { name: 'Áo' }, 299000, true),
];

export default rows;
