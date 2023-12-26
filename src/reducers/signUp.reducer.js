import * as signUpAction from "../actions/signUp.action"

const initialState = {
    authError: null
}

const signupReducer = (state = initialState, action) => {
    switch (action.type) {
        case signUpAction.SIGNUP_REQUEST:
            return{
                ...state,
                status: action.status
            }

        case signUpAction.SIGNUP_SUCCESS:
            return{
                ...state,
                status: action.status,
                authError: null
            }

        case signUpAction.SIGNUP_FAILURE:
            return{
                ...state,
                status: action.status,
                authError: action.error
            }

        case signUpAction.SIGNIN_REQUEST:
            return{
                ...state,
                status: action.status
            }

        case signUpAction.SIGNIN_SUCCESS:
            return {
                ...state,
                status: action.status,
                authError: null
            }

        case signUpAction.SIGNIN_FAILURE:
            return {
                ...state,
                status: action.status,
                authError: action.error
            }
        default:
            return state
    }
}

export default signupReducer