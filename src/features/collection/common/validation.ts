import * as yup from 'yup';

export const validationSchema = yup.object({
	title: yup.string().required('Vui lòng nhập tên bộ sưu tập'),
	description: yup.string().required('Vui lòng nhập mô tả'),
	tag: yup.string().required('Vui lòng thẻ'),
	dateStart: yup.string().required('Nhập ngày áp dụng'),
	dateEnd: yup.string().required('Nhập ngày kết thúc'),
});
