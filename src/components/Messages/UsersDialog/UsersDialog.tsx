import React from 'react';
import classes from "./UsersDialog.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogPropsType} from "../Messages";

type UsersDialogsType = {
    state: DialogPropsType[]
}


const UsersDialog = (props: UsersDialogsType) => {

    const mappingDialog = props.state.map(el => <DialogItem name={el.name} id={el.id}/>)

    return (
        <div className={classes.dialogsList}>
            Dialogs
            {mappingDialog}
        </div>
    );
};

export default UsersDialog;