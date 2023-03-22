import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {authMeThunk, logoutThunkCreator} from "../../state/auth-reducer";
import {AppStateType} from "../../state/redux-store";
import {getUserEmail, getUserId, isFetch, isLogin} from "../../state/users-selector";


type PropsType = {
    id: number | null
    email: string | null
    login: string | null
    isFetching: boolean
    authMeThunk: () => void
    logoutThunkCreator: () => void
}

class HeaderC extends React.Component<PropsType> {

    componentDidMount() {
        this.props.authMeThunk()
    }

    render() {
        return <Header
            isFetching={this.props.isFetching}
            login={this.props.login}
            logoutThunkCreator={this.props.logoutThunkCreator}
        />;
    }
}

export default HeaderC

type MapStateToProps = {
    id: number | null
    email: string | null
    login: string | null
    isFetching: boolean
}

const mapStateToProps = (state: AppStateType):MapStateToProps => {

    const id = getUserId(state),
        email = getUserEmail(state),
        login = isLogin(state),
        isFetching = isFetch(state)


    return {
        id,
        email,
        login,
        isFetching,
    }
}



export const HeaderContainer = connect(
    mapStateToProps,
    {authMeThunk: () => authMeThunk, logoutThunkCreator})(HeaderC)

