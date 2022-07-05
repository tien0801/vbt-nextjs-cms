/**
 * API Gateway for this App
 *
 * - All http requests must go through this gateway
 * - This client will add stuffs for every requests like headers, baseURL, ...
 * - This is also a good place to handle errors as captured in interceptors.
 */
import axios, { AxiosResponse } from 'axios';
import { StorageKeys, STATUS_RESPONSE } from './constants';
import queryString from 'query-string';
import getConfig from 'next/config';
import StorageHelper from './storage';

const { publicRuntimeConfig } = getConfig();

const axiosClient = axios.create({
	baseURL: publicRuntimeConfig.NEXT_PUBLIC_API_URL || 'https://vm-style.vn/api/v1',
	headers: {
		'content-type': 'application/json',
	},
	paramsSerializer: (params: any) => {
		const paramsParser: any = {};
		for (const [key, value] of Object.entries(params)) {
			if (value) {
				paramsParser[key] = value;
			}
		}
		return queryString.stringify(paramsParser);
	},
});
axiosClient.interceptors.request.use(
	async (config: any) => {
		// One magic thing about token is NEVER EXPIRED :P
		// Attach auth header using token from local storage
		const accessToken = StorageHelper.get(StorageKeys.ACCESS_TOKEN);
		if (config.headers) {
			config.headers.secret = `${publicRuntimeConfig.NEXT_PUBLIC_REQUEST_HEADER_VALUE}`;

			if (accessToken?.token) {
				config.headers.Authorization = `Bearer ${accessToken?.token}`;
			}

			if (config.headers.isRemoveAuthorization) {
				delete config.headers.Authorization;
				delete config.headers.isRemoveAuthorization;
			}
		}

		return config;
	},
	(error: any) => {
		Promise.reject(error);
	}
);

axiosClient.interceptors.response.use(
	(response: AxiosResponse) => {
		if (response && response.data) {
			return response.data;
		}

		return response;
	},
	(error: any) => {
		if (error.response) {
			if (error.response.status === STATUS_RESPONSE.UNAUTHORIZED) {
				// Token expired
				StorageHelper.remove(StorageKeys.ACCESS_TOKEN);
				return (window.location.href = '/');
			}
		}
		return Promise.reject(error);
	}
);

export default axiosClient;
