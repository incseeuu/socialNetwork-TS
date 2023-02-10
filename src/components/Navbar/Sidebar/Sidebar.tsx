import React from 'react';
import {SidebarStateType} from "../../../state/store";
import classes from "./Sidebar.module.css"

type SidebarType = {
    stateForSidebar: SidebarStateType[]
}

const Sidebar = (props: SidebarType) => {

    const mappingSidebar = props.stateForSidebar.map(el => {
        return(
            <div key={el.id} className={classes.sidebarItem}>
                <img className={classes.avatar} src={el.avatar}/>
                <div>{el.name}</div>
            </div>
        )
    })

    return (
        <div className={classes.sidebarContainer}>
            {mappingSidebar}
        </div>
    );
};

export default Sidebar;