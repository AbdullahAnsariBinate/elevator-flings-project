import {
  LOADER,
  ERRMSG,
  SEARCHEDREST,
  ACTIONSHEET,
  TAG_PEOPLE,
  TAG_PEOPLE_DELETE,
} from '../../constants';

const INITIAL_STATE = {
  loader: false,
  errMsg: '',
  searchedRest: [],
  toggleActionSheet: false,
  socket: null,
  addTagPeople: [],
};

export default (states = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LOADER_START':
      return {
        ...states,
        loader: true,
      };
    case 'LOADER_STOP':
      return {
        ...states,
        loader: false,
      };
    case 'LOGOUT_AND_REMOVE_INFO':
      return {
        ...states,
        loader: false,
        errMsg: '',
        searchedRest: [],
      };
    case ERRMSG:
      return {
        ...states,
        errMsg: action.payload,
      };
    case SEARCHEDREST:
      return {
        ...states,
        searchedRest: action.payload,
      };
    case ACTIONSHEET:
      return {
        ...states,
        toggleActionSheet: !states?.toggleActionSheet,
      };
    case TAG_PEOPLE:
      return {
        ...states,
        addTagPeople: action.payload,
      };
    case TAG_PEOPLE_DELETE:
      return {
        ...states,
        addTagPeople: null,
      };
    case 'SET_SOCKET':
      return {
        ...states,
        socket: action.payload,
      };

    default:
      return states;
  }
};
