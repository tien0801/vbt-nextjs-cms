export type FormikDataType = {
	name: string;
};

export type TypeBanner = {
	id?: number;
	name: string;
	imageAspect?: string;
	mobileImageAspect?: string;
	approve?: boolean;
};

export type BannerItemType = {
	id: number;
	title: string;
	imageUrl: string;
	mobileImageUrl: string;
	mobileAppImageUrl: string;
	order: number;
	bannerType: TypeBanner;
	linkUrl: string;
	approve: boolean;
};
