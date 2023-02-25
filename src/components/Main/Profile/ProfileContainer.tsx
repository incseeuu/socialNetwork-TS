import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../../state/redux-store";
import {GetProfileType, userFromUrlThunk} from "../../../state/mainPage-reducer";
import Profile from "./Profile";
import {RouteComponentProps, withRouter} from 'react-router-dom';


type WithRouterTypeProps = RouteComponentProps<ParamType> & PropsType & MapStateToProps

type PropsType ={
    userFromUrlThunk: (getUserIdFromUrl: number) => void
}

type ParamType = {
    userId: string
}

class ProfileC extends React.Component<WithRouterTypeProps> {
    componentDidMount() {
        let getUserIdFromUrl = +this.props.match.params.userId
        if(!getUserIdFromUrl){
            getUserIdFromUrl = 27956
        }
            this.props.userFromUrlThunk(getUserIdFromUrl)
    }

    render() {
        return <Profile stateForProfile={this.props.stateForProfile} />
    }
}

type MapStateToProps = {
    stateForProfile: GetProfileType
}



const mapStateToProps = (state: AppStateType): MapStateToProps => {
    let {mainPage} = state
    let {stateForProfile} = mainPage
    return  {
        stateForProfile,
    }
}



let WithUrlContainerComponent = withRouter(ProfileC)

const ProfileContainer = connect(mapStateToProps, {userFromUrlThunk})(WithUrlContainerComponent)

export default ProfileContainer;