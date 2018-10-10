import auth from './auth';
import account from './account';

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    auth,
    account,
    form: formReducer
});

export default rootReducer;
