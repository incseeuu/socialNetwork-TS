import React from 'react';
import {ActionsType} from "../../../../state/store";
import {addPostAC, MainPageType, PostsStateType, updateNewPostTextAC} from "../../../../state/mainPage-reducer";
import NewPosts from "./NewPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../../state/redux-store";
import {Dispatch} from "redux";

type mapStateToPropsType = {
    stateForNewPost: MainPageType
}

type mapDispatchToPropsType = {
    changeNewPostsText: (text: string) => void
    addNewPost: () => void
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        stateForNewPost: state.mainPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        changeNewPostsText: (text: string) => dispatch(updateNewPostTextAC(text)),
        addNewPost: () => dispatch(addPostAC())
    }
}

const NewPostsContainer = connect(mapStateToProps, mapDispatchToProps)(NewPosts)

export default NewPostsContainer;