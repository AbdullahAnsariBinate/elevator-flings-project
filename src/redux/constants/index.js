export const USERLOGINTOKEN = 'USERLOGINTOKEN';
export const USERLOGINDATA = 'USERLOGINDATA';
export const USERLOGOUT = 'USERLOGOUT';
export const CURRENTLOGINUSERINFO = 'CURRENTLOGINUSERINFO';
export const ISUSERLOGIN = 'ISUSERLOGIN';
export const ISFIRSTLOGIN = 'ISFIRSTLOGIN';
export const LOADER = 'LOADER';
export const CURRENTUSERPROFILE = 'CURRENTUSERPROFILE';
export const ERRMSG = 'ERRMSG';
export const SEARCHEDREST = 'SEARCHEDREST';
export const ACTIONSHEET = 'ACTIONSHEET';
export const TAG_PEOPLE = 'TAG_PEOPLE';
export const TAG_PEOPLE_DELETE = 'TAG_PEOPLE_DELETE';
const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const CANCEL = 'CANCEL';
const FAILURE = 'FAILURE';

function createRequestTypes(base) {
  const res = {
    REQUEST: undefined,
    SUCCESS: undefined,
    CANCEL: undefined,
    FAILURE: undefined,
  };
  [REQUEST, SUCCESS, FAILURE, CANCEL].forEach(type => {
    res[type] = `${base}_${type}`;
  });
  return res;
}

export const NETWORK_INFO = 'NETWORK_INFO';
export const SHOW_LOADING = 'SHOW_LOADING';
export const LOADING_STATE = 'APP_INFO_SHOW_LOADING';
export const PRIVACY_POLICY = 'PRIVACY_POLICY';
export const CLEAR_USER_TEMP_DATA = 'CLEAR_USER_TEMP_DATA';
export const APP_USAGE_POLICIES = createRequestTypes('APP_USAGE_POLICIES');

// USER ACTIONS
export const SOCIAL_SIGNUP_USER = createRequestTypes('SOCIAL_SIGNUP_USER');
export const LOGIN_USER = createRequestTypes('LOGIN_USER');
export const UPDATE_PROFILE = createRequestTypes('UPDATE_PROFILE');
export const COMPLETE_PROFILE = createRequestTypes('COMPLETE_PROFILE');
export const USER_LOGOUT = createRequestTypes('USER_LOGOUT');
export const CHANGE_PASSWORD = createRequestTypes('CHANGE_PASSWORD');
export const SIGNUP_USER = createRequestTypes('SIGNUP_USER');
export const DELETE_USER = createRequestTypes('DELETE_USER');
export const VERIFY_OTP = createRequestTypes('VERIFY_OTP');
export const RESEND_OTP = createRequestTypes('RESEND_OTP');
export const FORGOT_PASSWORD = createRequestTypes('FORGOT_PASSWORD');
export const RESEND_PASSWORD = createRequestTypes('RESEND_PASSWORD');

// App Action

export const TAG_PEOPLE_LIST = createRequestTypes('TAG_PEOPLE_LIST');
export const FOLLOWERS_LIST = createRequestTypes('FOLLOWERS_LIST');
export const FOLLOWING_lIST = createRequestTypes('FOLLOWING_lIST');
export const MY_PROFILE = createRequestTypes('MY_PROFILE');
export const FOLLOW_UNFOLLOW = createRequestTypes('FOLLOW_UNFOLLOW');
export const CREATE_POST = createRequestTypes('CREATE_POST');
export const LIST_POST = createRequestTypes('LIST_POST');
export const NOTIFICATION_LIST = createRequestTypes('NOTIFICATION_LIST');
export const ACCEPT_REJECT_REQUEST = createRequestTypes(
  'ACCEPT_REJECT_REQUEST',
);
export const HELP_FEEDBACK = createRequestTypes('HELP_FEEDBACK');
export const DELETE_POST = createRequestTypes('DELETE_POST');
export const REPORT_OPTIONS = createRequestTypes('REPORT_OPTIONS');
export const REPORT_CREATE = createRequestTypes('REPORT_CREATE');
export const CHAT_LIST = createRequestTypes('CHAT_LIST');
export const LIKE_UNLIKE = createRequestTypes('LIKE_UNLIKE');
export const COMMENT_POST = createRequestTypes('COMMENT_POST');
export const SHARE_POST = createRequestTypes('SHARE_POST');
export const EDIT_POST = createRequestTypes('EDIT_POST');
export const SEARCH_POST = createRequestTypes('SEARCH_POST');
export const CHAT_DELETE = createRequestTypes('CHAT_DELETE');
export const POST_COMMENT_LIST = createRequestTypes('POST_COMMENT_LIST');
export const POST_REACTIONS = createRequestTypes('POST_REACTIONS');
export const UPLOAD_IMAGE = createRequestTypes('UPLOAD_IMAGE');
export const LOCATION_SUGGESTION = createRequestTypes('LOCATION_SUGGESTION');
export const PUSH_NOTIFICATION = createRequestTypes('PUSH_NOTIFICATION');
export const GEO_LOCATION = createRequestTypes('GEO_LOCATION');
export const RESPONSE_POST = createRequestTypes('RESPONSE_POST');
export const FOLLOWERS_REMOVE = createRequestTypes('FOLLOWERS_REMOVE');
export const POST_DETAIL = createRequestTypes('POST_DETAIL');

export default {
  LOADING_STATE,
  SOCIAL_SIGNUP_USER,
  LOGIN_USER,
  COMPLETE_PROFILE,
  UPDATE_PROFILE,
  USER_LOGOUT,
  CHANGE_PASSWORD,
  DELETE_USER,
  SIGNUP_USER,
  VERIFY_OTP,
  RESEND_OTP,
  FORGOT_PASSWORD,
  RESEND_PASSWORD,
  TAG_PEOPLE_LIST,
  FOLLOWERS_LIST,
  FOLLOWING_lIST,
  MY_PROFILE,
  FOLLOW_UNFOLLOW,
  CREATE_POST,
  LIST_POST,
  NOTIFICATION_LIST,
  ACCEPT_REJECT_REQUEST,
  HELP_FEEDBACK,
  DELETE_POST,
  REPORT_OPTIONS,
  REPORT_CREATE,
  CHAT_LIST,
  LIKE_UNLIKE,
  COMMENT_POST,
  SHARE_POST,
  EDIT_POST,
  SEARCH_POST,
  CHAT_DELETE,
  POST_COMMENT_LIST,
  POST_REACTIONS,
  UPLOAD_IMAGE,
  LOCATION_SUGGESTION,
  PUSH_NOTIFICATION,
  GEO_LOCATION,
  RESPONSE_POST,
  FOLLOWERS_REMOVE,
  POST_DETAIL,
};
