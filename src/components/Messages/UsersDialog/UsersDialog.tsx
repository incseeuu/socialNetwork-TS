import React from 'react';
import classes from "./UsersDialog.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogStateType} from "../../../state/state";



type UsersDialogsType = {
    stateForUsersDialog: DialogStateType[]
}


const UsersDialog = (props: UsersDialogsType) => {

    const mappingDialog = props.stateForUsersDialog.map(el => <DialogItem name={el.name} id={el.id}/>)

    return (
        <div className={classes.dialogsList}>
            {mappingDialog}
        </div>
    );
};

export default UsersDialog;