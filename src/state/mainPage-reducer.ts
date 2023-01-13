import {ActionsType, MainPageType, PostsStateType} from "./state";
import {v1} from "uuid";


export type AddPostACType = ReturnType<typeof addPostAC>
export type UpdateNewPostTextACType = ReturnType<typeof updateNewPostTextAC>

const mainPageReducer = (state: MainPageType, action: ActionsType) => {
    switch (action.type){
        case 'ADD-POST':
            const newPost: PostsStateType = {id: v1(), message: state.newPosts, likeCount: 0}
            state.stateForMainPosts.unshift(newPost)
            state.newPosts = ''
            break
        case 'NEW-POST-TEXT':
            state.newPosts = action.value
            break
    }

    return state
}

export const addPostAC = () => {
    return {type: "ADD-POST"} as const
}

export const updateNewPostTextAC = (text: string) => {
    return {
        type: "NEW-POST-TEXT",
        value: text
    } as const
}

export default mainPageReducer;