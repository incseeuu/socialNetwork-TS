import React from 'react';
import {connect} from "react-redux";
import {
    addFriendAC,
    deleteFriendAC,
    GetUsersType, setCurrentPageAC, setDisabledFollowBtnAC, setLoaderAC, setTotalCountAC,
    setUsersAC
} from "../../../state/peoplePage-reducer";
import {Dispatch} from "redux";
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
    isDisabledFollowBtn: number[] | []
    addToFriend: (userId: number) => void
    deleteFriend: (userId: number) => void
    setUsers: (items: GetUsersType[]) => void
    setCount: (count: number) => void
    setCurrentPage: (page: number) => void
    setLoader: (value: boolean) => void
    setDisableBtn: (userId: number,value: boolean) => void

}

class UsersAPIComponent extends React.Component<PropsType> {
    componentDidMount() {
        this.props.setLoader(true)

        userApi.getUser(this.props.currentPage, this.props.pageSize)
            .then(data => {

                this.props.setUsers(data.items)
                this.props.setCount(data.totalCount)
                this.props.setLoader(false)
            })
    }

    onClickSetCurrentPage(el: number) {
        this.props.setLoader(true)
        this.props.setCurrentPage(el)

        userApi.getUser(el,this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items)
                this.props.setLoader(false)
            })
    }


    render() {


        return this.props.isFetching
            ? <Loader/>
            : <User
                state={this.props.stateForUser}
                addToFriend={this.props.addToFriend}
                deleteFriend={this.props.deleteFriend}
                onClickSetCurrentPageCallback={(el) => this.onClickSetCurrentPage(el)}
                totalCount={this.props.totalCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                setDisableBtn={this.props.setDisableBtn}
                isDisabledFollowBtn={this.props.isDisabledFollowBtn}
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
}

type mapDispatchToPropsType = {
    addToFriend: (userId: number) => void
    deleteFriend: (userId: number) => void
    setUsers: (items: GetUsersType[]) => void
    setCount: (count: number) => void
    setCurrentPage: (page: number) => void
    setLoader: (value: boolean) => void
    setDisableBtn: (userId: number,value: boolean) => void
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    const {peoplePage} = state
    const {items, pageSize, currentPage, totalCount, isFetching, isDisabledFollowBtn} = peoplePage
    return {
        stateForUser: items,
        pageSize,
        currentPage,
        totalCount,
        isFetching,
        isDisabledFollowBtn
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addToFriend: (userId: number) => dispatch(addFriendAC(userId)),
        deleteFriend: (userId: number) => dispatch(deleteFriendAC(userId)),
        setUsers: (items: GetUsersType[]) => dispatch(setUsersAC(items)),
        setCount: (count: number) => dispatch(setTotalCountAC(count)),
        setCurrentPage: (page: number) => dispatch(setCurrentPageAC(page)),
        setLoader: (value: boolean) => dispatch(setLoaderAC(value)),
        setDisableBtn: (userId: number,value: boolean) => dispatch(setDisabledFollowBtnAC(userId,value))
    }
}

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)


export default UserContainer;