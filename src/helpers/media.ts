// import { ImageItem } from 'atomic-component/dist/components/common/interfaces';
import { uploadFile } from '../features/upload/uploadAPI';

export const getPathFileFromServer = async (files: any[]) => {
	const formData = new FormData();

	files?.forEach((file) => {
		if (file?.file) {
			formData.append('file', file.file);
		} else if (file?.originFileObj) {
			formData.append('file', file.originFileObj);
		}
	});

	try {
		const hasFiles = formData.get('file');

		if (hasFiles) {
			const { data, success }: any = await uploadFile({ data: formData });
			if (!success) {
				return [];
			}
			let index = -1;

			return files?.map((item) => {
				if (item?.file || item?.originFileObj) {
					index += 1;
					return data[index];
				}
				return item;
			});
		}

		throw new Error('No files');
	} catch (error) {
		return files;
	}
};
