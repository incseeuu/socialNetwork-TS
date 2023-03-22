import {AppStateType} from "./redux-store";

export const getUserId = (state: AppStateType) => {
    return state.auth.id
}

export const getUserEmail = (state: AppStateType) => {
    return state.auth.email
}

export const isLogin = (state: AppStateType) => {
    return state.auth.login
}

export const isFetch = (state: AppStateType) => {
    return state.auth.isFetching
}
