import moment from 'moment';
import { AccountType, AuthorizedType } from '@/src/features/auth/page/login/saga/type';
import { StorageKeys } from './constants';
import StorageHelper from './storage';

export const getToken = () => {
	const token = StorageHelper.get(StorageKeys.ACCESS_TOKEN) as AuthorizedType | null;
	return token || null;
};

export const setToken = (token: AuthorizedType) => {
	StorageHelper.set(StorageKeys.ACCESS_TOKEN, {
		token: token.accessToken,
		expires: moment().add(token.expiresIn, 'seconds').toDate(),
	});
};

export const setProfile = (profile: AccountType) => {
	StorageHelper.set(StorageKeys.USER_INFO, JSON.stringify(profile));
};

export const getProfile = () => {
	const profile = JSON.parse(
		(StorageHelper.get(StorageKeys.USER_INFO) as string) || 'null'
	) as AccountType | null;
	return profile || null;
};

export const isLogin = () => {
	return getProfile() && getToken();
};

export const logout = () => {
	console.log('logout');
	if (getToken()) {
		StorageHelper.remove(StorageKeys.ACCESS_TOKEN);
	}
	return (window.location.href = '/login');
};
