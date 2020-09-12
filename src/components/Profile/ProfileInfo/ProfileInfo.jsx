import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/preloader";
import ProfileStatus from "../ProfileStatus"
import ProfileStatusWithHooks from "../ProfileStatusWithHooks";
import userPhoto from "../../../assets/img/user.png";
import  ProfileDataFormReduxForm from "./profileDataForm";

const ProfileInfo = (props) => {
    let [editMode, setEditMode] = useState(false);

    if (!props.profile) {
        return <Preloader />
    }

    const mainPhotoSelectedOn =(e)=>{
        if(e.target.file.length){
            props.savePhoto(e.target.file[0]);
        }
    }

    const onSubmit =  (formData) => {
         props.saveProfile(formData).then(
             ()=>{
                 setEditMode(false);
             }
         );

    }

    return (
        <div>
            {/*  <div>
                <img
                    src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'/>
            </div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large || userPhoto } className={s.mainPhoto} />
                {props.isOwner && <input type={"file"} onChange={mainPhotoSelectedOn} />}
               {/*ВОЗМОЖНО НАДО ПОСЛЕ ЗНАКА ВОПРОСА ПРОСТО ПРОФАЙЛ ДАТА ФОРМ*/}
                {editMode ? <ProfileDataFormReduxForm initialValues={props.profile} onSubmit={onSubmit} profile={props.profile}/>:
                    <ProfileData profile={props.profile } isOwner={props.isOwner} goToEditMoe={()=>{setEditMode(true)}}/>}

                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}

const ProfileData = ({profile, isOwner , goToEditMoe}) => {
    return <div>
        {isOwner && <div><button onClick={goToEditMoe}>
            edit
        </button></div>}
        <div>
            <b>Full name:</b> {profile.fullName}
        </div>
        <div>
            <b>Looking for a job:</b> {profile.lookingForAJob ? "yes" : "no"}
        </div>
        {profile.lookingForAJob &&
        <div>
            <b>My professional skills:</b> {profile.lookingForAJobDescription}
        </div>

        }
        <div>
            <b>About me:</b> {profile.aboutMe}
        </div>
        <div>
            <b>Contacts:</b> {Object.keys(profile.contacts).map(p => {
            return <Contact   contactTitle={p} contactValue={profile.contacts[p]}/>
        })}
        </div>
    </div>
}



const Contact = ({contactTitle , contactValue}) =>{
    return <div className={s.contact}>
        <b>{contactTitle} </b>: {contactTitle}
    </div>
}

export default ProfileInfo;