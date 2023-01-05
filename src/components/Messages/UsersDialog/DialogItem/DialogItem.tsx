import React from 'react';
import classes from "./DialogItem.module.css"
import {NavLink} from "react-router-dom";

type DialogItemType = {
    name: string
    id: string
}

export const DialogItem = (props: DialogItemType) => {



    return (
        <div className={classes.mainContainer}>
            <NavLink className={classes.navLink} to={'/messages/' + props.id}>{props.name}</NavLink>
        </div>
    )
}