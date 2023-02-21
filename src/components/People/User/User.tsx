import React from 'react';
import classes from './User.module.css'
import {GetUsersType} from "../../../state/peoplePage-reducer";
import {NavLink} from "react-router-dom";
import {userApi} from "../../../api/api";

type PropsType = {
    state: GetUsersType[]
    addToFriend: (userId: number) => void
    deleteFriend: (userId: number) => void
    onClickSetCurrentPageCallback: (el: number) => void
    totalCount: number
    pageSize: number
    currentPage: number
    setDisableBtn: (userId: number,value: boolean) => void
    isDisabledFollowBtn: number[] | []
}

const User: React.FC<PropsType> = (props: PropsType) => {

    const onClickUnfollowHandler = (userId: number) => {
        props.setDisableBtn(userId,true)
        userApi.unFollow(userId).then(res => {
            if (res.data.resultCode === 0) {
                props.deleteFriend(userId)
            }
            props.setDisableBtn(userId,false)
        })
    }
    const onClickFollowHandler = (userId: number) => {
        props.setDisableBtn(userId,true)
        userApi.follow(userId).then(res => {
            if (res.data.resultCode === 0) {
                props.addToFriend(userId)
            }
            props.setDisableBtn(userId,false)
        })
    }

    const mappingUserCard = props.state.map(el => {
        return (
            <div key={el.id}>
                <NavLink to={'/main/' + el.id}>
                    <img className={classes.avatar}
                         src={el.photos.small
                             ? el.photos.small
                             : 'https://icon-library.com/images/avatar-icon-free/avatar-icon-free-15.jpg'}/>
                </NavLink>
                <div>
                    {el.followed
                        ? <button onClick={() => {
                            onClickUnfollowHandler(el.id)
                        }}
                                  disabled={props.isDisabledFollowBtn.some(s => s === el.id)}
                        >unfollow</button>
                        : <button onClick={() => {
                            onClickFollowHandler(el.id)
                        }}
                                  disabled={props.isDisabledFollowBtn.some(s => s === el.id)}
                        >follow</button>}
                </div>
                <div>
                    <div>
                        <span>{el.name}</span>
                        <span> {el.status}</span>
                    </div>
                    <span>
                        {el.uniqueUrlName}
                    </span>
                </div>
            </div>
        )
    })

    // let countPages = Math.ceil(props.totalCount / props.pageSize)
    let countPages = Math.ceil(100 / props.pageSize)
    let pages = []
    for (let i = 1; i <= countPages; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map((el, index) => {
                    return (
                        <span key={index}
                              className={props.currentPage === el ? classes.currentPage : ''}
                              onClick={() => props.onClickSetCurrentPageCallback(el)}

                        >{el}</span>
                    )
                })}
            </div>
            {mappingUserCard}
        </div>
    );
}


export default User;