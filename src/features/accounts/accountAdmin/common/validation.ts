import * as yup from 'yup';

export const validationSchema = yup.object({
	userName: yup.string().required('Vui lòng nhập tên người dùng'),
	password: yup.string().required('Vui lòng nhập mật khẩu'),
	lastName: yup.string().required('Vui lòng nhập họ'),
	firstName: yup.string().required('Vui lòng nhập tên'),
	email: yup.string().required('Vui lòng nhập email'),
	phone: yup.string().required('Vui lòng nhập số điện thoại'),
});
