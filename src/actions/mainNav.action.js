import * as Cookie from "../utils/Cookie"
import { get } from "../utils/apiRequest"
import {
    SUCCESS,
    REQUESTING,
    ERROR,
    USER_DETAILS,
    ACCESS_TOKEN,
} from "../utils/constants"

export const GET_CATEGORIES_REQUEST = "GET_CATEGORIES_REQUEST"
export const GET_CATEGORIES_SUCCESS = "GET_CATEGORIES_SUCCESS"
export const GET_CATEGORIES_FAILURE = "GET_CATEGORIES_FAILURE"

export const getCategoriesRequest = () => {
    return {
        type: GET_CATEGORIES_REQUEST,
        status: REQUESTING
    }
}

export const getCategoriesSuccess = (payload) => {
    return {
        type: GET_CATEGORIES_SUCCESS,
        status: SUCCESS,
        payload
    }
}

export const getCategoriesFailure = (error) => {
    return {
        type: GET_CATEGORIES_FAILURE,
        status: ERROR,
        error
    }
}

export const getCategories = () => {
    return async (dispatch) => {
        dispatch(getCategoriesRequest())
        try{
            let url = `categories`
            const result = await get(url)

            if (result.error) {
                throw new Error(result.message)
            }
            return dispatch(getCategoriesSuccess(result))
        } catch (e) {
            return dispatch(getCategoriesFailure(e.message))
        }
    }
}