export type FormikDataType = {
	code?: string;
	dateStart?: string;
	dateEnd?: string;
	user?: string;
	promotion?: string;
	quantity?: number;
	codeGeneration?: number;
};

export type FormikFilterType = {
	code?: string;
	from?: string;
	to?: string;
	active?: boolean;
};

export type CouponType = {
	id: number;
	code: string;
	quantity: string;
	from: string;
	to: string;
	active: boolean;
};
