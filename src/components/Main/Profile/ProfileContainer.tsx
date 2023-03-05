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
    userFromUrlThunk: (getUserIdFromUrl: number) => void
    changeStatusThunk: (value: string) => void
    getStatusThunk: (userId: number) => void
    changeStatusAC: (value: string) => void
}

type ParamType = {
    userId: string
}

class ProfileContainer extends React.Component<WithRouterTypeProps> {
    componentDidMount() {
        let getUserIdFromUrl = +this.props.match.params.userId
        if (!getUserIdFromUrl) {
            getUserIdFromUrl = 27956
        }
        this.props.userFromUrlThunk(getUserIdFromUrl)

        this.props.getStatusThunk(27956)
    }

    changeStatusCallBack(value: string){
        this.props.changeStatusThunk(value)
    }

    render() {
        // return <Profile stateForProfile={this.props.stateForProfile} isAuth={this.props.isAuth} {...this.props}/>
        return <Profile changeStatusCallBack={(v)=>this.changeStatusCallBack(v)}  {...this.props}/>
    }
}

type MapStateToProps = {
    stateForProfile: GetProfileType
    isAuth: boolean,
    status: string
}


const mapStateToProps = (state: AppStateType): MapStateToProps => {
    let {mainPage, auth} = state
    let {stateForProfile} = mainPage
    return {
        stateForProfile,
        status: mainPage.status,
        isAuth: auth.isFetching
    }
}


// let WithUrlContainerComponent = withRouter(ProfileC)
//
// const ProfileContainer = connect(mapStateToProps, {userFromUrlThunk})(WithUrlContainerComponent)
//
// export default ProfileContainer;
export default compose<React.ComponentType>(
    connect(mapStateToProps, {userFromUrlThunk, changeStatusThunk, getStatusThunk, changeStatusAC}),
    withRouter
)(ProfileContainer);

