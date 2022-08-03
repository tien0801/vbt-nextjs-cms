// ** Types
import { NextRouter } from 'next/router';
import { VerticalNavItemsType, VerticalNavItemType } from 'src/@core/layouts/types';
import { PATH } from 'src/helpers/constants';

/**
 * Check for URL queries as well for matching
 * Current URL & Item Path
 *
 * @param item
 * @param activeItem
 */
export const handleURLQueries = (router: NextRouter, path: string | undefined): boolean => {
	if (Object.keys(router.query).length && path) {
		const arr = Object.keys(router.query);

		return (
			router.asPath.includes(path) &&
			router.asPath.includes(router.query[arr[0]] as string) &&
			path !== '/'
		);
	}

	return false;
};

export const loopChildren = (
	result: VerticalNavItemsType,
	path: string,
	menu: VerticalNavItemsType
) => {
	const index = path.indexOf(PATH.INDEX);
	const valueFind = index > 0 ? path.substring(0, path.indexOf(PATH.INDEX)) : path;
	const nextString = path.substring(path.indexOf(PATH.INDEX) + 1);
	const menuFind: VerticalNavItemType | undefined = menu.find(
		(ele: VerticalNavItemType) => ele.key === valueFind
	);

	if (menuFind) {
		result.push({
			title: menuFind.title,
			key: menuFind.key,
			icon: menuFind.icon,
			path: menuFind.path,
			children: menuFind.children,
		});

		if (menuFind.children && nextString) {
			loopChildren(result, nextString, menuFind.children);
		}
	}
	return;
};

export const getSelectedMenu: (path: string, menu: VerticalNavItemsType) => VerticalNavItemsType = (
	path: string,
	menu: VerticalNavItemsType
) => {
	if (path === PATH.INDEX && menu.length > 0) {
		return [menu[0]];
	}

	const actualPath = path.substring(path.indexOf(PATH.INDEX) + 1);
	
	const result: VerticalNavItemsType = [];

	loopChildren(result, actualPath, menu);

	return result;
};

export const getCollapseItemByPathName = (menu:VerticalNavItemsType, path: string) =>{

	const pathSplit = path.split('/')[1];

	const child: any = menu.map((e)=>{
		return e.dropdownItems.filter((child: any)=> child.path === `/${pathSplit}`)
	})
	
	const parseChild = child.filter((e: any)=> e.length > 0)[0]
	
	const childOption =  parseChild[0]?.children?.length > 0 ? parseChild[0].children.filter((e: any)=> e.path === path) : []
	
	if(`/${pathSplit}` !== path) {
		return [...parseChild, childOption[0]]
	}else{
		return parseChild
	}
}