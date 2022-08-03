import { useMemo } from 'react';

const useColumnsRender = () => {
	const columns = useMemo(() => {
		return [
			{
				flex: 1,
				field: 'name',
				headerName: 'Tên',
			},
			{  flex: 1, field: 'email', headerName: 'Email', },
			{
				field: 'phone',
				headerName: 'Số điện thoại',
				flex: 1,
			},
			{
				field: 'birthDay',
				headerName: 'Ngày sinh',
				flex: 1,
			},
		];
	}, []);
	return { columns };
};

export default useColumnsRender;
