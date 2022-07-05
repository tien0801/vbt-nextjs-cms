export type ResponseCommon<T> = {
	success: boolean;
	data?: T;
	message?: string;
	errorCode?: string;
};

export type RequestCommon<T, U, V> = {
	data?: T;
	params?: U;
	query?: V;
};

export type ListPagination<T> = {
	total?: number | null;
	totalPage: number;
	pageSize: number;
	page: number;
	nextPage?: number | null;
	previousPage?: number | null;
	items?: T;
	message?: string | null;
	success?: boolean;
	errors: any[];
	errorCode?: number | null;
};

export type ResponseListCommon<T> = ResponseCommon<ListPagination<T>>;

export type RequestCallBack = {
	onCompleted?: (data: any) => void;
	onError?: (error: any) => void;
};
