import React from 'react';
import './home.css';
import styled from 'styled-components' 
import Tweet from '../conponents/createTweet/createTweet';
import Posts from '../conponents/posts/posts';

export default function Home() {

    return (
        <>
            <div className='w-[90%] flex overflow-hidden bg-black m-auto h-screen'>
                <div className='w-[20%] py-4 px-6 bg-black'>
                    <h1>
                        Zapnode
                    </h1>     
                    
                </div>
                <div className='w-1/2 h-screen overflow-y-scroll bg-black border-gray-700 border-x-[0.1px] feed'>  
                    <Tweet/>
                    <Posts/>
                    <Posts/>
                    <Posts/>
                    <Posts/>
                    <Posts/>
                    <Posts/>
                    <Posts/>
                    <Posts/>
                    <Posts/>
                        
                    <Posts/>
                    <Posts/>
                    <Posts/><Posts/>
                    <Posts/>
                    <Posts/>
                </div>
                <div className='p-4 w-[30%] bg-black'>
                    c
                </div>
            </div>
        </>
    );
}
