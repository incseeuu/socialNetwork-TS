export type PostsStateType = {
    id: number
    message: string
    likeCount: number
}

export type MessagesStateType = {
    id: number
    content: string
}

export type DialogStateType = {
    id: number
    name: string
}

export type MainPageType = {
    stateForMainPosts: PostsStateType[]
}

export type MessagesPageType = {
    stateDialogs: DialogStateType[]
    stateMessages: MessagesStateType[]

}

export type RootStateType = {
    mainPage: MainPageType
    messagesPage: MessagesPageType
}

const state: RootStateType = {
    mainPage: {
        stateForMainPosts: [
            {id:1 ,message: "Hello, how are you", likeCount: 15},
            {id:2 ,message: "Hello, I am fine", likeCount: 20},
        ]
    },
    messagesPage: {
        stateDialogs: [
            {id: 1, name: 'Igor'},
            {id: 2, name: 'Vladimir'},
            {id: 3, name: 'Sergey'},
            {id: 4, name: 'Maksim'},
            {id: 5, name: 'Stepan'},
            {id: 6, name: 'Yosip'},
        ],
        stateMessages: [
            {id: 1 ,content: 'Hello, i\'m kitty a little bit'},
            {id: 2 ,content: 'Hello, i\'m kitty a little bit'},
            {id: 3 ,content: 'Hello, i\'m kitty a little bit'},
            {id: 4 ,content: 'Hello, i\'m kitty a little bit'},
            {id: 5 ,content: 'Hello, i\'m kitty a little bit'},
            {id: 6 ,content: 'Hello, i\'m kitty a little bit'},
        ]
    }
}

export default state