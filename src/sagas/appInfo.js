import {take, put, call, fork} from 'redux-saga/effects';

import ActionTypes from '../redux/constants';
import {loginUser} from '../redux/actions/authAction';
import {loaderStart, loaderStop} from '../redux/actions/appAction';
import API_URL, {
  callRequest,
  FOLLOWERS_LIST,
  FOLLOWING_lIST,
  FOLLOW_UNFOLLOW,
  MY_PROFILE,
  TAG_PEOPLE_LIST,
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
  DELETE_ACCOUNT,
  POST_DETAIL,
} from '../config/WebService';
import ApiSauce from '../services/ApiSauce';
import Utils from '../utils/Utils';

function* TagPeopleHandler() {
  while (true) {
    const {responseCallback} = yield take(ActionTypes.TAG_PEOPLE_LIST.REQUEST);
    yield put(loaderStart());
    try {
      const response = yield call(
        callRequest,
        TAG_PEOPLE_LIST,
        '',
        '',
        {},
        ApiSauce,
      );
      yield put(loaderStop());
      responseCallback(response?.data);
    } catch (error) {
      yield put(loaderStop());
      Utils.DialogAlert(error.message);
    }
  }
}

function* FollowersListHandler() {
  while (true) {
    const {params, responseCallback} = yield take(
      ActionTypes.FOLLOWERS_LIST.REQUEST,
    );
    yield put(loaderStart());
    try {
      const response = yield call(
        callRequest,
        FOLLOWERS_LIST,
        '',
        params,
        {},
        ApiSauce,
      );
      yield put(loaderStop());
      responseCallback(response?.data);
    } catch (error) {
      yield put(loaderStop());
      responseCallback([]);

      // Utils.DialogAlert(error.message);
    }
  }
}

function* FollowingListHandler() {
  while (true) {
    const {params, responseCallback} = yield take(
      ActionTypes.FOLLOWING_lIST.REQUEST,
    );
    yield put(loaderStart());
    try {
      const response = yield call(
        callRequest,
        FOLLOWING_lIST,
        '',
        params,
        {},
        ApiSauce,
      );
      yield put(loaderStop());
      responseCallback(response?.data);
    } catch (error) {
      yield put(loaderStop());
      responseCallback([]);

      // Utils.DialogAlert(error.message);
    }
  }
}

function* MyProfileHandler() {
  while (true) {
    const {payload, responseCallback} = yield take(
      ActionTypes.MY_PROFILE.REQUEST,
    );
    yield put(loaderStart());
    try {
      const response = yield call(
        callRequest,
        MY_PROFILE,
        payload,
        '',
        {},
        ApiSauce,
      );
      yield put(loaderStop());
      responseCallback(response?.data);
    } catch (error) {
      yield put(loaderStop());
      Utils.DialogAlert(error.message);
    }
  }
}

function* FollowUnFollowHandler() {
  while (true) {
    const {params, responseCallback} = yield take(
      ActionTypes.FOLLOW_UNFOLLOW.REQUEST,
    );
    yield put(loaderStart());
    try {
      const response = yield call(
        callRequest,
        FOLLOW_UNFOLLOW,
        '',
        params,
        {},
        ApiSauce,
      );
      yield put(loaderStop());
      responseCallback(response);
    } catch (error) {
      yield put(loaderStop());
      Utils.DialogAlert(error.message);
    }
  }
}

function* CreatePostHandler() {
  while (true) {
    const {payload, responseCallback} = yield take(
      ActionTypes.CREATE_POST.REQUEST,
    );
    yield put(loaderStart());
    try {
      const response = yield call(
        callRequest,
        CREATE_POST,
        payload,
        '',
        {},
        ApiSauce,
      );
      yield put(loaderStop());
      responseCallback(response);
      Utils.DialogAlert(response.message, 'success');
    } catch (error) {
      console.log(error,'===error');
      yield put(loaderStop());
      Utils.DialogAlert(error.message);
    }
  }
}

function* ListPostHandler() {
  while (true) {
    const {params, responseCallback} = yield take(
      ActionTypes.LIST_POST.REQUEST,
    );
    yield put(loaderStart());
    try {
      const response = yield call(
        callRequest,
        LIST_POST,
        params,
        '',
        {},
        ApiSauce,
      );
      yield put(loaderStop());
      responseCallback(response?.data);
    } catch (error) {
      responseCallback([]);
      yield put(loaderStop());
      // Utils.DialogAlert(error.message);
    }
  }
}

function* NotificationListHandler() {
  while (true) {
    const {responseCallback} = yield take(
      ActionTypes.NOTIFICATION_LIST.REQUEST,
    );
    yield put(loaderStart());
    try {
      const response = yield call(
        callRequest,
        NOTIFICATION_LIST,
        '',
        '',
        {},
        ApiSauce,
      );
      yield put(loaderStop());
      responseCallback(response?.data);
    } catch (error) {
      yield put(loaderStop());
      // Utils.DialogAlert(error.message);
    }
  }
}

function* AcceptRejectRequestHandler() {
  while (true) {
    const {payload, responseCallback} = yield take(
      ActionTypes.ACCEPT_REJECT_REQUEST.REQUEST,
    );
    yield put(loaderStart());
    try {
      const response = yield call(
        callRequest,
        ACCEPT_REJECT_REQUEST,
        payload,
        '',
        {},
        ApiSauce,
      );
      yield put(loaderStop());
      responseCallback(response);
    } catch (error) {
      yield put(loaderStop());
      Utils.DialogAlert('Request Not Found');
    }
  }
}

function* HelpFeedBackHandler() {
  while (true) {
    const {payload, responseCallback} = yield take(
      ActionTypes.HELP_FEEDBACK.REQUEST,
    );
    yield put(loaderStart());
    try {
      const response = yield call(
        callRequest,
        HELP_FEEDBACK,
        payload,
        '',
        {},
        ApiSauce,
      );
      yield put(loaderStop());
      responseCallback(response);
    } catch (error) {
      yield put(loaderStop());
      Utils.DialogAlert(error.message);
    }
  }
}

function* DeletePostHandler() {
  while (true) {
    const {params, responseCallback} = yield take(
      ActionTypes.DELETE_POST.REQUEST,
    );
    yield put(loaderStart());
    try {
      const response = yield call(
        callRequest,
        DELETE_POST,
        '',
        params,
        {},
        ApiSauce,
      );
      yield put(loaderStop());
      responseCallback(response);
    } catch (error) {
      yield put(loaderStop());
      Utils.DialogAlert(error.message);
    }
  }
}

function* ReportOptionsHandler() {
  while (true) {
    const {params, responseCallback} = yield take(
      ActionTypes.REPORT_OPTIONS.REQUEST,
    );
    yield put(loaderStart());
    try {
      const response = yield call(
        callRequest,
        REPORT_OPTIONS,
        params,
        '',
        {},
        ApiSauce,
      );
      yield put(loaderStop());
      responseCallback(response);
    } catch (error) {
      yield put(loaderStop());
      Utils.DialogAlert(error.message);
    }
  }
}

function* ReportCreateHandler() {
  while (true) {
    const {payload, responseCallback} = yield take(
      ActionTypes.REPORT_CREATE.REQUEST,
    );
    yield put(loaderStart());
    try {
      const response = yield call(
        callRequest,
        REPORT_CREATE,
        payload,
        '',
        {},
        ApiSauce,
      );
      yield put(loaderStop());
      responseCallback(response);
      Utils.DialogAlert(response.message, 'success');
    } catch (error) {
      yield put(loaderStop());
      Utils.DialogAlert(error.message);
    }
  }
}

function* ChatListHandler() {
  while (true) {
    const {responseCallback} = yield take(ActionTypes.CHAT_LIST.REQUEST);
    yield put(loaderStart());
    try {
      const response = yield call(callRequest, CHAT_LIST, '', '', {}, ApiSauce);
      yield put(loaderStop());
      responseCallback(response?.data);
    } catch (error) {
      yield put(loaderStop());
      responseCallback([]);
      // Utils.DialogAlert(error.message);
    }
  }
}

function* LikeUnlikeHandler() {
  while (true) {
    const {payload, responseCallback} = yield take(
      ActionTypes.LIKE_UNLIKE.REQUEST,
    );
    yield put(loaderStart());
    try {
      const response = yield call(
        callRequest,
        LIKE_UNLIKE,
        payload,
        '',
        {},
        ApiSauce,
      );
      yield put(loaderStop());
      responseCallback(response);
    } catch (error) {
      yield put(loaderStop());
      Utils.DialogAlert(error.message);
    }
  }
}

function* CommentHandler() {
  while (true) {
    const {payload, responseCallback} = yield take(
      ActionTypes.COMMENT_POST.REQUEST,
    );
    yield put(loaderStart());
    try {
      const response = yield call(
        callRequest,
        COMMENT_POST,
        payload,
        '',
        {},
        ApiSauce,
      );
      yield put(loaderStop());
      responseCallback(response);
    } catch (error) {
      yield put(loaderStop());
      Utils.DialogAlert(error.message);
    }
  }
}

function* SharePosttHandler() {
  while (true) {
    const {payload, responseCallback} = yield take(
      ActionTypes.SHARE_POST.REQUEST,
    );
    yield put(loaderStart());
    try {
      const response = yield call(
        callRequest,
        SHARE_POST,
        payload,
        '',
        {},
        ApiSauce,
      );
      yield put(loaderStop());
      Utils.DialogAlert(response.message, 'success');
    } catch (error) {
      yield put(loaderStop());
      Utils.DialogAlert(error.message);
    }
  }
}

function* EditPosttHandler() {
  while (true) {
    const {payload, responseCallback} = yield take(
      ActionTypes.EDIT_POST.REQUEST,
    );
    console.log(payload);
    yield put(loaderStart());
    try {
      const response = yield call(
        callRequest,
        EDIT_POST,
        payload,
        '',
        {},
        ApiSauce,
      );
   
      yield put(loaderStop());
      responseCallback(response);
      Utils.DialogAlert(response.message, 'success');
    } catch (error) {
      console.log(error,'==error EDIT_POST');
      yield put(loaderStop());
      Utils.DialogAlert(error.message);
    }
  }
}

function* SearchPostHandler() {
  while (true) {
    const {params, responseCallback} = yield take(
      ActionTypes.SEARCH_POST.REQUEST,
    );
    yield put(loaderStart());
    try {
      const response = yield call(
        callRequest,
        SEARCH_POST,
        params,
        '',
        {},
        ApiSauce,
      );
      yield put(loaderStop());
      responseCallback(response?.data);
    } catch (error) {
      responseCallback([]);
      yield put(loaderStop());
      // Utils.DialogAlert(error.message);
    }
  }
}

function* ChatDeleteHandler() {
  while (true) {
    const {params, responseCallback} = yield take(
      ActionTypes.CHAT_DELETE.REQUEST,
    );
    yield put(loaderStart());
    try {
      const response = yield call(
        callRequest,
        CHAT_DELETE,
        '',
        params,
        {},
        ApiSauce,
      );
      yield put(loaderStop());
      responseCallback(response);
    } catch (error) {
      yield put(loaderStop());
      Utils.DialogAlert(error.message);
    }
  }
}

function* CommentListHandler() {
  while (true) {
    const {payload, responseCallback} = yield take(
      ActionTypes.POST_COMMENT_LIST.REQUEST,
    );
    yield put(loaderStart());
    try {
      const response = yield call(
        callRequest,
        POST_COMMENT_LIST,
        payload,
        '',
        {},
        ApiSauce,
      );
      yield put(loaderStop());
      responseCallback(response?.data);
    } catch (error) {
      yield put(loaderStop());
      Utils.DialogAlert(error.message);
    }
  }
}

function* PostReactionsHandler() {
  while (true) {
    const {payload, responseCallback} = yield take(
      ActionTypes.POST_REACTIONS.REQUEST,
    );
    yield put(loaderStart());
    try {
      const response = yield call(
        callRequest,
        POST_REACTIONS,
        payload,
        '',
        {},
        ApiSauce,
      );
      yield put(loaderStop());
      responseCallback(response?.data);
    } catch (error) {
      yield put(loaderStop());
      Utils.DialogAlert(error.message);
    }
  }
}

function* UploadImageHandler() {
  while (true) {
    const {payload, responseCallback} = yield take(
      ActionTypes.UPLOAD_IMAGE.REQUEST,
    );
    yield put(loaderStart());
    try {
      const response = yield call(
        callRequest,
        UPLOAD_IMAGE,
        payload,
        '',
        {},
        ApiSauce,
      );
      yield put(loaderStop());
      responseCallback(response);
    } catch (error) {
      yield put(loaderStop());
      Utils.DialogAlert(error.message);
    }
  }
}

function* LocationSuggestionhandler() {
  while (true) {
    const {responseCallback} = yield take(
      ActionTypes.LOCATION_SUGGESTION.REQUEST,
    );
    yield put(loaderStart());
    try {
      const response = yield call(
        callRequest,
        LOCATION_SUGGESTION,
        '',
        '',
        {},
        ApiSauce,
      );
      yield put(loaderStop());
      responseCallback(response?.data);
    } catch (error) {
      yield put(loaderStop());
      Utils.DialogAlert(error.message);
    }
  }
}

function* PushNotificationHandler() {
  while (true) {
    const {payload, user, responseCallback} = yield take(
      ActionTypes.PUSH_NOTIFICATION.REQUEST,
    );
    yield put(loaderStart());
    try {
      const response = yield call(
        callRequest,
        PUSH_NOTIFICATION,
        payload,
        '',
        {},
        ApiSauce,
      );
      yield put(loaderStop());
      const copyUserData = {...user};
      copyUserData['push_notification'] = payload?.set_push_notification;
      yield put(loginUser(copyUserData));
      responseCallback(response);
      // Utils.DialogAlert(response.message);
    } catch (error) {
      yield put(loaderStop());
      Utils.DialogAlert(error.message);
    }
  }
}

function* geoLocationHandler() {
  while (true) {
    const {payload, user, responseCallback} = yield take(
      ActionTypes.GEO_LOCATION.REQUEST,
    );
    yield put(loaderStart());
    try {
      const response = yield call(
        callRequest,
        GEO_LOCATION,
        payload,
        '',
        {},
        ApiSauce,
      );
      yield put(loaderStop());
      const copyUserData = {...user};
      copyUserData['geo_location'] = payload?.set_location;
      yield put(loginUser(copyUserData));
      responseCallback(response);
      // Utils.DialogAlert(response.message);
    } catch (error) {
      yield put(loaderStop());
      Utils.DialogAlert(error.message);
    }
  }
}

function* ResponsePostHandler() {
  while (true) {
    const {payload, responseCallback} = yield take(
      ActionTypes.RESPONSE_POST.REQUEST,
    );
    yield put(loaderStart());
    try {
      const response = yield call(
        callRequest,
        RESPONSE_POST,
        payload,
        '',
        {},
        ApiSauce,
      );
      yield put(loaderStop());
      responseCallback(response);
      Utils.DialogAlert(response.message, 'success');
    } catch (error) {
      yield put(loaderStop());
      Utils.DialogAlert(error.message);
    }
  }
}

function* FollowersRemoveHnadler() {
  while (true) {
    const {payload, responseCallback} = yield take(
      ActionTypes.FOLLOWERS_REMOVE.REQUEST,
    );
    yield put(loaderStart());
    try {
      const response = yield call(
        callRequest,
        FOLLOWERS_REMOVE,
        payload,
        '',
        {},
        ApiSauce,
      );
      yield put(loaderStop());
      responseCallback(response);
    } catch (error) {
      yield put(loaderStop());
      Utils.DialogAlert(error.message);
    }
  }
}
function* postDetail() {
  while (true) {
    const {payload, responseCallback} = yield take(
      ActionTypes.POST_DETAIL.REQUEST,
    );
    yield put(loaderStart());
    try {
      const response = yield call(
        callRequest,
        POST_DETAIL,
        '',
        payload,
        {},
        ApiSauce,
      );
      yield put(loaderStop());
      responseCallback(response);
    } catch (error) {
      yield put(loaderStop());
      Utils.DialogAlert(error.message);
    }
  }
}
export default function* root() {
  // yield fork(TagPeopleHandler);

}
