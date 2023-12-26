import * as Cookie from "../utils/Cookie"
import { post } from "../utils/apiRequest";
import  { SUCCESS, REQUESTING, ERROR, USER_DETAILS, ACCESS_TOKEN } from "../utils/constants"

export const SIGNUP_REQUEST = "SIGNUP_REQUEST"
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS"
export const SIGNUP_FAILURE = "SIGNUP_FAILURE"

export const SIGNIN_REQUEST = "SIGNIN_REQUEST"
export const SIGNIN_SUCCESS = "SIGNIN_SUCCESS"
export const SIGNIN_FAILURE = "SIGNIN_FAILURE"

export const signupRequest = () => {
    return {
        type: SIGNUP_REQUEST,
        status: REQUESTING
    }
}

export const signupSuccess = (payload) => {
    return {
        type: SIGNUP_SUCCESS,
        status: SUCCESS,
        payload
    }
}

export const signupFailure = (error) => {
    return {
        type: SIGNUP_FAILURE,
        status: ERROR,
        error
    }
}

export const signinRequest = () => {
    return {
        type: SIGNIN_REQUEST,
        status: REQUESTING
    }
}

export const signinSuccess = (payload) => {
    return {
        type: SIGNIN_SUCCESS,
        status: SUCCESS,
        payload
    }
}

export const signinFailure = (error) => {
    return {
        type: SIGNIN_FAILURE,
        status: ERROR,
        error
    }
}

export const signup = (payload) => {
    console.log("Entering signup action"); 
    return async (dispatch) => {
        dispatch(signupRequest())
        try{
            let url = `signup`
            const result = await post(url, payload)
            console.log("action file1", result)

            if (result.error) {
                throw new Error(result.message)
            }

            console.log("action file", result.token)

            Cookie.createCookie(ACCESS_TOKEN, result.token, 7)
            Cookie.createCookie(USER_DETAILS, JSON.stringify(result), 7)
            return dispatch(signupSuccess(result))
        } catch (e) {
            return dispatch(signupFailure(e.message))
        }
    }
}

export const signin = (payload) => {
    return async (dispatch) => {
        dispatch(signinRequest())
        try{
            let url = `login`
            const result = await post(url, payload)

            if (result.error) {
                throw new Error(result.message)
            }
            return dispatch(signinSuccess(result))
        } catch (e) {
            return dispatch(signinFailure(e.message))
        }
    }
}