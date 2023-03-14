import React from 'react';
import classes from './PostForm.module.css'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxFieldCreator, required} from "../../../utils/validators";
import {ReusebleTextArea} from "../ReusebleTextArea/ReusebleTextArea";

const maxLength = maxFieldCreator(30)

export type PostFormData = {
    newPost: string
}

const PostForm: React.FC<InjectedFormProps<PostFormData>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={classes.form}>
            <Field name='newPost' component={ReusebleTextArea} placeholder='Write your post...' validate={[required, maxLength]}/>
            <button>Send</button>
        </form>
    );
};

export const PostFormRedux = reduxForm<PostFormData>({
    form: 'newPost'
})(PostForm)

export default PostForm;