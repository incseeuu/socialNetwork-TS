import {Dispatch} from "redux";
import {headerApi} from "../api/api";

type ActionsType = SetAuthStateAC | SetFetchingAC

type SetAuthStateAC = ReturnType<typeof setAuthState>
type SetFetchingAC = ReturnType<typeof setFetching>
export type AuthStateType = {
    id: string | null
    email: string | null
    login: string | null
    isFetching: boolean
}

let initialState: AuthStateType = {
    id: null,
    email: null,
    login: null,
    isFetching: false
}



export const authReducer = (state = initialState, action: ActionsType) => {
    switch (action.type){
        case "SET-AUTH-STATE":
            return {...state, ...action.payload.authState}
        case "SET-FETCHING":
            return {...state, isFetching: action.payload.value}
    }
    return state
}

export const setAuthState = (authState: AuthStateType) => {
    return {
        type: 'SET-AUTH-STATE',
        payload: {
            authState
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
    dispatch(setFetching(true))


    headerApi.authMe().then(res => {
        if (res.data.resultCode === 0){
            dispatch(setAuthState(res.data.data))
        }
        dispatch(setFetching(false))
    })
}