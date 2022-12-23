import React from 'react';
import classes from "../UsersDialog.module.css"
import {NavLink} from "react-router-dom";
import {DialogPropsType} from "../../Messages";



export const DialogItem = (props: DialogPropsType) => {



    return (
        <div>
            <NavLink to={'/messages/' + props.id}>{props.name}</NavLink>
        </div>
    )
}