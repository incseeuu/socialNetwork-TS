import React from 'react';
import classes from "../UsersDialog.module.css"
import {NavLink} from "react-router-dom";

type DialogItemType = {
    name: string
    id: number
}

export const DialogItem = (props: DialogItemType) => {



    return (
        <div>
            <NavLink to={'/messages/' + props.id}>{props.name}</NavLink>
        </div>
    )
}