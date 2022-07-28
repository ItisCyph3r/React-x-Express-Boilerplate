import React from 'react'
import profilePic from '../../assets/873052.png';

const ProfilePic = () => {

    const profilePicStyle = {
        width: '60px',
        height: '60px',
        borderRadius: '50%' 
    };

    return (
        <img src={profilePic} alt='' style={profilePicStyle}/>
    )
}

export default ProfilePic;