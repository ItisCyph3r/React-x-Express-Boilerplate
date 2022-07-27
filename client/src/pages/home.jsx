import React from 'react';
import './home.css';
import styled from 'styled-components' 

export default function Home() {

    const Container = styled.div`
        width: 90%;
        height: 100vh;
        display: flex;
        overflow: hidden;
        background-color: #000000;
        margin: auto;
        color: #fff;
    `
    const Sidemenu = styled.div`
        padding: 1rem 1.5rem;
        width: 25%;  
        background-color: #000;
        
    `
    const Feed = styled.div`
        padding: 1rem;
        width: 50%;
        height: 100%;
        overflow-y: scroll;
        background-color: #000000;
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
        border: 0.5px solid grey;

        &::-webkit-scrollbar {
        display: none;
        };
    `
    const Notifications = styled.div`
        padding: 1rem;
        width: 25%;
        background-color: #000000;
        
    `
    
    
    return (
        <>
            <Container>
                <Sidemenu>
                    <h2>
                        Zapnode
                    </h2>
                </Sidemenu>
                <Feed>  
                    hehe
                </Feed>
                <Notifications>
                    c
                </Notifications>
            </Container>
        </>
    );
}
