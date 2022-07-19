// ** Icon imports
import AddIcon from '@mui/icons-material/Add';
import CategoryIcon from '@mui/icons-material/Category';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import DiscountIcon from '@mui/icons-material/Discount';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import PostAddIcon from '@mui/icons-material/PostAdd';
import SpokeIcon from '@mui/icons-material/Spoke';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { AccountBox } from 'mdi-material-ui';
import HomeOutline from 'mdi-material-ui/HomeOutline';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types';

const navigation = (): VerticalNavItemsType => {
	return [
		{
			isNav: false,
			sectionTitle: 'Cài đặt chung',
		},
		{
			title: 'Trang chủ',
			icon: HomeOutline,
			path: '/',
		},
		{
			key: 'banner',
			title: 'Banner',
			icon: ViewCarouselIcon,
			path: '/banner',
			children: [
				{ title: 'Thêm mới banner', icon: AddIcon, path: '/banner/create', key: 'create' },
				{
					title: 'Cập nhật banner',
					icon: SystemUpdateAltIcon,
					path: '/banner/[id]',
					key: '[id]',
				},
			],
		},
		{
			key: 'collection',
			title: 'Bộ sưu tập',
			icon: CollectionsBookmarkIcon,
			path: '/collection',
			children: [
				{
					title: 'Thêm mới bộ sưu tập',
					icon: AddIcon,
					path: '/collection/create',
					key: 'create',
				},
				{
					title: 'Cập nhật bộ sưu tập',
					icon: SystemUpdateAltIcon,
					path: '/collection/[id]',
					key: '[id]',
				},
			],
		},
		{
			isNav: false,
			sectionTitle: 'Cài đặt tài khoản',
		},
		{
			title: 'Tài khoản',
			icon: AccountBox,
			dropdownItems: [
				{
					title: 'Quyền hạn',
					path: '/role',
					key: 'role',
					icon: AccountBox,
				},
				{
					title: 'Tài khoản admin',
					path: '/account-admin',
					key: 'account-admin',
					icon: AccountBox,
					children: [
						{
							title: 'Thêm mới tài khoản',
							icon: AddIcon,
							path: '/account-admin/create',
							key: 'create',
						},
						{
							title: 'Cập nhật tài khoản',
							icon: SystemUpdateAltIcon,
							path: '/account-admin/[id]',
							key: '[id]',
						},
					],
				},
				{
					title: 'Tài khoản khách hàng',
					path: '/account',
					key: 'account',
					icon: AccountBox,
				},
			],
		},
		{
			isNav: false,
			sectionTitle: 'Cài đặt sản phẩm & Đơn hàng',
		},
		{
			key: 'category',
			title: 'Danh mục',
			icon: CategoryIcon,
			path: '/category',
		},
		{
			key: 'product',
			title: 'Sản phẩm',
			icon: SpokeIcon,
			path: '/product',
			children: [
				{
					title: 'Thêm mới sản phẩm',
					icon: AddIcon,
					path: '/product/create',
					key: 'create',
				},
				{
					title: 'Cập nhật sản phẩm',
					icon: SystemUpdateAltIcon,
					path: '/product/[id]',
					key: '[id]',
				},
			],
			dropdownItems: [
				{
					title: 'Nhóm lựa chọn',
					icon: AddIcon,
					path: '/option-groups',
					key: 'option-groups',
				},
				{
					title: 'Danh sách sản phẩm',
					icon: AddIcon,
					path: '/product',
					key: 'list',
				},
			],
		},
		{
			title: 'Đơn hàng',
			icon: LocalGroceryStoreIcon,
			path: '/order',
			key: 'order',
			children: [
				{
					title: 'Chi tiết đơn hàng',
					icon: AddIcon,
					path: '/order/[id]',
					key: '[id]',
				},
			],
		},

		{
			isNav: false,
			sectionTitle: 'Cài đặt khác',
		},
		{
			key: 'content',
			title: 'Bài viết',
			icon: PostAddIcon,
			path: '/content',
			children: [
				{
					title: 'Thêm mới bài viết',
					icon: AddIcon,
					path: '/content/create',
					key: 'create',
				},
				{
					title: 'Cập nhật bài viết',
					icon: SystemUpdateAltIcon,
					path: '/content/[id]',
					key: '[id]',
				},
			],
		},
		{
			title: 'Khuyến mãi',
			icon: DiscountIcon,
			dropdownItems: [
				{
					key: 'coupon',
					title: 'Coupon',
					path: '/coupon',
					icon: DiscountIcon,
					children: [
						{
							title: 'Thêm mới coupon',
							icon: AddIcon,
							path: '/coupon/create',
							key: 'create',
						},
						{
							title: 'Cập nhật coupon',
							icon: SystemUpdateAltIcon,
							path: '/coupon/[id]',
							key: '[id]',
						},
					],
				},
				{
					key: 'promotion',
					title: 'Khuyến mãi',
					path: '/promotion',
					children: [
						{
							title: 'Thêm mới promotion',
							icon: AddIcon,
							path: '/promotion/create',
							key: 'create',
						},
						{
							title: 'Cập nhật promotion',
							icon: SystemUpdateAltIcon,
							path: '/promotion/[id]',
							key: '[id]',
						},
					],
				},
			],
		},
		{
			key: 'store',
			title: 'Cửa hàng',
			icon: StorefrontIcon,
			path: '/store',
		},
		{
			key: 'dynamic-content',
			title: 'Cấu hình trang',
			icon: DynamicFeedIcon,
			path: '/dynamic-content',
		},
	];
};

export default navigation;
