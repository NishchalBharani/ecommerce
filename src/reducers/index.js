import { combineReducers } from 'redux';
import signupReducer from './signUp.reducer';
import mainNavReducer from './mainNav.reducer';

const rootReducer = combineReducers({
    signup: signupReducer,
    mainNav: mainNavReducer,
})

export default rootReducer