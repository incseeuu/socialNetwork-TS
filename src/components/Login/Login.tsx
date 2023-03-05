import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import classes from './Login.module.css'

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={classes.form}>
            <Field name="login" component="input" placeholder={'Login'}/>
            <Field name="password" component="input" placeholder={'password'}/>
            <div className={classes.checkbox}>Remember me
                <Field name="rememberMe" component="input" type={'checkbox'}/>
            </div>
            <button>Login</button>
        </form>
    )
}


const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)

const Login = () => {
    const onSubmit = (formData:FormDataType) => {
        console.log(formData)
    }

    return (
        <div className={classes.container}>
            <h1>Log In</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

export default Login;