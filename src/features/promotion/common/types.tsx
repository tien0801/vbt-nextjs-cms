export type FormikDataType = {
	name: string;
	slug: string;
	description: string;
	dateStart: string;
	dateEnd: string;
	daysOfWeek: string[];
	specifications: {
		id: number;
		priority: number;
		operations: {
			type: string;
			note: string;
			priority: number;
		}[];
		conditions: {
			required: boolean;
			matchedType: string;
			rules: {
				required: boolean;
				ruleType: string;
			}[];
		}[];
	}[];
};

export type FormikFilterType = {
	code: string;
	description: string;
	from: string;
	to: string;
	active: boolean;
};
