import React from 'react';
import {connect} from "react-redux";
import {
    addFriendAC,
    deleteFriendAC, followThunkCreator,
    GetUsersType, getUserThunkCreator, setCurrentPageAC, setDisabledFollowBtnAC, setLoaderAC, setTotalCountAC,
    setUsersAC, unFollowThunkCreator
} from "../../../state/peoplePage-reducer";
import {AppStateType} from "../../../state/redux-store";
import User from "./User";
import Loader from "../../common/PreLoader/Loader";
import { userApi} from "../../../api/api";

type PropsType = {
    stateForUser: GetUsersType[]
    pageSize: number
    currentPage: number
    totalCount: number
    isFetching: boolean
    isAuth: boolean
    isDisabledFollowBtn: number[] | []
    setUsersAC: (items: GetUsersType[]) => void
    setCurrentPageAC: (page: number) => void
    setLoaderAC: (value: boolean) => void
    getUserThunkCreator: (currentPage: number, pageSize: number) => void
    followThunkCreator: (userId: number) => void
    unFollowThunkCreator: (userId: number) => void
}

class UsersAPIComponent extends React.PureComponent<PropsType> {
    componentDidMount() {
        this.props.getUserThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    onClickSetCurrentPage(el: number) {
        this.props.setLoaderAC(true)
        this.props.setCurrentPageAC(el)

        userApi.getUser(el,this.props.pageSize)
            .then(data => {
                this.props.setUsersAC(data.items)
                this.props.setLoaderAC(false)
            })
    }


    render() {

        return this.props.isFetching
            ? <Loader/>
            : <User
                state={this.props.stateForUser}
                onClickSetCurrentPageCallback={(el) => this.onClickSetCurrentPage(el)}
                totalCount={this.props.totalCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                isDisabledFollowBtn={this.props.isDisabledFollowBtn}
                followThunkCreator={this.props.followThunkCreator}
                unFollowThunkCreator={this.props.unFollowThunkCreator}
                isAuth={this.props.isAuth}
            />

    }
}

type mapStateToPropsType = {
    stateForUser: GetUsersType[]
    pageSize: number
    currentPage: number
    totalCount: number
    isFetching: boolean
    isDisabledFollowBtn: number[] | []
    isAuth: boolean
}


const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    const {peoplePage, auth} = state
    const {items, pageSize, currentPage, totalCount, isFetching, isDisabledFollowBtn} = peoplePage
    return {
        stateForUser: items,
        pageSize,
        currentPage,
        totalCount,
        isFetching,
        isDisabledFollowBtn,
        isAuth: auth.isFetching
    }
}

const UserContainer = connect(mapStateToProps, {
    addFriendAC,
    deleteFriendAC,
    setUsersAC,
    setTotalCountAC,
    setCurrentPageAC,
    setLoaderAC,
    setDisabledFollowBtnAC,
    getUserThunkCreator,
    followThunkCreator,
    unFollowThunkCreator
})(UsersAPIComponent)


export default UserContainer;