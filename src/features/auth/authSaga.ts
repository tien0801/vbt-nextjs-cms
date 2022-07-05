export const EXAMPLE = 'example';
// import { PayloadAction } from '@reduxjs/toolkit';
// import { call, delay, fork, put, take } from 'redux-saga/effects';
// import { authActions, LoginPayload } from "./authSlice";

// function* handleLogin(payload: LoginPayload) {
//     try {
//         // console.log('handle Login', payload);
//         yield delay(1000);
//         localStorage.setItem('access_token', 'hjsdgf')
//         yield put(
//             authActions.loginSuccess({
//                 id: 1,
//                 name: 'VBT',
//             })
//         );
//     } catch (error: any) {
//         yield put(authActions.loginFailed(error.message));
//     }
//     // redirect to Admin page
// }

// function* handleLogout() {
//     yield delay(500);
//     // console.log('handle logout');
//     localStorage.removeItem('access_token')
//     // redirect to Login page
// }

// function* watchLoginFlow() {
//     while (true) {
//         // console.log('Watch login');
//         const isLoggedIn = Boolean(localStorage.getItem('access_token'));
//         if (!isLoggedIn) {
//             const action: PayloadAction<LoginPayload> = yield take(authActions.login.type);
//             yield fork(handleLogin, action.payload);
//         }

//         yield take(authActions.logout.type);
//         yield call(handleLogout);
//     }
// }

// export default function* authSaga() {
//     yield fork(watchLoginFlow);
// }
