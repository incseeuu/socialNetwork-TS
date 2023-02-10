import React from 'react';
import {MainPageType} from "../../../../state/mainPage-reducer";


type NewPostsPropsType = {
    stateForNewPost: MainPageType
    changeNewPostsText: (value: string) => void
    addNewPost: () => void
}

const NewPosts = (props: NewPostsPropsType) => {

    const postsAddRef = React.createRef<HTMLTextAreaElement>()

    const onClickSendHandler = () => {
            props.addNewPost()

    }

    const onChangeNewPostsText = () => {
        postsAddRef.current && props.changeNewPostsText(postsAddRef.current.value)
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
            <div>
                <textarea
                    onChange={onChangeNewPostsText}
                    ref={postsAddRef}
                    value={props.stateForNewPost.newPosts}/>
            </div>
            <div>
                <button onClick={onClickSendHandler}>Send</button>
            </div>
        </div>
    );
};

export default NewPosts;