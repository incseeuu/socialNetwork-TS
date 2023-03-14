import {Dispatch} from "redux";
import {authApi, headerApi} from "../api/api";
import {AppThunk} from "./redux-store";
import {FormAction, stopSubmit} from "redux-form";

export type AuthActionsType = SetAuthStateAC | SetFetchingAC | SetCaptchaAC

type SetAuthStateAC = ReturnType<typeof setAuthState>
type SetFetchingAC = ReturnType<typeof setFetching>
type SetCaptchaAC = ReturnType<typeof setCaptcha>


export type AuthStateType = {
    id: number | null
    email: string | null
    login: string | null
    isFetching: boolean
    urlCaptcha: string
}

let initialState: AuthStateType = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    urlCaptcha: ''
}



export const authReducer = (state = initialState, action: AuthActionsType) => {
    switch (action.type) {
        case "SET-AUTH-STATE":
            return {...state, ...action.payload}
        case "SET-FETCHING":
            return {...state, isFetching: action.payload.value}
        case "SET-CAPTCHA":
            return {...state, urlCaptcha: action.payload.value}
    }
    return state
}

export const setAuthState = (id: number | null, email: string | null, login: string | null) => {
    return {
        type: 'SET-AUTH-STATE',
        payload: {
            id,
            email,
            login
        }
    } as const
}

export const setCaptcha = (value: string) => {
    return {
        type: 'SET-CAPTCHA',
        payload: {
            value
        }
    } as const
}

export const setFetching = (value: boolean) => {
    return {
        type: 'SET-FETCHING',
        payload: {
            value
        }
    } as const
}

export const authMeThunk = (dispatch: Dispatch) => {
    dispatch(setFetching(false))


    headerApi.authMe().then(res => {
        if (res.data.resultCode === 0) {
            let {id, email,login} = res.data.data
            dispatch(setAuthState(id, email,login))
            dispatch(setFetching(true))
        }

    })
}
///security/get-captcha-url
export const loginThunkCreator = (email: string, password: string, rememberMe: boolean): AppThunk => (dispatch) => {
    authApi.login(email, password, rememberMe).then(res => {
        if (res.data.resultCode === 0) {
            dispatch(authMeThunk)
        }
        if (res.data.resultCode > 0) {
            let message = res.data.messages.length > 0 ? res.data.messages[0] : 'Something went wrong. Please try again.'
                dispatch(stopSubmit('login', {_error: message}))
        }
        if (res.data.resultCode === 10) {
            authApi.getCaptcha().then(res => {
                dispatch(setCaptcha(res.data.url))
            })
        }
    })
}

export const logoutThunkCreator = (): AppThunk => (dispatch) => {
    authApi.logout().then(res => {
        if (res.data.resultCode === 0) {
            dispatch(setAuthState(null, null,null))
            dispatch(setFetching(false))
        }
    })
}