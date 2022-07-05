import { useRouter } from 'next/router';
import { PublicRoute } from './constants';
import { getToken } from './auth';

type Props = {
	children: any;
};

export const AuthProvider = ({ children }: Props) => {
	const router = useRouter();
	const token = getToken();
	const currentRoute = router.pathname;

	if (typeof window !== 'undefined') {
		if (!token && !PublicRoute.includes(currentRoute)) {
			router.push('/login');
		}
	}

	return children;
};
