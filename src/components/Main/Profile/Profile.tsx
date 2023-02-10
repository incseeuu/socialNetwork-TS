import React from 'react';
import classes from "./Profile.module.css";
import {GetProfileType} from "../../../state/mainPage-reducer";
import Loader from "../../common/PreLoader/Loader";

type PropsType = {
    stateForProfile: GetProfileType
}

const Profile = (props: PropsType) => {
    if (!props.stateForProfile.photos) {
        return <Loader/>
    }


    return (<div className={classes.avatarAndDescription}>
            <div>
                <img className={classes.avatarImg}
                     src={props.stateForProfile.photos.small
                         ? props.stateForProfile.photos.small
                         : 'https://icon-library.com/images/avatar-icon-free/avatar-icon-free-15.jpg'}/>
            </div>
            <div className={classes.nameAndAboutMe}>
                <div className={classes.name}>{props.stateForProfile.fullName}</div>

                <div className={classes.lookingJob}>
                    <span className={classes.lookingText}>Looking for a job:</span>
                    <input type='checkbox' checked={props.stateForProfile.lookingForAJob}/>
                </div>
                <div className={classes.description}>{props.stateForProfile.aboutMe}</div>
                <div className={classes.jobDescription}>{props.stateForProfile.lookingForAJobDescription}</div>


            </div>
            <div className={classes.social}>
            </div>
        </div>
    );
};

export default Profile;