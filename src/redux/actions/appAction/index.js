import messaging from '@react-native-firebase/messaging';
import store from '../../index';
import ActionTypes, {
  ACTIONSHEET,
  TAG_PEOPLE,
  TAG_PEOPLE_DELETE,
} from '../../constants';
function dispatch(action) {
  store.dispatch(action);
}
export function loaderStart() {
  return {
    type: 'LOADER_START',
  };
}
export function addTagPeople(payload) {
  return {
    type: TAG_PEOPLE,
    payload,
  };
}
export function addTagPeopleDelete(payload) {
  return {
    type: TAG_PEOPLE_DELETE,
    payload,
  };
}
export function loaderStartWithDispatch() {
  dispatch({type: 'LOADER_START'});
}
export function loaderStopWithDispatch() {
  dispatch({type: 'LOADER_STOP'});
}
export function loaderStop() {
  return {
    type: 'LOADER_STOP',
  };
}
export function removeDataForLogoutUser() {
  return {
    type: 'LOGOUT_AND_REMOVE_INFO',
  };
}
export const getDeviceToken = async () => {
  try {
    const token = await messaging().getToken();
    if (token) return token;
    else return '';
  } catch (error) {
    console.log(error);
  }
};

export function TagPeopelList(responseCallback) {
  return {
    type: ActionTypes.TAG_PEOPLE_LIST.REQUEST,
    responseCallback,
  };
}

export function FollowersList(params,responseCallback) {
  return {
    type: ActionTypes.FOLLOWERS_LIST.REQUEST,
    params,
    responseCallback,
  };
}
export function FollowingList(params,responseCallback) {
  return {
    type: ActionTypes.FOLLOWING_lIST.REQUEST,
    params,
    responseCallback,
  };
}

export function MyProfile(payload, responseCallback) {
  return {
    type: ActionTypes.MY_PROFILE.REQUEST,
    payload,
    responseCallback,
  };
}

export function FollowUnFollow(params, responseCallback) {
  return {
    type: ActionTypes.FOLLOW_UNFOLLOW.REQUEST,
    params,
    responseCallback,
  };
}

export function CreatePost(payload, responseCallback) {
  return {
    type: ActionTypes.CREATE_POST.REQUEST,
    payload,
    responseCallback,
  };
}
export function ResponsePost(payload, responseCallback) {
  return {
    type: ActionTypes.RESPONSE_POST.REQUEST,
    payload,
    responseCallback,
  };
}

export function ListPost(params, responseCallback) {
  return {
    type: ActionTypes.LIST_POST.REQUEST,
    params,
    responseCallback,
  };
}

export function NotificationList(responseCallback) {
  return {
    type: ActionTypes.NOTIFICATION_LIST.REQUEST,
    responseCallback,
  };
}

export function AcceptReject(payload, responseCallback) {
  return {
    type: ActionTypes.ACCEPT_REJECT_REQUEST.REQUEST,
    payload,
    responseCallback,
  };
}
export function HelpFeedBack(payload, responseCallback) {
  return {
    type: ActionTypes.HELP_FEEDBACK.REQUEST,
    payload,
    responseCallback,
  };
}
export function DeletePost(params, responseCallback) {
  return {
    type: ActionTypes.DELETE_POST.REQUEST,
    params,
    responseCallback,
  };
}
export function ReportOptions(params, responseCallback) {
  return {
    type: ActionTypes.REPORT_OPTIONS.REQUEST,
    params,
    responseCallback,
  };
}
export function ReportCreate(payload, responseCallback) {
  return {
    type: ActionTypes.REPORT_CREATE.REQUEST,
    payload,
    responseCallback,
  };
}
export function ChatList(responseCallback) {
  return {
    type: ActionTypes.CHAT_LIST.REQUEST,
    responseCallback,
  };
}
export function LikeUnLike(payload, responseCallback) {
  return {
    type: ActionTypes.LIKE_UNLIKE.REQUEST,
    payload,
    responseCallback,
  };
}
export function CommentPost(payload, responseCallback) {
  return {
    type: ActionTypes.COMMENT_POST.REQUEST,
    payload,
    responseCallback,
  };
}

export function SharePost(payload, responseCallback) {
  return {
    type: ActionTypes.SHARE_POST.REQUEST,
    payload,
    responseCallback,
  };
}

export function EditPostAction(payload, responseCallback) {
  return {
    type: ActionTypes.EDIT_POST.REQUEST,
    payload,
    responseCallback,
  };
}

export function SearchPost(params, responseCallback) {
  return {
    type: ActionTypes.SEARCH_POST.REQUEST,
    params,
    responseCallback,
  };
}

export function ChatDelete(params, responseCallback) {
  return {
    type: ActionTypes.CHAT_DELETE.REQUEST,
    params,
    responseCallback,
  };
}
export function PostCommentList(payload, responseCallback) {
  return {
    type: ActionTypes.POST_COMMENT_LIST.REQUEST,
    payload,
    responseCallback,
  };
}
export function PostReaction(payload, responseCallback) {
  return {
    type: ActionTypes.POST_REACTIONS.REQUEST,
    payload,
    responseCallback,
  };
}

export function UplaodImage(payload, responseCallback) {
  return {
    type: ActionTypes.UPLOAD_IMAGE.REQUEST,
    payload,
    responseCallback,
  };
}

export function LocationSuggestion(responseCallback) {
  return {
    type: ActionTypes.LOCATION_SUGGESTION.REQUEST,
    responseCallback,
  };
}
export function PushNotification(payload, user, responseCallback) {
  return {
    type: ActionTypes.PUSH_NOTIFICATION.REQUEST,
    payload,
    user,
    responseCallback,
  };
}
export function geoLocation(payload, user, responseCallback) {
  return {
    type: ActionTypes.GEO_LOCATION.REQUEST,
    payload,
    user,
    responseCallback,
  };
}

export function FollowersRemove(payload, responseCallback) {
  return {
    type: ActionTypes.FOLLOWERS_REMOVE.REQUEST,
    payload,
    responseCallback,
  };
}
export function postDetail(payload, responseCallback) {
  return {
    type: ActionTypes.POST_DETAIL.REQUEST,
    payload,
    responseCallback,
  };
}

//action sheet handling
export function actionSheetToggle() {
  // dispatch({type: ACTIONSHEET});
  return {
    type: ACTIONSHEET,
  };
}
