type ActionsType = SetAuthStateAC | SetFetchingAC

type SetAuthStateAC = ReturnType<typeof setAuthStateAC>
type SetFetchingAC = ReturnType<typeof setFetchingAC>
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

export const setAuthStateAC = (authState: AuthStateType) => {
    return {
        type: 'SET-AUTH-STATE',
        payload: {
            authState
        }
    } as const
}

export const setFetchingAC = (value: boolean) => {
    return {
        type: 'SET-FETCHING',
        payload: {
            value
        }
    } as const
}