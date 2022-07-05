function createData(id: number, name: string, isDefault: boolean) {
	return {
		id,
		name,
		isDefault,
	};
}

const rows = [
	createData(1, 'Administrator', false),
	createData(2, 'Customer', true),
	createData(3, 'Editor', false),
];

export default rows;
