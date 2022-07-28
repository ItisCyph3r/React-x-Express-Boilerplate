/**
 * I'm trying to get the value of the textarea and display it in the console.
 * @returns A React component.
 */

import { Divider } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import ProfilePic from '../profilePic/profilePic';


export default function Tweet() {

    const Container = styled.div`
        display: flex;
        gap: 20px;
    `;

    const TweetArea = styled.textarea`
        width: 100%;
        height: 100px;
        padding: 12px 0px;
        box-sizing: border-box;
        background-color: #000;
        border: 0px solid #fff;
        font-size: 1.25rem;
        resize: none;
        margin-top: 10px;
    `;

    const SubmitTweet = styled.div`
        flex-direction: column;
        width: 100%;
        margin-top: 20px;
    `;
    
    const handleInput = (e) => {
        console.log(e.target.value)
    }
    return (
        /* It's a React component. */
        <Container>
            <ProfilePic/>
            
            <div style={{width: '100%'}}>
            <TweetArea onChange={handleInput} placeholder="What's happening?"/>

            <Divider />
            <SubmitTweet>
                dsfdsdasda
            </SubmitTweet>
            </div>
            <hr />
        </Container>
    );
}
