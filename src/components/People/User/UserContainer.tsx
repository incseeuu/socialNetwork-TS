import React from 'react';
import {connect} from "react-redux";
import {
    addFriendAC,
    deleteFriendAC,
    GetUsersType, setCurrentPageAC, setLoaderAC, setTotalCountAC,
    setUsersAC
} from "../../../state/peoplePage-reducer";
import {Dispatch} from "redux";
import {AppStateType} from "../../../state/redux-store";
import axios from "axios";
import User from "./User";
import Loader from "../../common/PreLoader/Loader";

type PropsType = {
    stateForUser: GetUsersType[]
    pageSize: number
    currentPage: number
    totalCount: number
    addToFriend: (userId: number) => void
    deleteFriend: (userId: number) => void
    setUsers: (items: GetUsersType[]) => void
    setCount: (count: number) => void
    setCurrentPage: (page: number) => void
    setLoader: (value: boolean) => void
    loader: boolean
}

class UsersAPIComponent extends React.Component<PropsType> {
    componentDidMount() {
        this.props.setLoader(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
                this.props.setCount(res.data.totalCount)
                this.props.setLoader(false)
            })
    }

    onClickSetCurrentPage(el: number) {
        this.props.setLoader(true)
        this.props.setCurrentPage(el)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${el}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
                this.props.setLoader(false)
            })
    }


    render() {


        return this.props.loader
            ? <Loader/>
            : <User
                state={this.props.stateForUser}
                addToFriend={this.props.addToFriend}
                deleteFriend={this.props.deleteFriend}
                onClickSetCurrentPageCallback={(el) => this.onClickSetCurrentPage(el)}
                totalCount={this.props.totalCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
            />

    }
}

type mapStateToPropsType = {
    stateForUser: GetUsersType[]
    pageSize: number
    currentPage: number
    totalCount: number
    loader: boolean
}

type mapDispatchToPropsType = {
    addToFriend: (userId: number) => void
    deleteFriend: (userId: number) => void
    setUsers: (items: GetUsersType[]) => void
    setCount: (count: number) => void
    setCurrentPage: (page: number) => void
    setLoader: (value: boolean) => void
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    const {peoplePage} = state
    const {items, pageSize, currentPage, totalCount, loader} = peoplePage
    return {
        stateForUser: items,
        pageSize,
        currentPage,
        totalCount,
        loader
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addToFriend: (userId: number) => dispatch(addFriendAC(userId)),
        deleteFriend: (userId: number) => dispatch(deleteFriendAC(userId)),
        setUsers: (items: GetUsersType[]) => dispatch(setUsersAC(items)),
        setCount: (count: number) => dispatch(setTotalCountAC(count)),
        setCurrentPage: (page: number) => dispatch(setCurrentPageAC(page)),
        setLoader: (value: boolean) => dispatch(setLoaderAC(value))
    }
}

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)


export default UserContainer;