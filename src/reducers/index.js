import { combineReducers } from 'redux';
import signupReducer from './signUp.reducer';
import mainNavReducer from './mainNav.reducer';
import cartReducer from './cart.reducer';

const rootReducer = combineReducers({
    signup: signupReducer,
    mainNav: mainNavReducer,
    cart: cartReducer,
})

export default rootReducer