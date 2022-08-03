import * as yup from 'yup';

export const validationSchema = yup.object({
	title: yup.string().required('Vui lòng nhập tên bộ sưu tập'),
	description: yup.string().required('Vui lòng nhập mô tả'),
	content: yup.string().required('Vui lòng nhập nội dung'),
	richContent: yup.string().required('Vui lòng nhập nội dung bài viết'),
});
