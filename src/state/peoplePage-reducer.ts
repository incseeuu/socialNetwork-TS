import {userApi} from "../api/api";
import {Dispatch} from "redux";


type PeoplePageACType = AddFriendACType
    | DeleteFriendACType
    | SetUsersAC
    | SetTotalCountAC
    | SetCurrentPage
    | SetLoader
    | SetDisabledFollowBtnAC

type AddFriendACType = ReturnType<typeof addFriendAC>
type DeleteFriendACType = ReturnType<typeof deleteFriendAC>
type SetUsersAC = ReturnType<typeof setUsersAC>
type SetTotalCountAC = ReturnType<typeof setTotalCountAC>
type SetCurrentPage = ReturnType<typeof setCurrentPageAC>
type SetLoader = ReturnType<typeof setLoaderAC>
type SetDisabledFollowBtnAC = ReturnType<typeof setDisabledFollowBtnAC>

export type PeopleStateType = {
    items: GetUsersType[]
    totalCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    isDisabledFollowBtn: number[] | []
}

export type GetUsersType = {
    name: string
    id: number
    uniqueUrlName: null | string
    photos: PhotosUsersType
    status: string | null
    followed: boolean
}

type PhotosUsersType = {
    small: string | null
    large: string | null
}

const initialState: PeopleStateType = {
    items: [],
    totalCount: 0,
    pageSize: 5,
    currentPage: 1,
    isFetching: true,
    isDisabledFollowBtn: []
}

const peoplePageReducer = (state = initialState, action: PeoplePageACType) => {
    switch (action.type) {
        case "ADD-FRIEND":
            return {...state, items: state.items.map(el => el.id === action.payload.userId
                    ? {...el, followed: true}
                    : el)}
        case "DELETE-FRIEND":
            return {...state, items: state.items.map(el => el.id === action.payload.userId
                    ? {...el, followed: false}
                    : el)}
        case "SET-USERS":
            return {...state, items: action.payload.items}
        case "SET-TOTAL-COUNT":
            return {...state, totalCount: action.payload.count}
        case "SET-CURRENT-PAGE":
            return {...state, currentPage: action.payload.page}
        case "SET-LOADER":
            return  {...state, isFetching: action.payload.value}
        case "SET-DISABLE-BTN":
            return  {...state, isDisabledFollowBtn: action.payload.value
                    ? [...state.isDisabledFollowBtn, action.payload.userId]
                    : state.isDisabledFollowBtn.filter(el => el !== action.payload.userId)
            }
    }
    return state
}

export const addFriendAC = ( userId: number) => {
    return {
        type: "ADD-FRIEND",
        payload: {
            userId
        }
    } as const
}

export const deleteFriendAC = (userId: number) => {
    return {
        type: "DELETE-FRIEND",
        payload: {
            userId
        }
    } as const
}

export const setUsersAC = (items: GetUsersType[]) => {
    return {
        type: 'SET-USERS',
        payload: {
            items
        }
    } as const
}

export const setTotalCountAC = (count: number) => {
    return {
        type: 'SET-TOTAL-COUNT',
        payload: {
            count
        }
    } as const
}

export const setCurrentPageAC = (page: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        payload: {
            page
        }
    } as const
}

export const setLoaderAC = (value: boolean) => {
    return {
        type: 'SET-LOADER',
        payload: {
            value
        }
    } as const
}

export const setDisabledFollowBtnAC = (userId: number,value: boolean) => {
    return {
        type: 'SET-DISABLE-BTN',
        payload: {
            userId,
            value
        }
    } as const
}

export const getUserThunkCreator = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(setLoaderAC(true))

        userApi.getUser(currentPage, pageSize)
            .then(data => {

                dispatch(setUsersAC(data.items))
                dispatch(setTotalCountAC(data.totalCount))
                dispatch(setLoaderAC(false))
            })
}}

export const followThunkCreator = (userId: number) => (dispatch: Dispatch) => {
    dispatch(setDisabledFollowBtnAC(userId,true))
    userApi.unFollow(userId).then(res => {
        if (res.data.resultCode === 0) {
            dispatch(deleteFriendAC(userId))
        }
        dispatch(setDisabledFollowBtnAC(userId,false))
    })
}

export const unFollowThunkCreator = (userId: number) => (dispatch: Dispatch) => {
    dispatch(setDisabledFollowBtnAC(userId,true))
    userApi.follow(userId).then(res => {
        if (res.data.resultCode === 0) {
            dispatch(addFriendAC(userId))
        }
        dispatch(setDisabledFollowBtnAC(userId,false))
    })
}

export default peoplePageReducer;