import React from 'react';
import {MainPageType} from "../../../../state/mainPage-reducer";
import {PostFormData, PostFormRedux} from "../../../common/PostForm/PostForm";


type NewPostsPropsType = {
    stateForNewPost: MainPageType
    addNewPost: (value: string) => void
}

const NewPosts = (props: NewPostsPropsType) => {


    const onSendPost = (formData: PostFormData) => {
        props.addNewPost(formData.newPost)
    }

    const mappingStateAllPosts = props.stateForNewPost.stateForMainPosts.map(el => {
            return (
                <div key={el.id}>
                    <span>{el.message}</span>
                    <span >{el.likeCount}</span>
                </div>
            )
        })

    return (
        <div>
            {mappingStateAllPosts}
            <PostFormRedux onSubmit={onSendPost}/>
        </div>
    );
};

export default NewPosts;