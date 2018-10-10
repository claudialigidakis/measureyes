import Account from '../models/account'

export const ACCOUNT_RESPONSES = 'ACCOUNT_RESPONSES';

export const getVideoResponses = (video_id) => {
  return async (dispatch) => {
    const token = await Account.getVideoResponses(video_id)
    dispatch({type: ACCOUNT_RESPONSES, payload: token});
  }
}
