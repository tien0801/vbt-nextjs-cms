const appConstant = {
	StorageKeys: {
		ACCESS_TOKEN: 'vm_access_token',
		REFRESH_TOKEN: 'vm_refresh_token',
		USER_INFO: 'vm_user_info',
		INFO_TOKEN: 'vm_info_token',
		IS_USER_FROM_THIRD_PROVIDER: 'is_user_from_third_provider',
	},
	PublicRoute: ['/login'],
	STATUS_RESPONSE: {
		SUCCESS: 200,
		UNAUTHORIZED: 401,
	},
	PATH: {
		INDEX: '/',
	},
};

export const { StorageKeys, PublicRoute, STATUS_RESPONSE, PATH } = appConstant;
