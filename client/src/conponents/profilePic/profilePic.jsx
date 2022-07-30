import { Avatar } from '@mui/material';
import React from 'react'
import profilePic from '../../assets/873052.png';

const ProfilePic = ({width, height}) => {

    const profilePicStyle = {
        width: '50px',
        height: '50px',
        borderRadius: '50%' 
    };

    return (
        // <img src={profilePic} alt='' style={profilePicStyle}/>
        <Avatar 
            alt="Remy Sharp" 
            src={profilePic} 
            sx={{ width: width, height: height }}
            
        />
    )
}

export default ProfilePic;