// ** React Imports
import { ReactNode } from "react";
import BlankLayout from "src/@core/layouts/BlankLayout";
import LoginComponent from "../../features/auth/page/login";

const Login = () => <LoginComponent />;

Login.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>;

export default Login;
