import moment from 'moment';

export const convertDate = (date: any, format: any) => {
	return moment(date).format(format);
};
