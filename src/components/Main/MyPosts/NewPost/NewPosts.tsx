import React, {MouseEvent} from 'react';
import classes from "./NewPosts.module.css";

type NewPostsPropsType = {
    addPostCallBack: () => void
    stateForNewPost: string
    updateNewPostsCallBack: (value: string) => void
}

const NewPosts = (props: NewPostsPropsType) => {

    const postsAddRef = React.createRef<HTMLTextAreaElement>()

    const onClickSendHandler = () => {
            props.addPostCallBack()

    }

    const updateNewPostsCallBack = () => {
        debugger
        if (postsAddRef.current) {
            props.updateNewPostsCallBack(postsAddRef.current.value)
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