import ActionTypes, {
  USERLOGINDATA,
  USERLOGOUT,
  USERLOGINTOKEN,
  CURRENTLOGINUSERINFO,
  SIGNUP_USER,
  ISFIRSTLOGIN,
} from '../../constants';
import store from '../../index';

function dispatch(action) {
  store.dispatch(action);
}
export function loginUser(payload) {
  return {
    type: USERLOGINDATA,
    payload,
  };
}
export function isFirstTimeLogin(payload) {
  return {
    type: ISFIRSTLOGIN,
    payload,
  };
}
export function saveTokenForLoginUser(payload) {
  return {
    type: USERLOGINTOKEN,
    payload,
  };
}
export function signUpUser(payload) {
  return {
    type: ActionTypes.SIGNUP_USER.REQUEST,
    payload,
  };
}
export function resendOTP(payload) {
  return {
    type: ActionTypes.RESEND_OTP.REQUEST,
    payload,
  };
}
export function otpVerify(payload, responseCallback) {
  console.log(payload,'===payload========');
  return {
    type: ActionTypes.VERIFY_OTP.REQUEST,
    payload,
    responseCallback,
  };
}
export function forgotPassword(payload) {
  return {
    type: ActionTypes.FORGOT_PASSWORD.REQUEST,
    payload,
  };
}
export function resendPassword(payload) {
  return {
    type: ActionTypes.RESEND_PASSWORD.REQUEST,
    payload,
  };
}
export function saveUserForLoginUser(payload) {
  return {
    type: CURRENTLOGINUSERINFO,
    payload,
  };
}

export function loginCurrentUser(payload, responseCallback) {
  return {
    type: ActionTypes.LOGIN_USER.REQUEST,
    payload,
    responseCallback,
  };
}
export function socialSignin(payload) {
  return {
    type: ActionTypes.SOCIAL_SIGNUP_USER.REQUEST,
    payload,
  };
}
export function completeProfile(payload, screenName) {
  return {
    type: ActionTypes.COMPLETE_PROFILE.REQUEST,
    payload,
    screenName,
    phoneNumber,
  };
}
export function updateProfile(payload) {
  return {
    type: ActionTypes.UPDATE_PROFILE.REQUEST,
    payload,
  };
}
export function logoutUser() {
  return {
    type: USERLOGOUT,
  };
}
export function logoutUserWithDispatch() {
  dispatch({type: USERLOGOUT});
}

export function logoutCurrentUser(payload) {
  return {
    type: ActionTypes.USER_LOGOUT.REQUEST,
    payload,
  };
}

export function changePassword(payload) {
  return {
    type: ActionTypes.CHANGE_PASSWORD.REQUEST,
    payload,
  };
}

export function deleteCurrentUserAccount(payload) {
  return {
    type: ActionTypes.DELETE_USER.REQUEST,
    payload,
  };
}
