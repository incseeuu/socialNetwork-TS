import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {authMeThunk} from "../../state/auth-reducer";
import {AppStateType} from "../../state/redux-store";


type PropsType = {
    id: string | null
    email: string | null
    login: string | null
    isFetching: boolean
    authMeThunk: () => void
}

class HeaderC extends React.Component<PropsType> {

    componentDidMount() {
        this.props.authMeThunk()
    }

    render() {
        return <Header isFetching={this.props.isFetching} login={this.props.login}/>;
    }
}

export default HeaderC

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



export const HeaderContainer = connect(
    mapStateToProps,
    {authMeThunk: () => authMeThunk})(HeaderC)

