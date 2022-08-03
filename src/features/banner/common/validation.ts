import * as yup from 'yup';

export const validationSchema = yup.object({
	title: yup.string().required('Vui lòng nhập tên banner'),
	linkUrl: yup.string().required('Vui lòng nhập đường dẫn'),
});
