import Auth from '../models/auth'

export const ACCOUNT_LOGIN_PENDING = 'ACCOUNT_LOGIN_PENDING';
export const ACCOUNT_LOGIN_SUCCESS = 'ACCOUNT_LOGIN_SUCCESS';
export const ACCOUNT_LOGIN_FAILED = 'ACCOUNT_LOGIN_FAILED';
export const ACCOUNT_SIGNUP_PENDING = 'ACCOUNT_SIGNUP_PENDING';
export const ACCOUNT_SIGNUP_SUCCESS = 'ACCOUNT_SIGNUP_SUCCESS';
export const ACCOUNT_SIGNUP_FAILED = 'ACCOUNT_SIGNUP_FAILED';
export const GET_ACCOUNT = 'GET_ACCOUNT';
export const GET_ACCOUNT_DATA = 'GET_ACCOUNT_DATA'
export const NOT_LOGGED_IN = 'NOT_LOGGED_IN';
export const ACCOUNT_LOGOUT = 'ACCOUNT_LOGOUT';

export const accountLogin = ({email, password}, history) => {
  return async (dispatch) => {
    try {
      dispatch({type: ACCOUNT_LOGIN_PENDING});
      const payload = await Auth.accountLogin({email,password}, history)
      dispatch({type: ACCOUNT_LOGIN_SUCCESS, payload})
      history.push('/dashboard');
    } catch (err) {
      dispatch({type: ACCOUNT_LOGIN_FAILED, payload: err});
      history.push('/login');
    }
  }
}

export const accountSignup = (newAccount, history) => {
  return async (dispatch) => {
    try {
      dispatch({type: ACCOUNT_SIGNUP_PENDING});
      const payload = await Auth.accountSignUp(newAccount, history)
      dispatch({type: ACCOUNT_SIGNUP_SUCCESS, payload});
      history.push('/');
    } catch (err) {
      dispatch({type: ACCOUNT_SIGNUP_FAILED, payload: err});
    }
  }
}

export const getAccount = () => {
  return async (dispatch) => {
    try {
      const token = await Auth.getAccount()
      dispatch({type: GET_ACCOUNT, payload: token});
    }
    catch (err) {
      dispatch({type: NOT_LOGGED_IN, payload: err});
    }
  }
}

export const getAccountData = () => {
  return async (dispatch) => {
      const token = await Auth.getAccountData()
      dispatch({type: GET_ACCOUNT_DATA, payload: token});
  }
}

export const accountLogout = () => {
  return (dispatch) => {
    localStorage.removeItem('token');
    dispatch({type: ACCOUNT_LOGOUT});
  }
};
