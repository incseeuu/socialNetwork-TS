import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../../state/redux-store";
import {Dispatch} from "redux";
import axios from "axios";
import {GetProfileType, setProfileAC} from "../../../state/mainPage-reducer";
import Profile from "./Profile";
import {RouteComponentProps, withRouter} from 'react-router-dom';

type WithRouterTypeProps = RouteComponentProps<ParamType> & PropsType

type PropsType = MapStateToProps & MapDispatchToProps

type ParamType = {
    userId: string
}

class ProfileC extends React.Component<WithRouterTypeProps> {
    componentDidMount() {
        let getUserIdFromUrl = this.props.match.params.userId

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${getUserIdFromUrl}`)
            // .then(res => this.props.setProfile(res.data))
            .then(res => {
                this.props.setProfile(res.data)
            })
        console.log(this.props)
    }

    render() {
        return <Profile stateForProfile={this.props.stateForProfile} />
    }
}

type MapStateToProps = {
    stateForProfile: GetProfileType
}

type MapDispatchToProps = {
    setProfile: (profile: GetProfileType) => void
}

const mapStateToProps = (state: AppStateType): MapStateToProps => {
    let {mainPage} = state
    let {stateForProfile} = mainPage
    return  {
        stateForProfile,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        setProfile: (profile: GetProfileType) => dispatch(setProfileAC(profile)),
    }
}

let WithUrlContainerComponent = withRouter(ProfileC)

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(WithUrlContainerComponent)

export default ProfileContainer;