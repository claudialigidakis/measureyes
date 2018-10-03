import {
  ACCOUNT_LOGIN_PENDING,
  ACCOUNT_LOGIN_SUCCESS,
  ACCOUNT_LOGIN_FAILED,
  ACCOUNT_SIGNUP_PENDING,
  ACCOUNT_SIGNUP_SUCCESS,
  ACCOUNT_SIGNUP_FAILED,
  GET_ACCOUNT,
  NOT_LOGGED_IN,
  ACCOUNT_LOGOUT
} from '../actions/auth';

let initialState = {
  isLoading: false,
  account: {},
  showLoginError: false,
  showSignupError: false,
  authorized: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACCOUNT_LOGIN_PENDING:
      return {...state, isLoading: true};
    case ACCOUNT_LOGIN_SUCCESS:
      return {...state, isLoading: false, account: action.payload, authorized: true};
    case ACCOUNT_LOGIN_FAILED:
      return {...state, isLoading: false, showLoginError: true};
    case ACCOUNT_SIGNUP_PENDING:
      return {...state, isLoading: true};
    case ACCOUNT_SIGNUP_SUCCESS:
      return {...state, isLoading: false};
    case ACCOUNT_SIGNUP_FAILED:
      return {...state, isLoading: false, showSignupError: true};
    case GET_ACCOUNT:
      return {...state, isLoading: false, account: action.payload, authorized: true};
    case NOT_LOGGED_IN:
      return {...state, isLoading: false, authorized: false};
    case ACCOUNT_LOGOUT:
      return {...state, account: {}, authorized: false};
    default:
      return state;
  }
};
