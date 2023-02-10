import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../../state/redux-store";
import {Dispatch} from "redux";
import axios from "axios";
import {GetProfileType, setLoadingAC, setProfileAC} from "../../../state/mainPage-reducer";
import Profile from "./Profile";
import Loader from "../../common/PreLoader/Loader";

type PropsType = {
    setProfile: (profile: GetProfileType) => void
    stateForProfile: GetProfileType
}

class ProfileC extends React.Component<PropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            // .then(res => this.props.setProfile(res.data))
            .then(res => {
                this.props.setProfile(res.data)
            })

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

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileC)

export default ProfileContainer;