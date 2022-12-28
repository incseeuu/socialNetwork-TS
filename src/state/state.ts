import {v1} from "uuid";
import {rerenderState} from "../render";

export type PostsStateType = {
    id: string
    message: string
    likeCount: number
}

export type MessagesStateType = {
    id: string
    content: string
}

export type DialogStateType = {
    id: string
    name: string
}

export type SidebarStateType = {
    id: number
    name: string
    avatar: string
}

export type MainPageType = {
    stateForMainPosts: PostsStateType[]
}

export type MessagesPageType = {
    stateDialogs: DialogStateType[]
    stateMessages: MessagesStateType[]

}

export type NavbarPageType = {
    sidebar: SidebarStateType[]
}

export type RootStateType = {
    mainPage: MainPageType
    messagesPage: MessagesPageType
    navbarPage: NavbarPageType
}

const state: RootStateType = {
    mainPage: {
        stateForMainPosts: [
            {id: v1(),message: "Hello, how are you", likeCount: 15},
            {id: v1() ,message: "Hello, I am fine", likeCount: 20},
        ]
    },
    messagesPage: {
        stateDialogs: [
            {id: v1(), name: 'Igor'},
            {id: v1(), name: 'Vladimir'},
            {id: v1(), name: 'Sergey'},
            {id: v1(), name: 'Maksim'},
            {id: v1(), name: 'Stepan'},
            {id: v1(), name: 'Yosip'},
        ],
        stateMessages: [
            {id: v1() ,content: 'Hello, i\'m kitty a little bit'},
            {id: v1() ,content: 'Hello, i\'m kitty a little bit'},
            {id: v1() ,content: 'Hello, i\'m kitty a little bit'},
            {id: v1() ,content: 'Hello, i\'m kitty a little bit'},
            {id: v1() ,content: 'Hello, i\'m kitty a little bit'},
            {id: v1() ,content: 'Hello, i\'m kitty a little bit'},
        ]
    },
    navbarPage: {
        sidebar: [
            {
                id: 1,
                name: 'Peter',
                avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600'
            },
            {
                id: 2,
                name: 'John',
                avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600'
            },
            {
                id: 3,
                name: 'Lora',
                avatar: 'https://images.pexels.com/photos/1382728/pexels-photo-1382728.jpeg?auto=compress&cs=tinysrgb&w=600'
            },
        ]
    }
}

export const addPostCallBack = (newPostText: string) => {
    const newPost:PostsStateType = {id: v1() ,message: newPostText, likeCount: 0}
    state.mainPage.stateForMainPosts.unshift(newPost)
    rerenderState(state)
}

export default state