import React, {MouseEvent} from 'react';
import classes from "./NewPosts.module.css";

type NewPostsPropsType = {
    addPostCallBack: (newPostText: string) => void
}

const NewPosts = (props: NewPostsPropsType) => {

    const postsAddRef = React.createRef<HTMLTextAreaElement>()

    const onClickSendHandler = (e: MouseEvent<HTMLButtonElement>) => {
        if(postsAddRef.current){
            props.addPostCallBack(postsAddRef.current.value)
        }
    }

    return (
        <div>
            <div>
                <textarea ref={postsAddRef}></textarea>
            </div>
            <div>
                <button onClick={onClickSendHandler}>Send</button>
            </div>
        </div>
    );
};

export default NewPosts;