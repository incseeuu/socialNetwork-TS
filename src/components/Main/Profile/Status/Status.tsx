import React, {useState} from 'react';
import classes from './Status.module.css'


type PropsType = {
    status: string
    changeStatusAC: (value: string) => void
    changeStatusCallBack: (value: string) => void
}

const Status: React.FC<PropsType> = ({status, changeStatusAC, changeStatusCallBack}) => {

    const [editMode, setEditMode] = useState(false)


    const onClickSaveHandler = () => {
        setEditMode(false)
        changeStatusCallBack(status)
    }

    return (editMode ?
            <div className={classes.editDescription}>
                <input className={classes.input}
                       value={status}
                       autoFocus
                       onBlur={() => setEditMode(false)}
                       onChange={(e) => changeStatusAC(e.currentTarget.value)}/>
                <button className={classes.button}
                        onClick={onClickSaveHandler}>Save</button>
            </div>
            : <div onClick={() => setEditMode(true)} className={classes.description}>{status}</div>
    );
};

export default Status;