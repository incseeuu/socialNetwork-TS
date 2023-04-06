import {v1} from "uuid";
import {Dispatch} from "redux";
import {profileApi} from "../api/api";

export type MainPageType = {
    stateForMainPosts: PostsStateType[]
    stateForProfile: GetProfileType
    status: string
    isLoading: boolean
}

export type GetProfileType = {
    aboutMe: string | null
    contacts: GetContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string
    userId: number
    photos: GetPhotosType
}

export type GetContactsType = {
    facebook: string | null
    website: string | null
    vk: string | null
    twitter: string | null
    instagram: string | null
    youtube: string | null
    github: string | null
    mainLink: string | null
}

export type GetPhotosType = {
    small: string | null
    large: string | null
}

export type PostsStateType = {
    id: string
    message: string
    likeCount: number
}

export type MainPageACType = AddPostACType
    | SetProfileAC
    | IsLoadingAC
    | ChangeStatusAC

export type AddPostACType = ReturnType<typeof addPostAC>
export type SetProfileAC = ReturnType<typeof setProfile>
export type IsLoadingAC = ReturnType<typeof setLoadingAC>
export type ChangeStatusAC = ReturnType<typeof changeStatusAC>

let initialState: MainPageType = {
    stateForMainPosts: [
        {id: v1(), message: "Hello, how are you", likeCount: 15},
        {id: v1(), message: "Hello, I am fine", likeCount: 20},
    ],
    stateForProfile: {} as GetProfileType,
    status: '',
    isLoading: false
}

export const mainPageReducer = (state = initialState, action: MainPageACType): MainPageType => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost: PostsStateType = {id: v1(), message: action.value, likeCount: 0}
            return {...state, stateForMainPosts: [...state.stateForMainPosts, newPost]}
        case "SET-PROFILE":
            return {...state, stateForProfile: action.payload.profile}
        case "IS-LOADING":
            return {...state, isLoading: action.payload.value}
        case "CHANGE-STATUS":
            return {...state, status: action.payload.value}
    }

    return state
}

export const addPostAC = (value: string) => {
    return {type: 'ADD-POST', value} as const
}

export const setProfile = (profile: GetProfileType) => {
    return {
        type: 'SET-PROFILE',
        payload: {
            profile
        }
    } as const
}

export const setLoadingAC = (value: boolean) => {
    return {
        type: 'IS-LOADING',
        payload: {
            value
        }
    } as const
}

export const changeStatusAC = (value: string) => {
    return {
        type: "CHANGE-STATUS",
        payload: {
            value
        }
    } as const
}

export const userFromUrlThunk = (getUserIdFromUrl: number) => (dispatch: Dispatch) => {
    profileApi.getUserFromUrl(getUserIdFromUrl)
        .then(res => {
            dispatch(setProfile(res.data))
        })
}


export const getStatusThunk = (userId: number) => (dispatch: Dispatch) => {
    profileApi.getStatus(userId)
        .then(res => {
            dispatch(changeStatusAC(res.data))
        })
}

export const changeStatusThunk = (value: string) => (dispatch: Dispatch) => {
    console.log(1)
    profileApi.changeStatus(value)
        .then(res => {
            if(res.data.resultCode === 0){
                dispatch(changeStatusAC(value))
            }
        })
}

export default mainPageReducer;