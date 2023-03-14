import React, {DetailedHTMLProps, TextareaHTMLAttributes} from 'react';
import classes from './ReusebleTextArea.module.css'

// type DefaultInputPropsType = DetailedHTMLProps<TextareaHTMLAttributes<HTMLInputElement>,
//     HTMLInputElement>
//
// type PropsType = DefaultInputPropsType & {
//     input:
// }

export const ReusebleTextArea: React.FC<any> = ({input, meta, ...props}) => {

    return (
        <div className={classes.container}>
            <div>
                <textarea className={classes.textarea + (meta.touched && meta.error ? ' ' + classes.textareaError : '')} {...input} {...props} />
            </div>
            {meta.touched && meta.error && <span className={classes.error}>{meta.error}</span>}
        </div>
    );
};

export const ReusebleInput: React.FC<any> = ({input, meta, ...props}) => {

    return (
        <div className={classes.container}>
            <div>
                <input className={classes.textarea + (meta.touched && meta.error ? ' ' + classes.textareaError : '')} {...input} {...props} />
            </div>
            {meta.touched && meta.error && <span className={classes.error}>{meta.error}</span>}
        </div>
    );
};

