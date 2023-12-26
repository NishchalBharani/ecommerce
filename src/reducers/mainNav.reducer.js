import * as mainNavAction from "../actions/mainNav.action"

const initialState = {
    payload: null
}

const mainNavReducer = (state = initialState, action) => {
    switch(action.type) {
        case mainNavAction.GET_CATEGORIES_REQUEST:
            return {
                ...state,
                status: action.status
            }

        case mainNavAction.GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                payload: action.payload,
                status: action.status
            }

        case mainNavAction.GET_CATEGORIES_FAILURE:
            return {
                ...state,
                error: action.error,
                status: action.status
            }
        default:
            return state
    }
}

export default mainNavReducer