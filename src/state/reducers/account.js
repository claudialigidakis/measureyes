import {
  ACCOUNT_RESPONSES
} from '../actions/account';

let initialState = {
  responses: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACCOUNT_RESPONSES:
      return {...state, responses: action.payload};
    default:
      return state;
  }
};
