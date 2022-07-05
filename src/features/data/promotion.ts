function createData(
	id: number,
	name: string,
	description: string,
	from: string,
	to: string,
	active: boolean
) {
	return {
		id,
		name,
		description,
		from,
		to,
		active,
	};
}

const rows = [
	createData(
		1,
		'ĐỔI 300Đ NHẬN 1 GÀ GIÒN',
		'ĐỔI 300Đ NHẬN 1 GÀ GIÒN',
		'02:03 09/06/2022',
		'02:03 22/07/2022',
		true
	),
	createData(
		2,
		'GIẢM 40% CÁC MÓN LẺ',
		'GIẢM 40% CÁC MÓN LẺ',
		'02:03 09/06/2022',
		'02:03 22/07/2022',
		false
	),
	createData(
		3,
		'MUA 1 TẶNG 1 THỨ 2',
		'MUA 1 TẶNG 1 THỨ 2',
		'02:03 09/06/2022',
		'02:03 22/07/2022',
		true
	),
	createData(
		4,
		'GIẢM 72K CHO COMBO 2 GÀ TẮM NƯỚC MẮM + 1 COKE',
		'GIẢM 72K CHO COMBO 2 GÀ TẮM NƯỚC MẮM + 1 COKE',
		'02:03 09/06/2022',
		'02:03 22/07/2022',
		true
	),
	createData(
		5,
		'ĐỔI 800Đ NHẬN 1 COMBO GÀ TẮM NƯỚC MẮM',
		'ĐỔI 800Đ NHẬN 1 COMBO GÀ TẮM NƯỚC MẮM',
		'02:03 09/06/2022',
		'02:03 22/07/2022',
		true
	),
];

export default rows;
