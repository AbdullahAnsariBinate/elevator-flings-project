import {take, put, call, fork} from 'redux-saga/effects';
import ActionTypes from '../redux/constants';
import {
  loginUser,
  saveTokenForLoginUser,
  saveUserForLoginUser,
  logoutUser,
  isFirstTimeLogin,
} from '../redux/actions/authAction';
import {
  loaderStart,
  loaderStop,
  removeDataForLogoutUser,
} from '../redux/actions/appAction';
import API_URL, {
  LOGIN,
  SOCIAL_SIGIN,
  callRequest,
  COMPLETE_PROFILE,
  UPDATE_PROFILE,
  LOGOUT,
  CHANGE_PASSWORD,
  DELETE_USER,
  VERIFY_OTP,
  RESEND_PASSWORD,
  FORGOT_PASSWORD,
  RESEND_OTP,
  SIGNUP,
} from '../config/WebService';
import ApiSauce from '../services/ApiSauce';
import NavService from '../helpers/NavService';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import Util from '../utils/Utils';
import {log} from 'react-native-reanimated';

function* signUp() {
  while (true) {
    const {payload} = yield take(ActionTypes.SIGNUP_USER.REQUEST);
    console.log(payload, '==saga payload===');
    yield put(loaderStart());
    try {
      const response = yield call(
        callRequest,
        SIGNUP,
        payload,
        '',
        {},
        ApiSauce,
      );
      yield put(loaderStop());
      console.log(response, '=response===');
      if (response.status === 1) {
        Util.DialogAlert(response.message, 'success');
        NavService.navigate('Otp', {
          screenName: 'Signup',
          user_id: response.data?.user_id,
          type: 'account_verify',
        });
      } else {
        Util.DialogAlert(response.message);
      }
    } catch (error) {
      yield put(loaderStop());
      Util.DialogAlert(error.message);
    }
  }
}

function* otpVerify() {
  while (true) {
    const {payload, responseCallback} = yield take(
      ActionTypes.VERIFY_OTP.REQUEST,
    );
    yield put(loaderStart());
    try {
      const response = yield call(
        callRequest,
        VERIFY_OTP,
        payload,
        '',
        {},
        ApiSauce,
      );
      yield put(loaderStop());
      console.log(response, '==response=========');
      if (response.status === 1) {
        responseCallback(response);
        if (payload?.type == 'account_verify') {
          if (response?.data?.is_profile_complete == '0') {
            yield put(saveTokenForLoginUser(response.bearer_token));
            NavService.navigate('CompleteProfile');
          } else {
            yield put(saveTokenForLoginUser(response.bearer_token));
            yield put(loginUser(response.data));
          }
        } else {
          NavService.navigate('ForgotPassword', {
            user_id: response.id,
          });
        }
        Util.DialogAlert(response.message, 'success');
      } else {
        Util.DialogAlert(response.message);
      }
    } catch (error) {
      yield put(loaderStop());
      Util.DialogAlert('Invalid OTP verification code.', 'error');
    }
  }
}

function* completeProfile() {
  while (true) {
    const {payload, screenName} = yield take(
      ActionTypes.COMPLETE_PROFILE.REQUEST,
    );
    console.log(JSON.stringify(payload,'==payload complete prfle saga'));
    yield put(loaderStart());
    try {
      const response = yield call(
        callRequest,
        COMPLETE_PROFILE,
        payload,
        '',
        {},
        ApiSauce,
      );
      yield put(loaderStop());
      console.log('response saga complete', response);
      if (response.status === 1) {
        yield put(loginUser(response?.data));
        screenName == 'updateProfile'
          ? (NavService.goBack(),
            Util.DialogAlert('Profile updated successfully', 'success'))
          : Util.DialogAlert('Profile completed successfully', 'success');
      } else {
        console.log('response.message', response.message);
        Util.DialogAlert(response.message);
      }
    } catch (error) {
      console.log('error', error);
      yield put(loaderStop());
      Util.DialogAlert(error.message);
    }
  }
}

function* login() {
  while (true) {
    const {payload, responseCallback} = yield take(
      ActionTypes.LOGIN_USER.REQUEST,
    );
    yield put(loaderStart());
    try {
      const response = yield call(
        callRequest,
        LOGIN,
        payload,
        '',
        {},
        ApiSauce,
      );
      yield put(loaderStop());

      // if (response.status === 1 && response?.data?.is_verified == 1) {
      if (response.status === 1) {
        Util.DialogAlert(
          'OTP verification code has been sent to your email address',
          'success',
        );
        responseCallback(response);
        NavService.replace('Otp', {
          screenName: 'login',
          user_id: response.data?.user_id,
          type: 'account_verify',
          email: payload.email,
        });
      } else if (response.status === 1 && response?.data?.is_verified == 0) {
        Util.DialogAlert(
          'OTP verification code has been sent to your email address',
          'success',
        );
        responseCallback(response);
        NavService.replace('Otp', {
          screenName: 'login',
          user_id: response.data?.user_id,
          type: 'account_verify',
          email: payload.email,
        });
      }
    } catch (error) {
      yield put(loaderStop());
      // NavService.navigate('Otp', {
      //   screenName: 'login',
      //   user_id: error?.data?.user_id,
      //   type: 'account_verify',
      //   email: payload.email,
      // });
      Util.DialogAlert(error.message);
      // Util.DialogAlert(
      //   'OTP verification code has been sent to your email address',
      //   'success',
      // );
    }
  }
}

function* resendOTP() {
  while (true) {
    const {payload} = yield take(ActionTypes.RESEND_OTP.REQUEST);
    yield put(loaderStart());
    try {
      const response = yield call(
        callRequest,
        RESEND_OTP,
        payload,
        '',
        {},
        ApiSauce,
      );
      yield put(loaderStop());
      if (response.status === 1) {
        // yield put(loginUser(response.data));
        Util.DialogAlert(
          'We have resend OTP verification code at your email address',
          'success',
        );
      } else {
        Util.DialogAlert(response.message);
      }
    } catch (error) {
      console.log('error', error);
      yield put(loaderStop());
      Util.DialogAlert(error.message);
    }
  }
}

function* resetPassword() {
  while (true) {
    const {payload} = yield take(ActionTypes.RESEND_PASSWORD.REQUEST);
    yield put(loaderStart());
    try {
      const response = yield call(
        callRequest,
        RESEND_PASSWORD,
        payload,
        '',
        {},
        ApiSauce,
      );
      yield put(loaderStop());
      if (response.status === 1) {
        NavService.navigate('Login');
        Util.DialogAlert(response.message, 'success');
      } else {
        Util.DialogAlert(response.message);
      }
    } catch (error) {
      console.log('error', error);
      yield put(loaderStop());
      Util.DialogAlert(error.message);
    }
  }
}

function* forgotPassword() {
  while (true) {
    const {payload} = yield take(ActionTypes.FORGOT_PASSWORD.REQUEST);
    yield put(loaderStart());
    try {
      const response = yield call(
        callRequest,
        FORGOT_PASSWORD,
        payload,
        '',
        {},
        ApiSauce,
      );
      yield put(loaderStop());
      if (response.status === 1) {
        NavService.navigate('Otp', {
          screenName: 'forgot',
          user_id: response.data?.user_id,
          email: payload.email,
        });
        Util.DialogAlert(response.message, 'success');
      } else {
        Util.DialogAlert(response.message);
      }
    } catch (error) {
      console.log('error', error);
      yield put(loaderStop());
      Util.DialogAlert(error.message);
    }
  }
}

function* socialSignin() {
  while (true) {
    const {payload} = yield take(ActionTypes.SOCIAL_SIGNUP_USER.REQUEST);
    yield put(loaderStart());
    try {
      const response = yield call(
        callRequest,
        SOCIAL_SIGIN,
        payload,
        '',
        {},
        ApiSauce,
      );
      yield put(loaderStop());
      if (response.status === 1 && response.data?.is_profile_complete == 1) {
        const copyLoginResponse = {
          ...response?.data,
        };
        copyLoginResponse['token'] = response?.bearer_token;
        copyLoginResponse['email'] = payload?.email;
        copyLoginResponse['phone_number'] = payload?.phone_number;

        yield put(saveTokenForLoginUser(response.bearer_token));
        yield put(loginUser(copyLoginResponse));
        Util.DialogAlert(response.message, 'success');
      } else if (
        response.status === 1 &&
        (response.data.is_profile_complete == 0 ||
          response.data.is_profile_complete == null)
      ) {
        yield put(saveTokenForLoginUser(response.bearer_token));
        NavService.navigate('CompleteProfile', {
          user_id: response.data,
          loginType: 'google',
          email: payload?.email,
          phone_number: payload?.phone_number,
        });
        Util.DialogAlert(response.message, 'success');
      } else {
        Util.DialogAlert(response.message);
      }
    } catch (error) {
      console.log('error', error);
      yield put(loaderStop());
      Util.DialogAlert(error.message);
    }
  }
}
function* changePassword() {
  while (true) {
    const {payload} = yield take(ActionTypes.CHANGE_PASSWORD.REQUEST);

    yield put(loaderStart());
    try {
      const response = yield call(
        callRequest,
        CHANGE_PASSWORD,
        payload,
        '',
        {},
        ApiSauce,
      );
      yield put(loaderStop());
      if (response.status === 1) {
        NavService.goBack();
        Util.DialogAlert(response.message, 'success');
      } else {
        Util.DialogAlert(response.message);
      }
    } catch (error) {
      console.log('error', error);
      yield put(loaderStop());
      Util.DialogAlert(error.message);
    }
  }
}
function* deleteUser() {
  while (true) {
    const {payload} = yield take(ActionTypes.DELETE_USER.REQUEST);

    yield put(loaderStart());
    try {
      const response = yield call(
        callRequest,
        DELETE_USER,
        null,
        '',
        payload,
        {},
        ApiSauce,
      );
      yield put(loaderStop());
      if (response.status === 1) {
        GoogleSignin.signOut();
        yield put(logoutUser());
        Util.DialogAlert(response.message, 'success');
      } else {
        Util.DialogAlert(response.message);
      }
    } catch (error) {
      console.log('error', error);
      yield put(loaderStop());
      Util.DialogAlert(error.message);
    }
  }
}

function* updateProfile() {
  while (true) {
    const {payload} = yield take(ActionTypes.UPDATE_PROFILE.REQUEST);
    yield put(loaderStart());
    try {
      const response = yield call(
        callRequest,
        UPDATE_PROFILE,
        payload,
        '',
        {},
        ApiSauce,
      );
      yield put(loaderStop());
      if (response.status === 1) {
        yield put(loginUser(response.data));
        NavService.goBack();
        Util.DialogAlert(response.message, 'success');
      } else {
        Util.DialogAlert(response.message);
      }
    } catch (error) {
      console.log('error', error);
      yield put(loaderStop());
      Util.DialogAlert(error.message);
    }
  }
}

function* userLogout() {
  while (true) {
    const {payload} = yield take(ActionTypes.USER_LOGOUT.REQUEST);
    yield put(loaderStart());
    try {
      const response = yield call(callRequest, LOGOUT, null, '', {}, ApiSauce);
      yield put(loaderStop());
      if (response.status === 1) {
        if (payload?.is_social == 1) {
          GoogleSignin?.signOut();
        }
        yield put(logoutUser());
        yield put(removeDataForLogoutUser());
        Util.DialogAlert(response.message, 'success');
      } else {
        Util.DialogAlert(response.message);
      }
    } catch (error) {
      console.log('error', error);
      yield put(loaderStop());
      Util.DialogAlert(error.message);
    }
  }
}

function* DeleteAccountHandler() {
  while (true) {
    const {payload} = yield take(ActionTypes.DELETE_USER.REQUEST);
    yield put(loaderStart());
    try {
      const response = yield call(
        callRequest,
        DELETE_USER,
        null,
        '',
        {},
        ApiSauce,
      );
      yield put(loaderStop());
      if (response.status === 1) {
        GoogleSignin.signOut();
        yield put(logoutUser());
        Util.DialogAlert(response.message, 'success');
      } else {
        Util.DialogAlert(response.message);
      }
    } catch (error) {
      yield put(loaderStop());
      Util.DialogAlert(error.message);
    }
  }
}

export default function* root() {
  yield fork(signUp);
  yield fork(otpVerify);
  yield fork(completeProfile);

  // yield fork(login);
  // yield fork(socialSignin);
  // yield fork(completeProfile);
  // yield fork(userLogout);
  // yield fork(changePassword);
  // yield fork(deleteUser);

  // yield fork(forgotPassword);
  // yield fork(resendOTP);
  // yield fork(resetPassword);
  // yield fork(DeleteAccountHandler);
}
