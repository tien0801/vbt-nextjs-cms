export type FormikDataType = {
	name: string;
};

export type CategoryItemType = {
	id?: number;
	imageUrl: string;
	mobileImageUrl: string;
	code: string;
	title: string;
	description: string;
	seoUrl: string;
	parentCategory: number | string;
	active: boolean;
	order?: number;
};
