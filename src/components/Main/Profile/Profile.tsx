import React from 'react';
import classes from "./Profile.module.css";

const Profile = () => {
    return (
            <div className={classes.avatarAndDescription}>
                <div className={classes.avatarImg}>
                </div>
                <div className={classes.description}>Description</div>
            </div>
    );
};

export default Profile;