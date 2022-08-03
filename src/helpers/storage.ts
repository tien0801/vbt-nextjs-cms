export default class StorageHelper {
	static set = (key: string, value: any) => {
		if (typeof window !== 'undefined') {
			localStorage.setItem(key, JSON.stringify(value));
		}
	};

	static get = (key: string) => {
		if (typeof window !== 'undefined') {
			const value = localStorage.getItem(key) as string | null;
			return value ? JSON.parse(value) : null;
		}
	};

	static remove = (key: string) => {
		if (typeof window !== 'undefined') {
			localStorage.removeItem(key);
		}
	};
}
