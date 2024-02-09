import _ from 'lodash';
import ApiSauce from '../services/ApiSauce';
import store from '../redux';
export const BASE_URL =
  'https://server1.appsstaging.com/3230/elevator/public/api/';
export const ASSETS_URL = 'https://server1.appsstaging.com/3230/damon/public';
// export const WEB_SOCKET_URL = 'https://server1.appsstaging.com/3559';
export const WEB_SOCKET_URL = 'https://server1.appsstaging.com:3037/';

export const API_TIMEOUT = 20000;
export const NEW_API_KEY = '1d399038bef14b0497d028fc27999696';
export const GEOCODE_API_KEY = 'AIzaSyBmaS0B0qwokES4a_CiFNVkVJGkimXkNsk';
const GEOCODE_URL = 'https://maps.googleapis.com/maps/api/geocode/json?';

export const API_LOG = true;

export const ERROR_SOMETHING_WENT_WRONG = {
  message: 'Something went wrong, Please try again later',
  error: 'Something went wrong, Please try again later',
};
export const ERROR_NETWORK_NOT_AVAILABLE = {
  message: 'Please connect to the working Internet',
  error: 'Please connect to the working Internet',
};
export const ERROR_TOKEN_EXPIRE = {
  message: 'Session Expired, Please login again!',
  error: 'Session Expired, Please login again!',
};
export const ERROR_CANCEL_ERROR = {
  message: 'Upload cancelled',
  error: 'Upload cancelled',
};

export const REQUEST_TYPE = {
  GET: 'get',
  POST: 'post',
  DELETE: 'delete',
  PUT: 'put',
};

// API USER ROUTES

export const LOGIN = {
  route: 'auth/login',
  access_token_required: false,
  type: REQUEST_TYPE.POST,
};
export const SIGNUP = {
  route: 'auth/register',
  access_token_required: false,
  type: REQUEST_TYPE.POST,
};
export const VERIFY_OTP = {
  route:'auth/verification',
  access_token_required: false,
  type: REQUEST_TYPE.POST,
};
export const RESEND_PASSWORD = {
  route: 'reset-password',
  access_token_required: false,
  type: REQUEST_TYPE.POST,
};
export const RESEND_OTP = {
  route: 'auth/re-send-code',
  access_token_required: false,
  type: REQUEST_TYPE.POST,
};
export const FORGOT_PASSWORD = {
  route: 'forgot-password',
  access_token_required: false,
  type: REQUEST_TYPE.POST,
};
export const SOCIAL_SIGIN = {
  route: 'auth/social-login',
  access_token_required: false,
  type: REQUEST_TYPE.POST,
};
export const LOGOUT = {
  route: 'logout',
  access_token_required: true,
  type: REQUEST_TYPE.POST,
};
export const COMPLETE_PROFILE = {
  route: 'complete-profile',
  access_token_required: true,
  type: REQUEST_TYPE.POST,
};
export const UPDATE_PROFILE = {
  route: 'update-profile',
  access_token_required: true,
  type: REQUEST_TYPE.POST,
};
export const CHANGE_PASSWORD = {
  route: 'change-password',
  access_token_required: true,
  type: REQUEST_TYPE.POST,
};
export const DELETE_USER = {
  route: 'delete-account',
  access_token_required: true,
  type: REQUEST_TYPE.GET,
};

// CORE MODULE

export const TAG_PEOPLE_LIST = {
  route: 'user/list',
  access_token_required: true,
  type: REQUEST_TYPE.GET,
};

export const FOLLOWERS_LIST = {
  route: 'follow/followers',
  access_token_required: true,
  type: REQUEST_TYPE.GET,
};

export const FOLLOWING_lIST = {
  route: 'follow/following',
  access_token_required: true,
  type: REQUEST_TYPE.GET,
};

export const MY_PROFILE = {
  route: 'user/profile',
  access_token_required: true,
  type: REQUEST_TYPE.GET,
};

export const FOLLOW_UNFOLLOW = {
  route: 'follow/create',
  access_token_required: true,
  type: REQUEST_TYPE.POST,
};

export const CREATE_POST = {
  route: 'post/create',
  access_token_required: true,
  type: REQUEST_TYPE.POST,
};
export const RESPONSE_POST = {
  route: 'post/response',
  access_token_required: true,
  type: REQUEST_TYPE.POST,
};
export const LIST_POST = {
  route: 'post/list',
  access_token_required: true,
  type: REQUEST_TYPE.GET,
};
export const NOTIFICATION_LIST = {
  route: 'user/notification-list',
  access_token_required: true,
  type: REQUEST_TYPE.GET,
};
export const ACCEPT_REJECT_REQUEST = {
  route: 'follow/request',
  access_token_required: true,
  type: REQUEST_TYPE.POST,
};
export const HELP_FEEDBACK = {
  route: 'user/help-feedback',
  access_token_required: true,
  type: REQUEST_TYPE.POST,
};
export const DELETE_POST = {
  route: 'post/delete',
  access_token_required: true,
  type: REQUEST_TYPE.DELETE,
};
export const REPORT_OPTIONS = {
  route: 'report/options',
  access_token_required: true,
  type: REQUEST_TYPE.GET,
};
export const REPORT_CREATE = {
  route: 'report/create',
  access_token_required: true,
  type: REQUEST_TYPE.POST,
};
export const CHAT_LIST = {
  route: 'chat/list',
  access_token_required: true,
  type: REQUEST_TYPE.GET,
};
export const LIKE_UNLIKE = {
  route: 'post/like',
  access_token_required: true,
  type: REQUEST_TYPE.POST,
};
export const COMMENT_POST = {
  route: 'post/comment/create',
  access_token_required: true,
  type: REQUEST_TYPE.POST,
};
export const SHARE_POST = {
  route: 'post/share',
  access_token_required: true,
  type: REQUEST_TYPE.POST,
};
export const EDIT_POST = {
  route: 'post/edit',
  access_token_required: true,
  type: REQUEST_TYPE.POST,
};
export const SEARCH_POST = {
  route: 'search/search',
  access_token_required: true,
  type: REQUEST_TYPE.GET,
};
export const CHAT_DELETE = {
  route: 'chat/delete',
  access_token_required: true,
  type: REQUEST_TYPE.DELETE,
};
export const POST_COMMENT_LIST = {
  route: 'post/comment/list',
  access_token_required: true,
  type: REQUEST_TYPE.GET,
};
export const POST_REACTIONS = {
  route: 'post/reactions',
  access_token_required: true,
  type: REQUEST_TYPE.GET,
};
export const UPLOAD_IMAGE = {
  route: 'chat/attachment',
  access_token_required: true,
  type: REQUEST_TYPE.POST,
};
export const LOCATION_SUGGESTION = {
  route: 'user/location_suggestions',
  access_token_required: true,
  type: REQUEST_TYPE.GET,
};
export const PUSH_NOTIFICATION = {
  route: 'user/set_push_notification',
  access_token_required: true,
  type: REQUEST_TYPE.POST,
};
export const GEO_LOCATION = {
  route: 'user/set_location',
  access_token_required: true,
  type: REQUEST_TYPE.POST,
};

export const FOLLOWERS_REMOVE = {
  route: 'follow/remove',
  access_token_required: true,
  type: REQUEST_TYPE.POST,
};

export const POST_DETAIL = {
  route: 'post/detail',
  access_token_required: true,
  type: REQUEST_TYPE.GET,
};

export const callRequest = function (
  url,
  data,
  parameter,
  urlParameter,
  header = {},
  // ApiSauce,
  baseUrl = BASE_URL,
) {
  // note, import of "ApiSause" has some errors, thats why I am passing it through parameters
  let _header = header;
  if (url.access_token_required) {
    const _access_token =
      store?.getState()?.authReducer?.userToken !== null
        ? store?.getState()?.authReducer?.userToken
        : store?.getState()?.authReducer?.user !== null
        ? store?.getState()?.authReducer?.user?.token
        : '';
    console.log('_access_token 126', _access_token);
    if (_access_token) {
      _header = {
        ..._header,
        ...{
          Authorization: _access_token.includes('Bearer ')
            ? _access_token
            : 'Bearer ' + _access_token,
        },
      };
    }
  }

  const _url =
    parameter &&
    !_.isEmpty(parameter) &&
    urlParameter &&
    !_.isEmpty(urlParameter)
      ? `${url.route}/${urlParameter}?${parameter?.key}=${parameter?.value}`
      : parameter && !_.isEmpty(parameter)
      ? `${url.route}?${parameter?.key}=${parameter?.value}`
      : urlParameter && !_.isEmpty(urlParameter)
      ? `${url.route}/${urlParameter}`
      : url.route;
  if (url.type === REQUEST_TYPE.POST) {
    return ApiSauce.post(_url, data, _header, baseUrl);
  } else if (url.type === REQUEST_TYPE.GET) {
    return ApiSauce.get(_url, data, _header, baseUrl);
  } else if (url.type === REQUEST_TYPE.PUT) {
    return ApiSauce.put(_url, data, _header, baseUrl);
  } else if (url.type === REQUEST_TYPE.DELETE) {
    return ApiSauce.delete(_url, data, _header, baseUrl);
  }
  // return ApiSauce.post(url.route, data, _header);
};
export default {
  // auth flow apis start
  SOCIAL_SIGIN,
  LOGIN,
  SIGNUP,
  RESEND_OTP,
  VERIFY_OTP,
  COMPLETE_PROFILE,
  UPDATE_PROFILE,
  LOGOUT,
  CHANGE_PASSWORD,
  FORGOT_PASSWORD,
  // auth flow apis end
};
