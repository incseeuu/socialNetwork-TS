import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import classes from './TextForm.module.css'
import {ReusebleTextArea} from "../ReusebleTextArea/ReusebleTextArea";
import {maxFieldCreator, required} from "../../../utils/validators";

const maxLength = maxFieldCreator(50)

export type FormSendMessage = {
    message: string
}

const SendMessageForm: React.FC<InjectedFormProps<FormSendMessage>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={classes.form}>
            <Field name='message' component={ReusebleTextArea} placeholder='Write message' validate={[required, maxLength]} />
            <button>Send</button>
        </form>
    );
};


export const TextFormRedux = reduxForm<FormSendMessage>({
    form: 'sendForm'
})(SendMessageForm)


export default SendMessageForm;