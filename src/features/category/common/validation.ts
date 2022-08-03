import * as yup from 'yup';

export const validationSchema = yup.object({
	title: yup.string().required('Vui lòng nhập tên danh mục'),
	seoUrl: yup.string().required('Vui lòng nhập đường dẫn'),
	code: yup.string().required('Vui lòng mã code'),
});
