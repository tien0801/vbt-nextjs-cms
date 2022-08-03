import axiosClient from '../../helpers/axios';
import endpoint from './endpoint.json';
import { UploadFileRequest } from './models';

export const uploadFile = (dataRequest: UploadFileRequest) =>
	axiosClient.post(endpoint.files, dataRequest.data, {
		headers: { 'Content-Type': 'multipart/form-data' },
	});
