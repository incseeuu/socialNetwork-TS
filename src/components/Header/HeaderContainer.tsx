import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AuthStateType, setAuthStateAC, setFetchingAC} from "../../state/auth-reducer";
import {AppStateType} from "../../state/redux-store";
import axios from "axios";

type PropsType = {
    id: string | null
    email: string | null
    login: string | null
    isFetching: boolean
    setState: (authState: AuthStateType) => void
    setFetching: (value: boolean) => void
}

class HeaderC extends React.Component<PropsType> {

    componentDidMount() {

        this.props.setFetching(true)

        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true
        })
            .then(res => {
                if (res.data.resultCode === 0){
                    this.props.setState(res.data.data)
                }
                this.props.setFetching(false)
            })
    }

    render() {
        return <Header isFetching={this.props.isFetching} login={this.props.login}/>;
    }
}

export default HeaderC


type MapDispatchToProps = {
    setState: (authState: AuthStateType) => void
    setFetching: (value: boolean) => void
}

type MapStateToProps = {
    id: string | null
    email: string | null
    login: string | null
    isFetching: boolean
}

const mapStateToProps = (state: AppStateType):MapStateToProps => {

    let {id, email,login,isFetching} = state.auth

    return {
        id,
        email,
        login,
        isFetching
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        setState: (authState: AuthStateType) => dispatch(setAuthStateAC(authState)),
        setFetching: (value: boolean) => dispatch(setFetchingAC(value))
    }
}

export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderC)

