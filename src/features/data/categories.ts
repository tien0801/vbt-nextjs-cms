function createData(
	id: string,
	code: string,
	name: string,
	slug: string,
	description: string,
	image: string,
	isActive: boolean,
	priority: number,
	items?: any
) {
	return { id, code, name, slug, description, image, isActive, priority, items };
}

const rows = [
	createData('1', 'ao', 'Áo', 'ao', 'Áo', 'https://via.placeholder.com/150', true, 1, [
		createData('11', 'ao', 'Áo', 'ao', 'Áo', 'https://via.placeholder.com/150', true, 1, [
			createData('12', 'ao', 'Áo', 'ao', 'Áo', 'https://via.placeholder.com/150', true, 1, [
				createData('13', 'ao', 'Áo', 'ao', 'Áo', 'https://via.placeholder.com/150', true, 1, null),
			]),
		]),
	]),
	createData('2', 'quan', 'Quần', 'quan', 'Quần', 'https://via.placeholder.com/150', true, 2),
	createData('3', 'dam', 'Đầm', 'dam', 'Đầm', 'https://via.placeholder.com/150', true, 3),
	createData('4', 'tui', 'Túi', 'tui', 'Túi', 'https://via.placeholder.com/150', true, 4),
	createData(
		'5',
		'chan-vay',
		'Chân váy',
		'chan-vay',
		'Chân váy',
		'https://via.placeholder.com/150',
		true,
		5
	),
	createData(
		'6',
		'ao-khoac',
		'Áo khoác',
		'ao-khoac',
		'Áo khoác',
		'https://via.placeholder.com/150',
		true,
		6
	),
];

export default rows;
