import {v1} from "uuid";

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
    newPosts: string

}

export type MessagesPageType = {
    stateDialogs: DialogStateType[]
    stateMessages: MessagesStateType[]
    newMessage: string

}

export type NavbarPageType = {
    sidebar: SidebarStateType[]
}

export type StateType = {
    mainPage: MainPageType
    messagesPage: MessagesPageType
    navbarPage: NavbarPageType
}

export type  StoreType = {
    _state: StateType
    getState: () => StateType
    addNewMessages: () => void
    updateNewMessageCallBack: (value: string) => void
    updateNewPostsCallBack: (value: string) => void
    addPostCallBack: () => void
    _callSubscribe: ()=> void
    subscribe: (observer: () => void )=> void
}



export const store:StoreType = {
    _state: {
        mainPage: {
            stateForMainPosts: [
                {id: v1(),message: "Hello, how are you", likeCount: 15},
                {id: v1() ,message: "Hello, I am fine", likeCount: 20},
            ],
            newPosts: '',
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
            ],
            newMessage: ''
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
    },
    getState(){
        return this._state
    },
    updateNewPostsCallBack(value: string){
        this._state.mainPage.newPosts = value
        this._callSubscribe()
    },
    addPostCallBack(){
        const newPost:PostsStateType = {id: v1() ,message: this._state.mainPage.newPosts, likeCount: 0}
        this._state.mainPage.stateForMainPosts.unshift(newPost)
        this._state.mainPage.newPosts = ''
        this._callSubscribe()
    },
    addNewMessages() {
        let newMessage: MessagesStateType = {id: v1(), content: this._state.messagesPage.newMessage}
        this._state.messagesPage.stateMessages.push(newMessage)
        this._state.messagesPage.newMessage = ''
        this._callSubscribe()
    },
    updateNewMessageCallBack(value: string){
        this._state.messagesPage.newMessage = value
        this._callSubscribe()
    },
    _callSubscribe(){
        console.log('hi')
    },
    subscribe(observer: () => void){
        this._callSubscribe = observer
    }
}

// const state: RootStateType = {
//     mainPage: {
//         stateForMainPosts: [
//             {id: v1(),message: "Hello, how are you", likeCount: 15},
//             {id: v1() ,message: "Hello, I am fine", likeCount: 20},
//         ],
//         newPosts: "eniki-beniki"
//     },
//     messagesPage: {
//         stateDialogs: [
//             {id: v1(), name: 'Igor'},
//             {id: v1(), name: 'Vladimir'},
//             {id: v1(), name: 'Sergey'},
//             {id: v1(), name: 'Maksim'},
//             {id: v1(), name: 'Stepan'},
//             {id: v1(), name: 'Yosip'},
//         ],
//         stateMessages: [
//             {id: v1() ,content: 'Hello, i\'m kitty a little bit'},
//             {id: v1() ,content: 'Hello, i\'m kitty a little bit'},
//             {id: v1() ,content: 'Hello, i\'m kitty a little bit'},
//             {id: v1() ,content: 'Hello, i\'m kitty a little bit'},
//             {id: v1() ,content: 'Hello, i\'m kitty a little bit'},
//             {id: v1() ,content: 'Hello, i\'m kitty a little bit'},
//         ],
//         newMessage: ''
//     },
//     navbarPage: {
//         sidebar: [
//             {
//                 id: 1,
//                 name: 'Peter',
//                 avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600'
//             },
//             {
//                 id: 2,
//                 name: 'John',
//                 avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600'
//             },
//             {
//                 id: 3,
//                 name: 'Lora',
//                 avatar: 'https://images.pexels.com/photos/1382728/pexels-photo-1382728.jpeg?auto=compress&cs=tinysrgb&w=600'
//             },
//         ]
//     }
// }

// export const addPostCallBack = ( ) => {
//     const newPost:PostsStateType = {id: v1() ,message: state.mainPage.newPosts, likeCount: 0}
//     state.mainPage.stateForMainPosts.unshift(newPost)
//     state.mainPage.newPosts = ''
//     rerenderState(state)
// }

// export const updateNewPostsCallBack = (value: string) => {
//     state.mainPage.newPosts = value
//     rerenderState(state)
// }

// export const addNewMessages = () => {
//     let newMessage: MessagesStateType = {id: v1(), content: state.messagesPage.newMessage}
//     state.messagesPage.stateMessages.push(newMessage)
//     state.messagesPage.newMessage = ''
//     rerenderState(state)
// }

// export const updateNewMessageCallBack = (value: string) => {
//     state.messagesPage.newMessage = value
//     rerenderState(state)
// }



// export default state