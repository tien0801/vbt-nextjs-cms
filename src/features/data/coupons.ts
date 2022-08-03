function createData(
	id: number,
	code: string,
	quantity: string,
	from: string,
	to: string,
	active: boolean
) {
	return {
		id,
		code,
		quantity,
		from,
		to,
		active,
	};
}

const rows = [
	createData(1, 'GIAM50%', '50000', '20-11-2022', '20-12-2022', true),
	createData(2, 'GIAM10%', '60000', '20-11-2022', '20-12-2022', true),
	createData(3, 'GIAM20%', '70000', '20-08-2022', '20-12-2022', true),
	createData(4, 'GIAM30%', '20000', '20-11-2022', '20-12-2022', true),
	createData(5, 'GIAM40%', '10000', '20-01-2022', '20-12-2022', true),
];

export default rows;
