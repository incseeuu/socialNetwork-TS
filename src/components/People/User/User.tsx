import React from 'react';
import classes from './User.module.css'
import {GetUsersType} from "../../../state/peoplePage-reducer";
import {NavLink} from "react-router-dom";

type PropsType = {
    state: GetUsersType[]
    onClickSetCurrentPageCallback: (el: number) => void
    totalCount: number
    pageSize: number
    currentPage: number
    isDisabledFollowBtn: number[] | []
    followThunkCreator: (userId: number) => void
    unFollowThunkCreator: (userId: number) => void
}

const User: React.FC<PropsType> = (props: PropsType) => {

    const onClickUnfollowHandler = (userId: number) => {
        props.followThunkCreator(userId)
    }
    const onClickFollowHandler = (userId: number) => {
        props.unFollowThunkCreator(userId)
    }

    const mappingUserCard = props.state.map(el => {
        return (
            <>


                <div key={el.id} className={classes.user}>
                    <NavLink className={classes.linkUser} to={'/main/' + el.id}>

                        <img className={classes.avatar}
                             src={el.photos.small
                                 ? el.photos.small
                                 : 'https://icon-library.com/images/avatar-icon-free/avatar-icon-free-15.jpg'}/>
                        <div>
                            <div className={classes.about}>
                                <span className={classes.name}>{el.name}</span>
                                <span className={classes.status}>Status: {el.status}</span>
                            </div>

                        </div>
                    </NavLink>
                    <div className={classes.follow}>
                        {el.followed
                            ? <button className={classes.btn}
                                      onClick={() => {
                                          onClickUnfollowHandler(el.id)
                                      }}
                                      disabled={props.isDisabledFollowBtn.some(s => s === el.id)}
                            >Unfollow</button>
                            : <button className={classes.btn}
                                      onClick={() => {
                                          onClickFollowHandler(el.id)
                                      }}
                                      disabled={props.isDisabledFollowBtn.some(s => s === el.id)}
                            >Follow</button>}
                    </div>
                </div>

            </>
        )
    })


    const prevPageHandler = () => {
        if(props.currentPage > 1){
            props.onClickSetCurrentPageCallback(props.currentPage - 1)
        }
    }

    const nextPageHandler = () => {
        if(props.currentPage < 10){
            props.onClickSetCurrentPageCallback(props.currentPage + 1)
        }
    }

    let pages = []
    for (let i = 1; i <= 10; i++) {
        pages.push(i)
    }

    return (
        <div className={classes.container}>

            <div className={classes.users}>
                {mappingUserCard}
            </div>
            <div className={classes.pagination}>
                <span className={classes.pagBtn} onClick={prevPageHandler}>Prev</span>
                {pages.map((el, index) => {

                    const getCurrentPage = () => {
                        props.onClickSetCurrentPageCallback(el)
                    }

                    const className = classes.page
                        +(props.currentPage === el ? ' ' + classes.currentPage : '')
                    return (
                            <span
                                key={index}
                                className={className}
                                onClick={getCurrentPage}

                            >{el}</span>
                    )
                })}
                <span className={classes.pagBtn} onClick={nextPageHandler}>Next</span>
            </div>
        </div>
    );
}


export default User;