import * as yup from 'yup';

export const validationSchema = yup.object({
	name: yup.string().required('Vui lòng nhập tên sản phẩm'),
	code: yup.string().required('Vui lòng nhập mã sản phẩm'),
	category: yup.string().required('Vui lòng chọn loại sản phẩm'),
});
