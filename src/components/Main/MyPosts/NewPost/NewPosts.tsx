import React, {MouseEvent} from 'react';
import classes from "./NewPosts.module.css";
import {ActionsType} from "../../../../state/state";
import {addPostAC, updateNewPostTextAC} from "../../../../state/mainPage-reducer";

type NewPostsPropsType = {
    stateForNewPost: string
    dispatch: (action: ActionsType) => void
}

const NewPosts = (props: NewPostsPropsType) => {

    const postsAddRef = React.createRef<HTMLTextAreaElement>()

    const onClickSendHandler = () => {
            props.dispatch(addPostAC())

    }

    const updateNewPostsCallBack = () => {
        if (postsAddRef.current) {
            props.dispatch(updateNewPostTextAC(postsAddRef.current.value))
        }
    }

    return (
        <div>
            <div>
                <textarea
                    onChange={updateNewPostsCallBack}
                    ref={postsAddRef}
                    value={props.stateForNewPost}/>
            </div>
            <div>
                <button onClick={onClickSendHandler}>Send</button>
            </div>
        </div>
    );
};

export default NewPosts;