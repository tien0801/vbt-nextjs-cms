// import { ImageItem } from 'atomic-component/dist/components/common/interfaces';
import { uploadFile } from '../features/upload/uploadAPI';

export const getPathFileFromServer = async (files: any[]) => {
	const formData = new FormData();

	files?.forEach((file) => {
		if (file?.file) {
			formData.append('file', file.file);
		} else if (file?.originFileObj) {
			formData.append('file', file.originFileObj);
		} else {
			if (typeof file == 'object') formData.append('file', file);
		}
	});

	try {
		const hasFiles = formData.get('file');
		if (hasFiles && hasFiles !== 'null') {
			const { data, success }: any = await uploadFile({ data: formData });
			if (!success) {
				return files;
			}
			let index = -1;

			return files?.map((item) => {
				if (item?.file || item?.originFileObj || typeof item == 'object') {
					index += 1;
					return data[index];
				}
				return item;
			});
		}

		throw new Error('No files to upload');
	} catch (error) {
		return files;
	}
};
