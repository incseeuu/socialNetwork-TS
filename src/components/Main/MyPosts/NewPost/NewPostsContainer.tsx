import React from 'react';
import {addPostAC, MainPageType} from "../../../../state/mainPage-reducer";
import NewPosts from "./NewPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../../state/redux-store";

type mapStateToPropsType = {
    stateForNewPost: MainPageType
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        stateForNewPost: state.mainPage
    }
}

const NewPostsContainer = connect(mapStateToProps, {addNewPost: addPostAC})(NewPosts)

export default NewPostsContainer;