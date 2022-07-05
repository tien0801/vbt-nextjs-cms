export default class QueryParams {
	static create = (o: object = {}) => {
		return Object.entries(o)
			.filter((p) => p[1])
			.map((p, i) => {
				if (encodeURIComponent(p[1]))
					return `${i == 0 ? '?' : ''}${encodeURIComponent(p[0])}=${encodeURIComponent(p[1])}`;
			})
			.join('&');
	};

	static parse = (s = '?') => {
		const search = s.substring(1);
		if (search.length > 0) {
			return JSON.parse(`{"${search.replace(/&/g, '","').replace(/=/g, '":"')}"}`, (key, value) =>
				key === '' ? value : decodeURIComponent(value)
			);
		}
		return {};
	};
}
