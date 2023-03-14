import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../../state/redux-store";
import {
    changeStatusAC,
    changeStatusThunk,
    GetProfileType, getStatusThunk,
    userFromUrlThunk
} from "../../../state/mainPage-reducer";
import Profile from "./Profile";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {compose} from "redux";


type WithRouterTypeProps = RouteComponentProps<ParamType> & PropsType & MapStateToProps

type PropsType = {
    userFromUrlThunk: (getUserIdFromUrl: number | null) => void
    changeStatusThunk: (value: string) => void
    getStatusThunk: (userId: number | null) => void
    changeStatusAC: (value: string) => void
    authorizedId: number | null
}

type ParamType = {
    userId: string
}

class ProfileContainer extends React.Component<WithRouterTypeProps> {
    componentDidMount() {
        let getUserIdFromUrl: number | null = +this.props.match.params.userId
        if (!getUserIdFromUrl) {
            getUserIdFromUrl = this.props.authorizedId
        }
        this.props.userFromUrlThunk(getUserIdFromUrl)

        this.props.getStatusThunk(this.props.authorizedId)
    }

    changeStatusCallBack(value: string){
        this.props.changeStatusThunk(value)
    }

    render() {
        return <Profile changeStatusCallBack={(v)=>this.changeStatusCallBack(v)}  {...this.props}/>
    }
}

type MapStateToProps = {
    stateForProfile: GetProfileType
    isAuth: boolean
    status: string
    authorizedId: number | null
}


const mapStateToProps = (state: AppStateType): MapStateToProps => {
    let {mainPage, auth} = state
    let {stateForProfile} = mainPage
    return {
        stateForProfile,
        status: mainPage.status,
        isAuth: auth.isFetching,
        authorizedId: auth.id

    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {userFromUrlThunk, changeStatusThunk, getStatusThunk, changeStatusAC}),
    withRouter
)(ProfileContainer);

