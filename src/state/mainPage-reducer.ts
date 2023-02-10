import {v1} from "uuid";

export type MainPageType = {
    stateForMainPosts: PostsStateType[]
    newPosts: string
    stateForProfile: GetProfileType
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

export type MainPageACType = AddPostACType | UpdateNewPostTextACType | SetProfileAC | IsLoadingAC

export type AddPostACType = ReturnType<typeof addPostAC>
export type UpdateNewPostTextACType = ReturnType<typeof updateNewPostTextAC>
export type SetProfileAC = ReturnType<typeof setProfileAC>
export type IsLoadingAC = ReturnType<typeof setLoadingAC>

let initialState: MainPageType = {
    stateForMainPosts: [
        {id: v1(), message: "Hello, how are you", likeCount: 15},
        {id: v1(), message: "Hello, I am fine", likeCount: 20},
    ],
    newPosts: '',
    stateForProfile: {} as GetProfileType,
    isLoading: false
}

const mainPageReducer = (state = initialState, action: MainPageACType): MainPageType => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost: PostsStateType = {id: v1(), message: state.newPosts, likeCount: 0}
            return {...state, stateForMainPosts: [...state.stateForMainPosts, newPost], newPosts: ''}

        case 'NEW-POST-TEXT':
            return {...state, newPosts: action.payload.text}
        case "SET-PROFILE":
            return  {...state, stateForProfile: action.payload.profile}
        case "IS-LOADING":
            return {...state, isLoading: action.payload.value}
    }

    return state
}

export const addPostAC = () => {
    return {type: "ADD-POST"} as const
}

export const updateNewPostTextAC = (text: string) => {
    return {
        type: "NEW-POST-TEXT",
        payload: {
            text
        }
    } as const
}

export const setProfileAC = (profile: GetProfileType) => {
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

export default mainPageReducer;