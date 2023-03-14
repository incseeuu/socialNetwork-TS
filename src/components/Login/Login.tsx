import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {ReusebleInput} from '../common/ReusebleTextArea/ReusebleTextArea';
import classes from './Login.module.css'
import {maxFieldCreator, required} from "../../utils/validators";
import {connect} from "react-redux";
import { loginThunkCreator } from '../../state/auth-reducer';
import {AppStateType} from "../../state/redux-store";
import { Redirect } from 'react-router-dom';

const maxLength = maxFieldCreator(30)

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={classes.form}>
            <Field name="email" component={ReusebleInput} placeholder={'Email'} validate={[required, maxLength]}/>
            <Field name="password" component={ReusebleInput} type='password' placeholder={'Password'} validate={[required, maxLength]}/>
            <div className={classes.checkbox}>Remember me
                <Field name="rememberMe" component={ReusebleInput} type={'checkbox'} validate={[required, maxLength]}/>
            </div>
            {props.error && <div className={classes.error}>{props.error}</div>}
            <button>Login</button>
        </form>
    )
}


const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)

type PropsType = {
    loginThunkCreator: (email: string, password: string, rememberMe: boolean) => void
    isAuth: boolean
    urlCaptcha: string
}

const Login: React.FC<PropsType> = ({loginThunkCreator, isAuth, urlCaptcha}) => {
    const onSubmit = (formData:FormDataType) => {
        loginThunkCreator(formData.email, formData.password, formData.rememberMe)
    }

    return isAuth ? <Redirect to={'/main'} />
        : <div className={classes.container}>
            <h1>Log In</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
            {urlCaptcha !== '' && <div>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <img src={urlCaptcha}/>
                    <input/>
                </div>
            </div>}
        </div>
};

type mapStateToPropsType = {
    isAuth: boolean
    urlCaptcha: string
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        isAuth: state.auth.isFetching,
        urlCaptcha: state.auth.urlCaptcha
    }
}

export default connect (mapStateToProps, {loginThunkCreator})(Login);